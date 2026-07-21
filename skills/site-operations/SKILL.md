---
name: smarttec-site-operations
description: Maintain, extend, and deploy smarttec.dev — SmartTec's battery-backed AI compute website (Next.js 16 on Vercel, repo UDGOK/smarttec). Use this skill for ANY task touching the SmartTec website, brand, or content: editing pages, writing blog posts or news items, the investor data room (/invest), the compare page, SEO/AEO/GEO work, email (Brevo/ImprovMX), mobile fixes, deployment, or claims about SmartTec, z1power, or the Mead Oklahoma data center. Trigger even for small copy changes — this site has a strict truth policy and hard-won technical gotchas that make naive edits dangerous.
---

# SmartTec Website (smarttec.dev)

Owner: Yasir Jahangir (Co-founder & COO). Company: SmartTec — battery-backed AI compute,
Phase 1 = 30× NVIDIA B200 (~110 kW IT) at an owned site in Mead, Oklahoma, power-on target Q4 2026.
Partner: z1power (founder-owned LFP battery company). Business facts live in the owner-held private fact base — request it before writing factual claims.

## Rule zero: the claims policy

Every factual claim on this site must be documentable. Claim only what is verifiable; concede
what isn't (concessions are deliberate brand strategy — see /compare); label designs as designs
("SCHEMATIC, NOT A PHOTO", "design target, validated at commissioning"); keep the site
pre-launch-honest until power-on. Pre-launch means: no operational telemetry presented as
measured, no customer names or testimonials, no certifications or partner statuses not held,
and status pages that say "in build" rather than "operational." If a requested claim can't be
verified, ask the owner to attest or verify externally before publishing.

## Stack and deployment

- Next.js 16 (app router, Turbopack) + Tailwind v4 + framer-motion. Static-generated (SSG).
- Repo: `github.com/UDGOK/smarttec` (public — never commit secrets or personal emails).
- Hosting: Vercel; **every push to `main` auto-deploys production** (~60–90 s).
- Fresh session setup: clone with a token the user provides (old tokens were revoked —
  ask for a fresh fine-grained token with repo write; remind them to revoke after).
- Build: `INVEST_PASSWORD=x npm run build` — the env var is REQUIRED or the build fails.
- Workflow: small changes may go straight to `main`; larger work on a feature branch,
  build, verify, then merge + push. Always verify the live domain after deploy
  (`curl -s https://smarttec.dev/... | grep <marker>`) — don't just trust the push.
- Rollback: Vercel → Deployments → promote previous; tag `backup-pre-invest-page` = pre-project state.

## Design system (match exactly — never invent styles)

Colors: bg `#E9E9E9` (background), fog `#EEEEEE`, slate `#3D3B4F`, green `#28E99F`
(greptile-green), dark-green `#0aa96e`, neon `#DAFF01`, silver `#D6D6D6`, bloom = error red.
Fonts: Anybody 800/900 (headlines, uppercase, tight leading), Space Mono (labels/kickers),
DM Sans (body), Nanum Pen Script (rare accents).
Motifs: dashed borders (`border-dashed`), bracketed kickers `[ LIKE THIS ]` with a small green
square/dot, hex-notched buttons (`btn-hex`, `btn-hex-outline`, `btn-hex-group`), ruled-paper
backgrounds (`bg-paper-plus-ruled`), isometric wireframe illustrations, `[✓]` markers.
Animations must respect `prefers-reduced-motion`.

## Repo map (key paths)

- `src/app/page.tsx` — homepage incl. its own local `Hero()` (~line 800) with the MeadTwin.
- `src/components/sections/MeadTwin.tsx` — animated isometric site schematic (pure SVG+CSS,
  30 s grid-fault failover cycle). Overlay only at `xl:`; inline below copy on smaller screens.
- `src/components/sections/Navigation.tsx` — nav; mobile panel: `overflow-y-auto`,
  `max-h-[calc(100dvh-108px)]` (108 = banner + nav row), body scroll-lock, safe-area padding.
