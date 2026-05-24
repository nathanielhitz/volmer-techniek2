import { Eyebrow } from "@/components/ui/Eyebrow";
import { content } from "@/content";

const { hero } = content;

export function Hero() {
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
          <Eyebrow>{hero.eyebrow}</Eyebrow>
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
              {hero.headline.line1}
              <br />
              {hero.headline.line2}{" "}
              <span
                style={{
                  color: "var(--color-steel-30)",
                  fontWeight: 400,
                  display: "block",
                  marginTop: "8px",
                }}
              >
                {hero.headline.accent}
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
                {hero.lede}
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                <PrimaryCTA label={hero.cta.primary} />
                <GhostCTA label={hero.cta.ghost} />
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
        @media (prefers-reduced-motion: reduce) {
          [style*="kenburns"] { animation: none !important; }
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
          background: var(--color-ash) !important;
          color: var(--color-obsidian) !important;
        }
        .hero-cta-primary:hover .cta-arrow {
          transform: translateX(6px) !important;
        }
        .hero-cta-ghost:hover .ghost-line {
          width: 44px !important;
        }
      `}</style>

      {/* Certificate strip */}
      <CertificateStrip items={hero.certificates} />
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
        border: "1px solid var(--color-ash)",
        color: "var(--color-ash)",
        background: "transparent",
        fontFamily: "var(--font-sans)",
        fontSize: "13px",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        fontWeight: 500,
        transition: "background 0.28s cubic-bezier(.2,.7,.2,1), color 0.28s cubic-bezier(.2,.7,.2,1)",
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
        style={{ transition: "transform 0.28s cubic-bezier(.2,.7,.2,1)", flexShrink: 0 }}
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

function CertificateStrip({ items }: { items: readonly string[] }) {
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
