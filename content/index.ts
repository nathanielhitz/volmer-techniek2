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

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
}

export interface ServicesContent {
  eyebrow: string;
  heading: string;
  items: readonly ServiceItem[];
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
  services: ServicesContent;
  // Volgende secties worden hier toegevoegd:
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

  services: {
    eyebrow: "Wat wij doen",
    heading: "Zes disciplines. Één aanspreekpunt.",
    items: [
      {
        number: "01",
        title: "On-site machining",
        description: "Wanneer een machine niet naar de werkplaats kan, brengen wij de bewerking naar de machine. Draai-, frees- en kotterwerk direct op locatie, zonder demontage, zonder transport en zonder onnodige stilstand.",
      },
      {
        number: "02",
        title: "Verspaning in eigen werkplaats",
        description: "Nauwkeurig draai-, frees- en kotterwerk voor maatwerk-onderdelen, vervangingsonderdelen en herstelwerk. Toleranties tot ±0.02mm. Van enkelstuks tot kleine series.",
      },
      {
        number: "03",
        title: "Industriële reparaties",
        description: "Snelle diagnose en herstel van beschadigde of versleten machineonderdelen, op locatie of in onze werkplaats. Van gebroken assen tot versleten lagerblokken. Gericht op minimale stilstand en betrouwbare oplevering.",
      },
      {
        number: "04",
        title: "Machinebouw en maatwerk",
        description: "Ontwerp en realisatie van maatwerkonderdelen en oplossingen voor industriële toepassingen. Van eenmalige vervangingsonderdelen tot complete sub-assemblages. Wij denken mee van tekening tot oplevering.",
      },
      {
        number: "05",
        title: "Retrofit en modernisering",
        description: "Bestaande machines aanpassen, verbeteren of updaten zonder volledige vervanging. Wij brengen verouderde installaties op het gewenste niveau, kostenefficiënter dan nieuwbouw en met behoud van wat werkt.",
      },
      {
        number: "06",
        title: "Preventief onderhoud",
        description: "Regelmatige inspectie en onderhoud van kritieke machineonderdelen om ongeplande stilstand te voorkomen. Wij stellen een onderhoudsprogramma op dat past bij uw productiecyclus.",
      },
    ],
  },
};
