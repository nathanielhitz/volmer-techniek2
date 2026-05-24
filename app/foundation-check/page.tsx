import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ButtonDemo, InputDemo } from "./PrimitivesClient";

export const metadata: Metadata = {
  title: "Foundation Check — Volmer Techniek Design System",
  robots: { index: false },
};

/* ─────────────────────────────────────────────────────────────────────────────
   COLOR PALETTE DATA
   ───────────────────────────────────────────────────────────────────────────── */

const colorsNeutral = [
  { name: "Obsidian", token: "--color-obsidian", hex: "#0A0A0B", use: "Primaire achtergrond", light: false },
  { name: "Carbon", token: "--color-carbon", hex: "#141416", use: "Sectievlakken, cards", light: false },
  { name: "Graphite", token: "--color-graphite", hex: "#1E1E22", use: "Borders, dividers, hover", light: false },
  { name: "Steel 60", token: "--color-steel-60", hex: "#6B6E76", use: "Secundaire tekst", light: false },
  { name: "Steel 30", token: "--color-steel-30", hex: "#A9ADB5", use: "Tertiaire tekst, metadata", light: false },
  { name: "Ash", token: "--color-ash", hex: "#E7E6E2", use: "Primaire tekst op donker", light: true },
  { name: "Bone", token: "--color-bone", hex: "#F5F3EE", use: "Lichte secties (sparingly)", light: true },
];

const colorsAccent = [
  { name: "Molten", token: "--color-molten", hex: "#D94A1F", use: "Primair accent — CTA, focus, highlights", light: false },
  { name: "Ember", token: "--color-ember", hex: "#7A1F0A", use: "Diep accent (achter vuur/staal)", light: false },
];

const colorsFunctional = [
  { name: "Success", token: "--color-success", hex: "#3B6A4C", use: "Status badges", light: false },
  { name: "Warning", token: "--color-warning", hex: "#B48A2A", use: "Alerts", light: false },
  { name: "Error", token: "--color-error", hex: "#A8331E", use: "Form errors", light: false },
];

/* ─────────────────────────────────────────────────────────────────────────────
   TYPOGRAPHY SCALE DATA
   ───────────────────────────────────────────────────────────────────────────── */

