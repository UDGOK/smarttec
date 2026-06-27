"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageShell from "@/components/PageShell";

const faqs = [
  {
    q: "Can SmartTec be deployed on-prem?",
    a: "Yes. SmartTec can be deployed on-prem for enterprise customers with strict data privacy or compliance requirements. We also support air-gapped installations for federal customers.",
  },
  {
    q: "What grid types do you support?",
    a: "We support utility grid tie-in, behind-the-meter, off-grid solar + battery hybrid, microgrid, and diesel-hybrid configurations. Multi-source input and automatic source arbitration are built into AURA.",
  },
  {
    q: "How does SmartTec handle large multi-site deployments?",
    a: "SmartTec creates a unified fleet model across all sites. AURA correlates load across sites, shifts workloads based on availability, and surfaces anomalies at the fleet level. Centralized observability with per-site drill-down.",
  },
  {
    q: "How can we begin our evaluation of SmartTec?",
    a: "We offer a 14-day trial of a 200kW starter stack at one site. Need more time or interested in a multi-site enterprise rollout? Reach out and we'll scope a pilot.",
  },
  {
    q: "What compliance frameworks do you support?",
    a: "SOC 2 Type II, ITAR, FedRAMP Moderate (in process), FIPS 140-3, HIPAA-ready. We provide audit evidence packages and support customer-led assessments.",
  },
];

const securityFeatures = [
  {
    n: "01",
    title: "Cloud, on-prem, or air-gapped",
    desc: "Run SmartTec in our cloud, your cloud, your data center, or fully air-gapped. Same control plane, same AURA engine.",
  },
  {
    n: "02",
    title: "Code & data stays where you say",
    desc: "All telemetry, configuration, and operational data lives in the deployment you specify. No cross-tenant data movement.",
  },
  {
    n: "03",
    title: "Compliance built for your scale",
    desc: "SOC 2 Type II, FIPS 140-3, ITAR, HIPAA-ready. FedRAMP Moderate in process. Customer-led audits welcome.",
  },
];

const integrations = [
  {
    n: "01",
    title: "Native BMS integrations",
    desc: "Pre-built connectors for Honeywell, Schneider, Eaton, Vertiv, ABB. Auto-discovery of cell banks, inverters, switchgear.",
  },
  {
    n: "02",
    title: "AURA MCP access",
    desc: "Programmatic access to AURA from any AI agent. Query fleet state, push configurations, trigger diagnostics.",
  },
  {
    n: "03",
    title: "PagerDuty / Opsgenie",
    desc: "Real-time alerting into your existing on-call rotation. Severity routing by site, by system, by anomaly type.",
  },
  {
    n: "04",
    title: "Snowflake / Databricks / BigQuery",
    desc: "Telemetry exports to your data warehouse. Run your own analytics on top of SmartTec's fleet model.",
  },
];

