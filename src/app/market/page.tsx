import Link from "next/link";
import PageShell from "@/components/PageShell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NVIDIA B200 Price Per GPU-Hour — July 2026 Market Rates",
  alternates: { canonical: "/market" },
  description:
    "What an NVIDIA B200 actually costs per GPU-hour in July 2026: a $3.50–$14.24 on-demand spread across AWS, CoreWeave, Lambda, Nebius, RunPod and marketplaces, with a ~$6.12 median. Published rates, cited sources, and where SmartTec prices.",
};

const AS_OF = "July 25, 2026";

type Tier = "Hyperscaler" | "Neocloud" | "Marketplace" | "SmartTec";

const rates: { provider: string; cfg: string; price: number; tier: Tier }[] = [
  { provider: "AWS", cfg: "p6-b200.48xlarge · 8× B200", price: 14.24, tier: "Hyperscaler" },
  { provider: "Oracle Cloud", cfg: "8× B200 bare metal", price: 14.0, tier: "Hyperscaler" },
  { provider: "CoreWeave", cfg: "HGX B200 · 8× B200", price: 8.6, tier: "Neocloud" },
  { provider: "Together AI", cfg: "B200 on-demand", price: 8.19, tier: "Neocloud" },
  { provider: "Nebius", cfg: "B200 on-demand", price: 7.15, tier: "Neocloud" },
  { provider: "Vast.ai", cfg: "B200, third-party hosts", price: 7.12, tier: "Marketplace" },
  { provider: "Lambda", cfg: "1× B200 SXM6 · 180 GB", price: 6.69, tier: "Neocloud" },
  { provider: "Modal", cfg: "B200 on-demand", price: 6.25, tier: "Neocloud" },
  { provider: "Hyperstack", cfg: "B200 on-demand", price: 6.0, tier: "Neocloud" },
  { provider: "RunPod", cfg: "Secure Cloud · B200", price: 5.89, tier: "Neocloud" },
  { provider: "SmartTec", cfg: "Reserved 1-year · Mead, OK · Q4 2026", price: 4.5, tier: "SmartTec" },
  { provider: "Vultr", cfg: "8× B200 configuration", price: 3.5, tier: "Neocloud" },
  { provider: "Hyperbolic", cfg: "Aggregated capacity", price: 3.5, tier: "Marketplace" },
];

const stats = [
  { v: "$6.12", l: "Median B200 on-demand rate across independent multi-provider trackers, July 2026" },
  { v: "4.1×", l: "Spread between the cheapest and dearest published on-demand B200 — identical silicon" },
  { v: "$14.24", l: "AWS list price per B200 GPU-hour (p6-b200.48xlarge ÷ 8)" },
  { v: "$4.50", l: "SmartTec reserved target rate — about 28% under the market median" },
];

const concessions = [
  {
    t: "These are list prices, not quotes.",
    b: "Every figure below is a published rate card. Real contracts move on term length, volume, region, and how badly the provider wants the logo. Serious buyers at CoreWeave-class providers are quoted, not billed off a website — assume a 15–25% discount is available on 6-month-plus commitments, and treat this table as the ceiling of what anyone pays.",
  },
  {
    t: "$3.50 and $6.50 are not the same product.",
    b: "The bottom of this range is shared-infrastructure, on-demand capacity — preemptible in practice, variable in performance, no dedicated fabric, and no guarantee the GPU is there tomorrow. The top is dedicated hardware on a private InfiniBand fabric with a contract behind it. Comparing them on price alone is the single most common mistake in GPU procurement.",
  },
  {
    t: "SmartTec has not sold a GPU-hour yet.",
    b: "Phase 1 — 30 NVIDIA B200s, roughly 110 kW of IT load at an owned site in Mead, Oklahoma — targets power-on in Q4 2026. The $4.50/GPU-hr reserved figure is a published target rate for capacity that is not yet energized, not a billing history. We would rather say that plainly here than have you discover it later.",
  },
];

