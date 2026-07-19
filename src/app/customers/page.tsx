"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageShell from "@/components/PageShell";

const designPartners = [
  { role: "AI training team", note: "Slot sized for ~16 nodes of continued-pretraining or fine-tuning workload on dedicated InfiniBand fabric." },
  { role: "Inference-heavy product", note: "Slot sized for Cerebras CS-3 or dedicated GPU capacity serving low-latency production inference." },
  { role: "Federal / compliance-sensitive", note: "Slot sized for up to 2 MW of NDAA §889-compliant, single-tenant, US-built-hardware deployment." },
];

const pilots = [
  { title: "Proven LFP platform", site: "US-wide", cap: "z1power LiFePO4", since: "2021", summary: "z1power — a founder-owned partner company — has shipped LiFePO4 batteries to US customers since 2021: 4,000+ cycle cells, integrated per-cell BMS, 5-year warranties. Verifiable at z1power.com." },
  { title: "Engineered for compute", site: "SmartTec", cap: "BESS integration", since: "2025", summary: "SmartTec engineers z1power LFP modules with commercial-grade inverters and UPS into behind-the-meter storage, orchestrated by AURA. Sub-10ms failover is the design target, validated at commissioning." },
  { title: "Deployed on owned ground", site: "Mead, OK", cap: "Phase 1 site", since: "2026", summary: "30 acres, three 3,000 sqft buildings, a 3 MVA transformer, and 100 Gbps symmetrical fiber under signed carrier quote — owned, not leased. No interconnection queue, no landlord." },
];

const stats = [
  { value: "4,000+", label: "Cycle-life z1power LFP cells" },
  { value: "110 kW", label: "Phase-1 IT load - Mead, OK" },
  { value: "Q4 2026", label: "Power-on target" },
  { value: "3 of 3", label: "Design partner slots open" },
];

