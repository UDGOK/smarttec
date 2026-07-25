import Link from "next/link";
import PageShell from "@/components/PageShell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Mead, Oklahoma Site — 30 Acres, 3 Buildings, 3 MVA | SmartTec",
  alternates: { canonical: "/site" },
  description:
    "SmartTec's owned data center site in Mead, Oklahoma on US-70: 30 acres, three 3,000 sqft buildings, a 3 MVA on-site transformer, and 100G fiber under a signed 60-month quote. Real photographs or empty frames — no renders, no stock.",
};

/* ── Isometric wireframe placeholder art — house motifs, static, no animation ── */
function Wire({ kind }: { kind: string }) {
  const S = "#3D3B4F";
  const G = "#28E99F";
  const common = { fill: "none", stroke: S, strokeWidth: 1.4, strokeOpacity: 0.45 } as const;
  const art: Record<string, React.ReactNode> = {
    transformer: (
      <g>
        <path {...common} d="M60 78 L110 53 L160 78 L110 103 Z" />
        <path {...common} d="M60 78 L60 118 L110 143 L110 103" />
        <path {...common} d="M160 78 L160 118 L110 143" />
        <path {...common} strokeDasharray="3 4" d="M72 84 L72 116 M84 90 L84 122 M96 96 L96 128" />
        <path {...common} d="M118 60 L118 46 M132 67 L132 53 M146 74 L146 60" />
        <circle cx="118" cy="43" r="3" {...common} />
        <circle cx="132" cy="50" r="3" {...common} />
        <circle cx="146" cy="57" r="3" fill={G} stroke="none" />
        <text x="110" y="160" textAnchor="middle" fontFamily="monospace" fontSize="8.5" fill={S} fillOpacity="0.55">3 MVA · 208V 3Φ</text>
      </g>
    ),
    land: (
      <g>
        <path {...common} strokeDasharray="5 5" d="M30 100 L110 60 L190 100 L110 140 Z" />
        <path {...common} d="M18 118 L202 118" strokeDasharray="2 6" />
        <path {...common} d="M62 100 L110 76 L158 100 L110 124 Z" />
        <circle cx="110" cy="60" r="3" fill={G} stroke="none" />
        <text x="110" y="158" textAnchor="middle" fontFamily="monospace" fontSize="8.5" fill={S} fillOpacity="0.55">30 ACRES · US-70</text>
      </g>
    ),
    warehouse: (
      <g>
        <path {...common} d="M55 85 L110 58 L165 85 L165 120 L110 147 L55 120 Z" />
        <path {...common} d="M110 58 L110 93 M55 85 L110 112 L165 85 M110 112 L110 147" />
        <path {...common} d="M78 112 L78 130 L96 139 L96 121 Z" />
        <circle cx="110" cy="58" r="3" fill={G} stroke="none" />
        <text x="110" y="163" textAnchor="middle" fontFamily="monospace" fontSize="8.5" fill={S} fillOpacity="0.55">3,000 SQFT</text>
      </g>
    ),
    interior: (
      <g>
        <path {...common} d="M50 65 L170 65 L190 145 L30 145 Z" />
        <path {...common} d="M50 65 L30 145 M170 65 L190 145" />
        <path {...common} strokeDasharray="3 4" d="M70 65 L58 145 M110 65 L110 145 M150 65 L162 145" />
        <path {...common} d="M42 92 L178 92 M36 118 L184 118" strokeDasharray="3 4" />
        <circle cx="110" cy="105" r="3" fill={G} stroke="none" />
        <text x="110" y="160" textAnchor="middle" fontFamily="monospace" fontSize="8.5" fill={S} fillOpacity="0.55">PRE-RETROFIT HALL</text>
      </g>
    ),
    shells: (
      <g>
        <path {...common} d="M40 92 L82 71 L124 92 L124 118 L82 139 L40 118 Z" />
        <path {...common} d="M82 71 L82 97 M40 92 L82 113 L124 92 M82 113 L82 139" />
        <path {...common} d="M112 78 L148 60 L184 78 L184 104 L148 122 L112 104" strokeDasharray="4 4" />
        <circle cx="148" cy="60" r="3" fill={G} stroke="none" />
        <text x="112" y="158" textAnchor="middle" fontFamily="monospace" fontSize="8.5" fill={S} fillOpacity="0.55">BUILDINGS 2 &amp; 3</text>
      </g>
    ),
    fiber: (
      <g>
        <path {...common} strokeDasharray="6 4" d="M25 120 C 70 120 70 80 110 80 C 150 80 150 110 195 110" />
        <circle cx="25" cy="120" r="4" {...common} />
        <circle cx="110" cy="80" r="4" {...common} />
        <circle cx="195" cy="110" r="4" fill={G} stroke="none" />
        <path {...common} d="M18 138 L202 138" />
        <text x="110" y="158" textAnchor="middle" fontFamily="monospace" fontSize="8.5" fill={S} fillOpacity="0.55">100G · DOBSON · SIGNED</text>
      </g>
    ),
    battery: (
      <g>
        <path {...common} d="M70 60 L150 60 L150 140 L70 140 Z" />
        <path {...common} d="M78 72 L142 72 L142 88 L78 88 Z M78 96 L142 96 L142 112 L78 112 Z M78 120 L142 120 L142 136 L78 136 Z" />
        <path d="M106 76 L100 84 L108 84 L102 92" stroke={G} strokeWidth="2" fill="none" />
        <circle cx="150" cy="60" r="3" fill={G} stroke="none" />
        <text x="110" y="158" textAnchor="middle" fontFamily="monospace" fontSize="8.5" fill={S} fillOpacity="0.55">z1POWER LFP · AT COST</text>
      </g>
    ),
    meter: (
      <g>
        <path {...common} d="M60 140 L60 70 M60 70 L160 70" />
        <circle cx="120" cy="105" r="26" {...common} />
        <path {...common} d="M120 105 L134 91" />
        <path {...common} strokeDasharray="3 4" d="M120 131 L120 148 M146 105 L200 105" />
        <circle cx="160" cy="70" r="3" fill={G} stroke="none" />
        <text x="120" y="163" textAnchor="middle" fontFamily="monospace" fontSize="8.5" fill={S} fillOpacity="0.55">BEHIND THE METER</text>
      </g>
    ),
  };
  return (
    <svg viewBox="0 0 220 170" className="w-full h-full" aria-hidden="true">
      {art[kind]}
    </svg>
  );
}

