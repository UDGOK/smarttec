"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export default function DeploymentsPage() {
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
                [ DEPLOYMENTS · PILOT PROGRAM ]
              </span>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-anybody font-extrabold tracking-tight leading-[0.95] mb-6">
                SmartTec<br />in production.
              </h1>
              <p className="text-xl md:text-2xl text-slate/70 max-w-3xl mb-10">
                SmartTec is currently in pre-launch. First-phase power-on is targeted for Q4 2026. We&apos;re reserving capacity now for design partners who want to be among the first three production deployments.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <Link href="/contact" className="btn-hex btn-hex-md !border-greptile-green !bg-greptile-green !text-black">
                  Apply for design partner
                </Link>
                <Link href="/status" className="btn-hex-outline btn-hex-md !border-slate !bg-slate !text-slate">
                  Live system status
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* Pilot program status */}
        <section className="bg-background">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-16 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              <div>
                <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
                  <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
                  [ PILOT PROGRAM STATUS ]
                </span>
                <h2 className="text-3xl md:text-4xl font-anybody font-extrabold text-slate tracking-tight leading-[0.95] mb-6">
                  Three slots. Q4 2026 power-on.
                </h2>
                <p className="text-slate/70 leading-relaxed">
                  We&apos;re running a closed design-partner program ahead of full launch. Three teams will get launch pricing, direct engineering access, and a named case study at power-on.
                </p>
              </div>
              <div className="space-y-4">
                <div className="border border-dashed border-slate/30 bg-fog/30 p-5">
                  <div className="font-space-mono text-[11px] uppercase tracking-wider text-slate/60 mb-2">[ SLOTS ]</div>
                  <div className="font-anybody text-2xl font-extrabold text-slate">3 of 3 open</div>
                </div>
                <div className="border border-dashed border-slate/30 bg-fog/30 p-5">
                  <div className="font-space-mono text-[11px] uppercase tracking-wider text-slate/60 mb-2">[ POWER-ON ]</div>
                  <div className="font-anybody text-2xl font-extrabold text-slate">Q4 2026</div>
                </div>
                <div className="border border-dashed border-slate/30 bg-fog/30 p-5">
                  <div className="font-space-mono text-[11px] uppercase tracking-wider text-slate/60 mb-2">[ WORKLOADS ]</div>
                  <div className="font-anybody text-base font-bold text-slate">Training · Inference · Colocation</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* What partners get */}
        <section className="bg-fog border-y border-dashed border-silver">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 max-w-3xl"
            >
              <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
                <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
                [ WHAT DESIGN PARTNERS GET ]
              </span>
              <h2 className="text-4xl md:text-5xl font-anybody font-extrabold text-slate tracking-tight leading-[0.95]">
                Real benefits. Real commitments.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { n: "01", title: "Launch pricing locked", desc: "First 12 months at design-partner rates — significantly below post-launch list price.", accent: "bg-greptile-green" },
                { n: "02", title: "Direct engineering access", desc: "Slack channel with the SmartTec engineering team. No support tiers in between.", accent: "bg-seafoam" },
                { n: "03", title: "Co-published case study", desc: "Benchmark numbers, workload profile, and power data published jointly at power-on.", accent: "bg-ice" },
                { n: "04", title: "Reserved compute", desc: "Locked GPU allocation for the first 12 months post-power-on. No queue.", accent: "bg-lavender" },
                { n: "05", title: "Roadmap input", desc: "Quarterly product reviews. Your workload shapes what we ship next.", accent: "bg-peach" },
                { n: "06", title: "Public case study opt-out", desc: "Anonymized references available for procurement-friendly teams.", accent: "bg-pink" },
              ].map((b, i) => (
                <motion.div
                  key={b.n}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="bg-background border border-dashed border-slate/30 p-6"
                >
                  <div className={`w-1.5 h-1.5 ${b.accent} mb-3`} />
                  <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/40 mb-2">[ {b.n} ]</div>
                  <h3 className="font-anybody font-bold text-lg text-slate mb-2">{b.title}</h3>
                  <p className="text-sm text-slate/70 leading-relaxed">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* Pre-launch z1power deployments */}
        <section className="bg-background">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-16 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
                <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
                [ z1power · PRE-LAUNCH DEPLOYMENTS ]
              </span>
              <h2 className="text-3xl md:text-4xl font-anybody font-extrabold text-slate tracking-tight">
                Where our batteries already run.
              </h2>
              <p className="text-slate/70 mt-2">
                z1power battery stacks have shipped to commercial customers since 2023. Numbers below are real.
              </p>
            </motion.div>

            <div className="border border-dashed border-slate/30 overflow-hidden">
              <div className="grid grid-cols-12 bg-fog border-b border-dashed border-slate/30 px-5 py-3 font-space-mono text-[11px] uppercase tracking-wider text-slate/60">
                <div className="col-span-3">Customer</div>
                <div className="col-span-3">Site</div>
                <div className="col-span-2">Capacity</div>
                <div className="col-span-2">Live since</div>
                <div className="col-span-2 text-right">Status</div>
              </div>
              {[
                { c: "[Regional colocation #1]", s: "Midwest US", cap: "500 kW", live: "2024", st: "Operational", ok: true },
                { c: "[Industrial microgrid #2]", s: "Oklahoma", cap: "1.2 MW", live: "2025", st: "Operational", ok: true },
                { c: "[Edge compute operator #3]", s: "Texas", cap: "300 kW", live: "2025", st: "Operational", ok: true },
                { c: "SmartTec Q4 launch site", s: "Oklahoma", cap: "5 MW phase 1", live: "Q4 2026", st: "Under construction", ok: false },
              ].map((r, i) => (
                <div key={i} className={`grid grid-cols-12 items-center px-5 py-4 ${i !== 3 ? "border-b border-dashed border-slate/20" : ""} hover:bg-greptile-green/5`}>
                  <div className="col-span-3 font-anybody font-bold text-slate">{r.c}</div>
                  <div className="col-span-3 font-space-mono text-xs text-slate/80">{r.s}</div>
                  <div className="col-span-2 font-space-mono text-xs text-slate/80">{r.cap}</div>
                  <div className="col-span-2 font-space-mono text-xs text-slate/80">{r.live}</div>
                  <div className="col-span-2 text-right font-space-mono text-[11px] uppercase tracking-wider">
                    <span className={r.ok ? "text-greptile-green" : "text-slate/60"}>{r.st}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="font-space-mono text-[11px] uppercase tracking-wider text-slate/50 mt-4">
              [Customer names redacted by mutual NDA. Confirm before publishing.]
            </p>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* CTA */}
        <section className="bg-greptile-green border-y border-slate/20">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28 text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-anybody font-extrabold text-slate tracking-tight mb-8">
              Become a design partner.
            </h2>
            <div className="btn-hex-group justify-center">
              <Link href="/contact" className="btn-hex-outline btn-hex-md !border-slate !bg-slate !text-slate xl:btn-hex-lg">
                Apply for design partner
              </Link>
              <Link href="/power" className="btn-hex btn-hex-md !border-slate !bg-slate !text-fog xl:btn-hex-lg">
                See the power story
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}