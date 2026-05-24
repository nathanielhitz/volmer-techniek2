// ─────────────────────────────────────────────────────────────────────────────
// VOLMER TECHNIEK — Centrale content
//
// Alle vertaalbare tekst staat hier. Bij NL → EN: maak content/nl.ts en
// content/en.ts, exporteer beide als SiteContent, en wire de locale in
// app/layout.tsx. De componenten hoeven dan niet te wijzigen.
//
// Wat hier NIET staat:
//   • Eigennamen ("Volmer Techniek") — niet vertalen
//   • NAP-data (tel, e-mail, adres) — wijzigen niet per taal
//   • Decoratieve symbolen (◆ ■ —) — design, geen content
//   • Numerieke structuurlabels (01, 02) — structuur, geen content
//   • CSS classes of Tailwind utilities
// ─────────────────────────────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  // href verandert mee bij EN: "#diensten" → "#services", of later
  // volledige routes "/diensten" → "/services". Houd plat — geen nesting.
  href: string;
}

export interface HeaderContent {
  // aria-label op de logo-link; bevat bedrijfsnaam maar is verder vertaalbaar
  logoAriaLabel: string;
  nav: {
    // aria-label op het desktop <nav> element
    ariaLabel: string;
    // href én label wisselen bij EN (zie NavItem-comment hierboven)
    items: readonly NavItem[];
  };
  mobileMenu: {
    // aria-label op de hamburger-knop; wissel dynamisch op basis van open-state:
    //   mobileOpen ? closeLabel : openLabel
    openLabel: string;
    closeLabel: string;
    // aria-label op het <dialog> panel
    panelAriaLabel: string;
    // aria-label op de <nav> binnen het panel
    navAriaLabel: string;
  };
  cta: {
    // Label van de desktop "BEL DIRECT" knop — decoratief ■ zit in de component
    desktop: string;
  };
}

export interface HeroContent {
  // Regel boven de hero: locatie · specialisatie
  eyebrow: string;
  headline: {
    line1: string; // eerste visuele regel, kleur: Ash, weight: 500
    line2: string; // tweede visuele regel, zelfde stijl als line1
    // Derde regel, gestyled als Steel-30 weight 400 display: block —
    // verander dit niet naar Ash bij vertaling zonder de span aan te passen
    accent: string;
  };
  // Alinea naast/onder de headline; max ~60 woorden, kleur Steel-30
  lede: string;
  cta: {
    primary: string; // Hoofd-CTA, pijlicoon zit in de component
    ghost: string;   // Secundaire CTA; Molten-streep zit in de component
  };
  // Certificaatregel onder de hero — elke string is één item in de strip
  certificates: readonly string[];
}

export interface SiteContent {
  header: HeaderContent;
  hero: HeroContent;
  // Volgende secties worden hier toegevoegd:
  // services: ServicesContent;
  // workflow: WorkflowContent;
  // about: AboutContent;
  // contact: ContactContent;
  // footer: FooterContent;
}

export const content: SiteContent = {
  header: {
    logoAriaLabel: "Volmer Techniek — terug naar home",
    nav: {
      ariaLabel: "Hoofdnavigatie",
      items: [
        { label: "Diensten", href: "#diensten" },
        { label: "Werkwijze", href: "#werkwijze" },
        { label: "Over ons", href: "#over-ons" },
        { label: "Contact", href: "#contact" },
      ],
    },
    mobileMenu: {
      openLabel: "Menu openen",
      closeLabel: "Menu sluiten",
      panelAriaLabel: "Navigatiemenu",
      navAriaLabel: "Mobiele navigatie",
    },
    cta: {
      desktop: "Bel direct",
    },
  },

  hero: {
    eyebrow: "Puttershoek, NL · Verspanende techniek",
    headline: {
      line1: "Verspanende techniek",
      line2: "op locatie en in",
      accent: "de werkplaats.",
    },
    lede: "Nauwkeurig verspanen, herstellen en aanpassen. Wij beperken stilstand — op locatie of in onze werkplaats in Puttershoek.",
    cta: {
      primary: "Service aanvragen",
      ghost: "Bekijk diensten",
    },
    certificates: [
      "VCA Gecertificeerd",
      "ISO 9001",
      "Lid Koninklijke Metaalunie",
    ],
  },
};
