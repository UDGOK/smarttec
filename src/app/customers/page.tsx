"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";

const featuredQuote = {
  quote: "We tried more power infrastructure vendors than I can count. SmartTec is the only one that delivers what they promise — 90 days from signed contract to live operations, every single time. Their thermal AI is the moat.",
  author: "Marcus Thompson",
  role: "CTO · StackEdge Systems",
  initials: "MT",
};

const testimonials = [
  {
    quote: "SmartTec catches small issues that could have been very bad if they went to prod.",
    name: "Sarah Chen",
    role: "VP Ops · CloudVault",
    initials: "SC",
  },
  {
    quote: "Vouch chose SmartTec for its minimal setup requirements and immediate value delivery.",
    name: "Dan Goslen",
    role: "Sr. Eng · Vouch",
    initials: "DG",
  },
  {
    quote: "Greptile has tightened our feedback loops and freed up engineers to focus on higher-level design.",
    name: "Mark Tran",
    role: "Eng Mgr · WorkOS",
    initials: "MT",
  },
  {
    quote: "SmartTec helps the team do their best work. It levels everybody up.",
    name: "Anirudh Kamath",
    role: "Tech Lead · Browserbase",
    initials: "AK",
  },
  {
    quote: "From 50kW to 2MW without a single re-engineering cycle. That flexibility is rare.",
    name: "David Park",
    role: "CEO · Prism Analytics",
    initials: "DP",
  },
  {
    quote: "Best engineering partnership we&apos;ve ever had. These people actually pick up the phone.",
    name: "Elena Vasquez",
    role: "Director · Nimbus Edge",
    initials: "EV",
  },
];

const liveDeployments = [
  { type: "Logic", message: "Outdated firmware version detected on StackEdge site PHX-2", site: "stackedge/phx-2", code: "#4421" },
  { type: "Compliance", message: "SOC 2 audit evidence gap in Fortis Networks Q3 log export", site: "fortis/audit-q3", code: "#4420" },
  { type: "Thermal", message: "Cell variance drift detected on Nimbus Edge cluster CDG-1", site: "nimbus/cdg-1", code: "#4419" },
  { type: "Load", message: "AURA forecast accuracy degraded 3.1% on CloudVault use-east-1", site: "cloudvault/use1", code: "#4418" },
  { type: "Reliability", message: "Predictive maintenance flag: Prism Analytics battery bank 7", site: "prism/bank-7", code: "#4417" },
  { type: "Logic", message: "Stale configuration on Hadron Compute SLA reporting endpoint", site: "hadron/sla-api", code: "#4416" },
];

