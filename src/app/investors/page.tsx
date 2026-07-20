import type { Metadata } from "next";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Investor materials · SmartTec",
  description:
    "Pre-launch. Pre-revenue. Power-on target Q4 2026. Materials current as of June 2026. Contains forward-looking statements.",
};

// All claims below are verifiable from prior disclosures on this site
// (about, customers, posts, security, enterprise) or from public sources.

const opportunityStats = [
  { value: "4–7 yrs", label: "Typical US grid interconnection wait" },
  { value: "~1,500 GW", label: "Stuck in the US interconnection queue" },
  { value: "40%", label: "Of AI data centers power-constrained by 2027 (Gartner)" },
  { value: "1,500 MW", label: "Lost in single NoVA grid event (Belfer Center)" },
];

const traction = [
  {
    n: "01",
    title: "Pre-existing battery product line",
    body: "z1power LiFePO4 batteries have shipped to US customers since 2021 — founder-owned partner company (Syed Hussain). SmartTec engineers z1power LFP modules with commercial-grade inverters and UPS into behind-the-meter storage.",
  },
  {
    n: "02",
    title: "Owned Phase-1 site in Mead, OK",
    body: "30 acres, three 3,000 sqft buildings, and a 3 MVA transformer — owned outright, zero interconnection queue. 100 Gbps symmetrical fiber under signed carrier quote (~90-day install).",
  },
  {
    n: "03",
    title: "3 design-partner slots reserved",
    body: "Design-partner program: pre-launch launch pricing locked for 12 months from power-on. Direct engineering access. Co-published case study at power-on. Three slots, first come first served.",
  },
  {
    n: "04",
    title: "Confirmed vendor relationships",
    body: "NVIDIA (H100 / H200 / B200 / GB200) and Cerebras (CS-3) confirmed deployment partners. NDAA §889 / FEOC restricted supply chain. SOC 2 Type II in process.",
  },
];

const useOfFunds = [
  { pct: 40, label: "Hardware procurement", note: "BESS integration + NVIDIA compute for Phase 1 (30× B200, ~110 kW IT load)" },
  { pct: 25, label: "Manufacturing scale-up", note: "Tulsa cell + module production line capacity" },
  { pct: 20, label: "Sales + engineering", note: "Federal capture team, deployment engineers, AURA product" },
  { pct: 15, label: "Working capital", note: "12-month operating runway buffer post-power-on" },
];

const marketSizing = [
  { tier: "TAM", value: "$1T+", label: "AI infrastructure capex 2025–2027 (NVIDIA, sell-side consensus)", source: "Gartner, NVIDIA Q3 2026 earnings call" },
  { tier: "SAM", value: "$80B", label: "US AI compute + battery-backed power, addressable through 2030", source: "Gartner + BloombergNEF" },
  { tier: "SOM", value: "3 MVA", label: "On-site transformer capacity — Phase 1 uses under 4%; Buildings 2–3 and solar are the expansion path", source: "SmartTec internal planning" },
];

const team = [
  {
    name: "Syed Hussain",
    title: "Co-founder & CEO",
    bio: "Founded z1power and SmartTec. Background in power systems and energy infrastructure.",
  },
  {
    name: "Yasir Jahangir",
    title: "Co-founder & COO",
    bio: "Operations across cell production, supply chain, deployment, and partner delivery.",
  },
];

const timeline = [
  { date: "2021", event: "z1power founded by Syed Hussain in Los Angeles, California. LiFePO4 batteries, solar, and off-grid power systems." },
  { date: "2024", event: "z1power product line scales across RV, marine, home-backup, and jobsite markets nationwide." },
  { date: "2025", event: "SmartTec formed. Mead, OK site secured: 30 acres, three buildings, 3 MVA transformer. AURA orchestrator development begins." },
  { date: "2026 Q2", event: "SmartTec incorporated. Design-partner program opened. Three slots reserved for first-wave teams." },
  { date: "2026 Q4", event: "Target Phase 1 power-on: 30× NVIDIA B200 behind z1power-based BESS. Named case studies published with design partners." },
  { date: "2027 Q1+", event: "General reservations open. Phase 2 expansion into Building 2 per demand — the site supports ~20× the Phase-1 load." },
];