const frames = [
  { kind: "transformer", t: "The transformer", spec: "3 MVA · 208V three-phase · owned", shot: "Nameplate legible. The single photo that retires the most diligence questions." },
  { kind: "land", t: "The land", spec: "30 acres on US-70 · owned outright", shot: "Wide from the highway — the whole parcel, all three buildings in frame." },
  { kind: "warehouse", t: "Building 1 — exterior", spec: "3,000 sqft · Phase 1A hall", shot: "The building the first 64 B200s live in." },
  { kind: "interior", t: "Building 1 — interior", spec: "Pre-retrofit, as it stands", shot: "The honest before. The retrofit story starts from this frame." },
  { kind: "shells", t: "Buildings 2 & 3", spec: "Phase 2/3 shells, already built", shot: "Expansion that needs no construction permit to exist." },
  { kind: "fiber", t: "The fiber path", spec: "100 Gbps symmetrical DIA · signed 60-month quote", shot: "Dobson entry and the US-70 route in." },
  { kind: "battery", t: "z1power LFP", spec: "Battery storage at manufacturer cost", shot: "Cabinets staged for behind-the-meter install — from the company we own." },
  { kind: "meter", t: "Point of connection", spec: "Behind-the-meter · no interconnection queue", shot: "Where grid power meets owned infrastructure — the whole thesis in one photo." },
];

