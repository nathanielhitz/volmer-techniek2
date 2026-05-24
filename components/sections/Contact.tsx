import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ChapterLabel } from "@/components/ui/ChapterLabel";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { content } from "@/content";
import { ContactForm } from "@/components/sections/ContactForm";

const { contact } = content;

export function Contact() {
  return (
    <Section id="contact">
      <Container>
        {/* ── Section header ────────────────────────────────────────── */}
        <div className="ct-header">
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <ChapterLabel number="05" name="Contact" />
            <Eyebrow>{contact.eyebrow}</Eyebrow>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: "clamp(36px, 4.5vw, 72px)",
              lineHeight: 1.0,
              letterSpacing: "-0.028em",
              color: "var(--color-ash)",
              margin: 0,
              maxWidth: "18ch",
            }}
          >
            {contact.heading}
          </h2>
        </div>

        {/* ── Body: contactgegevens links + formulier rechts ────────── */}
        <div
          style={{ borderTop: "1px solid var(--border-rule-strong)" }}
          className="ct-body"
        >
          {/* Contactgegevens kolom */}
          <div className="ct-info">
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "15px",
                lineHeight: 1.65,
                color: "var(--color-steel-30)",
                margin: "0 0 40px",
              }}
            >
              {contact.intro}
            </p>

            <div className="ct-channels">
              <ContactChannel label="Adres">
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "15px",
                    lineHeight: 1.65,
                    color: "var(--color-ash)",
                    whiteSpace: "pre-line",
                  }}
                >
                  {contact.address.replace(", ", ",\n")}
                </span>
              </ContactChannel>

              <ContactChannel label="Telefoon">
                <a
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  className="ct-link"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "14px",
                    letterSpacing: "0.04em",
                    color: "var(--color-ash)",
                  }}
                >
                  {contact.phone}
                </a>
              </ContactChannel>

              <ContactChannel label="E-mail">
                <a
                  href={`mailto:${contact.email}`}
                  className="ct-link"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "14px",
                    letterSpacing: "0.04em",
                    color: "var(--color-ash)",
                  }}
                >
                  {contact.email}
                </a>
              </ContactChannel>
            </div>
          </div>

          {/* Formulier kolom */}
          <div className="ct-form-col">
            <ContactForm />
          </div>
        </div>
      </Container>

      <style>{`
        /* ── Section header ─────────────────────────────────────────── */
        .ct-header {
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
          margin-bottom: 64px;
          align-items: start;
        }
        @media (min-width: 768px) {
          .ct-header {
            grid-template-columns: 1fr 2fr;
            gap: 48px;
            margin-bottom: 80px;
          }
        }
        @media (min-width: 1024px) {
          .ct-header {
            gap: 96px;
            margin-bottom: 96px;
          }
        }

        /* ── Body grid ──────────────────────────────────────────────── */
        .ct-body {
          display: grid;
          grid-template-columns: 1fr;
          gap: 56px;
          padding-top: 48px;
        }
        @media (min-width: 768px) {
          .ct-body {
            grid-template-columns: 5fr 7fr;
            gap: 64px;
            padding-top: 56px;
          }
        }
        @media (min-width: 1024px) {
          .ct-body {
            gap: 80px;
            padding-top: 64px;
          }
        }

        /* ── Formulier kolom: scheidingslijn op desktop ─────────────── */
        @media (min-width: 768px) {
          .ct-form-col {
            border-left: 1px solid var(--border-rule-strong);
            padding-left: 64px;
          }
        }
        @media (min-width: 1024px) {
          .ct-form-col { padding-left: 80px; }
        }

        /* ── Contactgegevens channels ───────────────────────────────── */
        .ct-channels {
          display: flex;
          flex-direction: column;
          gap: 0;
          border-top: 1px solid var(--border-rule-strong);
        }
        .ct-channel {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 20px 0;
          border-bottom: 1px solid var(--border-rule);
        }
        .ct-channel-label {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--color-steel-60);
        }

        /* ── Hover: link kleurovergang ──────────────────────────────── */
        .ct-link {
          transition: color 0.2s cubic-bezier(.2,.7,.2,1);
        }
        .ct-link:hover {
          color: var(--color-molten);
        }
        .ct-link:focus-visible {
          outline: 2px solid var(--color-molten);
          outline-offset: 2px;
        }
      `}</style>
    </Section>
  );
}

function ContactChannel({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="ct-channel">
      <span className="ct-channel-label">{label}</span>
      {children}
    </div>
  );
}
