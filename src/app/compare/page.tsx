import Link from "next/link";
import PageShell from "@/components/PageShell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compare GPU Clouds: Hyperscalers vs Neoclouds vs Marketplaces vs SmartTec",
  alternates: { canonical: "/compare" },
  description:
    "An honest comparison of AI compute options in 2026 — AWS-class hyperscalers, CoreWeave-class neoclouds, GPU marketplaces, and SmartTec's battery-backed owned-site model. Real tradeoffs, real numbers, no pretending.",
};

const dims = [
  { d: "Scale today", h: "Gigawatt-class, global regions", n: "Multi-GW contracted (CoreWeave/Nebius ~3.5 GW each); much not yet online", m: "Aggregated from hosts, highly variable", s: "110 kW Phase 1 (30× B200), Q4 2026 — honest: we are the smallest column on this table", win: false },
  { d: "Who owns the power", h: "Utility contracts + PPAs", n: "Mostly leased sites and PPAs", m: "Nobody — marketplaces resell hosts", s: "Owned 30 acres, owned 3 MVA transformer, SmartTec-engineered z1power LFP storage behind the meter", win: true },
  { d: "Grid-fault behavior", h: "Diesel generators + UPS", n: "Diesel + UPS, site-dependent", m: "Whatever the host has", s: "LFP battery failover, sub-10ms design target — no diesel", win: true },
  { d: "Interconnection exposure", h: "Years-long queues for new capacity (~1,500 GW backlog US-wide)", n: "Growth gated on converting contracted power to active power", m: "None directly", s: "Zero queue — Phase 1 uses under 4% of an owned transformer", win: true },
  { d: "Capacity certainty", h: "Shared regions; GPU quotas and waitlists", n: "Priority flows to $B-scale anchor customers", m: "Spot preemption is the business model", s: "100% of Phase 1 pre-committed to named anchor tenants by contract before power-on", win: true },
  { d: "Price transparency", h: "Complex calculators, egress fees", n: "Quote-driven for serious volume", m: "Transparent and cheap, but variable hosts", s: "Public rates (H100 from $2.40/GPU-hr on-demand), fixed quotes in 48h, no egress games", win: true },
  { d: "Contract minimums", h: "None to enterprise-scale", n: "Typically large multi-year commitments", m: "None", s: "From a single reserved GPU to dedicated racks", win: true },
  { d: "Support model", h: "Ticket tiers", n: "Enterprise account teams", m: "Community forums", s: "A named engineer; no tiers between you and the people running the site", win: true },
  { d: "Compliance & certifications", h: "The deepest cert portfolios in the industry", n: "SOC 2 and enterprise attestations", m: "Varies wildly by host", s: "Single-tenant isolation and audit-ready telemetry; SOC 2 Type II in progress — honest: hyperscalers win this row today", win: false },
  { d: "Power-aware orchestration", h: "Schedulers manage compute; power is someone else's department", n: "World-class cluster schedulers — not power-aware", m: "None", s: "AURA sees batteries, grid, and workload in one control loop — tokens-per-watt tuning and battery-aware islanding built in", win: true },
  { d: "Hardware at launch", h: "Everything, eventually, with quotas", n: "Latest NVIDIA at scale", m: "Mixed generations", s: "NVIDIA B200 + Cerebras CS-3 wafer-scale inference", win: true },
  { d: "Track record", h: "Decades", n: "Years, at massive scale", m: "Years, uneven", s: "Pre-launch. Our proof is owned assets and signed contracts, not history — we will not pretend otherwise", win: false },
];

const faq = [
  { q: "Is SmartTec better than CoreWeave or AWS?", a: "Not at scale — CoreWeave-class neoclouds have secured multi-gigawatt power portfolios and hyperscalers run global regions, while SmartTec's Phase 1 is 110 kW. SmartTec wins on different dimensions: it owns its land, transformer, and battery storage; it has zero interconnection-queue exposure; capacity is 100% pre-committed by contract; and every customer gets a named engineer. Small teams that want certainty, fixed pricing, and direct access often fit SmartTec better; teams that need thousands of GPUs do not." },
  { q: "What is the difference between a hyperscaler, a neocloud, and a GPU marketplace?", a: "Hyperscalers (AWS, Azure, Google Cloud) run general-purpose global clouds. Neoclouds (CoreWeave, Nebius, Lambda, Crusoe) are specialized GPU clouds built for AI, a market projected around $20B in 2026. GPU marketplaces (Vast.ai, RunPod class) aggregate third-party hosts for cheap spot capacity with preemption risk. SmartTec is a fourth model: a small owned-site operator that controls its own power with battery storage behind the meter." },
  { q: "Why does owning the power matter for a GPU cloud?", a: "Power is the binding constraint in AI infrastructure — roughly 1,500 GW sits in US interconnection queues with multi-year waits, and even the largest neoclouds are gated on converting contracted power to active power. An operator that already owns its site and transformer has no queue, no landlord, and a cost structure set by its utility rate (~$0.08/kWh in Oklahoma) rather than a lease." },
  { q: "Who should choose a small operator like SmartTec?", a: "Teams with 1–30 GPUs of steady demand who value a fixed monthly number, no preemption, direct engineering support, and single-tenant isolation — typically AI product teams, inference-heavy SaaS, research labs, and compliance-sensitive workloads. Teams needing burst capacity in the thousands of GPUs should use a neocloud or hyperscaler, and we will say so on a call." },
];

