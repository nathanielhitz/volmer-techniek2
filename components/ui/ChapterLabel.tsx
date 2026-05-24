interface ChapterLabelProps {
  number: string;
  name: string;
  className?: string;
}

export function ChapterLabel({ number, name, className = "" }: ChapterLabelProps) {
  return (
    <div
      className={`flex items-center gap-[14px] ${className}`}
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: "var(--color-molten)",
      }}
    >
      <span
        aria-hidden="true"
        style={{
          display: "inline-block",
          width: "16px",
          height: "1px",
          background: "var(--color-molten)",
          flexShrink: 0,
        }}
      />
      <span>{number}</span>
      <span style={{ color: "var(--color-steel-60)" }}>/</span>
      <span>{name}</span>
    </div>
  );
}
