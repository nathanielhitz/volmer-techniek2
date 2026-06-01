import { getTranslations } from "next-intl/server";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ChapterLabel } from "@/components/ui/ChapterLabel";
import { Eyebrow } from "@/components/ui/Eyebrow";

type WorkflowStep = {
  number: string;
  title: string;
  description: string;
};

export async function Workflow() {
  const t = await getTranslations("workflow");
  const steps = t.raw("steps") as WorkflowStep[];

  return (
    <Section id="werkwijze" bordered>
      <Container>
        {/* ── Section header ────────────────────────────────────────── */}
        <div className="wf-header">
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <ChapterLabel number="03" name={t("chapterName")} />
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

        {/* ── Steps list ────────────────────────────────────────────── */}
        <div style={{ borderTop: "1px solid var(--border-rule-strong)" }}>
          {steps.map((step) => (
            <StepRow key={step.number} step={step} />
          ))}
        </div>
      </Container>

      <style>{`
        /* ── Section header ─────────────────────────────────────────── */
        .wf-header {
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
          margin-bottom: 64px;
          align-items: start;
        }
        @media (min-width: 768px) {
          .wf-header {
            grid-template-columns: 1fr 2fr;
            gap: 48px;
            margin-bottom: 80px;
          }
        }
        @media (min-width: 1024px) {
          .wf-header {
            gap: 96px;
            margin-bottom: 96px;
          }
        }

        /* ── Step rows ───────────────────────────────────────────────── */
        .wf-step {
          position: relative;
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
          padding: 28px 0;
          border-bottom: 1px solid var(--border-rule);
        }
        @media (min-width: 768px) {
          .wf-step {
            grid-template-columns: 80px 1fr;
            column-gap: 48px;
            row-gap: 0;
            align-items: start;
            padding: 36px 0 36px 24px;
            border-bottom: none;
          }
        }
        @media (min-width: 1024px) {
          .wf-step {
            column-gap: 56px;
            padding: 40px 0 40px 24px;
          }
        }

        /* ── Process line — desktop only, alle stappen behalve laatste ─ */
        @media (min-width: 768px) {
          .wf-step:not(:last-child)::before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 1px;
            background: var(--border-rule-strong);
          }
        }

        /* ── Hover: nummer iets helderder, niets anders ──────────────── */
        .wf-num {
          transition: color 0.25s cubic-bezier(.2,.7,.2,1);
        }
        .wf-step:hover .wf-num {
          color: var(--color-ash);
        }
      `}</style>
    </Section>
  );
}

function StepRow({ step }: { step: WorkflowStep }) {
  return (
    <div className="wf-step">
      <span
        className="wf-num"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          letterSpacing: "0.18em",
          color: "var(--color-steel-60)",
        }}
      >
        {step.number}
      </span>

      <div>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            fontSize: "clamp(20px, 2.5vw, 32px)",
            lineHeight: 1.1,
            letterSpacing: "-0.018em",
            color: "var(--color-ash)",
            margin: "0 0 12px",
          }}
        >
          {step.title}
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
          {step.description}
        </p>
      </div>
    </div>
  );
}
