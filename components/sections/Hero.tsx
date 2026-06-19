import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SparkField } from "@/components/sections/SparkField";

export async function Hero() {
  const t = await getTranslations("hero");
  const certificates = t.raw("certificates") as string[];

  return (
    <>
      {/* Hero */}
      <header
        style={{
          position: "relative",
          minHeight: "100dvh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          overflow: "hidden",
          isolation: "isolate",
        }}
      >
        {/* Ken Burns gradient stage */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: -2,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: "-8%",
              background: [
                "radial-gradient(ellipse 55% 40% at 76% 64%, rgba(217,74,31,0.32) 0%, rgba(122,31,10,0.16) 30%, transparent 62%)",
                "radial-gradient(ellipse 40% 28% at 28% 86%, rgba(122,31,10,0.22) 0%, transparent 55%)",
                "linear-gradient(155deg, #0a0a0b 0%, #11090a 45%, #0a0a0b 100%)",
              ].join(", "),
              animation: "kenburns 32s ease-in-out infinite alternate",
              filter: "saturate(0.85)",
            }}
          />
          {/* Floor gradient for legibility */}
          <div
            style={{
              position: "absolute",
              inset: "auto 0 0 0",
              height: "55%",
              background:
                "linear-gradient(180deg, transparent 0%, rgba(10,10,11,0.65) 55%, #0A0A0B 100%)",
              zIndex: 1,
            }}
          />

          {/* Hero photo — right panel */}
          <div className="hero-photo-wrapper" aria-hidden="true">
            <Image
              src="/hero-onsite-machining-volmer-techniek.jpeg"
              alt=""
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 48vw"
              quality={85}
              style={{
                objectFit: "cover",
                objectPosition: "center 22%",
                animation: "heroFadeIn 1.0s ease-out both",
              }}
            />
            {/* Left-edge blend: photo → dark background */}
            <div
              style={{
                position: "absolute",
                inset: "0 auto 0 0",
                width: "55%",
                background:
                  "linear-gradient(90deg, #0a0a0b 0%, rgba(10,10,11,0.7) 45%, transparent 100%)",
                zIndex: 1,
              }}
            />
            {/* Subtle dark overlay for legibility */}
            <div className="hero-photo-overlay" style={{ position: "absolute", inset: 0, zIndex: 1 }} />
          </div>

          {/* Vonken/ember-laag — stijgt op uit de hot zone, blijft achter de tekst */}
          <SparkField />
        </div>

        {/* Hero eyebrow — hidden on mobile, visible from sm */}
        <div
          className="hero-eyebrow-abs hidden sm:flex"
          style={{
            position: "absolute",
            top: "120px",
            left: "20px",
            zIndex: 5,
          }}
        >
          <Eyebrow>{t("eyebrow")}</Eyebrow>
        </div>

        {/* Hero content */}
        <div
          style={{
            position: "relative",
            zIndex: 5,
            width: "100%",
            maxWidth: "1440px",
            margin: "0 auto",
            padding: "140px 20px 80px",
          }}
          className="md:px-10 lg:px-20"
        >
          {/* Desktop 7/4 grid, mobile single column */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "48px",
              alignItems: "end",
            }}
            className="lg:grid-two-col"
          >
            {/* H1 */}
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: "clamp(40px, 10vw, 56px)",
                lineHeight: 0.96,
                letterSpacing: "-0.035em",
                color: "var(--color-ash)",
                margin: 0,
              }}
              className="lg:hero-h1"
            >
              {t("headline.line1")}
              <br />
              {t("headline.line2")}{" "}
              <span
                style={{
                  color: "var(--color-steel-30)",
                  fontWeight: 400,
                  display: "block",
                  marginTop: "8px",
                }}
              >
                {t("headline.accent")}
              </span>
            </h1>

            {/* Side panel */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "36px",
                paddingBottom: "14px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "17px",
                  lineHeight: 1.6,
                  color: "var(--color-steel-30)",
                  margin: 0,
                }}
              >
                {t("lede")}
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <PrimaryCTA label={t("cta.primary")} />
                <div className="hero-secondary-actions">
                  <PhoneCTA label={t("cta.phone")} />
                  <GhostCTA label={t("cta.ghost")} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* CSS for animations, responsive grid, and hover states */}
      <style>{`
        @keyframes kenburns {
          0%   { transform: scale(1.06); }
          100% { transform: scale(1.12); }
        }
        @keyframes heroFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="kenburns"] { animation: none !important; }
          [style*="heroFadeIn"] { animation: none !important; }
        }
        /* Hero photo — mobile: volledige breedte, desktop: rechterhelft */
        .hero-photo-wrapper {
          position: absolute;
          inset: 0;
          overflow: hidden;
          z-index: 0;
        }
        .hero-photo-overlay {
          background: rgba(0, 0, 0, 0.32);
        }
        @media (min-width: 1024px) {
          .hero-photo-wrapper {
            left: 52%;
          }
          .hero-photo-overlay {
            background: rgba(0, 0, 0, 0.16);
          }
        }
        @media (min-width: 768px) {
          .hero-eyebrow-abs { left: 40px !important; }
        }
        @media (min-width: 1024px) {
          .hero-eyebrow-abs { left: 80px !important; }
          .lg\\:grid-two-col {
            grid-template-columns: 7fr 4fr !important;
            gap: 64px !important;
          }
          .lg\\:hero-h1 {
            font-size: clamp(54px, 8.6vw, 120px) !important;
          }
        }
        .hero-cta-primary:hover {
          background: var(--color-molten) !important;
          border-color: var(--color-molten) !important;
          color: var(--color-obsidian) !important;
        }
        .hero-cta-primary:hover .cta-arrow {
          transform: translateX(6px) !important;
        }
        .hero-cta-ghost:hover .ghost-line {
          width: 44px !important;
        }
        /* Secundaire acties: telefoon (mobiel) + ghost-link */
        .hero-secondary-actions {
          display: flex;
          flex-direction: column;
          gap: 18px;
          align-items: flex-start;
        }
        .hero-cta-phone {
          display: none;
        }
        @media (max-width: 1023px) {
          .hero-cta-phone {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            width: 100%;
            max-width: 360px;
            min-height: 48px;
            padding: 14px 24px;
            border: 1px solid var(--border-rule-strong);
            color: var(--color-ash);
            font-family: var(--font-mono);
            font-size: 13px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            transition: border-color 0.25s cubic-bezier(.2,.7,.2,1), color 0.25s cubic-bezier(.2,.7,.2,1);
          }
          .hero-secondary-actions {
            flex-direction: column;
            gap: 22px;
          }
        }
        @media (min-width: 640px) and (max-width: 1023px) {
          .hero-secondary-actions {
            flex-direction: row;
            align-items: center;
            gap: 28px;
          }
          .hero-cta-phone { width: auto; }
        }
      `}</style>

      {/* Certificate strip */}
      <CertificateStrip items={certificates} />
    </>
  );
}

