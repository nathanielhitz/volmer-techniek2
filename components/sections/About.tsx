import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ChapterLabel } from "@/components/ui/ChapterLabel";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { content, type AboutFact } from "@/content";

const { about } = content;

export function About() {
  return (
    <Section id="over-ons" bordered>
      <Container>
        {/* ── Section header ────────────────────────────────────────── */}
        <div className="ab-header">
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <ChapterLabel number="04" name="Over ons" />
            <Eyebrow>{about.eyebrow}</Eyebrow>
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
            {about.heading}
          </h2>
        </div>

        {/* ── Body: tekst links + facts sidebar rechts ──────────────── */}
        <div
          style={{ borderTop: "1px solid var(--border-rule-strong)" }}
          className="ab-body"
        >
          {/* Tekst kolom */}
          <div className="ab-text">
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "17px",
                lineHeight: 1.65,
                color: "var(--color-steel-30)",
                margin: "0 0 28px",
              }}
            >
              <span className="ab-dropcap">{about.dropCapLetter}</span>
              {about.intro.slice(about.dropCapLetter.length)}
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "17px",
                lineHeight: 1.65,
                color: "var(--color-steel-30)",
                margin: 0,
              }}
            >
              {about.body}
            </p>
          </div>

          {/* Facts sidebar */}
          <div className="ab-facts">
            {about.facts.map((fact) => (
              <FactRow key={fact.label} fact={fact} />
            ))}
          </div>
        </div>
      </Container>

      <style>{`
        /* ── Section header ─────────────────────────────────────────── */
        .ab-header {
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
          margin-bottom: 64px;
          align-items: start;
        }
        @media (min-width: 768px) {
          .ab-header {
            grid-template-columns: 1fr 2fr;
            gap: 48px;
            margin-bottom: 80px;
          }
        }
        @media (min-width: 1024px) {
          .ab-header {
            gap: 96px;
            margin-bottom: 96px;
          }
        }

        /* ── Body grid ──────────────────────────────────────────────── */
        .ab-body {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          padding-top: 48px;
        }
        @media (min-width: 768px) {
          .ab-body {
            grid-template-columns: 6fr 5fr;
            gap: 64px;
            padding-top: 56px;
          }
        }
        @media (min-width: 1024px) {
          .ab-body {
            gap: 80px;
            padding-top: 64px;
          }
        }

        /* ── Drop cap ───────────────────────────────────────────────── */
        .ab-dropcap {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 3.8em;
          line-height: 0.85;
          color: var(--color-molten);
          float: left;
          padding: 4px 10px 0 0;
        }
        @media (min-width: 768px) {
          .ab-dropcap { font-size: 4.2em; }
        }
        @media (min-width: 1024px) {
          .ab-dropcap { font-size: 4.8em; padding: 6px 14px 0 0; }
        }

        /* ── Facts sidebar ──────────────────────────────────────────── */
        .ab-facts {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-content: start;
        }
        @media (min-width: 768px) {
          .ab-facts {
            grid-template-columns: 1fr;
            border-left: 1px solid var(--border-rule-strong);
            padding-left: 48px;
          }
        }
        @media (min-width: 1024px) {
          .ab-facts { padding-left: 64px; }
        }

        /* ── Fact row ───────────────────────────────────────────────── */
        .ab-fact {
          padding: 20px 0;
          border-top: 1px solid var(--border-rule-strong);
        }
        @media (min-width: 768px) {
          .ab-fact {
            border-top: none;
            border-bottom: 1px solid var(--border-rule);
            padding: 24px 0;
          }
          .ab-fact:last-child { border-bottom: none; }
        }
        /* Mobile: rechterkolom heeft geen top-border op de eerste twee cellen */
        @media (max-width: 767px) {
          .ab-fact:nth-child(1),
          .ab-fact:nth-child(2) {
            border-top: 1px solid var(--border-rule-strong);
          }
          .ab-fact:nth-child(odd) {
            padding-right: 16px;
          }
          .ab-fact:nth-child(even) {
            border-left: 1px solid var(--border-rule-strong);
            padding-left: 16px;
          }
        }
      `}</style>
    </Section>
  );
}

function FactRow({ fact }: { fact: AboutFact }) {
  return (
    <div className="ab-fact">
      <span
        style={{
          display: "block",
          fontFamily: "var(--font-mono)",
          fontWeight: 500,
          fontSize: "clamp(40px, 5vw, 64px)",
          lineHeight: 0.9,
          letterSpacing: "-0.02em",
          color: "var(--color-ash)",
          marginBottom: "10px",
        }}
      >
        {fact.value}
      </span>
      <span
        style={{
          display: "block",
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--color-steel-60)",
        }}
      >
        {fact.label}
      </span>
    </div>
  );
}
