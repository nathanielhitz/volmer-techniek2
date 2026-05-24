<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know
This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Volmer Techniek — Website Project

## Over dit project

Bedrijfswebsite voor Volmer Techniek B.V., een technisch metaalbewerkingsbedrijf in Puttershoek. Specialisatie: verspanende techniek, on-site machining, industriële reparaties, machinebouw.

Doelgroep: technische managers, productieleiders, onderhoudsverantwoordelijken bij industriële klanten en machinebouwers.

Gevoel: precisie, staal, vakmanschap, betrouwbaarheid, no-nonsense.

---

## Verplichte leesvolgorde bij elke nieuwe sessie

Lees deze bestanden VOLLEDIG voor je code schrijft of voorstellen doet:

1. Next.js 16 docs in `node_modules/next/dist/docs/` (relevant onderdeel)
2. `/.agents/skills/industrial-brutalist-ui/SKILL.md` — primaire design stijl
3. `/.agents/skills/design-taste-frontend/SKILL.md` — technische engineering regels
4. `/.agents/skills/full-output-enforcement/SKILL.md` — output-volledigheid
5. `/docs/brandbook.md` — visuele identiteit Volmer Techniek
6. `/docs/prototype/homepage.html` — referentie-implementatie homepage
7. `/docs/prototype/design-preview.html` — design preview
8. Dit AGENTS.md bestand

Als één van deze bestanden ontbreekt: meld het en vraag voor je verder werkt.

---

## Stack (geverifieerd)

- **Framework:** Next.js 16.2.6 met App Router (BREAKING CHANGES t.o.v. v14/15 — check docs!)
- **React:** 19.2.4
- **Taal:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 (config via `@theme` in CSS, niet via tailwind.config.js)
- **PostCSS:** `@tailwindcss/postcss`
- **Fonts:** via `next/font` (geen externe @import)
- **Deployment:** Vercel
- **Package manager:** npm
- **Folder structuur:** `app/` in root (geen `src/`)

Voeg geen libraries toe zonder eerst `package.json` te checken en het install-commando voor te stellen.

---

## Skill overrides en conflict-volgorde

De `design-taste-frontend` skill heeft een baseline van DESIGN_VARIANCE: 8. Voor dit project gelden afwijkende waarden, conform Volmer Techniek's no-nonsense karakter:

- **DESIGN_VARIANCE: 6** (overzichtelijk, niet chaotisch)
- **MOTION_INTENSITY: 4** (subtiel)
- **VISUAL_DENSITY: 4** (informatie-rijk, niet overladen)

Bij conflict tussen skills/documenten geldt deze prioriteit (hoog naar laag):

1. Next.js 16 official docs (technical truth)
2. `/docs/brandbook.md` — bedrijfsspecifieke design regels
3. `industrial-brutalist-ui` — primaire stijl
4. `design-taste-frontend` — engineering regels
5. Dit AGENTS.md

---

## Design-archetype: Swiss Industrial met tactical detailing

Dit project gebruikt het **"Swiss Industrial Print"** archetype uit `industrial-brutalist-ui` als FUNDAMENTELE STIJL. Dat bepaalt:

- Layout (rigide modulaire grids, asymmetrisch, oversized typografie)
- Achtergrond (off-white / charcoal substraat, hoog contrast — uiteindelijke keuze conform brandbook)
- Hoofdtypografie (heavy neo-grotesque sans-serif)
- Negative space (asymmetrisch, met grote getallen/letters)
- Accentkleur (uit brandbook)

**Tactical Telemetry elementen mogen UITSLUITEND gebruikt worden als decoratieve technische detailing**, niet als layout-systeem. Dit is GEEN mix van twee modes — Swiss is het systeem, tactical zijn de accenten.

### Toegestaan als tactical accent (de "20%")
- Monospace font voor cijfers, codes, coördinaten, serienummers
- Crosshairs of dunne kruislijnen bij key visuals
- ASCII-achtige brackets `[ ]` `< >` rond technische labels
- Dunne meetlijnen met waarden (Ø 120, ±0.02mm, 45°)
- Materiaalcodes en bewerkingstypen in monospace
- Status-indicatoren met monospace metadata

### NIET toegestaan
- Dark mode als basis (tenzij brandbook dit voorschrijft)
- Scanlines, CRT-glow, phosphor-effecten
- Dithering of bitmap-degradatie als hoofdstijl
- Data-tabellen als layout-systeem
- Monospace voor body copy of headings (alleen voor cijfers/codes)

Bij twijfel: kies altijd voor het Swiss Industrial principe en laat het tactical element weg.

---

## Harde technische eisen

### Responsive (non-negotiable)
- Mobile responsive vanaf **375px** (iPhone SE breedte)
- Test breakpoints: **375px, 768px, 1024px, 1440px**
- Geen `h-screen` → gebruik `min-h-[100dvh]`
- Geen horizontale scroll op mobile
- Touch-targets minimaal 44x44px op interactieve elementen

### Design consistency
- Alle kleuren via Tailwind v4 `@theme` config (uit brandbook), geen losse hex-waarden in components
- Alle spacing via Tailwind scale
- Alle typografie via gedefinieerde scale uit brandbook
- Geen design-improvisatie zonder expliciet akkoord