- `src/lib/posts.ts` — blog content (see Content system below).
- `src/lib/news.ts` — RSS aggregator sources + `COMPANY_NEWS` (the company changelog:
  add real milestones here, dated, truthful).
- `src/app/compare/page.tsx` — honest comparison table (now 12 rows incl. power-aware orchestration;
  8+ win rows, 3 concession rows — keep both) + attributable founder quotation (GEO tactic).
- `src/app/mead/page.tsx` — the site story ("Why Mead") incl. the honest tornado section;
  placeholder awaiting real photos.
- `src/components/ModelFitCalculator.tsx` + `src/lib/models.ts` — inference fit-check:
  38 models (incl. Llama 4, Qwen3, GPT-OSS, Kimi K2, Gemma 3) with published configs;
  MLA-effective KV for DeepSeek/K2 (kv_heads 1 × head_dim 288 — do NOT "fix" back to GQA);
  MoE throughput uses `active_params_b`; H100/H200 = 495 dense BF16 (989 is the sparsity figure);
  fleet auto-config panel (deployable TP ladder 1/2/4/8/16/24/32; GPUs with unit_price_hr <= 0
  are fit-checkable but excluded from cost rankings); PDF export via
  `generateFitCheckPdf.ts` + email via `/api/email-config` (Brevo, BCC = lead capture).
- `src/app/invest/` — password-gated data room; `INVEST_PASSWORD` env in Vercel; files stream
  from `protected-files/` via allow-listed route; `src/lib/investAuth.ts` HMAC cookie.
- `src/app/api/contact/route.ts` — Brevo-backed form (env `BREVO_API_KEY`, `CONTACT_TO`;
  fails closed to a "email us directly" message).
- SEO stack: `src/app/robots.ts` (welcomes all AI + intl crawlers; blocks /invest),
  `src/app/sitemap.ts` (add new routes here), `public/llms.txt`, JSON-LD in `src/app/layout.tsx`
  (Organization + WebSite + Service, sameAs entity links), per-route `layout.tsx` files carry
  unique title/description/canonical, `public/og.png` share card, `public/<key>.txt` IndexNow key.

## Content system

Blog posts live in `src/lib/posts.ts` as objects prepended to the `posts` array.
**CRITICAL: slugs are normalized to `slugify(title)` — the explicit `slug` field is overwritten.**
Compute the slug as `title.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")` or the
page 404s. Block types: `p, h2, h3, quote{text,cite}, ul{items}, callout{title,body},
stat{items:[{value,label}]}, img{src,alt,caption}, faq{items:[{q,a}]}, sources{items:[{label,url}]}`.
House post format (GEO-research-backed): numbers-dense paragraphs, one SVG infographic in
`public/blog/` (hand-coded, house palette, cite sources in-figure), a `faq` block whose answers
are self-contained quotable paragraphs containing "SmartTec" + specific numbers, and a `sources`
block linking primary sources (arXiv/Nature/IEEE preferred). Article + FAQPage JSON-LD render
automatically from the slug page. Bylines: Syed Hussain (CEO), Yasir Jahangir (COO), or
"SmartTec Engineering" — never invented people. Paraphrase sources; quotes <15 words, one per source.

## Sandbox gotchas (each cost real debugging time)

1. **NEVER run `pkill -f node` or `pkill -f next`** — it kills the tool harness itself
   (command dies with returncode −1 and no output). Use fresh ports instead.
2. Background servers die between bash calls. Start server AND curl **in the same command**:
   `npx next start -p <fresh-port> > /tmp/log 2>&1 & sleep 10; curl ...`
3. The image viewer intermittently renders blank. Verify visuals programmatically instead:
   Playwright `getBoundingClientRect` probes + PIL pixel-color counts on screenshots.
4. JSX files contain HTML entities (`&apos;`) — python `str.replace` with a literal `'`
   silently no-ops. Grep the exact bytes first; `str_replace` tool is safer for single edits.