const risks = [
  { title: "Power-on timing", body: "Q4 2026 is a target, not a guarantee. Hardware delivery, commissioning, and grid interconnection dependencies could shift the date by one or two quarters." },
  { title: "Pre-revenue", body: "SmartTec has no product revenue as of June 2026. Revenue depends on Phase 1 power-on plus design-partner commercial conversion." },
  { title: "Single-site concentration", body: "Phase 1 is a single Mead, OK site. Site-specific events (weather, regional grid events, permitting) could affect operations." },
  { title: "Hardware supply chain", body: "NVIDIA and Cerebras allocate silicon. Allocation shifts could delay Phase 1 fleet size." },
  { title: "Regulatory", body: "Behind-the-meter battery operation is regulated at the state PUC level and subject to evolving FERC rules. Changes to net-metering or BESS tariffs could affect unit economics." },
  { title: "Competition", body: "Hyperscalers (AWS, Azure, GCP) and emerging colos are also working on battery-backed AI sites. We compete on speed-to-power and behind-the-meter economics, not on a unique moat." },
];

export default function InvestorsPage() {
  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="px-6 md:px-12 pt-12 pb-8 md:pt-20 md:pb-12 border-b border-dashed border-slate/30">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center gap-2 font-space-mono text-[11px] uppercase tracking-[0.18em] text-greptile-green mb-6">
            <span className="inline-block w-2 h-2 bg-greptile-green" />
            <span>[ INVESTOR MATERIALS · CURRENT AS OF JUNE 2026 ]</span>
          </div>
          <h1 className="font-anybody font-extrabold text-5xl md:text-6xl lg:text-7xl text-slate tracking-tight max-w-3xl">
            Pre-launch.<br />
            Pre-revenue.<br />
            <span className="text-greptile-green">Power-on target Q4 2026.</span>
          </h1>
          <p className="font-anybody text-xl md:text-2xl text-slate/70 mt-6 max-w-2xl leading-relaxed">
            SmartTec runs NVIDIA and Cerebras compute behind battery storage we engineer on z1power LFP. We&apos;re raising to bring Phase 1 (30× B200 at our owned Mead, OK site) online. Materials below contain forward-looking statements — see disclaimer at the bottom of this page.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:investors@smarttec.io?subject=Investor%20materials%20request"
              className="inline-flex items-center gap-2 bg-greptile-green text-slate font-space-mono text-[11px] uppercase tracking-wider px-5 py-3 hover:bg-greptile-green/85 transition-colors"
            >
              <span className="w-1.5 h-1.5 bg-slate" />
              Request data room
            </a>
            <Link
              href="/invest"
              className="inline-flex items-center gap-2 border border-dashed border-slate/40 text-slate font-space-mono text-[11px] uppercase tracking-wider px-5 py-3 hover:border-greptile-green transition-colors"
            >
              Have access? Open the data room →
            </Link>
            <Link
              href="#forward-looking"
              className="inline-flex items-center gap-2 border border-dashed border-slate/40 text-slate font-space-mono text-[11px] uppercase tracking-wider px-5 py-3 hover:border-greptile-green hover:text-greptile-green transition-colors"
            >
              Forward-looking statements ↓
            </Link>
          </div>
        </div>
      </section>

      {/* Opportunity */}
      <section className="px-6 md:px-12 py-12 md:py-20 border-t border-dashed border-slate/30">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center gap-2 font-space-mono text-[11px] uppercase tracking-[0.18em] text-greptile-green mb-6">
            <span className="inline-block w-2 h-2 bg-greptile-green" />
            <span>[ THE OPPORTUNITY · WHY NOW ]</span>
          </div>
          <h2 className="font-anybody font-extrabold text-3xl md:text-4xl text-slate tracking-tight max-w-3xl mb-10">
            Power, not chips, is the constraint.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {opportunityStats.map((s) => (
              <div key={s.label} className="border border-dashed border-slate/30 bg-fog/30 p-6">
                <div className="w-1.5 h-1.5 bg-greptile-green mb-4" />
                <div className="font-anybody font-extrabold text-3xl md:text-4xl text-slate tracking-tight">
                  {s.value}
                </div>
                <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/60 mt-3 leading-relaxed">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border border-dashed border-slate/30 bg-background p-6">
            <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/50 mb-2">[ THESIS ]</div>
            <p className="font-anybody text-slate/70 leading-relaxed text-base md:text-lg">
              Hyperscaler AI data centers are constrained by <strong className="text-slate">interconnection queues</strong>, not silicon. NVIDIA can ship GPUs in weeks. Megawatts take 4–7 years. SmartTec builds the power stack ourselves — z1power LFP battery systems engineered behind the meter, on a site with an owned 3 MVA transformer — so we can deploy AI compute on a Q4 2026 timeline instead of a 2030 timeline. The same bet the hyperscalers should have made in 2023.
            </p>
          </div>
        </div>
      </section>

      {/* What we have today — REAL traction */}
      <section className="px-6 md:px-12 py-12 md:py-20 border-t border-dashed border-slate/30 bg-fog/40">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center gap-2 font-space-mono text-[11px] uppercase tracking-[0.18em] text-greptile-green mb-6">
            <span className="inline-block w-2 h-2 bg-greptile-green" />
            <span>[ WHAT WE HAVE TODAY · NOT VAPORWARE ]</span>
          </div>
          <h2 className="font-anybody font-extrabold text-3xl md:text-4xl text-slate tracking-tight max-w-3xl mb-10">
            Real assets, real contracts, real hardware.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {traction.map((t) => (
              <div key={t.n} className="border border-dashed border-slate/30 bg-background p-6 md:p-7">
                <div className="flex items-start gap-4 mb-3">
                  <span className="font-anybody text-4xl font-extrabold text-slate/15 select-none leading-none">
                    {t.n}
                  </span>
                  <h3 className="font-anybody font-bold text-lg md:text-xl text-slate tracking-tight pt-2">
                    {t.title}
                  </h3>
                </div>
                <p className="font-anybody text-slate/70 leading-relaxed pl-12">
                  {t.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market sizing */}
      <section className="px-6 md:px-12 py-12 md:py-20 border-t border-dashed border-slate/30">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center gap-2 font-space-mono text-[11px] uppercase tracking-[0.18em] text-greptile-green mb-6">
            <span className="inline-block w-2 h-2 bg-greptile-green" />
            <span>[ MARKET ]</span>
          </div>
          <h2 className="font-anybody font-extrabold text-3xl md:text-4xl text-slate tracking-tight max-w-3xl mb-10">
            Sizing the opportunity.
          </h2>

          <div className="border border-dashed border-slate/30 overflow-hidden bg-background">
            {marketSizing.map((m, i) => (
              <div
                key={m.tier}
                className={`grid grid-cols-12 items-center px-5 md:px-7 py-6 ${i !== marketSizing.length - 1 ? "border-b border-dashed border-slate/20" : ""}`}
              >
                <div className="col-span-2 font-space-mono text-xs uppercase tracking-wider text-greptile-green">
                  [{m.tier}]
                </div>
                <div className="col-span-2 font-anybody font-extrabold text-2xl md:text-3xl text-slate tracking-tight">
                  {m.value}
                </div>
                <div className="col-span-5 font-anybody text-sm md:text-base text-slate/80 leading-relaxed">
                  {m.label}
                </div>
                <div className="col-span-3 font-space-mono text-[10px] uppercase tracking-wider text-slate/50 text-right">
                  {m.source}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use of funds */}
      <section className="px-6 md:px-12 py-12 md:py-20 border-t border-dashed border-slate/30 bg-fog/40">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center gap-2 font-space-mono text-[11px] uppercase tracking-[0.18em] text-greptile-green mb-6">
            <span className="inline-block w-2 h-2 bg-greptile-green" />
            <span>[ USE OF FUNDS ]</span>
          </div>
          <h2 className="font-anybody font-extrabold text-3xl md:text-4xl text-slate tracking-tight max-w-3xl mb-3">
            How we deploy capital.
          </h2>
          <p className="font-anybody text-slate/70 leading-relaxed max-w-2xl mb-10">
            Indicative allocation across the next raise. Subject to revision based on final round size and terms.
          </p>

          <div className="space-y-4">
            {useOfFunds.map((u) => (
              <div key={u.label} className="border border-dashed border-slate/30 bg-background p-5 md:p-6">
                <div className="grid grid-cols-12 items-center gap-4">
                  <div className="col-span-2 font-anybody font-extrabold text-3xl md:text-4xl text-greptile-green tracking-tight">
                    {u.pct}%
                  </div>
                  <div className="col-span-4">
                    <div className="font-anybody font-bold text-lg text-slate">{u.label}</div>
                    <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/55 mt-1">
                      [ ALLOCATION ]
                    </div>
                  </div>
                  <div className="col-span-6 font-anybody text-slate/70 leading-relaxed text-sm md:text-base">
                    {u.note}
                  </div>
                </div>
                <div className="mt-3 h-1 bg-fog relative overflow-hidden">
                  <div className="h-full bg-greptile-green" style={{ width: `${u.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 md:px-12 py-12 md:py-20 border-t border-dashed border-slate/30">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center gap-2 font-space-mono text-[11px] uppercase tracking-[0.18em] text-greptile-green mb-6">
            <span className="inline-block w-2 h-2 bg-greptile-green" />
            <span>[ TEAM ]</span>
          </div>
          <h2 className="font-anybody font-extrabold text-3xl md:text-4xl text-slate tracking-tight max-w-3xl mb-10">
            People building this.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {team.map((m) => (
              <div key={m.name} className="border border-dashed border-slate/30 bg-fog/30 p-6">
                <div className="w-14 h-14 border border-dashed border-slate/30 bg-fog flex items-center justify-center font-anybody font-extrabold text-2xl text-slate mb-4">
                  {m.name.split(" ").map((s) => s[0]).join("")}
                </div>
                <div className="font-anybody font-bold text-lg text-slate">{m.name}</div>
                <div className="font-space-mono text-[11px] uppercase tracking-wider text-greptile-green mt-1 mb-3">
                  {m.title}
                </div>
                <p className="font-anybody text-slate/70 leading-relaxed text-sm">
                  {m.bio}
                </p>
              </div>
            ))}
          </div>
          <p className="font-space-mono text-[10px] uppercase tracking-wider text-slate/50 mt-6">
            [ Additional team members and advisors not listed pending public announcement. ]
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 md:px-12 py-12 md:py-20 border-t border-dashed border-slate/30 bg-fog/40">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center gap-2 font-space-mono text-[11px] uppercase tracking-[0.18em] text-greptile-green mb-6">
            <span className="inline-block w-2 h-2 bg-greptile-green" />
            <span>[ TIMELINE · TARGET ]</span>
          </div>
          <h2 className="font-anybody font-extrabold text-3xl md:text-4xl text-slate tracking-tight max-w-3xl mb-10">
            Where we are and where we&apos;re going.
          </h2>

          <div className="space-y-3">
            {timeline.map((t, i) => (
              <div key={t.date} className="grid grid-cols-12 gap-4 items-start border border-dashed border-slate/30 bg-background p-4 md:p-5">
                <div className="col-span-3 md:col-span-2 font-anybody font-extrabold text-xl md:text-2xl text-slate tracking-tight">
                  {t.date}
                </div>
                <div className="col-span-9 md:col-span-10 font-anybody text-slate/80 leading-relaxed">
                  {t.event}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk factors — HONEST */}
      <section className="px-6 md:px-12 py-12 md:py-20 border-t border-dashed border-slate/30">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center gap-2 font-space-mono text-[11px] uppercase tracking-[0.18em] text-greptile-green mb-6">
            <span className="inline-block w-2 h-2 bg-greptile-green" />
            <span>[ RISK FACTORS · READ THESE ]</span>
          </div>
          <h2 className="font-anybody font-extrabold text-3xl md:text-4xl text-slate tracking-tight max-w-3xl mb-3">
            Honest about what could go wrong.
          </h2>
          <p className="font-anybody text-slate/70 leading-relaxed max-w-2xl mb-10">
            Pre-launch companies fail in obvious and non-obvious ways. We&apos;re listing both.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {risks.map((r) => (
              <div key={r.title} className="border border-dashed border-slate/30 bg-fog/30 p-6">
                <h3 className="font-anybody font-bold text-lg text-slate mb-2">{r.title}</h3>
                <p className="font-anybody text-slate/70 leading-relaxed text-sm">
                  {r.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Forward-looking statements disclaimer */}
      <section id="forward-looking" className="px-6 md:px-12 py-12 md:py-20 border-t border-dashed border-slate/30 bg-fog/40">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center gap-2 font-space-mono text-[11px] uppercase tracking-[0.18em] text-greptile-green mb-6">
            <span className="inline-block w-2 h-2 bg-greptile-green" />
            <span>[ FORWARD-LOOKING STATEMENTS ]</span>
          </div>
          <div className="border border-dashed border-slate/30 bg-background p-6 md:p-8 space-y-4">
            <p className="font-anybody text-slate/80 leading-relaxed">
              This page contains forward-looking statements within the meaning of Section 27A of the Securities Act of 1933 and Section 21E of the Securities Exchange Act of 1934. Statements regarding Phase 1 power-on timing, target capacity, future customer demand, fundraising size and terms, design-partner conversion, market opportunity, and the company&apos;s competitive position are forward-looking and reflect current expectations and assumptions.
            </p>
            <p className="font-anybody text-slate/80 leading-relaxed">
              Actual results may differ materially. Factors that could cause material differences include hardware supply chain, regulatory changes at the federal or state level, electricity market conditions, customer acquisition timing, the company&apos;s ability to execute on its Q4 2026 power-on target, competitive responses from hyperscalers and incumbent colocation operators, and general economic conditions.
            </p>
            <p className="font-anybody text-slate/80 leading-relaxed">
              SmartTec, Inc. is a privately held Delaware C corporation in pre-launch / pre-revenue status. The company has not completed a registered securities offering. This page is informational and does not constitute an offer to sell or a solicitation to buy any securities. Any securities offering will be made only by means of definitive offering documents to qualified investors under applicable exemptions from registration.
            </p>
            <p className="font-anybody text-slate/80 leading-relaxed">
              Market sizing references: Gartner, NVIDIA Q3 2026 earnings call, BloombergNEF Energy Storage Outlook 2026, Belfer Center for Science and International Affairs (Harvard Kennedy School), FERC interconnection queue data. All forward-looking dates are targets, not commitments. Pilot deployment figures are from real customer sites operating under NDA.
            </p>
            <p className="font-anybody text-slate/80 leading-relaxed">
              Contact: <a href="mailto:investors@smarttec.io" className="text-greptile-green underline underline-offset-4 hover:no-underline">investors@smarttec.io</a>
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 md:px-12 py-12 md:py-20 border-t border-dashed border-slate/30 bg-slate text-fog">
        <div className="max-w-[1280px] mx-auto text-center">
          <h2 className="font-anybody font-extrabold text-3xl md:text-4xl lg:text-5xl text-fog tracking-tight leading-[1.05] mb-5">
            Talk to the founders.
          </h2>
          <p className="font-anybody text-fog/70 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Data room access, founder calls, and reference introductions for qualified investors. We&apos;ll respond within two business days.
          </p>
          <a
            href="mailto:investors@smarttec.io?subject=Investor%20inquiry"
            className="inline-flex items-center gap-2 bg-greptile-green text-slate font-space-mono text-[11px] uppercase tracking-wider px-6 py-4 hover:bg-greptile-green/85 transition-colors"
          >
            <span className="w-1.5 h-1.5 bg-slate" />
            investors@smarttec.io →
          </a>
          <div className="mt-8 font-space-mono text-[10px] uppercase tracking-wider text-fog/50">
            [ This page is informational and does not constitute an offer to sell securities. ]
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