function PrimaryCTA({ label }: { label: string }) {
  return (
    <a
      href="#contact"
      className="hero-cta-primary"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "16px",
        padding: "20px 24px",
        border: "1px solid var(--color-molten)",
        color: "var(--color-ash)",
        background: "transparent",
        fontFamily: "var(--font-sans)",
        fontSize: "13px",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        fontWeight: 500,
        transition:
          "background 0.28s cubic-bezier(.2,.7,.2,1), color 0.28s cubic-bezier(.2,.7,.2,1), border-color 0.28s cubic-bezier(.2,.7,.2,1)",
        width: "100%",
        maxWidth: "360px",
        cursor: "pointer",
      }}
    >
      <span>{label}</span>
      <svg
        className="cta-arrow"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
        style={{
          transition: "transform 0.28s cubic-bezier(.2,.7,.2,1)",
          flexShrink: 0,
        }}
      >
        <path
          d="M3 8h10M9 4l4 4-4 4"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}

function PhoneCTA({ label }: { label: string }) {
  return (
    <a href="tel:+31653537747" className="hero-cta-phone">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
        <path
          d="M3 2.5h2l1 3-1.5 1a8 8 0 0 0 3 3l1-1.5 3 1v2c0 .6-.4 1-1 1A10 10 0 0 1 2 3.5c0-.6.4-1 1-1Z"
          stroke="var(--color-molten)"
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </svg>
      {label}
    </a>
  );
}

function GhostCTA({ label }: { label: string }) {
  return (
    <a
      href="#diensten"
      className="hero-cta-ghost"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "14px",
        color: "var(--color-ash)",
        fontFamily: "var(--font-mono)",
        fontSize: "12px",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        cursor: "pointer",
      }}
    >
      <span
        className="ghost-line"
        aria-hidden="true"
        style={{
          display: "inline-block",
          width: "28px",
          height: "1px",
          background: "var(--color-molten)",
          flexShrink: 0,
          transition: "width 0.28s cubic-bezier(.2,.7,.2,1)",
        }}
      />
      {label}
    </a>
  );
}

function CertificateStrip({ items }: { items: string[] }) {
  return (
    <div
      style={{
        borderTop: "1px solid var(--border-rule)",
        borderBottom: "1px solid var(--border-rule)",
        padding: "22px 0",
        background: "var(--color-carbon)",
      }}
    >
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "0 20px",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "24px",
          alignItems: "center",
        }}
        className="md:px-10 lg:px-20"
      >
        {items.map((item) => (
          <div
            key={item}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--color-steel-30)",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                display: "inline-block",
                width: "5px",
                height: "5px",
                background: "var(--color-steel-60)",
                flexShrink: 0,
              }}
            />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
