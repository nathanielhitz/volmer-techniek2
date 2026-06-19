"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useTransition } from "react";
import { routing } from "@/i18n/routing";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("languageSwitcher");
  const [isPending, startTransition] = useTransition();

  function handleLocaleChange(next: string) {
    // next-intl schrijft de NEXT_LOCALE-cookie zelf bij deze navigatie
    // (zie syncLocaleCookie); max-age komt uit routing.localeCookie.
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  }

  return (
    <div
      role="group"
      aria-label={t("ariaLabel")}
      style={{
        display: "flex",
        alignItems: "center",
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        opacity: isPending ? 0.6 : 1,
        transition: "opacity 0.2s",
      }}
    >
      {routing.locales.map((loc, i) => (
        <span key={loc} style={{ display: "flex", alignItems: "center" }}>
          {i > 0 && (
            <span
              aria-hidden="true"
              style={{ color: "var(--color-steel-60)", padding: "0 5px" }}
            >
              /
            </span>
          )}
          <button
            onClick={() => handleLocaleChange(loc)}
            disabled={loc === locale || isPending}
            aria-current={loc === locale ? "true" : undefined}
            style={{
              background: "none",
              border: "none",
              cursor: loc === locale ? "default" : "pointer",
              padding: "4px 0",
              color:
                loc === locale
                  ? "var(--color-ash)"
                  : "var(--color-steel-60)",
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              transition: "color 0.2s cubic-bezier(.2,.7,.2,1)",
            }}
            onMouseEnter={(e) => {
              if (loc !== locale)
                e.currentTarget.style.color = "var(--color-ash)";
            }}
            onMouseLeave={(e) => {
              if (loc !== locale)
                e.currentTarget.style.color = "var(--color-steel-60)";
            }}
          >
            {loc.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
}
