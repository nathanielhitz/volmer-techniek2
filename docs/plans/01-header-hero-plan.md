Ik heb beide prototypes volledig gelezen. Hier is het FASE 1 plan voor Header + Hero:

1. Header voorstel
Desktop (≥ 1024px)

┌────────────────────────────────────────────────────────────────────┐
│  ◆ VOLMER TECHNIEK    Diensten  Werkwijze  Over ons  Contact   ■ Bel direct  │
└────────────────────────────────────────────────────────────────────┘
     ← logo links      ← nav gecentreerd/rechts van logo →     CTA rechts
Logo: Diamond SVG (inline, Molten) + "VOLMER TECHNIEK" in Space Grotesk 500, 17px. Geen sub-label op desktop — cleaner dan het prototype.
Nav items: font-sans (Inter), 14px, weight 500, Ash op 0.78 opacity → 1.0 op hover met 1px Molten underline-animatie. Geen mono voor nav items — mono is voor metadata en codes, niet voor navigatie. Swiss print-conventie: grotesque sans voor navigatie.
CTA: ■ (5×5px filled square, Molten) + "BEL DIRECT" in font-mono, 12px, 0.12em tracking, uppercase. Border 1px rule-strong, hover → border Molten, tekst Molten. Hoogte 44px.
Hoogte: 72px standaard, 56px zodra gescrolled.
Mobile (< 1024px)

┌─────────────────────────────────────────┐
│  ◆ VOLMER TECHNIEK          [≡ / ×]    │
└─────────────────────────────────────────┘
Patroon: slide-in panel vanuit rechts — voorkeur boven een dropdown, omdat het meer schermruimte geeft voor grote touch-targets en beter aanvoelt bij een industrieel merk.

Slide-in panel:


┌───────────────────────────────┐
│  ◆ VOLMER TECHNIEK     [×]   │
├───────────────────────────────┤
│                               │
│  Diensten                     │  ← H2-grootte (28px), sans, 500
│  ─────                        │     onderstreepte animatie op hover
│  Werkwijze                    │
│                               │
│  Over ons                     │
│                               │
│  Contact                      │
│                               │
├───────────────────────────────┤
│  ■ +31 6 53 53 77 47         │  ← Molten border, volledige breedte, 48px hoog
└───────────────────────────────┘
Panel: Carbon achtergrond, 100% hoogte, 85% breedte op mobile (max 360px)
Backdrop overlay: semi-transparent Obsidian, click outside → sluit panel
Escape-toets → sluit panel
Hamburger 44×44px touch-target, X bij open
Focus trap in open panel (WCAG)
Sticky gedrag
Niet gescrolled (boven hero): background: linear-gradient(180deg, rgba(10,10,11,0.90) 0%, transparent 100%) + backdrop-filter: blur(8px). Geen border. Zodat hero-beeld erdoorheen schemert.
Gescrolled > 48px: background: rgba(20,20,22,0.95) (Carbon 95%) + backdrop-filter: blur(12px) + border-bottom: 1px solid var(--color-graphite). Naadloze CSS transition op alle properties.
Altijd zichtbaar — geen hide-on-scroll-down. Te complex voor nu, en het basisontwerp heeft genoeg ruimte.
Implementatie: client vs server
Header wordt een client component ('use client') omdat het twee interactieve states nodig heeft:

isScrolled — voor de achtergrond-overgang (via useEffect + scroll listener)
mobileOpen — voor het slide-in panel
2. Hero voorstel
Referentie is homepage.html Hero. Ik neem de patronen en compositie over, aangepast aan de opdracht-headline en min-h-[100dvh].

Desktop layout (7/11 + 4/11 split)

[hero-eyebrow — absoluut, links boven nav]
— PUTTERSHOEK, NL · VERSPANENDE TECHNIEK

[hero-stage: Ken Burns animated gradient, Molten glow rechts]
[floor gradient: 55% hoogte, Obsidian at bottom]

                              7fr          |    4fr
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 Verspanende techniek         |  Nauwkeurig verspanen,
 op locatie en in             |  herstellen en aanpassen.
 [Steel-30:] de werkplaats.   |  Wij beperken stilstand —
                              |  op locatie of in onze
                              |  werkplaats in Puttershoek.
                              |
                              |  [SERVICE AANVRAGEN →    ]
                              |
                              |  ── Bekijk diensten
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
H1: Space Grotesk, clamp(54px, 8.6vw, 120px), weight 500, line-height 0.96, tracking -0.035em. Eerste deel Ash, tweede (de werkplaats.) in Steel-30 weight 400 — exacte prototype-patroon.