export default function EnterprisePage() {
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
                [ ENTERPRISE ]
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-anybody font-extrabold tracking-tight leading-[0.95] mb-6">
                Grid-independence<br />for the enterprise.
              </h1>
              <p className="text-xl md:text-2xl text-slate/70 max-w-3xl mb-10">
                SmartTec gives large infrastructure teams a consistent way to validate power systems across complex deployments, sites, and workloads.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <Link href="/contact" className="btn-hex btn-hex-md !border-greptile-green !bg-greptile-green !text-black">
                  Get started
                </Link>
                <Link href="/contact" className="btn-hex-outline btn-hex-md !border-slate !bg-slate !text-slate">
                  Contact sales
                </Link>
                <span className="font-space-mono text-xs text-slate/60">No credit card required · 14-day free pilot</span>
              </div>
            </motion.div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* The complete energy layer */}
        <section className="bg-background">
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
                [ THE COMPLETE ENERGY LAYER ]
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-anybody font-extrabold text-slate tracking-tight leading-[0.95] mb-4">
                SmartTec catches more failures, because it predicts them.
              </h2>
              <p className="text-lg text-slate/70 max-w-2xl">
                AURA combines thermal sensing, load forecasting, and cell-level telemetry to predict failures days before they happen — no more 3 AM pager fires.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-dashed border-slate/30 bg-fog/50 p-8">
                <span className="font-space-mono text-[11px] uppercase tracking-wider text-slate/60 mb-4 block">AURA · PREDICTIVE LAYER</span>
                <h3 className="text-2xl font-anybody font-bold mb-3">Predictive load management</h3>
                <p className="text-slate/70 mb-4 leading-relaxed">
                  72-hour forward forecasts with sub-2% error. Pre-charged reserves positioned before demand peaks.
                </p>
                <Link href="/features" className="font-anybody font-bold text-sm text-slate hover:text-greptile-green">Learn more →</Link>
              </div>
              <div className="border border-dashed border-slate/30 bg-fog/50 p-8">
                <span className="font-space-mono text-[11px] uppercase tracking-wider text-slate/60 mb-4 block">AURA · THERMAL AI</span>
                <h3 className="text-2xl font-anybody font-bold mb-3">Cell-level anomaly detection</h3>
                <p className="text-slate/70 mb-4 leading-relaxed">
                  Catches cell-level anomalies 14 days before they become incidents. No more reactive firefighting.
                </p>
                <Link href="/features" className="font-anybody font-bold text-sm text-slate hover:text-greptile-green">Learn more →</Link>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* Security */}
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
                [ SECURITY ]
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-anybody font-extrabold text-slate tracking-tight leading-[0.95] mb-4">
                Enterprise-grade security.
              </h2>
              <p className="text-lg text-slate/70 max-w-2xl">
                SOC 2 Type II, with built-in security and governance controls. <Link href="/security" className="font-bold text-slate underline">Learn about security</Link>.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {securityFeatures.map((f, i) => (
                <motion.div
                  key={f.n}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-background border border-dashed border-slate/30 p-7"
                >
                  <span className="font-space-mono text-[11px] text-slate/40 font-bold">{f.n}</span>
                  <h3 className="text-lg font-anybody font-bold mt-3 mb-2">{f.title}</h3>
                  <p className="text-sm text-slate/70 leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* Independence / integrations */}
        <section className="bg-background">
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
                [ INDEPENDENCE ]
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-anybody font-extrabold text-slate tracking-tight leading-[0.95] mb-4">
                Vendor-independent by design.
              </h2>
              <p className="text-lg text-slate/70 max-w-2xl">
                SmartTec stays independent from any battery cell vendor, inverter OEM, or BMS supplier — so you&apos;re not locked into one supply chain.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {integrations.map((f, i) => (
                <motion.div
                  key={f.n}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="border border-dashed border-slate/30 bg-fog/50 p-7"
                >
                  <span className="font-space-mono text-[11px] text-slate/40 font-bold">{f.n}</span>
                  <h3 className="text-lg font-anybody font-bold mt-3 mb-2">{f.title}</h3>
                  <p className="text-sm text-slate/70 leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* Live fleet feed */}
        <section className="bg-background">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
                <span className="w-1.5 h-1.5 bg-bloom rounded-full animate-pulse-glow" />
                [ LIVE FROM THE FLEET ]
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-anybody font-extrabold text-slate tracking-tight">
                12 MW running today.
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { value: "12 MW", label: "Deployed capacity" },
                { value: "40+", label: "Live sites" },
                { value: "99.997%", label: "Fleet uptime" },
                { value: "73%", label: "Avg grid reduction" },
              ].map((s) => (
                <div key={s.label} className="border border-dashed border-slate/30 bg-fog/30 p-5 text-center">
                  <div className="font-anybody text-2xl md:text-3xl font-extrabold text-slate">{s.value}</div>
                  <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/60 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* FAQ */}
        <section className="bg-background">
          <div className="relative mx-auto w-full max-w-3xl px-6 md:px-12 py-20 md:py-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
                <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
                [ FAQ ]
              </span>
              <h2 className="text-4xl sm:text-5xl font-anybody font-extrabold text-slate tracking-tight">
                Enterprise questions.
              </h2>
            </motion.div>

            <div className="space-y-3">
              {faqs.map((f, i) => (
                <details
                  key={i}
                  className="group border border-dashed border-slate/30 bg-fog/50"
                >
                  <summary className="cursor-pointer px-5 py-4 flex items-center justify-between gap-4 hover:bg-greptile-green/10">
                    <div className="flex items-center gap-4">
                      <span className="font-space-mono text-[11px] text-slate/40 font-bold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-anybody font-bold text-slate">{f.q}</span>
                    </div>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate/60 transition-transform group-open:rotate-180">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 pl-12 md:pl-14 text-slate/70 leading-relaxed text-sm border-t border-dashed border-slate/20 pt-4">
                    {f.a}
                  </div>
                </details>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/contact" className="btn-hex btn-hex-md !border-greptile-green !bg-greptile-green !text-black">
                Contact us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}