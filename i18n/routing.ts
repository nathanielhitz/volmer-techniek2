import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["nl", "en"],
  defaultLocale: "nl",
  // next-intl zet de NEXT_LOCALE-cookie zelf bij een taalwissel (via de
  // navigation-router en de proxy). Default is een session-cookie zonder
  // max-age; hiermee onthouden we de taalkeuze een jaar.
  localeCookie: {
    maxAge: 60 * 60 * 24 * 365,
  },
});

export type Locale = (typeof routing.locales)[number];
