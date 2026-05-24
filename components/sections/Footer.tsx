import { Container } from "@/components/ui/Container";
import { content } from "@/content";

const { footer, services, contact } = content;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--color-carbon)",
        borderTop: "1px solid var(--border-rule-strong)",
        paddingTop: "96px",
        paddingBottom: "40px",
      }}
    >
      <Container>
        {/* ── Main grid ──────────────────────────────────────────────── */}
        <div className="ft-grid">
          {/* Brand */}
          <div className="ft-brand">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "20px",
              }}
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                aria-hidden="true"
                style={{ transform: "rotate(45deg)", flexShrink: 0 }}
              >
                <rect width="10" height="10" fill="var(--color-molten)" />
              </svg>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: "17px",
                  letterSpacing: "-0.01em",
                  color: "var(--color-ash)",
                }}
              >
                VOLMER TECHNIEK
              </span>
            </div>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "14px",
                lineHeight: 1.65,
                color: "var(--color-steel-30)",
                margin: "0 0 24px",
                maxWidth: "28ch",
              }}
            >
              {footer.tagline}
            </p>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--color-steel-60)",
              }}
            >
              {footer.kvk}
            </span>
          </div>

          {/* Diensten */}
          <div className="ft-diensten">
            <p className="ft-col-header">Diensten</p>
            <nav aria-label="Diensten">
              {services.items.map((item) => (
                <a key={item.number} href="#diensten" className="ft-link">
                  {item.title}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="ft-contact-col">
            <p className="ft-col-header">Contact</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div>
                <span className="ft-channel-label">Adres</span>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "14px",
                    lineHeight: 1.65,
                    color: "var(--color-ash)",
                    display: "block",
                  }}
                >
                  {contact.address}
                </span>
              </div>
              <div>
                <span className="ft-channel-label">Telefoon</span>
                <a
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  className="ft-mono-link"
                >
                  {contact.phone}
                </a>
              </div>
              <div>
                <span className="ft-channel-label">E-mail</span>
                <a href={`mailto:${contact.email}`} className="ft-mono-link">
                  {contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ─────────────────────────────────────────────── */}
        <div className="ft-bottom">
          <span className="ft-meta">© {year} Volmer Techniek B.V.</span>
          <div className="ft-bottom-right">
            <span className="ft-meta">{footer.kvk}</span>
            <a href={footer.privacy.href} className="ft-meta ft-meta-link">
              {footer.privacy.label}
            </a>
            <a href={footer.cookie.href} className="ft-meta ft-meta-link">
              {footer.cookie.label}
            </a>
            <span className="ft-meta">Built by HitzDigital</span>
          </div>
        </div>
      </Container>

      <style>{`
        /* ── Main grid ───────────────────────────────────────────── */
        .ft-grid {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-areas: "brand" "diensten" "contact";
          gap: 48px;
          margin-bottom: 64px;
        }
        @media (min-width: 768px) {
          .ft-grid {
            grid-template-columns: 1fr 1fr;
            grid-template-areas: "brand brand" "diensten contact";
            gap: 56px 48px;
          }
        }
        @media (min-width: 1024px) {
          .ft-grid {
            grid-template-columns: 3fr 2fr 2fr;
            grid-template-areas: "brand diensten contact";
            gap: 96px;
            margin-bottom: 80px;
          }
        }
        .ft-brand        { grid-area: brand; }
        .ft-diensten     { grid-area: diensten; }
        .ft-contact-col  { grid-area: contact; }

        /* ── Column headers ──────────────────────────────────────── */
        .ft-col-header {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--color-molten);
          margin: 0 0 16px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border-rule-strong);
        }

        /* ── Service links ───────────────────────────────────────── */
        .ft-link {
          display: block;
          font-family: var(--font-sans);
          font-size: 14px;
          color: var(--color-ash);
          opacity: 0.72;
          padding: 6px 0;
          border-bottom: 1px solid var(--border-rule);
          transition: color 0.2s cubic-bezier(.2,.7,.2,1),
                      opacity 0.2s cubic-bezier(.2,.7,.2,1);
        }
        .ft-link:last-child { border-bottom: none; }
        .ft-link:hover { color: var(--color-molten); opacity: 1; }
        .ft-link:focus-visible {
          outline: 2px solid var(--color-molten);
          outline-offset: 2px;
        }

        /* ── Contact channels ────────────────────────────────────── */
        .ft-channel-label {
          display: block;
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--color-steel-60);
          margin-bottom: 4px;
        }
        .ft-mono-link {
          display: block;
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--color-ash);
          transition: color 0.2s cubic-bezier(.2,.7,.2,1);
        }
        .ft-mono-link:hover { color: var(--color-molten); }
        .ft-mono-link:focus-visible {
          outline: 2px solid var(--color-molten);
          outline-offset: 2px;
        }

        /* ── Bottom bar ──────────────────────────────────────────── */
        .ft-bottom {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding-top: 24px;
          border-top: 1px solid var(--border-rule);
        }
        @media (min-width: 768px) {
          .ft-bottom {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            gap: 16px;
          }
        }
        .ft-bottom-right {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        @media (min-width: 768px) {
          .ft-bottom-right {
            flex-direction: row;
            align-items: center;
            gap: 20px;
          }
        }

        /* ── Meta text ───────────────────────────────────────────── */
        .ft-meta {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--color-steel-60);
        }
        .ft-meta-link {
          transition: color 0.2s cubic-bezier(.2,.7,.2,1);
        }
        .ft-meta-link:hover { color: var(--color-molten); }
        .ft-meta-link:focus-visible {
          outline: 2px solid var(--color-molten);
          outline-offset: 2px;
        }
      `}</style>
    </footer>
  );
}