const faq = [
  { q: "Where is the SmartTec data center site?", a: "In Mead, Oklahoma, on US-70 in Bryan County — 30 acres owned outright by SmartTec, with three existing 3,000 sqft buildings and a 3 MVA on-site transformer at 208V three-phase. Oklahoma commercial power runs at roughly $0.08/kWh, and connectivity is 100 Gbps symmetrical dedicated fiber from Dobson under a signed 60-month quote at $8,075/month with installation waived." },
  { q: "What exists at the Mead site today?", a: "The land, the three buildings, the transformer, and the fiber contract exist now and are owned — that is what removes the interconnection queue and the landlord from SmartTec's cost structure. The compute does not exist yet: Phase 1A (8× HGX B200 — 64 GPUs, 60 rentable, ~114 kW IT load) targets power-on in Q4 2026. SmartTec is pre-launch and says so on every page." },
  { q: "Why does this page show placeholders instead of photos?", a: "Because SmartTec publishes real photographs or nothing. Most pre-launch infrastructure companies fill this gap with 3D renders and stock imagery; SmartTec's truth policy does not allow imagery that could be mistaken for the real site. Each frame on this page is reserved for a specific photograph of the actual Mead property and states exactly what that photo will show when it is published." },
  { q: "Can I visit the Mead site?", a: "Design partners and committed customers can arrange a site visit as part of a scoping conversation — the transformer nameplate, the buildings, and the acreage are checkable in an afternoon. Start with a scope call via the contact page." },
];

