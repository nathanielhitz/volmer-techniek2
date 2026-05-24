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
  tacticalLabel?: string;
}

export interface ServicesContent {
  eyebrow: string;
  heading: string;
  items: readonly ServiceItem[];
}

export interface WorkflowStep {
  number: string;
  title: string;
  description: string;
}

export interface WorkflowContent {
  eyebrow: string;
  heading: string;
  steps: readonly WorkflowStep[];
}

export interface AboutFact {
  value: string;
  label: string;
}

export interface AboutContent {
  eyebrow: string;
  heading: string;
  // Eerste letter van intro — wordt als grote drop cap gerenderd in Molten
  dropCapLetter: string;
  // Volledig intro-tekst, inclusief de dropCapLetter als eerste karakter
  intro: string;
  body: string;
  facts: readonly AboutFact[];
}

export interface ContactFormContent {
  namePlaceholder: string;
  emailPlaceholder: string;
  phonePlaceholder: string;
  phoneOptionalLabel: string;
  messagePlaceholder: string;
  typeLabel: string;
  typeOptions: readonly {
    value: string;
    label: string;
  }[];
  submitLabel: string;
}

export interface ContactContent {
  eyebrow: string;
  heading: string;
  intro: string;
  address: string;
  phone: string;
  email: string;
  form: ContactFormContent;
}

export interface FooterContent {
  tagline: string;
  kvk: string;
  privacy: { label: string; href: string };
  cookie: { label: string; href: string };
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
  workflow: WorkflowContent;
  about: AboutContent;
  contact: ContactContent;
  footer: FooterContent;
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
    lede: "Nauwkeurig verspanen, herstellen en aanpassen. Wij beperken stilstand, op locatie of in onze werkplaats in Puttershoek.",
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
        tacticalLabel: "LOCATIE · GEEN DEMONTAGE",
      },
      {
        number: "02",
        title: "Verspaning in eigen werkplaats",
        description: "Nauwkeurig draai-, frees- en kotterwerk voor maatwerk-onderdelen, vervangingsonderdelen en herstelwerk. Toleranties tot ±0.02mm. Van enkelstuks tot kleine series.",
        tacticalLabel: "TOL: ±0.02MM · ENKELSTUKS",
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

  workflow: {
    eyebrow: "Hoe wij werken",
    heading: "Vijf stappen. Eén heldere aanpak.",
    steps: [
      {
        number: "01",
        title: "Inventarisatie",
        description: "We brengen de situatie in kaart: type machine, aard van het probleem, gewenste uitkomst en eventuele beperkingen op locatie of in tijdsplanning.",
      },
      {
        number: "02",
        title: "Technische beoordeling",
        description: "Op basis van de inventarisatie bepalen we de juiste aanpak, benodigde apparatuur, doorlooptijd en eventuele risico's. U krijgt een concrete offerte voor akkoord.",
      },
      {
        number: "03",
        title: "Uitvoering op locatie of in werkplaats",
        description: "Wij voeren het werk uit waar dat het meest efficiënt is, bij u op locatie of in onze werkplaats in Puttershoek. Geen verrassingen, duidelijke communicatie tijdens het proces.",
      },
      {
        number: "04",
        title: "Controle en oplevering",
        description: "Voor oplevering controleren we de bewerking op specificaties en functionaliteit. U ontvangt een verslag van de uitgevoerde werkzaamheden.",
      },
      {
        number: "05",
        title: "Advies voor vervolg en onderhoud",
        description: "Waar relevant adviseren we over preventief onderhoud, herinspectie-intervallen of mogelijke verbeteringen om herhaling van het probleem te voorkomen.",
      },
    ],
  },

  about: {
    eyebrow: "Wie wij zijn",
    heading: "Vakmanschap uit Puttershoek.",
    dropCapLetter: "V",
    intro: "Volmer Techniek is een technisch metaalbewerkingsbedrijf gespecialiseerd in verspanende techniek. Wij draaien, frezen en kotteren voor de zware industrie, op locatie bij de klant of in onze werkplaats in Puttershoek.",
    body: "Eén aanspreekpunt voor al uw verspanende bewerkingen. Of het nu gaat om een spoedklus op een stilstaande productielijn of om nauwkeurig maatwerk voor een nieuwe installatie, wij leveren wat wij afspreken.",
    facts: [
      { value: "6", label: "Disciplines" },
      { value: "24/7", label: "Bereikbaar" },
      { value: "100%", label: "Maatwerk" },
      { value: "NL", label: "Eigen werkplaats" },
    ],
  },

  contact: {
    eyebrow: "Neem contact op",
    heading: "Bespreek uw technische uitdaging.",
    intro: "Heeft u een stilstaande machine, een reparatie of een maatwerkoplossing nodig? Neem contact op en wij reageren snel.",
    address: "Pieter van der Wallstraat 4, 3297 ES Puttershoek",
    phone: "+31 6 53 53 77 47",
    email: "info@volmertechniek.com",
    form: {
      namePlaceholder: "Naam",
      emailPlaceholder: "E-mailadres",
      phonePlaceholder: "Telefoonnummer",
      phoneOptionalLabel: "optioneel",
      messagePlaceholder: "Beschrijf uw vraag of uitdaging",
      typeLabel: "Type aanvraag",
      typeOptions: [
        { value: "on-site", label: "On-site machining" },
        { value: "werkplaats", label: "Verspaning in werkplaats" },
        { value: "reparatie", label: "Industriële reparatie" },
        { value: "maatwerk", label: "Machinebouw en maatwerk" },
        { value: "overig", label: "Overig" },
      ],
      submitLabel: "Verstuur aanvraag",
    },
  },

  footer: {
    tagline: "Verspanende techniek op locatie en in de werkplaats.",
    kvk: "KvK 90413962",
    privacy: { label: "Privacybeleid", href: "#" },
    cookie: { label: "Cookiebeleid", href: "#" },
  },
};