5. SVG-in-TSX: `transformOrigin` attribute fails typecheck — use `style={{ transformOrigin }}`.
6. Playwright text selectors match hidden desktop nav too — scope to the container
   (`pg.locator("div.overscroll-contain").locator(...)`) for mobile menu tests.
7. Mobile regression guard: `html,body{overflow-x:clip}` is intentional (a 493 px overflow once
   pushed the hamburger off-screen). Keep CTA groups `flex-wrap`. After layout changes, verify
   at 1680/1440/1280/1024/390 widths with box-overlap probes, not eyeballs.
8. Verify production by fetching `https://smarttec.dev/...` and grepping for a change marker —
   reading the live rendered page has caught claims that code-grep missed.
9. Unicode escapes: `\u2019`-style escapes are VALID inside quoted TS strings (posts.ts, news.ts)
   but render LITERALLY in raw JSX text. When python-patching JSX copy, use real characters.
10. Build/verify race: `npm run build ... && npx next start & sleep; curl` can serve the OLD
   .next while the build still runs. Verify on a fresh server in a SEPARATE command after
   "✓ Compiled" is confirmed.
11. Reviewer pattern: the owner's external reviewers are strong on UX/consistency but do not
   fact-check — twice their "praise" highlighted fabricated content (ERCOT anecdote, testimonials).
   Every reviewer suggestion still passes the truth ledger before shipping.
12. IndexNow after new content: POST api.indexnow.org with the key in `public/*.txt`
   (see facts.md) — accepted 200/202 = Bing/Yandex/Naver notified within hours.

## SEO / AEO / GEO doctrine (evidence-based; don't add snake oil)

Already implemented and to be preserved: canonicals everywhere, robots welcoming
GPTBot/ClaudeBot/PerplexityBot/Bingbot/Baiduspider/Slurp/Yandex/Yeti/Seznam/DuckDuckBot,
sitemap incl. blog, JSON-LD (no fake schema), OG card, llms.txt (note: Google ignores it; other
engines/tools read it), IndexNow key. New content ⇒ add to sitemap routes if a new route, then
ping IndexNow: POST `https://api.indexnow.org/indexnow` with `{host, key, keyLocation, urlList}`
(key in `public/*.txt`). Research basis (cite when advising the user): Aggarwal KDD 2024
(statistics/quotes/citations ≈ +25-40 % visibility), Vishwakarma 2026 (retrieval position
dominates), arXiv 2607.14035 survey (canonicalization; ~58 % of ChatGPT runs skip web search),
Matthew effect (off-domain presence is the growth frontier). Never promise rankings.

## Email infrastructure (working — don't break DNS)

Receiving: ImprovMX catch-all `*@smarttec.dev` → <owner inbox> (MX mx1/mx2.improvmx.com).
Sending: Brevo (DKIM brevo1/brevo2._domainkey CNAMEs, brevo-code TXT, `mail`/`img.mail`/`r.mail`
CNAMEs). ONE combined SPF TXT: `v=spf1 include:spf.improvmx.com include:sendinblue.com ~all`
— never create a second SPF record. Gmail "Send mail as" uses smtp-relay.brevo.com:587 with the
Brevo-generated login + SMTP key (needs Workspace "Allow per-user outbound gateways").
Contact form needs Vercel env `BREVO_API_KEY` (API key, not SMTP key) + `CONTACT_TO`.

## Standing user-side checklist (nag politely if unresolved)

Google Search Console + Bing Webmaster sitemap submission (the #1 remaining lever) ·
contact-form env vars if form still shows fallback · revoke any GitHub token after use ·
real Mead site photos (→ build a /site page, replaces schematic-only credibility) ·
z1power.com → smarttec.dev backlink, Crunchbase/LinkedIn profiles with identical descriptions ·
securities counsel review before investor docs go to strangers · engineering validation of the
z1power-based BESS design before tenant SLAs · post-power-on: publish measured PUE/failover
telemetry (primary-source content, the strongest GEO asset available).
