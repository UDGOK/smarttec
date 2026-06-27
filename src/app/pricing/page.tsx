"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageShell from "@/components/PageShell";

const faqs = [
  {
    q: "How does pricing work for a battery energy stack?",
    a: "Deployments are priced per kW of installed capacity, with a base configuration including 5 years of managed operations. Capacity additions beyond 50MW are custom-quoted.",
  },
  {
    q: "Can I prepay for a discount?",
    a: "Yes — multi-year and pre-paid contracts receive tiered discounts. Annual prepay unlocks 10% off, 3-year prepay unlocks 20% off. Talk to sales for details.",
  },
  {
    q: "What's included in Managed Operations?",
    a: "Every deployment ships with 24/7 NOC monitoring, predictive maintenance scheduling, quarterly performance reviews, and a financially-backed 99.997% uptime SLA.",
  },
  {
    q: "How do I cancel my contract?",
    a: "Enterprise CAPEX contracts run for the term (typically 7-10 years). Operating leases and PPA contracts can be cancelled with 90 days notice. Hardware transfers cleanly at end-of-term.",
  },
  {
    q: "Do you offer financing?",
    a: "Yes — we work with infrastructure lenders that specialize in data center assets. PPA (power purchase agreement) and operating lease structures are available with 0% down.",
  },
];

const proIncludes = [
  "Battery energy stack (200kW - 2MW)",
  "SmartTec AURA load management",
  "Liquid cooling with thermal AI",
  "Triple-redundant cell banks",
  "24/7 NOC monitoring",
  "Sub-second telemetry dashboard",
  "Predictive failure detection",
  "Quarterly performance reviews",
  "Annual firmware updates",
  "Email + chat support",
];

const enterpriseIncludes = [
  "Everything in Pro, plus:",
  "Capacity from 2MW to 50MW+",
  "On-premise deployment option",
  "Custom SLA terms (uptime, latency)",
  "SSO/SAML + SCIM provisioning",
  "SOC 2 Type II evidence package",
  "Dedicated solutions engineer",
  "Custom integrations + APIs",
  "Dedicated Slack channel",
  "White-glove on-site commissioning",
  "Custom DPA + procurement terms",
];

export default function PricingPage() {
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
              className="max-w-3xl"
            >
              <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-5">
                <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
                [ PRICING ]
              </span>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-anybody font-extrabold tracking-tight leading-[0.9] mb-6">
                SmartTec<br />pricing.
              </h1>
              <p className="text-xl md:text-2xl text-slate/70 max-w-2xl mb-8">
                Simple, transparent pricing for all your grid-independence needs. Fixed-price proposals in 14 days.
              </p>
              <Link href="/contact" className="btn-hex btn-hex-md !border-greptile-green !bg-greptile-green !text-black">
                Start 14-day trial
              </Link>
            </motion.div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* Plans */}
        <section className="bg-background">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Pro plan */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col border border-dashed border-slate/30 bg-fog/50 p-8 md:p-10"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-space-mono text-[11px] uppercase tracking-widest text-slate/60">[ PRO PLAN ]</span>
                  <span className="font-space-mono text-[11px] uppercase tracking-wider text-greptile-green">Most popular</span>
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-anybody text-7xl font-extrabold tracking-tight">$48</span>
                  <span className="font-space-mono text-sm text-slate/60">/kW/month</span>
                </div>
                <p className="font-anybody text-sm text-slate/60 mb-8">200 kW — 2 MW · managed operations included</p>

                <ul className="space-y-3 mb-10 flex-1">
                  {proIncludes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="shrink-0 w-5 h-5 mt-0.5 bg-greptile-green flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                          <path d="M3 8.5L6.5 12L13 5" />
                        </svg>
                      </div>
                      <span className="text-sm text-slate/80">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact" className="btn-hex btn-hex-md !border-greptile-green !bg-greptile-green !text-black w-full justify-center">
                  Start 14-day trial
                </Link>
              </motion.div>

              {/* Enterprise plan */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col border-2 border-slate bg-slate p-8 md:p-10 text-fog"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-space-mono text-[11px] uppercase tracking-widest text-greptile-green">[ ENTERPRISE PLAN ]</span>
                  <span className="font-space-mono text-[11px] uppercase tracking-wider text-fog/60">Custom</span>
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-anybody text-7xl font-extrabold tracking-tight">Custom</span>
                </div>
                <p className="font-anybody text-sm text-fog/60 mb-8">2 MW — 50 MW+ · on-prem, custom SLA, dedicated team</p>

                <ul className="space-y-3 mb-10 flex-1">
                  {enterpriseIncludes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="shrink-0 w-5 h-5 mt-0.5 bg-greptile-green flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                          <path d="M3 8.5L6.5 12L13 5" />
                        </svg>
                      </div>
                      <span className="text-sm text-fog/80">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact" className="btn-hex btn-hex-md !border-greptile-green !bg-greptile-green !text-black w-full justify-center">
                  Talk to Sales
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* Special programs */}
        <section className="bg-background">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="border border-dashed border-slate/30 bg-fog/50 p-8 md:p-10"
              >
                <span className="font-space-mono text-[11px] uppercase tracking-widest text-slate/60 mb-4 block">[ OPEN SOURCE ]</span>
                <h3 className="text-3xl md:text-4xl font-anybody font-extrabold mb-3">Free for OSS projects</h3>
                <p className="text-slate/70 mb-6 leading-relaxed">
                  SmartTec is free for qualified non-commercial open source projects. We&apos;ll provide a 200kW deployment with managed operations for any qualifying OSS maintainer.
                </p>
                <Link href="/contact" className="btn-hex-outline btn-hex-sm !border-slate !bg-slate !text-slate">
                  Apply for OSS
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="border border-dashed border-slate/30 bg-fog/50 p-8 md:p-10"
              >
                <span className="font-space-mono text-[11px] uppercase tracking-widest text-slate/60 mb-4 block">[ STARTUP DISCOUNT ]</span>
                <h3 className="text-3xl md:text-4xl font-anybody font-extrabold mb-3">50% off for early-stage startups</h3>
                <p className="text-slate/70 mb-6 leading-relaxed">
                  Pre-Series A startups with under $2M raised in the past 12 months get 50% off SmartTec for the first 24 months. We&apos;ve funded 18 startups this way.
                </p>
                <Link href="/contact" className="btn-hex-outline btn-hex-sm !border-slate !bg-slate !text-slate">
                  Apply for startup discount
                </Link>
              </motion.div>
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
                Pricing questions.
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
          </div>
        </section>
      </div>
    </PageShell>
  );
}