export default function ComparePage() {
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
              [ HONEST COMPARISON · 2026 ]
            </span>
            <h1 className="text-4xl md:text-6xl font-anybody font-extrabold text-slate tracking-tight leading-[0.95] max-w-4xl">
              Where we win.<br />Where we don&apos;t.
            </h1>
            <p className="text-lg md:text-xl text-slate/70 mt-6 max-w-2xl">
              Hyperscalers run gigawatts. Neocloud giants have contracted ~3.5 GW each. Marketplaces sell spot capacity from other people&apos;s racks. We run 110 kW we own outright. Here is the honest table — including the rows we lose.
            </p>
          </div>
        </section>

        <section className="border-y border-dashed border-silver bg-fog/40">
          <div className="mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-12 overflow-x-auto">
            <table className="w-full min-w-[880px] border-collapse text-sm">
              <thead>
                <tr className="font-space-mono text-[11px] uppercase tracking-wider text-slate/60 text-left">
                  <th className="py-3 pr-4 border-b-2 border-slate w-[16%]">Dimension</th>
                  <th className="py-3 px-3 border-b-2 border-slate w-[20%]">Hyperscalers</th>
                  <th className="py-3 px-3 border-b-2 border-slate w-[21%]">Neocloud giants</th>
                  <th className="py-3 px-3 border-b-2 border-slate w-[19%]">GPU marketplaces</th>
                  <th className="py-3 px-3 border-b-2 border-greptile-green bg-greptile-green/10 w-[24%]">SmartTec</th>
                </tr>
              </thead>
              <tbody>
                {dims.map((r) => (
                  <tr key={r.d} className="align-top border-b border-dashed border-slate/20">
                    <td className="py-4 pr-4 font-anybody font-bold text-slate">{r.d}</td>
                    <td className="py-4 px-3 text-slate/75">{r.h}</td>
                    <td className="py-4 px-3 text-slate/75">{r.n}</td>
                    <td className="py-4 px-3 text-slate/75">{r.m}</td>
                    <td className={`py-4 px-3 ${r.win ? "bg-greptile-green/10 text-slate font-medium" : "bg-fog text-slate/75"}`}>
                      {r.win && <span className="font-space-mono text-[10px] text-greptile-green mr-1">[✓]</span>}{r.s}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="font-space-mono text-[11px] text-slate/50 mt-4">Category examples: hyperscalers — AWS, Azure, Google Cloud · neocloud giants — CoreWeave, Nebius, Lambda, Crusoe class · marketplaces — Vast.ai, RunPod class. Figures per cited sources below; last reviewed Jul 2026.</p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 pt-12">
          <blockquote className="border-l-4 border-greptile-green pl-6 py-2 max-w-3xl">
            <p className="text-xl md:text-2xl font-anybody font-bold text-slate italic leading-snug">&ldquo;We can&apos;t out-scale CoreWeave, so we don&apos;t try. We out-own them: our land, our transformer, our batteries, our contracts. At 30 GPUs, certainty beats size.&rdquo;</p>
            <cite className="block mt-3 font-space-mono text-xs uppercase tracking-wider text-slate/60 not-italic">— Yasir Jahangir, Co-founder &amp; COO, SmartTec</cite>
          </blockquote>
        </section>

        <section className="mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-2 border-greptile-green bg-greptile-green/10 p-6">
              <div className="font-anybody font-extrabold text-xl text-slate mb-2">Choose SmartTec when</div>
              <p className="text-slate/80 leading-relaxed">You run 1–30 GPUs of steady workload and want a fixed number on the invoice, zero preemption, single-tenant isolation, sub-10ms battery-backed power, and a named engineer who answers. Our whole Phase 1 is built around exactly this customer.</p>
            </div>
            <div className="border-2 border-slate bg-white p-6">
              <div className="font-anybody font-extrabold text-xl text-slate mb-2">Choose someone else when</div>
              <p className="text-slate/80 leading-relaxed">You need thousands of GPUs, global regions, or the deepest compliance portfolios today. That is hyperscaler and neocloud territory, and we will tell you so on the first call — sending you to the right provider costs us nothing and earns your next workload.</p>
            </div>
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
          <div className="mt-10 border-t-2 border-slate pt-5">
            <div className="font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-3">[ SOURCES ]</div>
            <ul className="space-y-2 text-sm text-slate/70">
              <li><a className="underline decoration-greptile-green underline-offset-4" href="https://www.srgresearch.com/articles/neocloud-market-forecast-to-approach-400b-by-2031-driven-by-surging-ai-infrastructure-demand" target="_blank" rel="noopener noreferrer">Synergy Research — neocloud market forecast (2026)</a></li>
              <li><a className="underline decoration-greptile-green underline-offset-4" href="https://io-fund.com/ai-stocks/nvidia-coreweave-nebius-circular-financing-gpu-boom" target="_blank" rel="noopener noreferrer">io-fund — CoreWeave/Nebius contracted vs active power (Jun 2026)</a></li>
              <li><a className="underline decoration-greptile-green underline-offset-4" href="https://www.abiresearch.com/blog/leading-neocloud-companies" target="_blank" rel="noopener noreferrer">ABI Research — leading neocloud companies (2026)</a></li>
              <li><a className="underline decoration-greptile-green underline-offset-4" href="https://newsletter.semianalysis.com/p/ai-arrives-in-the-middle-east-us-strikes-a-deal-with-uae-and-ksa" target="_blank" rel="noopener noreferrer">SemiAnalysis — Middle East AI infrastructure deals</a></li>
            </ul>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/pricing" className="btn-hex btn-hex-md !border-greptile-green !bg-greptile-green !text-black">See our pricing</Link>
            <Link href="/contact" className="btn-hex-outline btn-hex-md !border-slate !bg-slate !text-slate">Scope call · 48h quote</Link>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
