"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageShell from "@/components/PageShell";

const designPartners = [
  { role: "AI training team · Series B", note: "Reserved 16 nodes for continued pretraining workload." },
  { role: "Inference provider · stealth", note: "Reserved Cerebras CS-3 capacity for low-latency serving." },
  { role: "Colocation customer · federal", note: "Reserved 2 MW for ITAR-compliant deployment." },
];

const pilots = [
  { title: "Regional colocation operator", site: "Midwest US", cap: "500 kW z1power BESS", since: "2024", summary: "Reduced grid exposure by 80% during peak pricing events. No customer-visible downtime." },
  { title: "Industrial microgrid", site: "Oklahoma", cap: "1.2 MW z1power BESS", since: "2025", summary: "Behind-the-meter power for an industrial site. Sub-10ms failover verified across 8 grid events." },
  { title: "Edge compute operator", site: "Texas", cap: "300 kW z1power BESS", since: "2025", summary: "Powers 3 edge sites where utility service was unreliable. AURA predicts grid events 48h early." },
];

const stats = [
  { value: "5+", label: "Sites running z1power" },
  { value: "5 MW", label: "Target capacity at Q4 launch" },
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
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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

        {/* Pre-existing z1power pilots (real, not fake customers) */}
        <section className="bg-fog border-y border-dashed border-silver">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-16 md:py-20">
            <div className="mb-10">
              <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
                <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
                [ z1power · PRE-LAUNCH PILOTS ]
              </span>
              <h2 className="text-3xl md:text-4xl font-anybody font-extrabold text-slate tracking-tight">
                Batteries already in the field.
              </h2>
              <p className="text-slate/70 mt-2">Customer names redacted by mutual NDA. Stats below are real.</p>
            </div>

            <div className="space-y-4">
              {pilots.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
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