const faq = [
  {
    q: "How much does an NVIDIA B200 cost per GPU-hour in 2026?",
    a: "As of July 2026, on-demand NVIDIA B200 capacity trades at a median of roughly $6.12–$6.25 per GPU-hour across independent multi-provider price trackers. The published on-demand range runs from about $3.50/GPU-hr at aggregators such as Vultr and Hyperbolic up to $14.24/GPU-hr at AWS, whose p6-b200.48xlarge instance lists at $113.93/hour for eight B200 GPUs. Mid-market specialist clouds cluster between $5.89 and $8.60: RunPod at $5.89, Lambda at $6.69, Nebius at $7.15, and CoreWeave at $8.60. SmartTec's published reserved rate for B200 capacity at its Mead, Oklahoma site is $4.50/GPU-hr, with power-on targeted for Q4 2026.",
  },
  {
    q: "Why does the same B200 GPU cost four times more at one provider than another?",
    a: "Because the price reflects the provider's cost stack, not the silicon. A hyperscaler carries metro land, retail power, global redundancy, enterprise sales and support organizations, and egress economics — AWS lists B200 at $14.24/GPU-hr because that structure requires it. A specialist neocloud strips out the general-purpose cloud and lands between $5.89 and $8.60. A marketplace resells other people's idle racks and can go below $4. SmartTec's cost stack is unusually low for a different reason: it owns its 30-acre Mead site and 3 MVA transformer outright, buys Oklahoma grid power at roughly $0.08/kWh against $0.12–0.25/kWh for leased colocation, and sources its z1power LFP battery storage at manufacturer cost from a company its founders own.",
  },
  {
    q: "Is a $3.50/GPU-hr B200 the same as a $6.50/GPU-hr B200?",
    a: "No, and the difference is the product rather than the chip. Sub-$4 B200 listings are almost always shared-infrastructure or marketplace capacity: preemptible in practice, variable in performance, without a dedicated high-speed fabric, and sold by hosts whose reliability varies widely. Rates in the $5.50–$8.60 band typically buy dedicated hardware, a private InfiniBand fabric, a support relationship, and a contract. SmartTec sells the second kind — its $4.50/GPU-hr reserved rate covers dedicated B200s on a private fabric with a named engineer, which is why the honest comparison for that price is Lambda or CoreWeave reserved capacity, not a spot marketplace listing.",
  },
  {
    q: "Why can SmartTec price B200 capacity below the market median?",
    a: "SmartTec's $4.50/GPU-hr reserved rate sits roughly 28% under the July 2026 market median of $6.25 because most of its cost stack is owned rather than rented. The company owns 30 acres in Mead, Oklahoma and a 3 MVA on-site transformer, which removes both land rent and the multi-year interconnection queue that gates most new capacity — Phase 1's 110 kW load uses under 4% of that transformer. Power comes from the Oklahoma grid at approximately $0.08/kWh, battery storage comes from founder-owned z1power at manufacturer cost, and 100 Gbps symmetrical fiber is locked on a signed 60-month Dobson quote at $8,075/month. A competitor must buy at retail what SmartTec already holds at cost.",
  },
  {
    q: "Are B200 rental prices expected to fall?",
    a: "Most independent forecasts point down as supply arrives — some project B200 on-demand rates softening toward $2.50–$3.00/GPU-hr at scale by late 2026 as backordered units ship, and the historical precedent is that H100 rates fell roughly 35% over two years. SmartTec models this explicitly rather than assuming rates hold: its financial base case applies an annual rate decline, and Phase 1 revenue is contracted at a fixed rate for year one so that decay only affects renewals. Entry price on the hardware matters more than the decay slope, which is why SmartTec's model is built on refurbished HGX B200 systems rather than retail.",
  },
];

const sources = [
  { label: "getdeploying — NVIDIA B200 cloud pricing across 26+ providers (Jul 2026)", url: "https://getdeploying.com/gpus/nvidia-b200" },
  { label: "Thunder Compute — NVIDIA B200 pricing by provider (Jul 2026)", url: "https://www.thundercompute.com/blog/nvidia-b200-pricing" },
  { label: "Lambda — published GPU cloud pricing", url: "https://lambda.ai/pricing" },
  { label: "CoreWeave — published instance pricing", url: "https://www.coreweave.com/pricing" },
  { label: "Vantage — AWS p6-b200.48xlarge on-demand pricing, us-east-1", url: "https://instances.vantage.sh/aws/ec2/p6-b200.48xlarge" },
  { label: "AWS — EC2 on-demand instance pricing", url: "https://aws.amazon.com/ec2/pricing/on-demand/" },
];

const tierStyle: Record<Tier, string> = {
  Hyperscaler: "text-slate/60",
  Neocloud: "text-slate/60",
  Marketplace: "text-slate/60",
  SmartTec: "text-greptile-green",
};

