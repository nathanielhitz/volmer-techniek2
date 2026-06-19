import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ChapterLabel } from "@/components/ui/ChapterLabel";
import { Eyebrow } from "@/components/ui/Eyebrow";

type WorkItem = {
  number: string;
  title: string;
  tag: string;
  alt: string;
};

// Index → bron. Bestaande werkplaatsfoto's uit /public/images/projects.
const WORK_IMAGES: { src: string; objectPosition: string }[] = [
  { src: "/images/projects/onsite-machining-opstelling-mobiele-unit.jpeg", objectPosition: "center 40%" },
  { src: "/images/projects/precisieverspaning-afgewerkt-component.jpeg", objectPosition: "center 45%" },
  { src: "/images/projects/industriele-reparatie-vonkenregen-closeup.jpg", objectPosition: "center 35%" },
  { src: "/images/projects/grote-machineconstructie-revisie.jpg", objectPosition: "center 50%" },
];

export async function Work() {
  const t = await getTranslations("work");
  const items = t.raw("items") as WorkItem[];

  return (
    <Section id="werk" bordered>
      <Container>
        {/* ── Section header ────────────────────────────────────────── */}
        <div className="wk-header" data-reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <ChapterLabel number="02" name={t("chapterName")} />
            <Eyebrow>{t("eyebrow")}</Eyebrow>
          </div>
          <div className="wk-header-right">
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
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "17px",
                lineHeight: 1.6,
                color: "var(--color-steel-30)",
                margin: 0,
                maxWidth: "46ch",
              }}
            >
              {t("intro")}
            </p>
          </div>
        </div>

        {/* ── Editorial mosaic ──────────────────────────────────────── */}
        <div className="wk-grid" data-reveal>
          {items.map((item, i) => (
            <WorkCell key={item.number} item={item} index={i} />
          ))}
        </div>
      </Container>

      <style>{`
        /* ── Header ───────────────────────────────────────────────── */
        .wk-header {
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
          margin-bottom: 48px;
          align-items: start;
        }
        .wk-header-right {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        @media (min-width: 768px) {
          .wk-header {
            grid-template-columns: 1fr 2fr;
            gap: 48px;
            margin-bottom: 64px;
          }
        }
        @media (min-width: 1024px) {
          .wk-header { gap: 96px; margin-bottom: 72px; }
        }

        /* ── Mosaic grid ──────────────────────────────────────────── */
        .wk-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1px;
          background: var(--border-rule-strong);
          border: 1px solid var(--border-rule-strong);
        }
        @media (min-width: 768px) {
          .wk-grid {
            grid-template-columns: repeat(12, 1fr);
            grid-template-rows: clamp(300px, 33vw, 440px) clamp(260px, 28vw, 380px);
          }
          .wk-cell--0 { grid-column: 1 / 8;  grid-row: 1; }
          .wk-cell--1 { grid-column: 8 / 13; grid-row: 1; }
          .wk-cell--2 { grid-column: 1 / 6;  grid-row: 2; }
          .wk-cell--3 { grid-column: 6 / 13; grid-row: 2; }
        }

        /* ── Cell ─────────────────────────────────────────────────── */
        .wk-cell {
          position: relative;
          overflow: hidden;
          background: var(--color-obsidian);
          height: 280px;
          margin: 0;
        }
        @media (min-width: 768px) {
          .wk-cell { height: auto; }
        }
        .wk-img {
          object-fit: cover;
          transition: transform 0.7s cubic-bezier(.2,.7,.2,1), filter 0.5s cubic-bezier(.2,.7,.2,1);
          filter: saturate(0.9) brightness(0.92);
        }
        .wk-cell:hover .wk-img {
          transform: scale(1.05);
          filter: saturate(1) brightness(1);
        }
        .wk-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(10,10,11,0.88) 0%,
            rgba(10,10,11,0.30) 42%,
            rgba(10,10,11,0.05) 100%
          );
          z-index: 1;
        }

        /* ── Caption ──────────────────────────────────────────────── */
        .wk-cap {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 2;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        @media (min-width: 1024px) {
          .wk-cap { padding: 32px; }
        }
        .wk-num {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.22em;
          color: var(--color-molten);
        }
        .wk-title {
          font-family: var(--font-display);
          font-weight: 500;
          font-size: clamp(20px, 2.4vw, 28px);
          line-height: 1.1;
          letter-spacing: -0.018em;
          color: var(--color-ash);
          margin: 0;
        }
        .wk-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--color-steel-30);
          margin-top: 4px;
        }
        .wk-tag::before {
          content: "";
          display: inline-block;
          width: 4px;
          height: 4px;
          background: var(--color-molten);
          flex-shrink: 0;
        }
      `}</style>
    </Section>
  );
}

function WorkCell({ item, index }: { item: WorkItem; index: number }) {
  const image = WORK_IMAGES[index];
  const isFeatured = index === 0;

  return (
    <figure className={`wk-cell wk-cell--${index}`}>
      <Image
        src={image.src}
        alt={item.alt}
        fill
        sizes={
          isFeatured
            ? "(max-width: 767px) 100vw, 58vw"
            : "(max-width: 767px) 100vw, 42vw"
        }
        quality={80}
        className="wk-img"
        style={{ objectPosition: image.objectPosition }}
      />
      <div className="wk-overlay" aria-hidden="true" />
      <figcaption className="wk-cap">
        <span className="wk-num">{item.number}</span>
        <h3 className="wk-title">{item.title}</h3>
        <span className="wk-tag">{item.tag}</span>
      </figcaption>
    </figure>
  );
}