export default function SitePage() {
  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Place",
            name: "SmartTec Mead Data Center Site",
            description: "30-acre owned data center site with three buildings and a 3 MVA on-site transformer, on US-70 in Mead, Oklahoma. Phase 1A battery-backed NVIDIA B200 deployment targets power-on Q4 2026.",
            address: { "@type": "PostalAddress", addressLocality: "Mead", addressRegion: "OK", addressCountry: "US" },
            containedInPlace: { "@type": "AdministrativeArea", name: "Bryan County, Oklahoma" },
          },
          {
            "@type": "FAQPage",
            mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
          },
        ],
      }) }} />

      <div className="bg-background">
        {/* Hero */}
        <section className="relative bg-paper-plus-ruled">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 pt-32 md:pt-40 pb-12">
            <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
              <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
              [ THE SITE · MEAD, OKLAHOMA · US-70 ]
            </span>
            <h1 className="text-4xl md:text-6xl font-anybody font-extrabold text-slate tracking-tight leading-[0.95] max-w-4xl">
              30 acres.<br />Three buildings.<br />One transformer.
            </h1>
            <p className="text-lg md:text-xl text-slate/70 mt-6 max-w-2xl">
              Everything on this page exists and is owned — the land, the buildings, the 3 MVA
              transformer, the signed fiber. What doesn&apos;t exist yet is the photography, and we
              would rather show you an empty frame than a render.
            </p>
          </div>
        </section>

        {/* Policy strip */}
        <section className="border-y border-dashed border-silver bg-fog/40">
          <div className="mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-8">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              <span className="font-space-mono text-xs uppercase tracking-widest text-slate font-bold">
                [ NO RENDERS · NO STOCK · REAL PHOTOS OR EMPTY FRAMES ]
              </span>
              <p className="text-sm text-slate/70 max-w-xl">
                Pre-launch infrastructure sites are usually wallpapered with 3D renders. Ours isn&apos;t.
                Every frame below is reserved for a photograph of the actual property, and says exactly
                what it will show.
              </p>
            </div>
          </div>
        </section>

        {/* Placeholder frames */}
        <section className="mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 bg-greptile-green" />
            <span className="font-space-mono text-xs uppercase tracking-widest text-slate/60">[ THE SHOT LIST · 8 FRAMES ]</span>
            <span className="flex-1 border-t border-dashed border-slate/20" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {frames.map((f, i) => (
              <figure key={f.kind} className="group border border-dashed border-slate/40 bg-white/50 flex flex-col">
                <div className="relative aspect-[4/3] bg-fog border-b border-dashed border-slate/30 overflow-hidden">
                  <div className="absolute inset-0 bg-paper-plus-ruled opacity-40" />
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <Wire kind={f.kind} />
                  </div>
                  <span className="absolute top-2.5 left-2.5 font-space-mono text-[9px] uppercase tracking-widest bg-neon text-slate px-1.5 py-0.5">
                    Photo pending
                  </span>
                  <span className="absolute bottom-2.5 right-2.5 font-space-mono text-[10px] text-slate/40 font-bold">
                    {String(i + 1).padStart(2, "0")} / 08
                  </span>
                </div>
                <figcaption className="p-4 flex-1 flex flex-col">
                  <div className="font-anybody font-extrabold text-slate leading-snug">{f.t}</div>
                  <div className="font-space-mono text-[10px] uppercase tracking-wider text-greptile-green mt-1">{f.spec}</div>
                  <p className="text-xs text-slate/65 leading-relaxed mt-2">{f.shot}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="font-space-mono text-[11px] text-slate/50 mt-5">
            Frames fill with real photography as it is taken — no filters, no renders, states and dates
            labeled. Until then, the{" "}
            <Link href="/" className="underline decoration-greptile-green underline-offset-4">animated digital twin</Link>{" "}
            on the homepage remains the honest visualization: a schematic, and labeled as one.
          </p>
        </section>

        {/* What a photo can verify */}
        <section className="border-y border-dashed border-silver bg-fog/40">
          <div className="mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { v: "Owned", l: "Land, buildings and transformer held outright — title, not lease" },
                { v: "3 MVA", l: "On-site transformer · Phase 1A draws about 4% of it" },
                { v: "~$0.08", l: "Oklahoma commercial power per kWh — the cost stack's anchor" },
                { v: "100G", l: "Dobson symmetrical DIA · signed 60-month quote, install waived" },
              ].map((s) => (
                <div key={s.v} className="border-l-2 border-greptile-green pl-4">
                  <div className="font-anybody font-extrabold text-3xl md:text-4xl text-slate leading-none">{s.v}</div>
                  <p className="text-sm text-slate/70 mt-2 leading-relaxed">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pull quote + FAQ + CTA */}
        <section className="mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-14">
          <blockquote className="border-l-4 border-greptile-green pl-6 py-2 max-w-3xl mb-12">
            <p className="text-xl md:text-2xl font-anybody font-bold text-slate italic leading-snug">
              &ldquo;Everything we claim about this site can be checked in an afternoon with a camera.
              That&apos;s the point of owning it.&rdquo;
            </p>
            <cite className="block mt-3 font-space-mono text-xs uppercase tracking-wider text-slate/60 not-italic">
              — Yasir Jahangir, Co-founder &amp; COO, SmartTec
            </cite>
          </blockquote>

          <div className="flex items-center gap-3 mb-5">
            <span className="w-2 h-2 bg-greptile-green" />
            <span className="font-space-mono text-xs uppercase tracking-widest text-slate/60">[ FAQ ]</span>
            <span className="flex-1 border-t border-dashed border-slate/20" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faq.map((f) => (
              <div key={f.q} className="border border-dashed border-slate/40 bg-fog/40 p-5">
                <div className="font-anybody font-bold text-lg text-slate mb-2">{f.q}</div>
                <p className="text-sm text-slate/75 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-hex btn-hex-md !border-greptile-green !bg-greptile-green !text-black">
              Arrange a site conversation
            </Link>
            <Link href="/mead" className="btn-hex-outline btn-hex-md !border-slate !bg-slate !text-slate">
              Why Mead, OK
            </Link>
            <Link href="/power" className="btn-hex-outline btn-hex-md !border-slate !bg-slate !text-slate">
              The power story
            </Link>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
