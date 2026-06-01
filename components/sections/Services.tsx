import { getTranslations } from "next-intl/server";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ChapterLabel } from "@/components/ui/ChapterLabel";
import { Eyebrow } from "@/components/ui/Eyebrow";

type ServiceItem = {
  number: string;
  title: string;
  description: string;
  tacticalLabel?: string;
};

export async function Services() {
  const t = await getTranslations("services");
  const items = t.raw("items") as ServiceItem[];
  const featured = items.slice(0, 2);
  const compact = items.slice(2);

  return (
    <Section id="diensten" bordered>
      <Container>
        {/* ── Section header ─────────────────────────────────────────── */}
        <div className="srv-header">
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <ChapterLabel number="02" name={t("chapterName")} />
            <Eyebrow>{t("eyebrow")}</Eyebrow>
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
            {t("heading")}
          </h2>
        </div>

        {/* ── Featured pair (01 + 02) ─────────────────────────────────── */}
        <div className="srv-featured">
          {featured.map((item) => (
            <FeaturedCard key={item.number} item={item} />
          ))}
        </div>

        {/* ── Compact list (03 – 06) ──────────────────────────────────── */}
        <div style={{ borderTop: "1px solid var(--border-rule-strong)" }}>
          {compact.map((item) => (
            <CompactRow key={item.number} item={item} />
          ))}
        </div>
      </Container>

      <style>{`
        /* ── Section header ──────────────────────────────────────────── */
        .srv-header {
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
          margin-bottom: 64px;
          align-items: start;
        }
        @media (min-width: 768px) {
          .srv-header {
            grid-template-columns: 1fr 2fr;
            gap: 48px;
            margin-bottom: 80px;
          }
        }
        @media (min-width: 1024px) {
          .srv-header {
            gap: 96px;
            margin-bottom: 96px;
          }
        }

        /* ── Featured pair ───────────────────────────────────────────── */
        .srv-featured {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1px;
          background: var(--border-rule-strong);
          border: 1px solid var(--border-rule-strong);
          margin-bottom: 1px;
        }
        @media (min-width: 768px) {
          .srv-featured {
            grid-template-columns: 1fr 1fr;
          }
        }

        .srv-featured-card {
          background: var(--color-obsidian);
          padding: 40px 28px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          transition: background 0.35s cubic-bezier(.2,.7,.2,1);
        }
        @media (min-width: 768px) {
          .srv-featured-card { padding: 48px 36px; }
        }
        @media (min-width: 1024px) {
          .srv-featured-card { padding: 56px 48px; gap: 24px; }
        }
        .srv-featured-card:hover {
          background: var(--color-carbon);
        }

        /* ── Compact list rows ───────────────────────────────────────── */
        .srv-compact-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
          padding: 28px 0;
          border-bottom: 1px solid var(--border-rule);
          transition:
            background 0.25s cubic-bezier(.2,.7,.2,1),
            padding-left 0.25s cubic-bezier(.2,.7,.2,1);
        }
        @media (min-width: 768px) {
          .srv-compact-row {
            grid-template-columns: 64px 3fr 5fr;
            gap: 36px;
            align-items: start;
            padding: 32px 0;
          }
        }
        @media (min-width: 1024px) {
          .srv-compact-row {
            grid-template-columns: 80px 3fr 5fr;
            gap: 48px;
            padding: 40px 0;
          }
        }
        .srv-compact-row:hover {
          background: rgba(231, 230, 226, 0.012);
          padding-left: 10px;
        }
        .srv-compact-num {
          transition: color 0.25s cubic-bezier(.2,.7,.2,1);
        }
        .srv-compact-row:hover .srv-compact-num {
          color: var(--color-molten);
        }
      `}</style>
    </Section>
  );
}

function FeaturedCard({ item }: { item: ServiceItem }) {
  return (
    <div className="srv-featured-card">
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "clamp(64px, 8vw, 96px)",
          fontWeight: 500,
          lineHeight: 1,
          letterSpacing: "-0.04em",
          color: "var(--color-molten)",
          display: "block",
        }}
      >
        {item.number}
      </span>

      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 500,
          fontSize: "clamp(28px, 3vw, 48px)",
          lineHeight: 1.05,
          letterSpacing: "-0.022em",
          color: "var(--color-ash)",
          margin: 0,
        }}
      >
        {item.title}
      </h3>

      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "15px",
          lineHeight: 1.65,
          color: "var(--color-steel-30)",
          margin: 0,
        }}
      >
        {item.description}
      </p>

      {item.tacticalLabel && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--color-steel-60)",
            paddingTop: "16px",
            borderTop: "1px solid var(--border-rule)",
            marginTop: "auto",
          }}
        >
          <span
            aria-hidden="true"
            style={{
              display: "inline-block",
              width: "4px",
              height: "4px",
              background: "var(--color-molten)",
              flexShrink: 0,
            }}
          />
          {item.tacticalLabel}
        </div>
      )}
    </div>
  );
}

function CompactRow({ item }: { item: ServiceItem }) {
  return (
    <div className="srv-compact-row">
      <span
        className="srv-compact-num"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          letterSpacing: "0.18em",
          color: "var(--color-steel-60)",
        }}
      >
        {item.number}
      </span>

      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 500,
          fontSize: "clamp(20px, 2.5vw, 32px)",
          lineHeight: 1.1,
          letterSpacing: "-0.018em",
          color: "var(--color-ash)",
          margin: 0,
        }}
      >
        {item.title}
      </h3>

      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "15px",
          lineHeight: 1.65,
          color: "var(--color-steel-30)",
          margin: 0,
        }}
      >
        {item.description}
      </p>
    </div>
  );
}