export default function MarketPage() {
  const max = Math.max(...rates.map((r) => r.price));

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }) }} />

      <div className="bg-background">
        {/* Hero */}
        <section className="relative bg-paper-plus-ruled">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 pt-32 md:pt-40 pb-12">
            <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
              <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
              [ B200 MARKET RATES · JULY 2026 ]
            </span>
            <h1 className="text-4xl md:text-6xl font-anybody font-extrabold text-slate tracking-tight leading-[0.95] max-w-4xl">
              The same chip.<br />$3.50 to $14.24.
            </h1>
            <p className="text-lg md:text-xl text-slate/70 mt-6 max-w-2xl">
              An NVIDIA B200 is an NVIDIA B200 wherever you rent it. The price is not about the silicon — it is about
              what the provider underneath it is paying for land, power, and sales. Here is the published market, with sources.
            </p>
          </div>
        </section>

        {/* Stat row */}
        <section className="border-y border-dashed border-silver bg-fog/40">
          <div className="mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((s) => (
                <div key={s.v} className="border-l-2 border-greptile-green pl-4">
                  <div className="font-anybody font-extrabold text-3xl md:text-4xl text-slate leading-none">{s.v}</div>
                  <p className="text-sm text-slate/70 mt-2 leading-relaxed">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rate table */}
        <section className="mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-14">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-2 h-2 bg-greptile-green" />
            <span className="font-space-mono text-xs uppercase tracking-widest text-slate/60">
              [ PUBLISHED B200 RATES · PER GPU-HOUR ]
            </span>
            <span className="flex-1 border-t border-dashed border-slate/20" />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-sm">
              <thead>
                <tr className="font-space-mono text-[11px] uppercase tracking-wider text-slate/60 text-left">
                  <th className="py-3 pr-4 border-b-2 border-slate w-[18%]">Provider</th>
                  <th className="py-3 px-3 border-b-2 border-slate w-[30%]">Configuration</th>
                  <th className="py-3 px-3 border-b-2 border-slate w-[14%]">Category</th>
                  <th className="py-3 px-3 border-b-2 border-slate w-[12%] text-right">$/GPU-hr</th>
                  <th className="py-3 pl-3 border-b-2 border-slate w-[26%]">Relative</th>
                </tr>
              </thead>
              <tbody>
                {rates.map((r) => {
                  const mine = r.tier === "SmartTec";
                  return (
                    <tr
                      key={`${r.provider}-${r.cfg}`}
                      className={`align-middle border-b border-dashed border-slate/20 ${mine ? "bg-greptile-green/10" : ""}`}
                    >
                      <td className={`py-3 pr-4 font-anybody font-bold ${mine ? "text-slate" : "text-slate/90"}`}>
                        {mine && <span className="font-space-mono text-[10px] text-greptile-green mr-1">[✓]</span>}
                        {r.provider}
                      </td>
                      <td className="py-3 px-3 text-slate/70">{r.cfg}</td>
                      <td className={`py-3 px-3 font-space-mono text-[11px] uppercase tracking-wider ${tierStyle[r.tier]}`}>
                        {r.tier}
                      </td>
                      <td className={`py-3 px-3 text-right font-anybody font-extrabold tabular-nums ${mine ? "text-slate" : "text-slate/90"}`}>
                        ${r.price.toFixed(2)}
                      </td>
                      <td className="py-3 pl-3">
                        <span
                          aria-hidden="true"
                          className={`block h-2 ${mine ? "bg-greptile-green" : "bg-slate/25"}`}
                          style={{ width: `${(r.price / max) * 100}%` }}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <p className="font-space-mono text-[11px] text-slate/50 mt-4 leading-relaxed">
            Published on-demand list rates per B200 GPU-hour except the SmartTec row, which is a 1-year reserved rate for
            capacity targeting power-on Q4 2026. Figures as of {AS_OF} from the sources listed below; rate cards change
            without notice. Azure prices the newer GB200 NVL72 platform — a different part — at roughly $27/GPU-hr, and is
            excluded from this B200 table rather than mixed into it. SmartTec on-demand B200 is published separately at
            $4.80/GPU-hr on the{" "}
            <Link href="/pricing" className="underline decoration-greptile-green underline-offset-4">pricing page</Link>.
          </p>
        </section>

        {/* Pull quote */}
        <section className="mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 pb-4">
          <blockquote className="border-l-4 border-greptile-green pl-6 py-2 max-w-3xl">
            <p className="text-xl md:text-2xl font-anybody font-bold text-slate italic leading-snug">
              &ldquo;Nobody is paying four times more for a better B200. They are paying for someone else&apos;s
              metro real estate, retail power bill, and enterprise sales team.&rdquo;
            </p>
            <cite className="block mt-3 font-space-mono text-xs uppercase tracking-wider text-slate/60 not-italic">
              — Yasir Jahangir, Co-founder &amp; COO, SmartTec
            </cite>
          </blockquote>
        </section>

        {/* Honest caveats */}
        <section className="mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-14">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-2 h-2 bg-greptile-green" />
            <span className="font-space-mono text-xs uppercase tracking-widest text-slate/60">
              [ THREE THINGS THIS TABLE DOES NOT TELL YOU ]
            </span>
            <span className="flex-1 border-t border-dashed border-slate/20" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {concessions.map((c) => (
              <div key={c.t} className="border-2 border-slate bg-white p-6">
                <div className="font-anybody font-extrabold text-lg text-slate mb-2 leading-snug">{c.t}</div>
                <p className="text-sm text-slate/75 leading-relaxed">{c.b}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
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
              {sources.map((s) => (
                <li key={s.url}>
                  <a
                    className="underline decoration-greptile-green underline-offset-4"
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="font-space-mono text-[11px] text-slate/50 mt-4">
              Rates compiled from publicly published vendor rate cards and independent multi-provider price trackers.
              Last reviewed {AS_OF}.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/pricing" className="btn-hex btn-hex-md !border-greptile-green !bg-greptile-green !text-black">
              See SmartTec pricing
            </Link>
            <Link href="/compare" className="btn-hex-outline btn-hex-md !border-slate !bg-slate !text-slate">
              Honest comparison
            </Link>
            <Link href="/contact" className="btn-hex-outline btn-hex-md !border-slate !bg-slate !text-slate">
              Scope call · 48h quote
            </Link>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
