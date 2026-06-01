import Image from "next/image";
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

type ImageConfig = {
  src: string;
  objectPosition?: string;
};

const SERVICE_IMAGES: Record<string, ImageConfig> = {
  "01": {
    src: "/images/projects/onsite-machining-opstelling-mobiele-unit.jpeg",
    objectPosition: "center 40%",
  },
  "02": {
    src: "/images/projects/precisieverspaning-afgewerkt-component.jpeg",
    objectPosition: "center 35%",
  },
  "03": {
    src: "/images/projects/industriele-reparatie-vonkenregen-closeup.jpg",
    objectPosition: "center 30%",
  },
  "04": {
    src: "/images/projects/grote-machineconstructie-revisie.jpg",
    objectPosition: "center 50%",
  },
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
            <FeaturedCard
              key={item.number}
              item={item}
              image={SERVICE_IMAGES[item.number]}
            />
          ))}
        </div>

        {/* ── Compact list (03 – 06) ──────────────────────────────────── */}
        <div style={{ borderTop: "1px solid var(--border-rule-strong)" }}>
          {compact.map((item) => (
            <CompactRow
              key={item.number}
              item={item}
              image={SERVICE_IMAGES[item.number]}
            />
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
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: background 0.35s cubic-bezier(.2,.7,.2,1);
        }
        .srv-featured-card:hover {
          background: var(--color-carbon);
        }

        /* ── Featured card image block ───────────────────────────────── */
        .srv-featured-img {
          position: relative;
          height: 220px;
          overflow: hidden;
          flex-shrink: 0;
        }
        @media (min-width: 1024px) {
          .srv-featured-img {
            height: 260px;
          }
        }
        .srv-featured-img-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.18);
          z-index: 1;
        }
        .srv-featured-img-gradient {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 60%;
          background: linear-gradient(to bottom, transparent 0%, var(--color-obsidian) 100%);
          z-index: 2;
          transition: background 0.35s cubic-bezier(.2,.7,.2,1);
        }
        .srv-featured-card:hover .srv-featured-img-gradient {
          background: linear-gradient(to bottom, transparent 0%, var(--color-carbon) 100%);
        }

        /* ── Featured card content ───────────────────────────────────── */
        .srv-featured-content {
          padding: 40px 28px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          flex: 1;
        }
        @media (min-width: 768px) {
          .srv-featured-content { padding: 48px 36px; }
        }
        @media (min-width: 1024px) {
          .srv-featured-content { padding: 56px 48px; gap: 24px; }
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

        /* ── Compact rows with thumbnail ─────────────────────────────── */
        @media (min-width: 768px) {
          .srv-compact-row--img {
            grid-template-columns: 64px 3fr 5fr 180px;
            align-items: center;
          }
        }
        @media (min-width: 1024px) {
          .srv-compact-row--img {
            grid-template-columns: 80px 3fr 5fr 180px;
          }
        }
        .srv-compact-thumbnail {
          display: none;
        }
        @media (min-width: 768px) {
          .srv-compact-thumbnail {
            display: block;
            position: relative;
            height: 120px;
            overflow: hidden;
          }
        }
      `}</style>
    </Section>
  );
}

function FeaturedCard({
  item,
  image,
}: {
  item: ServiceItem;
  image?: ImageConfig;
}) {
  return (
    <div className="srv-featured-card">
      {image && (
        <div className="srv-featured-img" aria-hidden="true">
          <Image
            src={image.src}
            alt=""
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1439px) 50vw, 720px"
            quality={80}
            style={{
              objectFit: "cover",
              objectPosition: image.objectPosition ?? "center",
            }}
          />
          <div className="srv-featured-img-overlay" />
          <div className="srv-featured-img-gradient" />
        </div>
      )}

      <div className="srv-featured-content">
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
    </div>
  );
}

function CompactRow({
  item,
  image,
}: {
  item: ServiceItem;
  image?: ImageConfig;
}) {
  return (
    <div className={`srv-compact-row${image ? " srv-compact-row--img" : ""}`}>
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

      {image && (
        <div className="srv-compact-thumbnail" aria-hidden="true">
          <Image
            src={image.src}
            alt=""
            fill
            sizes="180px"
            quality={75}
            style={{
              objectFit: "cover",
              objectPosition: image.objectPosition ?? "center",
            }}
          />
        </div>
      )}
    </div>
  );
}
