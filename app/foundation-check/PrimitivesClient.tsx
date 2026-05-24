"use client";

export function ButtonDemo() {
  return (
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
        Buttons
      </p>
      <div className="flex flex-wrap gap-4">
        <a
          href="#"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            height: "48px",
            padding: "0 24px",
            border: "1px solid var(--color-ash)",
            color: "var(--color-ash)",
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-mono)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            cursor: "pointer",
            transition: "background-color 0.2s, border-color 0.2s, color 0.2s",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.backgroundColor = "var(--color-molten)";
            el.style.borderColor = "var(--color-molten)";
            el.style.color = "var(--color-obsidian)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.backgroundColor = "";
            el.style.borderColor = "var(--color-ash)";
            el.style.color = "var(--color-ash)";
          }}
        >
          Plan een werkbezoek
        </a>

        <a
          href="#"
          style={{
            display: "inline-flex",
            alignItems: "center",
            height: "48px",
            padding: "0 24px",
            border: "1px solid var(--color-graphite)",
            color: "var(--color-steel-30)",
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-mono)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            cursor: "pointer",
            transition: "border-color 0.2s, color 0.2s",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.borderColor = "var(--color-molten)";
            el.style.color = "var(--color-molten)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.borderColor = "var(--color-graphite)";
            el.style.color = "var(--color-steel-30)";
          }}
        >
          Meer informatie
        </a>
      </div>
      <p
        className="mt-4"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          color: "var(--color-steel-60)",
        }}
      >
        48px hoog · 24px padding · 0px radius · hover → Molten fill / Molten border
      </p>
    </div>
  );
}

export function InputDemo() {
  return (
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
        Input
      </p>
      <div>
        <label
          htmlFor="fc-input-default"
          style={{
            display: "block",
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-mono)",
            color: "var(--color-steel-30)",
            marginBottom: "8px",
            letterSpacing: "var(--tracking-eyebrow)",
            textTransform: "uppercase",
          }}
        >
          Bedrijfsnaam
        </label>
        <input
          id="fc-input-default"
          type="text"
          placeholder="Volmer Techniek B.V."
          style={{
            display: "block",
            width: "100%",
            maxWidth: "360px",
            background: "transparent",
            border: "none",
            borderBottom: "1px solid var(--color-graphite)",
            padding: "10px 0",
            color: "var(--color-ash)",
            fontFamily: "var(--font-sans)",
            fontSize: "var(--text-body)",
            outline: "none",
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderBottomColor = "var(--color-molten)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderBottomColor = "var(--color-graphite)";
          }}
        />
      </div>
      <p
        className="mt-4"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          color: "var(--color-steel-60)",
        }}
      >
        Transparant · border-bottom only · focus → Molten · geen radius
      </p>
    </div>
  );
}