Side (4fr): Bottom-aligned (grid align-items: end):

Lede: Inter, 17px, Steel-30, max 360px breed
CTA primary: SERVICE AANVRAGEN → — border 1px Ash, hover → Ash fill + Obsidian tekst, pijl schuift 6px rechts
CTA ghost: 28px Molten lijn + BEKIJK DIENSTEN in mono uppercase — lijn groeit naar 44px op hover
Hero eyebrow (absoluut gepositioneerd, toplinks, onder nav op ±120px van top):


— PUTTERSHOEK, NL · VERSPANENDE TECHNIEK
Mono, 11px, Steel-30, 0.2em tracking, Molten dash via ::before of sibling element.

Ken Burns: CSS animation scale(1.06) → scale(1.12) over 32s, op de gradient-laag. prefers-reduced-motion → animation: none.

Mobile stack (< 768px)
Header-nav: sticky bovenaan
Hero wordt single-column, content top-aligned (niet bottom-aligned)
h1: clamp(40px, 10vw, 56px), zelfde weight/tracking
Lede: max-w geen beperking (volledige kolombreedte)
CTA primary: 100% breedte
Ghost CTA: normaal inline
Hero eyebrow: verborgen op 375px (te smal), zichtbaar vanaf 640px
Certificeringsbalk (onder hero)

■  VCA GECERTIFICEERD  ■  ISO 9001  ■  LID KONINKLIJKE METAALUNIE  ■  24/7 EMERGENCY
Gescheiden van hero door border-top: 1px solid var(--color-graphite)
Carbon achtergrond, padding: 22px 0
Items: ::before → 5×5px Steel-60 filled square (of inline SVG), mono 11px, Steel-30, 0.18em tracking, uppercase
Flex row, justify-between, flex-wrap, gap: 24px — wraps op narrow viewports
3. Bestanden
Aanmaken:

components/sections/Header.tsx — client component (scroll + mobile state)
components/sections/Hero.tsx — server component (geen interactie nodig)
components/ui/Eyebrow.tsx — herbruikbaar: Molten-streep + mono uppercase tekst
components/ui/ChapterLabel.tsx — herbruikbaar: "01 — NAAM" patroon
Aanpassen:

app/page.tsx — Header + Hero importeren en renderen
Geen extra subcomponent-bestanden — het slide-in panel zit als geïsoleerde JSX in Header.tsx zelf (niet groot genoeg om te splitsen).

4. Herbruikbare components
Eyebrow — wordt gebruikt in Hero, secties, pull-quotes:


<Eyebrow>— PUTTERSHOEK, NL · VERSPANENDE TECHNIEK</Eyebrow>
// rendert: [molten-line] PUTTERSHOEK, NL · VERSPANENDE TECHNIEK
ChapterLabel — wordt gebruikt bij elke sectie:


<ChapterLabel number="01" name="DIENSTEN" />
// rendert: — 01 / DIENSTEN  (mono, Molten)
Beide zijn pure server components, geen props anders dan children / number + name.

5. Responsive plan
Breakpoint	Header	Hero	Strip
375px	Logo + hamburger, 64px hoog	1 kolom, h1 clamp begint op 40px, eyebrow verborgen, CTA full-width	2×2 wrap
640px	Logo + hamburger	1 kolom, eyebrow zichtbaar, h1 schaalt	Alle items op 1 rij
1024px	Volledige desktop nav, 72px	7/11 + 4/11 grid, eyebrow absoluut, bottom-aligned side	Alle items op 1 rij, justify-between
1440px	Zelfde als 1024px	h1 bereikt clamp-maximum (120px)	Idem
Tailwind-strategie:

<1024px = hamburger: lg:hidden op hamburger-knop, hidden lg:flex op nav-links
Hero grid: grid-cols-1 lg:grid-cols-[7fr_4fr]
Hero align: items-start lg:items-end
Eyebrow: hidden sm:flex
CTA primary: w-full lg:w-auto
Wacht op jouw "akkoord, ga door" voordat ik ook maar één regel code schrijf.