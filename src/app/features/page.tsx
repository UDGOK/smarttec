"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageShell from "@/components/PageShell";

const features = [
  {
    label: "01",
    title: "Battery Energy Stack",
    description: "Proprietary lithium-iron-phosphate cells. 20-year design life. Made in the USA. ITAR-compliant. 5-year standard warranty.",
    accent: "bg-greptile-green",
  },
  {
    label: "02",
    title: "AURA Load Management",
    description: "Predictive positioning reserves pre-charged capacity 72 hours before demand peaks. Sub-2% forecast error.",
    accent: "bg-seafoam",
    tag: "AURA",
  },
  {
    label: "03",
    title: "Thermal AI",
    description: "Liquid cooling with sub-2°C cell variance. 40% longer cycle life vs. passive systems.",
    accent: "bg-ice",
  },
  {
    label: "04",
    title: "Triple-Redundant Cells",
    description: "If one bank fails, two more take over in under 10ms. Zero single points of failure.",
    accent: "bg-lavender",
  },
  {
    label: "05",
    title: "Real-Time Monitoring",
    description: "Sub-second telemetry. Predictive failure alerts. Full audit trail. SOC 2 Type II.",
    accent: "bg-peach",
  },
  {
    label: "06",
    title: "Modular Scaling",
    description: "Start at 200kW. Scale to 50MW+ without re-engineering. Pay-as-you-grow PPA available.",
    accent: "bg-pink",
  },
];

const integrations = [
  { name: "Honeywell BMS", category: "Building mgmt" },
  { name: "Schneider Electric", category: "Power systems" },
  { name: "Eaton", category: "Switchgear" },
  { name: "Vertiv", category: "Thermal" },
  { name: "ABB", category: "Inverters" },
  { name: "PagerDuty", category: "Alerting" },
  { name: "Snowflake", category: "Analytics" },
  { name: "Datadog", category: "Observability" },
];

export default function FeaturesPage() {
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
                [ FEATURES ]
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-anybody font-extrabold tracking-tight leading-[0.95] mb-6">
                Everything in the stack.
              </h1>
              <p className="text-xl md:text-2xl text-slate/70 max-w-3xl">
                SmartTec is a complete grid-independence platform. Every layer — cells, cooling, controls, AI, observability — designed and shipped together.
              </p>
            </motion.div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* Core capability grid */}
        <section className="bg-background">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
                <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
                [ CORE CAPABILITIES ]
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-anybody font-extrabold text-slate tracking-tight leading-[0.95] max-w-3xl mx-auto">
                Built for serious infrastructure.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group relative flex flex-col overflow-hidden rounded-lg border border-dashed border-slate/30 bg-fog/50 hover:bg-greptile-green/10 transition-colors"
                >
                  <div className={`h-2 ${feature.accent}`} />
                  <div className="p-7 md:p-9 flex flex-col gap-5 flex-1">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 border border-dashed border-slate/30 bg-fog flex items-center justify-center text-slate group-hover:bg-greptile-green group-hover:text-black transition-colors">
                        <svg width="24" height="24" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="6" y="6" width="20" height="22" rx="2" />
                          <rect x="11" y="2" width="10" height="6" rx="1" />
                          <line x1="11" y1="14" x2="21" y2="14" />
                          <line x1="11" y1="20" x2="21" y2="20" />
                          <line x1="11" y1="26" x2="17" y2="26" />
                        </svg>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-space-mono text-xs text-slate/40 font-bold">{feature.label}</span>
                        {feature.tag && (
                          <span className="text-[9px] font-mono uppercase tracking-wider bg-neon text-slate px-1.5 py-0.5 rounded-sm">
                            {feature.tag}
                          </span>
                        )}
                      </div>
                    </div>
                    <h3 className="text-xl md:text-2xl font-anybody font-bold text-slate">{feature.title}</h3>
                    <p className="text-sm text-slate/70 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* Integrations */}
        <section className="bg-fog border-y border-dashed border-silver">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
                <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
                [ INTEGRATIONS ]
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-anybody font-extrabold text-slate tracking-tight">
                Plugs into your stack.
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {integrations.map((i, idx) => (
                <div
                  key={i.name}
                  className="border border-dashed border-slate/30 bg-background p-6 hover:border-greptile-green transition-colors"
                >
                  <div className="font-anybody text-lg font-bold text-slate">{i.name}</div>
                  <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/60 mt-1">{i.category}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-greptile-green border-y border-slate/20">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28 text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-anybody font-extrabold text-slate tracking-tight mb-8">
              See the full stack.
            </h2>
            <div className="btn-hex-group justify-center">
              <Link href="/contact" className="btn-hex-outline btn-hex-md !border-slate !bg-slate !text-slate xl:btn-hex-lg">
                Book demo
              </Link>
              <Link href="/pricing" className="btn-hex btn-hex-md !border-slate !bg-slate !text-fog xl:btn-hex-lg">
                See pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}