### Code quality
- TypeScript strict mode aan
- Geen `any` types zonder reden
- Componenten klein en single-purpose
- Server components by default, `'use client'` alleen waar nodig
- Geen inline styles tenzij dynamisch noodzakelijk
- Semantische HTML (correcte heading-hiërarchie, één `<h1>` per pagina)
- Alt-teksten op alle visuele content
- Focus states zichtbaar op alle interactieve elementen
- WCAG AA contrast minimum

### Performance
- `next/image` voor alle afbeeldingen
- Lazy-load wat onder de fold staat
- Geen client components voor statische content
- Fonts via `next/font` met `display: swap`

---

## Werkwijze (verplicht)

### Fase-aanpak
Werk **altijd** in twee fases:

**FASE 1 — Plan**
- Inspecteer relevante bestanden
- Leg voorstel uit (welke componenten, welke aanpak)
- Geef aan welke breakpoints je test
- Wacht op akkoord

**FASE 2 — Implementatie**
- Pas starten na akkoord
- Lever sectie/component op + beschrijving mobile gedrag
- Noem eventuele afwijkingen van brandbook met reden

### Per-sectie bouwen
- Bouw niet de hele site in één keer
- Eerst foundation (Tailwind v4 @theme, typografie, layout primitives)
- Daarna één sectie tegelijk
- Test elke sectie op alle breakpoints voor je verder gaat

### Bij twijfel
- Liever vragen dan invullen
- Geen content verzinnen (klantnamen, certificaten, jaartallen)
- Markeer ontbrekende info met `{{TODO: ...}}`

---

## Folder structuur

```
/app                — Next.js App Router pages
/components         — gedeelde componenten
  /ui               — primitives (Button, Container, etc.)
  /sections         — page sections (Hero, Services, etc.)
/lib                — utilities
/.agents/skills     — geïnstalleerde skills
/docs
  brandbook.md      — visuele identiteit
  /prototype        — referentie implementatie
    homepage.html
    design-preview.html
/public             — statische assets
AGENTS.md           — dit bestand
CLAUDE.md           — verwijst naar AGENTS.md
```

---

## Content & tone of voice

### Taal
Nederlands. Zakelijk, concreet, technisch geloofwaardig.

### Vermijden
- Marketingclichés ("next-gen", "naadloos", "revolutionair", "innovatief")
- Emoji's (banned per skills)
- Vage beloftes zonder technische context
- Lorem ipsum of placeholder-tekst
- Stockfoto's met "happy people in office"

### Toegestaan / aanmoedigen
Technische detailing als visueel én tekstueel element:
- Maatvoering en toleranties (±0.02mm)
- Materiaalcodes (S355, C45)
- Bewerkingstypen (draaien, frezen, kotteren, lassen)
- Serienummers, coördinaten, meetlijnen
- Subtiele gridlijnen, technische labels in monospace

### Voorbeeld tone
> "Wanneer een machine niet naar de werkplaats kan, brengen wij de bewerking naar de machine."

> "Nauwkeurig verspanen, herstellen en aanpassen zonder onnodige demontage."

> "Gericht op minimale stilstand en een betrouwbare oplevering."

---

## Bedrijfsgegevens

- **Naam:** Volmer Techniek B.V.
- **E-mail:** info@volmertechniek.com
- **Telefoon:** +31 6 53 53 77 47
- **Adres:** Pieter van der Wallstraat 4, 3297 ES Puttershoek
- **KvK:** 90413962

---

## Diensten (canoniek)

1. On-site machining
2. Verspaning in eigen werkplaats
3. Industriële reparaties
4. Machinebouw en maatwerk
5. Retrofit en modernisering
6. Preventief onderhoud

---

## Acceptatie-checklist per oplevering

Voor elke component/sectie controleer je:
- [ ] Werkt correct op 375px, 768px, 1024px, 1440px
- [ ] Geen console errors of warnings
- [ ] Geen broken imports
- [ ] Geen `h-screen`, wel `min-h-[100dvh]` waar nodig
- [ ] Geen losse hex-kleuren of arbitraire spacing
- [ ] Heading-hiërarchie correct
- [ ] Alt-teksten aanwezig
- [ ] Focus states zichtbaar
- [ ] Geen placeholder-tekst meer
- [ ] Geen emoji's
- [ ] Match prototype design (Swiss Industrial + tactical accenten)
- [ ] Tactical elementen alleen als accent, niet als layout-systeem

---

## Wat ik niet wil zien

- Bestaande responsive setup breken om design "mooier" te maken
- Nieuwe dependencies zonder afstemming
- Refactor van bestaande code zonder vraag
- Bouwen voor akkoord op plan
- "Ik heb ook even X aangepast" zonder dat te benoemen
- Generieke AI-look (gradients, neon, glow)
- Standaard SaaS-layouts (3 kaarten op een rij, etc.)
- Volledige Tactical Telemetry mode (dark + scanlines) als hoofdstijl
- Monospace font voor body copy of headings
- Next.js syntax uit oudere versies (v14/v15) — alleen v16 syntax