const typeScale = [
  {
    role: "Display XL",
    sizeVar: "--text-display-xl",
    leadingVar: "--leading-display-xl",
    trackingVar: "--tracking-display-xl",
    weight: 600,
    family: "display",
    specs: "120px / lh 0.95 / -0.02em / w600 / display",
  },
  {
    role: "Display L",
    sizeVar: "--text-display-l",
    leadingVar: "--leading-display-l",
    trackingVar: "--tracking-display-l",
    weight: 600,
    family: "display",
    specs: "80px / lh 1.0 / -0.02em / w600 / display",
  },
  {
    role: "Display M",
    sizeVar: "--text-display-m",
    leadingVar: "--leading-display-m",
    trackingVar: "--tracking-display-m",
    weight: 600,
    family: "display",
    specs: "56px / lh 1.05 / -0.01em / w600 / display",
  },
  {
    role: "H1",
    sizeVar: "--text-h1",
    leadingVar: "--leading-h1",
    trackingVar: "--tracking-h1",
    weight: 500,
    family: "display",
    specs: "40px / lh 1.1 / -0.01em / w500 / display",
  },
  {
    role: "H2",
    sizeVar: "--text-h2",
    leadingVar: "--leading-h2",
    trackingVar: "--tracking-h2",
    weight: 500,
    family: "display",
    specs: "28px / lh 1.2 / 0em / w500 / display",
  },
  {
    role: "H3",
    sizeVar: "--text-h3",
    leadingVar: "--leading-h3",
    trackingVar: "--tracking-h3",
    weight: 500,
    family: "display",
    specs: "20px / lh 1.3 / 0em / w500 / display",
  },
  {
    role: "Body L",
    sizeVar: "--text-body-l",
    leadingVar: "--leading-body-l",
    trackingVar: "--tracking-body-l",
    weight: 400,
    family: "sans",
    specs: "18px / lh 1.55 / 0em / w400 / sans",
  },
  {
    role: "Body",
    sizeVar: "--text-body",
    leadingVar: "--leading-body",
    trackingVar: "--tracking-body",
    weight: 400,
    family: "sans",
    specs: "16px / lh 1.6 / 0em / w400 / sans",
  },
  {
    role: "Caption / Small",
    sizeVar: "--text-caption",
    leadingVar: "--leading-caption",
    trackingVar: "--tracking-caption",
    weight: 500,
    family: "mono",
    specs: "13px / lh 1.5 / +0.04em / w500 / mono / UPPERCASE",
    uppercase: true,
  },
  {
    role: "Mono",
    sizeVar: "--text-mono",
    leadingVar: "--leading-mono",
    trackingVar: "--tracking-mono",
    weight: 400,
    family: "mono",
    specs: "14px / lh 1.4 / 0em / w400 / mono",
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   SPACING SCALE DATA
   ───────────────────────────────────────────────────────────────────────────── */

const spacingScale = [
  { token: "--spacing-1",  label: "spacing-1",  px: 4 },
  { token: "--spacing-2",  label: "spacing-2",  px: 8 },
  { token: "--spacing-3",  label: "spacing-3",  px: 12 },
  { token: "--spacing-4",  label: "spacing-4",  px: 16 },
  { token: "--spacing-6",  label: "spacing-6",  px: 24 },
  { token: "--spacing-8",  label: "spacing-8",  px: 32 },
  { token: "--spacing-12", label: "spacing-12", px: 48 },
  { token: "--spacing-16", label: "spacing-16", px: 64 },
  { token: "--spacing-24", label: "spacing-24", px: 96 },
  { token: "--spacing-32", label: "spacing-32", px: 128 },
  { token: "--spacing-48", label: "spacing-48", px: 192 },
  { token: "--spacing-64", label: "spacing-64", px: 256 },
];

/* ─────────────────────────────────────────────────────────────────────────────
   SUB-COMPONENTS (server-side, no 'use client' needed)
   ───────────────────────────────────────────────────────────────────────────── */

function SectionLabel({ number, title }: { number: string; title: string }) {
  return (
    <div className="mb-16 flex items-baseline gap-8 border-b border-[var(--color-graphite)] pb-6">
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "var(--text-mono)",
          color: "var(--color-molten)",
          letterSpacing: "var(--tracking-eyebrow)",
          textTransform: "uppercase" as const,
        }}
      >
        {number}
      </span>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "var(--text-h2)",
          lineHeight: "var(--leading-h2)",
          letterSpacing: "var(--tracking-h2)",
          fontWeight: "var(--font-weight-heading)",
          color: "var(--color-ash)",
        }}
      >
        {title}
      </h2>
    </div>
  );
}

function ColorCard({
  name,
  hex,
  use,
  light,
}: {
  name: string;
  hex: string;
  use: string;
  light: boolean;
}) {
  return (
    <div
      style={{ border: "1px solid var(--color-graphite)" }}
      className="overflow-hidden"
    >
      <div
        style={{ backgroundColor: hex, height: "80px" }}
        aria-hidden="true"
      />
      <div className="p-4" style={{ backgroundColor: "var(--color-carbon)" }}>
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-caption)",
            fontWeight: "var(--font-weight-medium)",
            color: "var(--color-ash)",
            marginBottom: "4px",
          }}
        >
          {name}
        </p>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-mono)",
            color: "var(--color-molten)",
            marginBottom: "6px",
          }}
        >
          {hex}
        </p>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "var(--color-steel-60)",
            lineHeight: "1.4",
          }}
        >
          {use}
        </p>
        {light && (
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "var(--color-steel-60)",
              marginTop: "4px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            LICHT — sparingly
          </p>
        )}
      </div>
    </div>
  );
}

function ColorGroup({
  label,
  colors,
}: {
  label: string;
  colors: typeof colorsNeutral;
}) {
  return (
    <div className="mb-12">
      <p
        className="mb-6"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "var(--text-mono)",
          color: "var(--color-steel-60)",
          letterSpacing: "var(--tracking-eyebrow)",
          textTransform: "uppercase",
        }}
      >
        {label}
      </p>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
        {colors.map((c) => (
          <ColorCard key={c.hex} {...c} />
        ))}
      </div>
    </div>
  );
}