export default function CustomersPage() {
  return (
    <PageShell>
      <div className="bg-background">
        {/* Hero */}
        <section className="relative bg-paper-plus-ruled">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28 lg:py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl"
            >
              <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-5">
                <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
                [ DESIGN PARTNERS ]
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-anybody font-extrabold tracking-tight leading-[0.95] mb-6">
                We&apos;re not customer-heavy yet.
                <br />
                <span className="text-slate/50">We&apos;re picking the first three.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate/70 max-w-3xl mb-10">
                SmartTec is in pre-launch. We&apos;re running a closed design-partner program for three teams who want launch pricing and direct engineering access ahead of Q4 2026 power-on.
              </p>
              <Link href="/contact" className="btn-hex btn-hex-md !border-greptile-green !bg-greptile-green !text-black">
                Apply for design partner
              </Link>
            </motion.div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* Design partner slots */}
        <section className="bg-background">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-16 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
                <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
                [ OPEN DESIGN PARTNER SLOTS ]
              </span>
              <h2 className="text-3xl md:text-4xl font-anybody font-extrabold text-slate tracking-tight">
                Three slots remaining.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {designPartners.map((p, i) => (
                <div key={i} className="border border-dashed border-slate/30 bg-fog/50 p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-space-mono text-[11px] uppercase tracking-wider text-greptile-green">[ SLOT {String(i + 1).padStart(2, "0")} ]</span>
                    <span className="w-1.5 h-1.5 bg-greptile-green rounded-full animate-pulse-glow" />
                  </div>
                  <div className="font-anybody font-extrabold text-lg text-slate mb-2">{p.role}</div>
                  <p className="text-sm text-slate/70 leading-relaxed">{p.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />


        {/* Who this is for — plain language */}
        <section className="bg-background">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-16 md:py-20">
            <div className="mb-10">
              <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
                <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
                [ WHO THIS IS FOR ]
              </span>
              <h2 className="text-3xl md:text-4xl font-anybody font-extrabold text-slate tracking-tight">
                If one of these is you,<br />the math usually works.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  k: "01",
                  who: "AI product teams",
                  have: "A fine-tuned model in production and a cloud bill that doubles every quarter.",
                  get: "Dedicated GPUs at a fixed monthly number — no noisy neighbors, no surge pricing, no egress surprises. Your invoice looks the same in month one and month twelve.",
                  size: "Typical footprint: 4–16 GPUs, reserved",
                },
                {
                  k: "02",
                  who: "Inference-heavy SaaS",
                  have: "Users who feel every 100 ms, and unit economics measured in tokens per dollar.",
                  get: "Capacity tuned for serving: batch-optimized GPU nodes or Cerebras CS-3 for the fastest tokens available. We size against your real traffic, not a benchmark.",
                  size: "Typical footprint: 8+ GPUs or a dedicated CS-3",
                },
                {
                  k: "03",
                  who: "Research labs & universities",
                  have: "Training runs that need two weeks of uninterrupted compute, a few times a year.",
                  get: "Reserved burst windows on a private InfiniBand fabric — schedule the run, get the whole allocation, pay only for the window. No queue, no preemption mid-run.",
                  size: "Typical footprint: 8–32 GPUs, scheduled windows",
                },
                {
                  k: "04",
                  who: "Federal & compliance-sensitive",
                  have: "A mandate: NDAA §889 supply chain, US-built hardware, and single-tenant isolation.",
                  get: "US-based operations, single-tenant physical isolation, audit-ready telemetry, and supply-chain documentation scoped per contract under NDA. Compliance requirements are engineered in from the design phase.",
                  size: "Typical footprint: dedicated racks to 2 MW",
                },
              ].map((s, i) => (
                <motion.div
                  key={s.k}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="border border-dashed border-slate/30 bg-fog/30 p-6"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-space-mono text-xs text-slate/50">[ {s.k} ]</span>
                    <span className="w-1.5 h-1.5 bg-greptile-green" />
                  </div>
                  <h3 className="font-anybody font-extrabold text-xl text-slate mb-3">{s.who}</h3>
                  <p className="text-sm text-slate/70 leading-relaxed mb-2"><span className="font-bold text-slate">You have:</span> {s.have}</p>
                  <p className="text-sm text-slate/70 leading-relaxed mb-3"><span className="font-bold text-slate">You get:</span> {s.get}</p>
                  <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/50 border-t border-dashed border-slate/20 pt-3">{s.size}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* How engagement works */}
        <section className="bg-slate">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-16 md:py-20">
            <div className="mb-10">
              <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-fog/60 mb-4">
                <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
                [ HOW IT WORKS ]
              </span>
              <h2 className="text-3xl md:text-4xl font-anybody font-extrabold text-fog tracking-tight">
                Four steps. No mystery.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { n: "01", t: "Scope call", d: "30 minutes on your actual workload: model sizes, tokens per day, latency targets, compliance needs. No slideware." },
                { n: "02", t: "Sizing + fixed quote", d: "We run your numbers through the same calculators on this site and hand back a configuration and a fixed price. You can check our math." },
                { n: "03", t: "Contract + onboarding", d: "Reserve capacity, migrate data over the fiber, get SSH / Kubernetes / Slurm access. A named engineer owns your onboarding." },
                { n: "04", t: "Live, with receipts", d: "Real-time telemetry dashboard, uptime and performance against SLA targets, and a human who answers when something looks off." },
              ].map((s, i) => (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="border border-dashed border-fog/25 p-6"
                >
                  <div className="font-space-mono text-greptile-green text-xs mb-3">[ {s.n} ]</div>
                  <h3 className="font-anybody font-extrabold text-lg text-fog mb-2">{s.t}</h3>
                  <p className="text-sm text-fog/70 leading-relaxed">{s.d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* Pre-existing z1power pilots (real, not fake customers) */}
        <section className="bg-fog border-y border-dashed border-silver">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-16 md:py-20">
            <div className="mb-10">
              <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
                <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
                [ z1power · THE BATTERY PLATFORM ]
              </span>
              <h2 className="text-3xl md:text-4xl font-anybody font-extrabold text-slate tracking-tight">
                The chemistry is proven. The site is ours.
              </h2>
              <p className="text-slate/70 mt-2">No borrowed case studies. Everything below is verifiable today.</p>
            </div>

            <div className="space-y-4">
              {pilots.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="border border-dashed border-slate/30 bg-background p-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                    <div className="md:col-span-4">
                      <h3 className="font-anybody font-extrabold text-lg text-slate mb-1">{p.title}</h3>
                      <div className="font-space-mono text-xs text-slate/60">{p.site} · {p.cap} · live since {p.since}</div>
                    </div>
                    <p className="md:col-span-8 text-slate/70 leading-relaxed">{p.summary}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* Stats */}
        <section className="bg-background">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-16 md:py-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {stats.map((s) => (
                <div key={s.label} className="border border-dashed border-slate/30 bg-fog/30 p-6 text-center">
                  <div className="font-anybody text-3xl md:text-5xl font-extrabold text-slate">{s.value}</div>
                  <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/60 mt-2">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-greptile-green border-y border-slate/20">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28 text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-anybody font-extrabold text-slate tracking-tight mb-8">
              Join them.
            </h2>
            <div className="btn-hex-group justify-center">
              <Link href="/contact" className="btn-hex-outline btn-hex-md !border-slate !bg-slate !text-slate xl:btn-hex-lg">
                Apply for design partner
              </Link>
              <Link href="/power" className="btn-hex btn-hex-md !border-slate !bg-slate !text-fog xl:btn-hex-lg">
                See the power stack
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}