import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO = "info@volmertechniek.com";
const FROM = `Volmer Techniek <${process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev"}>`;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildHtml(params: {
  name: string;
  email: string;
  phone: string;
  type: string;
  message: string;
}): string {
  const { name, email, phone, type, message } = params;
  const rows = [
    ["Naam", name],
    ["E-mail", `<a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>`],
    phone ? ["Telefoon", phone] : null,
    ["Type aanvraag", type],
  ]
    .filter(Boolean)
    .map(
      (row) =>
        `<tr>
          <td style="padding:8px 16px 8px 0;color:#666;white-space:nowrap;vertical-align:top;font-weight:600">${escapeHtml(row![0])}</td>
          <td style="padding:8px 0;color:#111">${row![1] === `<a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>` ? row![1] : escapeHtml(row![1])}</td>
        </tr>`
    )
    .join("");

  const messageHtml = escapeHtml(message).replace(/\n/g, "<br>");

  return `<!DOCTYPE html>
<html lang="nl">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:Arial,Helvetica,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:40px 20px">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #e0e0e0;max-width:600px;width:100%">
        <tr>
          <td style="background:#111111;padding:24px 32px">
            <p style="margin:0;color:#ffffff;font-size:13px;letter-spacing:0.15em;text-transform:uppercase;font-family:monospace">Volmer Techniek B.V.</p>
            <p style="margin:6px 0 0;color:#999;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;font-family:monospace">Contactformulier</p>
          </td>
        </tr>
        <tr>
          <td style="padding:32px">
            <table cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse">
              ${rows}
            </table>
            <hr style="border:none;border-top:1px solid #e0e0e0;margin:24px 0">
            <p style="margin:0 0 12px;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#666;font-family:monospace">Bericht</p>
            <p style="margin:0;font-size:15px;line-height:1.65;color:#111">${messageHtml}</p>
          </td>
        </tr>
        <tr>
          <td style="background:#f9f9f9;padding:16px 32px;border-top:1px solid #e0e0e0">
            <p style="margin:0;font-size:11px;color:#999;font-family:monospace">Verzonden via volmertechniek.com</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { name, email, phone, type, message, website } = body as Record<string, string>;

  // Honeypot — bots fill hidden fields, real users don't
  if (website) {
    return NextResponse.json({ ok: true });
  }

  // Server-side validation
  const errors: Record<string, string> = {};
  if (!name?.trim()) errors.name = "Naam is verplicht";
  if (!email?.trim()) errors.email = "E-mailadres is verplicht";
  else if (!EMAIL_RE.test(email.trim())) errors.email = "Ongeldig e-mailadres";
  if (!message?.trim()) errors.message = "Bericht is verplicht";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  const safeName = name.trim();
  const safeEmail = email.trim();
  const safePhone = phone?.trim() ?? "";
  const safeType = type?.trim() || "Algemeen";
  const safeMessage = message.trim();

  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: [TO],
      replyTo: safeEmail,
      subject: `[Volmer Techniek] ${safeType} — ${safeName}`,
      html: buildHtml({
        name: safeName,
        email: safeEmail,
        phone: safePhone,
        type: safeType,
        message: safeMessage,
      }),
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json({ error: "Verzenden mislukt" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend unexpected error:", err);
    return NextResponse.json({ error: "Verzenden mislukt" }, { status: 500 });
  }
}
