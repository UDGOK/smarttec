---
name: smarttec-design
description: SmartTec's visual design system for smarttec.dev and all brand artifacts (site pages, SVG infographics, PDFs, OG cards, emails). Use this skill whenever creating or editing ANY SmartTec visual surface — a new page or section, a blog infographic, a PDF export, a diagram, an animation, or brand collateral — so output matches the established system instead of inventing styles.
---

# SmartTec Design System

Aesthetic in one line: **an engineer's notebook that shipped** — ruled paper, dashed pencil
borders, monospace annotations, isometric technical drawings, one electric green accent.
Honest, technical, precise. Never glossy, never stock-photo, never gradient-SaaS.

## Tokens (from `src/app/globals.css` — the source of truth)

Colors:
- `background` #E9E9E9 (page), `fog` #EEEEEE (card fill), `slate` #3D3B4F (ink/dark surfaces)
- `greptile-green` #28E99F (THE accent — status, flows, wins, CTAs), dark-green #0aa96e (small text on light)
- `silver` #D6D6D6, `border` rgba(85,83,104,.30)
- `bloom` #FF6D6D (errors/faults ONLY — a fault flicker, a failed state; never decoration)
- Pastels (seafoam #C5FFD6, magenta #FFACFE, ice #D1E5FF, lavender #FFCFFE, peach #FFBCB3,
  pink #F783A3): rare, tiny accents (tags, illustrations). Never large surfaces.
- Neon #DAFF01: extremely rare highlight. When in doubt, use green.

Typography:
- **Anybody 800/900** — headlines. Uppercase or sentence-case, tracking-tight, leading ~0.95.
  Sizes: hero 4xl→6xl, section 3xl→4xl, card titles lg→xl.
- **Space Mono** — labels, kickers, data, captions, buttons. 9–12px, uppercase, wide tracking.
- **DM Sans** — body prose. slate at 70–80% opacity for secondary text.
- Nanum Pen Script — handwritten accents, extremely sparing.

## Signature motifs (use these; don't invent parallels)

1. **Bracketed kicker**: `[ SECTION NAME ]` in Space Mono, preceded by a 1.5–2px green
   square/dot, often followed by a dashed flex-1 rule. Opens nearly every section.
2. **Dashed borders**: `border-dashed border-slate/30..40` on cards; solid `border-2
   border-slate` for emphasis cards; green border for highlighted/winning items.
3. **Hex-notched buttons**: `btn-hex` (solid green, dark text), `btn-hex-outline`; groups in
   `.btn-hex-group` (flex-wrap is load-bearing for mobile — never remove).
4. **Ruled paper**: `bg-paper-plus-ruled` hero backgrounds; repeating hairline pattern.
5. **Win markers**: `[✓]` in mono green; concession rows get muted fog treatment — the design
   language literally encodes honesty (wins highlighted, losses shown, nothing hidden).
6. **Stat strips**: 2–4 columns, Anybody 3xl value + mono 10px uppercase label.
7. **Dark sections**: slate background, fog text, green accents — used for "how it works" and
   code/terminal surfaces (`bg-slate text-fog` with light-green code text).

## Illustration & infographic style

- **Isometric wireframe SVGs**, hand-coded: slate 2–2.5px strokes, fills white/#EEEEEE/#D6D6D6
  (three faces of a box = white front, fog top, silver side), green for energy/flow/status.
- Blog infographics: 1200×640 viewBox, #E9E9E9 field, 10px green edge bar at x=0, mono kicker
  `[ LIKE THIS ]` top-left in dark-green, Arial-bold title ~30px, source line at bottom in
  #8b8a99 mono 13px. Fonts inside SVGs: `Courier New, monospace` and `Arial` (web fonts don't
  load in <img> SVGs). Keep files 2–4 KB.
- Every diagram of unbuilt things carries an honesty caption: "SCHEMATIC, NOT A PHOTO",
  "Design targets — as-built published at power-on".

## Motion rules

- Purposeful, quiet, story-telling: power flows (stroke-dashoffset), soft LED breathing
  (opacity 0.95↔0.55), and the **30-second incident clock** — site-wide fault/failover
  animations (MeadTwin, AURA tiles) share one 30s cycle with the fault window at ~78–86%,
  so the whole site behaves like one facility having one grid event.
- Fault = single soft dip, never strobe. Badges outline, not solid blocks.
- `prefers-reduced-motion: reduce` disables everything to the healthy static state — mandatory
  on every animation.
- Logo: `animate-spark-in` power-on flicker once on load.

## Documents (PDF / OG / email)

- PDFs (jsPDF): slate header band with 3mm green edge bar, mono `SMARTTEC.DEV · CONTEXT`
  9pt, Helvetica-bold title 16pt, `[ SECTION ]` mono-gray labels, dashed hairline row rules,
  best-value rows get pale-green fill + green edge, dark code blocks in courier, footer rule +
  "hello@smarttec.dev · Estimates, not a quote — real quote in 48h."
- OG card 1200×630: slate + ruled lines, green edge bar, spark mark, Anybody headline with
  green accent word, hex-notched chips row. ~40 KB PNG.

## Voice woven into design

Copy inside components follows the honesty brand: concessions stated plainly ("Where we
don't win"), design targets labeled as targets, dates on reviewed data ("last reviewed Jul
2026"), and self-contained quotable FAQ answers. A visually perfect component with an
overclaim in it is off-brand.

## Don'ts

No gradients (except the rare radial glow), no rounded-corner pill cards (sharp or hex-notch),
no stock photography, no drop shadows heavier than subtle, no third accent color per surface,
no solid-red anything except momentary fault states, no animation without reduced-motion
fallback, no bullet-list walls where a bordered card grid fits the system.