const stats = [
  { value: "12 MW", label: "Total deployed capacity" },
  { value: "40+", label: "Live customer sites" },
  { value: "99.997%", label: "Fleet-wide uptime" },
  { value: "$0", label: "SLA payouts to date" },
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
                [ CUSTOMERS ]
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-anybody font-extrabold tracking-tight leading-[0.95] mb-6">
                SmartTec powers<br />the modern data center.
              </h1>
              <p className="text-xl md:text-2xl text-slate/70 max-w-3xl mb-12">
                Discover how leading infrastructure teams are using SmartTec&apos;s battery energy stacks to eliminate grid dependency and ship faster.
              </p>
            </motion.div>

            {/* Featured quote card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="border border-dashed border-slate/30 bg-fog/50 p-8 md:p-10 max-w-3xl"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-greptile-green mb-4">
                <path d="M11 7H7.5C6.12 7 5 8.12 5 9.5V10c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-.5c0-.28.22-.5.5-.5H11c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zm0 6H7.5c-1.38 0-2.5 1.12-2.5 2.5V18c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-1.5c0-.28.22-.5.5-.5H11c.55 0 1-.45 1-1V14c0-.55-.45-1-1-1zm6-6h-3.5C12.12 7 11 8.12 11 9.5V10c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-.5c0-.28.22-.5.5-.5H17c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zm0 6h-3.5c-1.38 0-2.5 1.12-2.5 2.5V18c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-1.5c0-.28.22-.5.5-.5H17c.55 0 1-.45 1-1V14c0-.55-.45-1-1-1z" />
              </svg>
              <blockquote className="font-anybody text-xl md:text-2xl text-slate leading-relaxed italic mb-6">
                &ldquo;{featuredQuote.quote}&rdquo;
              </blockquote>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 border border-dashed border-slate/30 bg-fog flex items-center justify-center font-anybody font-bold text-slate">
                    {featuredQuote.initials}
                  </div>
                  <div>
                    <div className="font-anybody font-bold text-slate">{featuredQuote.author}</div>
                    <div className="font-space-mono text-[11px] uppercase tracking-wider text-slate/60">{featuredQuote.role}</div>
                  </div>
                </div>
                <Link href="#stackedge" className="font-anybody font-bold text-sm text-slate hover:text-greptile-green">
                  View case study →
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* Testimonial grid */}
        <section className="bg-background">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
                <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
                [ TESTIMONIALS ]
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-anybody font-extrabold text-slate tracking-tight leading-[0.95]">
                What our customers are saying.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex flex-col gap-4 p-6 md:p-7 border border-dashed border-slate/30 bg-fog/50 hover:bg-greptile-green/10 transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-slate/30">
                    <path d="M11 7H7.5C6.12 7 5 8.12 5 9.5V10c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-.5c0-.28.22-.5.5-.5H11c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zm0 6H7.5c-1.38 0-2.5 1.12-2.5 2.5V18c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-1.5c0-.28.22-.5.5-.5H11c.55 0 1-.45 1-1V14c0-.55-.45-1-1-1zm6-6h-3.5C12.12 7 11 8.12 11 9.5V10c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-.5c0-.28.22-.5.5-.5H17c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zm0 6h-3.5c-1.38 0-2.5 1.12-2.5 2.5V18c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-1.5c0-.28.22-.5.5-.5H17c.55 0 1-.45 1-1V14c0-.55-.45-1-1-1z" />
                  </svg>
                  <p
                    className="font-anybody text-base md:text-lg text-slate leading-relaxed italic flex-1"
                    dangerouslySetInnerHTML={{ __html: `&ldquo;${t.quote}&rdquo;` }}
                  />
                  <div className="flex items-center gap-3 pt-4 border-t border-dashed border-slate/20">
                    <div className="w-10 h-10 border border-dashed border-slate/30 bg-fog flex items-center justify-center font-anybody font-bold text-slate text-sm">
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-anybody font-bold text-slate text-sm">{t.name}</div>
                      <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/60">{t.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* Live fleet */}
        <section className="bg-fog border-y border-dashed border-silver">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
                <span className="w-1.5 h-1.5 bg-bloom rounded-full animate-pulse-glow" />
                [ LIVE FROM THE FLEET ]
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-anybody font-extrabold text-slate tracking-tight">
                See what SmartTec catches.
              </h2>
            </motion.div>

            <div className="border border-dashed border-slate/30 bg-background">
              {liveDeployments.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-4 px-5 py-4 ${i !== liveDeployments.length - 1 ? "border-b border-dashed border-slate/20" : ""} hover:bg-greptile-green/10 transition-colors`}
                >
                  <span className="font-space-mono text-[10px] uppercase tracking-wider text-slate/40 w-24 shrink-0">{item.type}</span>
                  <span className="font-anybody text-sm md:text-base text-slate flex-1">{item.message}</span>
                  <span className="font-space-mono text-[11px] text-slate/60 hidden md:inline">{item.site}</span>
                  <span className="font-space-mono text-[11px] text-slate/40 shrink-0">{item.code}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* Big stats */}
        <section className="bg-background">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28">
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
                Book Demo
              </Link>
              <Link href="/pricing" className="btn-hex btn-hex-md !border-slate !bg-slate !text-fog xl:btn-hex-lg">
                Start now
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}