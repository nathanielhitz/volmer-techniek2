import { type ReactNode } from "react";

interface EyebrowProps {
  children: ReactNode;
  className?: string;
}

export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <div
      className={`flex items-center gap-[14px] ${className}`}
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "var(--color-steel-30)",
      }}
    >
      <span
        aria-hidden="true"
        style={{
          display: "inline-block",
          width: "24px",
          height: "1px",
          background: "var(--color-molten)",
          flexShrink: 0,
        }}
      />
      {children}
    </div>
  );
}