function TypeRow({
  role,
  sizeVar,
  leadingVar,
  trackingVar,
  weight,
  family,
  specs,
  uppercase = false,
}: (typeof typeScale)[number]) {
  const fontFamily =
    family === "display"
      ? "var(--font-display)"
      : family === "mono"
        ? "var(--font-mono)"
        : "var(--font-sans)";

  return (
    <div
      className="grid items-baseline gap-8 border-b py-8 md:grid-cols-[200px_1fr]"
      style={{ borderColor: "var(--color-graphite)" }}
    >
      {/* Left: specs label */}
      <div>
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-caption)",
            fontWeight: "var(--font-weight-medium)",
            color: "var(--color-ash)",
            marginBottom: "6px",
          }}
        >
          {role}
        </p>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "var(--color-steel-60)",
            lineHeight: "1.6",
          }}
        >
          {specs}
        </p>
      </div>

      {/* Right: live text */}
      <p
        style={{
          fontFamily,
          fontSize: `var(${sizeVar})`,
          lineHeight: `var(${leadingVar})`,
          letterSpacing: `var(${trackingVar})`,
          fontWeight: weight,
          color: "var(--color-ash)",
          textTransform: uppercase ? "uppercase" : undefined,
          overflowWrap: "break-word",
          wordBreak: "break-word",
        }}
      >
        Volmer Techniek
      </p>
    </div>
  );
}

function SpacingRow({ token, label, px }: (typeof spacingScale)[number]) {
  return (
    <div className="flex items-center gap-6 py-3 border-b" style={{ borderColor: "var(--color-graphite)" }}>
      {/* Bar — width capped at container, represented proportionally */}
      <div
        style={{
          width: `${Math.min(px, 256)}px`,
          height: "8px",
          backgroundColor: "var(--color-molten)",
          flexShrink: 0,
        }}
        aria-hidden="true"
      />
      <div className="flex items-baseline gap-4">
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-mono)",
            color: "var(--color-ash)",
          }}
        >
          {label}
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-mono)",
            color: "var(--color-molten)",
          }}
        >
          {px}px
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "var(--color-steel-60)",
          }}
        >
          var({token})
        </span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────────────────────────────────────── */

