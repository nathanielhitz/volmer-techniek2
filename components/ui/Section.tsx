import { type ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  bordered?: boolean;
}

export function Section({
  children,
  className = "",
  id,
  bordered = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-24 lg:py-40 ${bordered ? "border-b border-[var(--color-graphite)]" : ""} ${className}`}
    >
      {children}
    </section>
  );
}
