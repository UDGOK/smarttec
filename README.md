# SmartTec

A high-performance marketing site for SmartTec, designed in the visual language of [greptile.com](https://greptile.com) (chunky Anybody headlines, dashed-border cards, hex-notched CTAs, slate + greptile-green palette, ruled-paper hero).

## Tech Stack

- **Framework:** Next.js 16.2.9 (App Router, Turbopack)
- **UI Library:** React 19.2.4
- **Styling:** Tailwind CSS 4 (CSS-first config in `globals.css`)
- **Animations:** Framer Motion 12.42.0
- **Language:** TypeScript 5

## Design System

| Token | Value | Use |
| --- | --- | --- |
| `background` | `#E9E9E9` | Page background |
| `fog` | `#EEEEEE` | Nav, secondary surfaces |
| `slate` | `#3D3B4F` | Body text, dark sections |
| `silver` | `#D6D6D6` | Borders |
| `greptile-green` | `#28E99F` | Primary accent, CTAs, banner |
| `seafoam` / `ice` / `lavender` / `peach` / `pink` / `sky` | accent palette | Card accent bars, badges |
| `neon` | `#DAFF01` | Solar/auxiliary chart bars |

| Font | Role |
| --- | --- |
| **Anybody** (900) | Headlines, big stat values, branding |
| **Space Mono** (400/700) | Nav, UI labels, kicker tags |
| **DM Sans** (400-700) | Body copy |
| **Nanum Pen Script** (400) | Hand-drawn annotations |

## Page Sections

1. **Announcement banner** (greptile-green) with AURA feature callout
2. **Navigation** — dashed border, hover-greentile-green effect, mega-menu on Features/Resources
3. **Hero** — Anybody headline, ruled-paper background, Sparky (battery mascot) SVG, hex CTAs
4. **Logo Cloud** — 16 data-center customers in 8×2 dashed-grid wall
5. **Deployments** — 6 customer cards in greptile's signature code-diff style
6. **How It Works** — 3-step process with metric boxes
7. **Feature Grid** — 6 capability cards with color-accent top bars
8. **AURA Engine** — Load management section with dashboard mockup (battery/load/PUE tiles, 24h forecast chart)
9. **Reliability** — Triple-redundant / Compliance / Guarantee cards
10. **Marquee CTA** — "DEPLOY · POWER · SCALE" scrolling strip + closing CTA
11. **Stats row + Case Study** — 6 key metrics + StackEdge testimonial
12. **Testimonial Wall** — 6 quote cards in 3-column grid
13. **FAQ** — Accordion with 6 common questions
14. **Closing CTA** — Final "Go grid-independent" pitch with 14d/90d/99.997% stats
15. **Footer** — 4-column link grid, social icons, status indicator

## Project Structure

```
smarttec/
├── src/
│   ├── app/
│   │   ├── globals.css       # Tailwind v4 @theme + hex button system + greptile textures
│   │   ├── layout.tsx        # Fonts (DM Sans, Space Mono, Anybody, Nanum Pen Script)
│   │   └── page.tsx          # Section composition
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Navigation.tsx       # Banner + nav + mega menus
│   │   │   ├── Hero.tsx             # Anybody headline + mascot
│   │   │   ├── LogoCloud.tsx        # 16-logo grid
│   │   │   ├── FeaturedTestimonial.tsx  # Code-diff deployment cards
│   │   │   ├── HowItWorks.tsx       # 3-step process
│   │   │   ├── FeatureGrid.tsx      # 6 capability cards
│   │   │   ├── Personalization.tsx  # AURA dashboard mockup
│   │   │   ├── IntegrationCards.tsx # Reliability pillars
│   │   │   ├── MarqueeCTA.tsx       # Scrolling strip + closing CTA
│   │   │   ├── Reliability.tsx      # Stats + case study
│   │   │   ├── TestimonialWall.tsx  # 6 quote cards
│   │   │   ├── FAQSection.tsx       # Accordion
│   │   │   └── Footer.tsx           # 4-column dark footer
│   │   └── ui/
│   │       └── Button.tsx           # Hex button variants
│   └── lib/
├── public/
│   ├── logo.svg / logo-green.svg    # SmartTec wordmark + hex spark
│   └── lizard-mobile.svg            # Sparky battery mascot
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

## Setup

```bash
npm install
npm run dev      # development at http://localhost:3000
npm run build    # production build
npm start        # serve production build
```