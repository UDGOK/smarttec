import Link from "next/link";
import PageShell from "@/components/PageShell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Mead, Oklahoma? | The SmartTec Site Story",
  description:
    "30 owned acres on US-70, a 3 MVA transformer, ~$0.08/kWh power, and a signed 100 Gbps fiber quote — why SmartTec's battery-backed AI data center is in Mead, Oklahoma, told honestly (tornadoes included).",
  alternates: { canonical: "/mead" },
};

const assets = [
  { k: "01", t: "30 acres, owned outright", d: "Land and three 3,000 sqft buildings on US-70 — no lease, no landlord, no rent escalation clause deciding our margins. Buildings 2 and 3 are the expansion path, already standing." },
  { k: "02", t: "A 3 MVA transformer, already on site", d: "The single hardest thing to get in American AI infrastructure — grid capacity — is the thing this site started with. Phase 1 draws under 4% of it. No interconnection queue, in an industry averaging 4–7 year waits." },
  { k: "03", t: "~$0.08/kWh Oklahoma power", d: "Among the cheapest commercial power in the country. Every PUE point and every GPU-hour price on this site is downstream of this number — cheap electrons make honest pricing possible." },
  { k: "04", t: "100 Gbps symmetrical fiber, signed quote", d: "Dedicated internet access under carrier quote with a ~90-day build. Symmetrical matters: tenants pull checkpoints out as fast as they push training data in." },
];

const faq = [
  { q: "Why did SmartTec build in Mead, Oklahoma instead of a major data center market?", a: "Because the site came with the three things that gate AI infrastructure everywhere else: owned land (30 acres with buildings), grid capacity (a 3 MVA on-site transformer with no interconnection queue), and cheap power (~$0.08/kWh Oklahoma commercial rates). Major markets offer ecosystem density; Mead offers ownership economics — and for a 110 kW battery-backed Phase 1, ownership wins." },
  { q: "Isn't Oklahoma risky for a data center because of tornadoes?", a: "Oklahoma is tornado country, and SmartTec says so plainly rather than claiming low disaster risk. Severe weather is precisely why the site is battery-backed: storms cause grid events, and the z1power-based LFP storage with sub-10ms failover is designed so tenants never see them. Grid instability is the design basis of the facility, not an exception to it." },
  { q: "What power does the Mead site have?", a: "A 3 MVA transformer at 208V three-phase, owned and on-site. Phase 1 (30× NVIDIA B200, ~110 kW IT load) uses under 4% of that capacity, leaving roughly 20× headroom for expansion across Buildings 2 and 3 plus planned on-site solar (~500 kW) — all without a utility upgrade or interconnection application." },
  { q: "How good is connectivity in Mead, Oklahoma?", a: "The site holds a signed carrier quote for 100 Gbps symmetrical dedicated internet access with an approximately 90-day build. Mead sits on US-70 in southern Oklahoma, roughly between the Dallas–Fort Worth and Oklahoma City metros — close enough for regional latency, far enough for rural land and power economics." },
];

export default function MeadPage() {
  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }) }} />
      <div className="bg-background">
        <section className="relative bg-paper-plus-ruled">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 pt-32 md:pt-40 pb-12">
            <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
              <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
              [ THE SITE STORY · MEAD, OK · US-70 ]
            </span>
            <h1 className="text-4xl md:text-6xl font-anybody font-extrabold text-slate tracking-tight leading-[0.95] max-w-4xl">
              Why Mead,<br />Oklahoma?
            </h1>
            <p className="text-lg md:text-xl text-slate/70 mt-6 max-w-2xl">
              Everyone else&apos;s AI data center story starts with a land search and an interconnection application. Ours starts with a deed and a transformer. This page tells the whole site story in one place — including the tornadoes.
            </p>
          </div>
        </section>

        <section className="border-y border-dashed border-silver bg-fog/40">
          <div className="mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {assets.map((a) => (
                <div key={a.k} className="border border-dashed border-slate/30 bg-white p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-space-mono text-xs text-slate/50">[ {a.k} ]</span>
                    <span className="w-1.5 h-1.5 bg-greptile-green" />
                  </div>
                  <h2 className="font-anybody font-extrabold text-xl text-slate mb-2">{a.t}</h2>
                  <p className="text-slate/75 leading-relaxed text-sm">{a.d}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 border border-dashed border-slate/30 bg-white p-6 text-center">
              {[["30 ac","Owned land + 3 buildings"],["3 MVA","On-site transformer"],["$0.08","Per kWh commercial power"],["100G","Symmetrical fiber (quoted)"]].map(([v,l]) => (
                <div key={l}>
                  <div className="font-anybody text-3xl font-extrabold text-slate">{v}</div>
                  <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/60 mt-2">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-14">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
              <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
              [ THE HONEST PART ]
            </span>
            <h2 className="text-3xl md:text-4xl font-anybody font-extrabold text-slate tracking-tight mb-4">Yes, it&apos;s tornado country.</h2>
            <p className="text-lg text-slate/75 leading-relaxed mb-4">
              We won&apos;t claim &ldquo;low disaster risk&rdquo; from southern Oklahoma. Severe weather is real here — and it&apos;s the reason this facility exists in its current form. Storms take grids down; that&apos;s precisely the event our z1power-based LFP storage is engineered to absorb, islanding the cluster in under 10 milliseconds by design. Most operators treat grid instability as an edge case. We made it the design basis.
            </p>
            <p className="text-lg text-slate/75 leading-relaxed">
              Geography helps too: Mead sits on US-70 near Lake Texoma, roughly between Dallas&ndash;Fort Worth and Oklahoma City — close enough to both metros for regional workloads, rural enough for owned acreage and small-town power rates. That trade is the whole thesis.
            </p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 pb-14">
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
            <Link href="/contact" className="btn-hex btn-hex-md !border-greptile-green !bg-greptile-green !text-black">Reserve compute</Link>
            <Link href="/deployments" className="btn-hex-outline btn-hex-md !border-slate !bg-slate !text-slate">See the roadmap</Link>
          </div>
          <p className="font-space-mono text-[11px] text-slate/50 mt-8">[ Site photos coming — this page will carry real photographs of the land, buildings, and transformer as we document the build. ]</p>
        </section>
      </div>
    </PageShell>
  );
}
