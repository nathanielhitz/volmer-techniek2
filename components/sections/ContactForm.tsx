"use client";

import { useState, useRef } from "react";
import { useTranslations } from "next-intl";

interface FormState {
  name: string;
  email: string;
  phone: string;
  type: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type TypeOption = { value: string; label: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const t = useTranslations("contact.form");
  const typeOptions = t.raw("typeOptions") as TypeOption[];

  const [values, setValues] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    type: typeOptions[0].value,
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const honeypotRef = useRef<HTMLInputElement>(null);

  function validate(): FormErrors {
    const e: FormErrors = {};
    if (!values.name.trim()) e.name = t("errors.nameRequired");
    if (!values.email.trim()) e.email = t("errors.emailRequired");
    else if (!EMAIL_RE.test(values.email)) e.email = t("errors.emailInvalid");
    if (!values.message.trim()) e.message = t("errors.messageRequired");
    return e;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      if (errs.name) nameRef.current?.focus();
      else if (errs.email) emailRef.current?.focus();
      else if (errs.message) messageRef.current?.focus();
      return;
    }

    setPending(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          website: honeypotRef.current?.value ?? "",
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setSubmitError(t("errors.submitFailed"));
      }
    } catch {
      setSubmitError(t("errors.submitFailed"));
    } finally {
      setPending(false);
    }
  }

  if (submitted) {
    return (
      <div
        style={{
          padding: "48px 0",
          borderTop: "1px solid var(--border-rule-strong)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--color-molten)",
            marginBottom: "16px",
          }}
        >
          {t("success.title")}
        </p>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "15px",
            lineHeight: 1.65,
            color: "var(--color-steel-30)",
          }}
        >
          {t("success.message")}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Honeypot — hidden from real users, bots fill it in */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-9999px",
          width: "1px",
          height: "1px",
          overflow: "hidden",
          opacity: 0,
          pointerEvents: "none",
        }}
      >
        <label htmlFor="cf-website">Website</label>
        <input
          ref={honeypotRef}
          id="cf-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="cf-fields">
        {/* Naam */}
        <Field label={t("nameLabel")} error={errors.name} required>
          <input
            ref={nameRef}
            id="cf-name"
            name="name"
            type="text"
            autoComplete="name"
            aria-required="true"
            aria-describedby={errors.name ? "cf-name-err" : undefined}
            value={values.name}
            onChange={handleChange}
            placeholder={t("namePlaceholder")}
            className={`cf-input${errors.name ? " cf-input--error" : ""}`}
          />
          {errors.name && (
            <FieldError id="cf-name-err">{errors.name}</FieldError>
          )}
        </Field>

        {/* E-mail */}
        <Field label={t("emailLabel")} error={errors.email} required>
          <input
            ref={emailRef}
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            aria-required="true"
            aria-describedby={errors.email ? "cf-email-err" : undefined}
            value={values.email}
            onChange={handleChange}
            placeholder={t("emailPlaceholder")}
            className={`cf-input${errors.email ? " cf-input--error" : ""}`}
          />
          {errors.email && (
            <FieldError id="cf-email-err">{errors.email}</FieldError>
          )}
        </Field>

        {/* Telefoon — optioneel */}
        <Field label={t("phoneLabel")} optional={t("phoneOptionalLabel")}>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={handleChange}
            placeholder={t("phonePlaceholder")}
            className="cf-input"
          />
        </Field>

        {/* Type aanvraag */}
        <Field label={t("typeLabel")}>
          <div className="cf-select-wrap">
            <select
              id="cf-type"
              name="type"
              value={values.type}
              onChange={handleChange}
              className="cf-select"
              aria-label={t("typeLabel")}
            >
              {typeOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </Field>

        {/* Bericht */}
        <Field label={t("messageLabel")} error={errors.message} required>
          <textarea
            ref={messageRef}
            id="cf-message"
            name="message"
            rows={5}
            aria-required="true"
            aria-describedby={errors.message ? "cf-message-err" : undefined}
            value={values.message}
            onChange={handleChange}
            placeholder={t("messagePlaceholder")}
            className={`cf-input cf-textarea${errors.message ? " cf-input--error" : ""}`}
          />
          {errors.message && (
            <FieldError id="cf-message-err">{errors.message}</FieldError>
          )}
        </Field>

        {/* Submit error */}
        {submitError && (
          <p
            role="alert"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.08em",
              color: "var(--color-error)",
              marginTop: "8px",
            }}
          >
            {submitError}
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={pending}
          className="cf-submit"
          style={{ opacity: pending ? 0.6 : 1, cursor: pending ? "wait" : "pointer" }}
        >
          <span>{t("submitLabel")}</span>
          <svg
            className="cf-arrow"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <style>{`
        /* ── Velden wrapper ──────────────────────────────────────── */
        .cf-fields {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        /* ── Field wrapper ───────────────────────────────────────── */
        .cf-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 20px 0;
          border-bottom: 1px solid var(--border-rule);
        }
        .cf-field:first-child {
          border-top: 1px solid var(--border-rule-strong);
        }

        /* ── Label ───────────────────────────────────────────────── */
        .cf-label {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--color-steel-60);
        }
        .cf-label-optional {
          color: var(--color-steel-60);
          opacity: 0.6;
          font-size: 10px;
        }
        .cf-label--error {
          color: var(--color-error);
        }

        /* ── Input / Textarea ────────────────────────────────────── */
        .cf-input {
          background: transparent;
          border: none;
          border-bottom: 1px solid var(--border-rule-strong);
          outline: none;
          padding: 12px 0;
          font-family: var(--font-sans);
          font-size: 15px;
          color: var(--color-ash);
          width: 100%;
          transition: border-color 0.2s cubic-bezier(.2,.7,.2,1);
          border-radius: 0;
        }
        .cf-input::placeholder {
          color: var(--color-steel-60);
        }
        .cf-input:focus {
          border-bottom-color: var(--color-molten);
        }
        .cf-input--error {
          border-bottom-color: var(--color-error) !important;
        }

        .cf-textarea {
          resize: vertical;
          min-height: 120px;
          line-height: 1.6;
        }

        /* ── Select ──────────────────────────────────────────────── */
        .cf-select-wrap {
          position: relative;
        }
        .cf-select-wrap::after {
          content: "";
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 10px;
          height: 6px;
          pointer-events: none;
          background-color: var(--color-steel-60);
          clip-path: polygon(0 0, 100% 0, 50% 100%);
        }
        .cf-select {
          appearance: none;
          -webkit-appearance: none;
          background: transparent;
          border: none;
          border-bottom: 1px solid var(--border-rule-strong);
          outline: none;
          padding: 12px 24px 12px 0;
          font-family: var(--font-sans);
          font-size: 15px;
          color: var(--color-ash);
          width: 100%;
          cursor: pointer;
          transition: border-color 0.2s cubic-bezier(.2,.7,.2,1);
          border-radius: 0;
        }
        .cf-select:focus {
          border-bottom-color: var(--color-molten);
        }
        .cf-select option {
          background: var(--color-carbon);
          color: var(--color-ash);
        }

        /* ── Error tekst ─────────────────────────────────────────── */
        .cf-error {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.08em;
          color: var(--color-error);
          margin-top: 2px;
        }

        /* ── Submit knop ─────────────────────────────────────────── */
        .cf-submit {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          width: 100%;
          margin-top: 32px;
          padding: 20px 24px;
          border: 1px solid var(--color-ash);
          background: transparent;
          color: var(--color-ash);
          font-family: var(--font-sans);
          font-size: 13px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-weight: 500;
          transition:
            background 0.28s cubic-bezier(.2,.7,.2,1),
            color 0.28s cubic-bezier(.2,.7,.2,1);
        }
        .cf-submit:hover:not(:disabled) {
          background: var(--color-ash);
          color: var(--color-obsidian);
        }
        .cf-submit:hover:not(:disabled) .cf-arrow {
          transform: translateX(6px);
        }
        .cf-arrow {
          flex-shrink: 0;
          transition: transform 0.28s cubic-bezier(.2,.7,.2,1);
        }
        .cf-submit:focus-visible {
          outline: 2px solid var(--color-molten);
          outline-offset: 2px;
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  optional,
  error,
  required,
  children,
}: {
  label: string;
  optional?: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="cf-field">
      <label className={`cf-label${error ? " cf-label--error" : ""}`}>
        {label}
        {optional && (
          <span className="cf-label-optional">— {optional}</span>
        )}
      </label>
      {children}
    </div>
  );
}

function FieldError({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <span id={id} className="cf-error" role="alert">
      {children}
    </span>
  );
}