export default function FoundationCheckPage() {
  return (
    <main style={{ backgroundColor: "var(--color-obsidian)", minHeight: "100dvh" }}>
      {/* ── PAGE HEADER ─────────────────────────────────────────────────────── */}
      <div style={{ borderBottom: "1px solid var(--color-graphite)" }}>
        <Container>
          <div className="py-16">
            {/* Eyebrow */}
            <div
              className="mb-6 flex items-center gap-4"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "var(--tracking-eyebrow)",
                textTransform: "uppercase",
                color: "var(--color-steel-60)",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "24px",
                  height: "1px",
                  backgroundColor: "var(--color-molten)",
                }}
                aria-hidden="true"
              />
              Volmer Techniek Design System · v1.0
            </div>

            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-display-m)",
                lineHeight: "var(--leading-display-m)",
                letterSpacing: "var(--tracking-display-m)",
                fontWeight: "var(--font-weight-display)",
                color: "var(--color-ash)",
                marginBottom: "24px",
              }}
            >
              Foundation Check
            </h1>

            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "var(--text-body-l)",
                lineHeight: "var(--leading-body-l)",
                color: "var(--color-steel-30)",
                maxWidth: "560px",
              }}
            >
              Visuele verificatie van alle design tokens: kleuren, typografie,
              spacing en component primitives. Controleer dit scherm tegen{" "}
              <span style={{ color: "var(--color-ash)" }}>/docs/brandbook.md</span>.
            </p>
          </div>
        </Container>
      </div>

      {/* ── 01 KLEURENPALET ─────────────────────────────────────────────────── */}
      <Section bordered>
        <Container>
          <SectionLabel number="01" title="Kleurenpalet" />

          <ColorGroup
            label="Primaire neutralen — 7 tokens"
            colors={colorsNeutral}
          />
          <ColorGroup
            label="Accent — gebruik < 5% van vlak"
            colors={colorsAccent}
          />
          <ColorGroup label="Functioneel" colors={colorsFunctional} />

          {/* Selection demo */}
          <div
            className="mt-8 p-6"
            style={{
              border: "1px solid var(--color-graphite)",
              backgroundColor: "var(--color-carbon)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "var(--text-mono)",
                color: "var(--color-steel-60)",
                letterSpacing: "var(--tracking-eyebrow)",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              Selecteer deze tekst om ::selection te controleren
            </p>
            <p style={{ color: "var(--color-ash)", fontSize: "var(--text-body-l)" }}>
              Selecteer mij — achtergrond Molten, tekst Obsidian.
            </p>
          </div>
        </Container>
      </Section>

      {/* ── 02 TYPOGRAFISCHE SCHAAL ─────────────────────────────────────────── */}
      <Section bordered>
        <Container>
          <SectionLabel number="02" title="Typografische schaal" />

          <div>
            {typeScale.map((item) => (
              <TypeRow key={item.role} {...item} />
            ))}
          </div>

          {/* Eyebrow patroon */}
          <div className="mt-16">
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "var(--text-mono)",
                color: "var(--color-steel-60)",
                letterSpacing: "var(--tracking-eyebrow)",
                textTransform: "uppercase",
                marginBottom: "24px",
              }}
            >
              Eyebrow patroon
            </p>
            <div
              className="flex items-center gap-4"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "var(--tracking-eyebrow)",
                textTransform: "uppercase",
                color: "var(--color-steel-60)",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "24px",
                  height: "1px",
                  backgroundColor: "var(--color-molten)",
                  flexShrink: 0,
                }}
                aria-hidden="true"
              />
              VCA · ISO · LID KONINKLIJKE METAALUNIE
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 03 SPACING SCALE ────────────────────────────────────────────────── */}
      <Section bordered>
        <Container>
          <SectionLabel number="03" title="Spacing scale — 8px basis" />

          <div>
            {spacingScale.map((item) => (
              <SpacingRow key={item.token} {...item} />
            ))}
          </div>
        </Container>
      </Section>

      {/* ── 04 COMPONENT PRIMITIVES ─────────────────────────────────────────── */}
      <Section>
        <Container>
          <SectionLabel number="04" title="Component primitives" />

          <div className="grid gap-12 md:grid-cols-2">

            {/* Buttons — client component (hover states) */}
            <ButtonDemo />

            {/* Input — client component (focus state) */}
            <InputDemo />

            {/* Card */}
            <div>
              <p
                className="mb-6"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--text-mono)",
                  color: "var(--color-steel-60)",
                  letterSpacing: "var(--tracking-eyebrow)",
                  textTransform: "uppercase",
                }}
              >
                Card
              </p>
              <div
                style={{
                  border: "1px solid var(--color-graphite)",
                  padding: "32px",
                  backgroundColor: "var(--color-carbon)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--text-mono)",
                    color: "var(--color-molten)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: "12px",
                  }}
                >
                  01
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--text-h3)",
                    lineHeight: "var(--leading-h3)",
                    letterSpacing: "var(--tracking-h3)",
                    fontWeight: "var(--font-weight-heading)",
                    color: "var(--color-ash)",
                    marginBottom: "12px",
                  }}
                >
                  On-site Machining
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "var(--text-body)",
                    lineHeight: "var(--leading-body)",
                    color: "var(--color-steel-30)",
                  }}
                >
                  Wanneer een machine niet naar de werkplaats kan, brengen wij de bewerking naar de machine.
                </p>
              </div>
              <p
                className="mt-4"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  color: "var(--color-steel-60)",
                }}
              >
                1px Graphite border · 32px padding · geen schaduw · Carbon achtergrond
              </p>
            </div>

            {/* Divider + Focus */}
            <div>
              <p
                className="mb-6"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--text-mono)",
                  color: "var(--color-steel-60)",
                  letterSpacing: "var(--tracking-eyebrow)",
                  textTransform: "uppercase",
                }}
              >
                Divider & Focus ring
              </p>

              <div style={{ marginBottom: "24px" }}>
                <hr
                  style={{
                    border: "none",
                    borderTop: "1px solid var(--color-graphite)",
                    margin: "0",
                  }}
                />
                <p
                  className="mt-2"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    color: "var(--color-steel-60)",
                  }}
                >
                  1px Graphite
                </p>
              </div>

              <p
                className="mb-4"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--text-mono)",
                  color: "var(--color-steel-60)",
                  letterSpacing: "var(--tracking-eyebrow)",
                  textTransform: "uppercase",
                }}
              >
                Tab naar dit element:
              </p>
              <button
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  height: "48px",
                  padding: "0 24px",
                  border: "1px solid var(--color-graphite)",
                  color: "var(--color-ash)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--text-mono)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  background: "transparent",
                }}
              >
                Focus test
              </button>
              <p
                className="mt-2"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  color: "var(--color-steel-60)",
                }}
              >
                2px Molten outline · 2px offset — via :focus-visible
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── FOOTER (check-pagina) ────────────────────────────────────────────── */}
      <div style={{ borderTop: "1px solid var(--color-graphite)" }}>
        <Container>
          <div className="py-8 flex items-center justify-between flex-wrap gap-4">
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--color-steel-60)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Volmer Techniek Design System · Foundation v1.0
            </p>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--color-steel-60)",
              }}
            >
              /foundation-check · robots: noindex
            </p>
          </div>
        </Container>
      </div>
    </main>
  );
}
