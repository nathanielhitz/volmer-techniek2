// ─────────────────────────────────────────────────────────────────────────────
// VOLMER TECHNIEK — Content types (legacy reference)
//
// All translatable text has been moved to messages/nl.json and messages/en.json.
// These interfaces are kept as a structural reference only.
//
// To add a new language: see docs/i18n.md
// ─────────────────────────────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  tacticalLabel?: string;
}

export interface WorkflowStep {
  number: string;
  title: string;
  description: string;
}

export interface AboutFact {
  value: string;
  label: string;
}

export interface TypeOption {
  value: string;
  label: string;
}
