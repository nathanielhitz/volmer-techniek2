import { getTranslations } from "next-intl/server";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ChapterLabel } from "@/components/ui/ChapterLabel";
import { Eyebrow } from "@/components/ui/Eyebrow";

type Region = { name: string; note?: string };

export async function ServiceArea() {
  const t = await getTranslations("serviceArea");
  const regions = t.raw("regions") as Region[];

  return (
    <Section id="servicegebied" bordered>
      <Container>
        {/* ── Section header ────────────────────────────────────────── */}
        <div className="sa-header" data-reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <ChapterLabel number="05" name={t("chapterName")} />
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

        {/* ── Body: tekst links + werkgebied rechts ─────────────────── */}
        <div
          style={{ borderTop: "1px solid var(--border-rule-strong)" }}
          className="sa-body"
          data-reveal
        >
          {/* Tekst kolom */}
          <div className="sa-text">
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "17px",
                lineHeight: 1.65,
                color: "var(--color-steel-30)",
                margin: "0 0 32px",
              }}
            >
              {t("body")}
            </p>

            {/* Tactical coordinate detail */}
            <div className="sa-coords" aria-hidden="true">
              <span className="sa-coords-val">{t("coordinates")}</span>
              <span className="sa-coords-label">{t("coordinatesLabel")}</span>
            </div>

            <a href="#contact" className="sa-cta">
              <span>{t("cta")}</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="sa-cta-arrow">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Werkgebied kolom */}
          <div className="sa-regions">
            <span className="sa-regions-label">{t("regionsLabel")}</span>
            {regions.map((region, i) => (
              <div className="sa-region" key={region.name}>
                <span className="sa-region-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="sa-region-name">{region.name}</span>
                {region.note && <span className="sa-region-note">{region.note}</span>}
              </div>
            ))}
          </div>
        </div>
      </Container>

      <style>{`
        /* ── Header ───────────────────────────────────────────────── */
        .sa-header {
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
          margin-bottom: 64px;
          align-items: start;
        }
        @media (min-width: 768px) {
          .sa-header { grid-template-columns: 1fr 2fr; gap: 48px; margin-bottom: 80px; }
        }
        @media (min-width: 1024px) {
          .sa-header { gap: 96px; margin-bottom: 96px; }
        }

        /* ── Body grid ────────────────────────────────────────────── */
        .sa-body {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          padding-top: 48px;
        }
        @media (min-width: 768px) {
          .sa-body { grid-template-columns: 6fr 5fr; gap: 64px; padding-top: 56px; }
        }
        @media (min-width: 1024px) {
          .sa-body { gap: 80px; padding-top: 64px; }
        }

        /* ── Tactical coordinates ─────────────────────────────────── */
        .sa-coords {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding: 18px 0;
          border-top: 1px solid var(--border-rule);
          border-bottom: 1px solid var(--border-rule);
          margin-bottom: 36px;
        }
        .sa-coords-val {
          font-family: var(--font-mono);
          font-size: 14px;
          letter-spacing: 0.06em;
          color: var(--color-ash);
        }
        .sa-coords-label {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--color-steel-60);
        }

        /* ── CTA ──────────────────────────────────────────────────── */
        .sa-cta {
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          min-height: 48px;
          padding: 14px 24px;
          border: 1px solid var(--color-molten);
          color: var(--color-ash);
          font-family: var(--font-sans);
          font-size: 13px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-weight: 500;
          transition: background 0.28s cubic-bezier(.2,.7,.2,1), color 0.28s cubic-bezier(.2,.7,.2,1);
        }
        .sa-cta:hover {
          background: var(--color-molten);
          color: var(--color-obsidian);
        }
        .sa-cta-arrow { flex-shrink: 0; transition: transform 0.28s cubic-bezier(.2,.7,.2,1); }
        .sa-cta:hover .sa-cta-arrow { transform: translateX(6px); }
        .sa-cta:focus-visible { outline: 2px solid var(--color-molten); outline-offset: 2px; }

        /* ── Werkgebied lijst ─────────────────────────────────────── */
        .sa-regions {
          display: flex;
          flex-direction: column;
        }
        @media (min-width: 768px) {
          .sa-regions {
            border-left: 1px solid var(--border-rule-strong);
            padding-left: 48px;
          }
        }
        @media (min-width: 1024px) {
          .sa-regions { padding-left: 64px; }
        }
        .sa-regions-label {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--color-molten);
          padding-bottom: 16px;
          margin-bottom: 8px;
          border-bottom: 1px solid var(--border-rule-strong);
        }
        .sa-region {
          display: grid;
          grid-template-columns: 36px 1fr;
          align-items: baseline;
          gap: 16px;
          padding: 18px 0;
          border-bottom: 1px solid var(--border-rule);
        }
        .sa-region:last-child { border-bottom: none; }
        .sa-region-num {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.18em;
          color: var(--color-steel-60);
        }
        .sa-region-name {
          font-family: var(--font-display);
          font-weight: 500;
          font-size: clamp(20px, 2.2vw, 26px);
          letter-spacing: -0.015em;
          color: var(--color-ash);
        }
        .sa-region-note {
          grid-column: 2;
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--color-steel-60);
          margin-top: 6px;
        }
      `}</style>
    </Section>
  );
}
