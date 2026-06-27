"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";

const customerSections = [
  {
    company: "StackEdge Systems",
    stars: "12 sites",
    forks: "2 MW",
    repos: "Hyperscale edge",
    files: [
      { file: "stackedge/integrations.yaml", category: "Redundancy", content: "Triple-redundant cell banks deployed.", w: "w-3/4" },
      { file: "stackedge/thermal.config", category: "Thermal", content: "AI liquid cooling engaged, 1.8°C variance.", w: "w-4/5" },
      { file: "stackedge/sla.report", category: "Reliability", content: "99.997% uptime maintained over 18 months.", w: "w-2/3" },
    ],
  },
  {
    company: "CloudVault",
    stars: "3 sites",
    forks: "500 kW",
    repos: "Mid-market SaaS",
    files: [
      { file: "cloudvault/fleet.json", category: "Load", content: "Diesel generators fully decommissioned.", w: "w-3/4" },
      { file: "cloudvault/integrations.yaml", category: "Microgrid", content: "Edge microgrid active across 3 sites.", w: "w-4/5" },
      { file: "cloudvault/forecast.api", category: "AI", content: "AURA predictive layer integrated with scheduler.", w: "w-2/3" },
    ],
  },
  {
    company: "Prism Analytics",
    stars: "8 sites",
    forks: "1.5 MW",
    repos: "Data infrastructure",
    files: [
      { file: "prism/load-forecast.json", category: "AURA", content: "72-hour load forecast drift under 2.1%.", w: "w-4/5" },
      { file: "prism/thermal.config", category: "Cooling", content: "Sub-2°C cell variance across all banks.", w: "w-3/4" },
      { file: "prism/billing.api", category: "Billing", content: "PPA metering integrated with cloud cost tooling.", w: "w-1/2" },
    ],
  },
  {
    company: "Fortis Networks",
    stars: "5 sites",
    forks: "800 kW",
    repos: "Federal / Defense",
    files: [
      { file: "fortis/compliance.audit", category: "Compliance", content: "SOC 2 Type II evidence packaged.", w: "w-3/4" },
      { file: "fortis/encryption.config", category: "Security", content: "FIPS 140-3 modules verified.", w: "w-2/3" },
      { file: "fortis/access.policy", category: "Access", content: "Zero standing privilege on power controls.", w: "w-4/5" },
    ],
  },
  {
    company: "Nimbus Edge",
    stars: "24 sites",
    forks: "300 kW",
    repos: "CDN / Edge compute",
    files: [
      { file: "nimbus/thermal.config", category: "Cooling", content: "Liquid cooling lifts cycle life by 40%.", w: "w-3/4" },
      { file: "nimbus/edge-routing.json", category: "Routing", content: "Sub-10ms failover verified across all sites.", w: "w-4/5" },
      { file: "nimbus/ppa.contract", category: "PPA", content: "Power purchase agreement active with utility.", w: "w-2/5" },
    ],
  },
  {
    company: "Hadron Compute",
    stars: "2 sites",
    forks: "5 MW",
    repos: "AI infrastructure",
    files: [
      { file: "hadron/sla.report", category: "SLA", content: "99.997% uptime maintained, 0 payouts.", w: "w-4/5" },
      { file: "hadron/grid-mix.json", category: "Grid", content: "73% reduction in grid draw since launch.", w: "w-3/4" },
      { file: "hadron/scaling.config", category: "Scaling", content: "Capacity scaled 3x without re-engineering.", w: "w-2/5" },
    ],
  },
];

const liveFeed = [
  { type: "Logic", message: "Outdated firmware version detected on StackEdge site PHX-2", site: "stackedge/phx-2", code: "#4421" },
  { type: "Compliance", message: "SOC 2 audit evidence gap in Fortis Networks Q3 log export", site: "fortis/audit-q3", code: "#4420" },
  { type: "Thermal", message: "Cell variance drift detected on Nimbus Edge cluster CDG-1", site: "nimbus/cdg-1", code: "#4419" },
  { type: "Load", message: "AURA forecast accuracy degraded 3.1% on CloudVault use-east-1", site: "cloudvault/use1", code: "#4418" },
  { type: "Reliability", message: "Predictive maintenance flag: Prism Analytics battery bank 7", site: "prism/bank-7", code: "#4417" },
  { type: "Logic", message: "Stale configuration on Hadron Compute SLA reporting endpoint", site: "hadron/sla-api", code: "#4416" },
  { type: "Thermal", message: "Liquid coolant flow rate outside tolerance on StackEdge AUS-1", site: "stackedge/aus-1", code: "#4415" },
  { type: "Compliance", message: "Annual penetration test report upload required for Fortis FY27", site: "fortis/pentest", code: "#4414" },
];

export default function DeploymentsPage() {
  return (
    <PageShell>
      <div className="relative bg-background bg-paper-plus-ruled">
        <section className="relative">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28 lg:py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl"
            >
              <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-5">
                <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
                [ DEPLOYMENTS ]
              </span>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-anybody font-extrabold tracking-tight leading-[0.9] mb-6">
                SmartTec<br />
                in action.
              </h1>
              <p className="text-xl md:text-2xl text-slate/70 max-w-2xl">
                See SmartTec battery stacks operating in the most demanding enterprise environments — hyperscale, federal, edge, AI.
              </p>
            </motion.div>

            {/* Category pills */}
            <div className="mt-12 flex flex-wrap gap-2">
              {["All", "Hyperscale", "Federal", "Edge", "AI Infrastructure", "CDN", "Mid-market"].map((c, i) => (
                <button
                  key={c}
                  className={`font-space-mono text-xs uppercase tracking-wider px-4 py-2 border border-dashed transition-colors ${i === 0 ? "bg-greptile-green border-greptile-green text-black" : "border-slate/30 text-slate/70 hover:bg-greptile-green/10 hover:text-slate"}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* Customer sections */}
        {customerSections.map((section, idx) => (
          <section key={section.company} className="relative bg-background">
            <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="mb-10"
              >
                <div className="flex flex-wrap items-end justify-between gap-6 mb-8">
                  <div>
                    <h2 className="text-4xl sm:text-5xl font-anybody font-extrabold text-slate tracking-tight mb-3">
                      {section.company}
                    </h2>
                    <div className="flex flex-wrap gap-4 font-space-mono text-xs uppercase tracking-wider text-slate/60">
                      <span>[ {section.repos} ]</span>
                      <span>[ {section.forks} ]</span>
                      <span>[ {section.stars} ]</span>
                    </div>
                  </div>
                  <Link href={`#case-${section.company.toLowerCase().replace(/\s+/g, '-')}`} className="btn-hex btn-hex-sm !border-slate !bg-greptile-green !text-black">
                    View case study
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
                  {section.files.map((f, i) => (
                    <motion.div
                      key={f.file}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                      className="group flex flex-col overflow-hidden rounded-lg border border-dashed border-slate/30 bg-fog/50 hover:bg-greptile-green/10 transition-colors"
                    >
                      <div className="border-b border-dashed border-slate/30 px-4 py-3 flex items-center gap-2">
                        <svg width="14" height="14" fill="currentColor" viewBox="0 0 256 256" className="h-3.5 w-3.5 text-slate/40">
                          <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z" />
                        </svg>
                        <span className="font-space-mono text-[11px] font-medium truncate text-slate/60">{f.file}</span>
                      </div>
                      <div className="flex-1 px-4 py-3 flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <span className="font-space-mono text-[10px] uppercase tracking-wider text-slate/40">{f.category}</span>
                          <span className="font-space-mono text-[10px] text-slate/30">·</span>
                          <span className="font-space-mono text-[10px] text-slate/40">smarttec</span>
                        </div>
                        <p className="font-anybody text-base font-bold leading-snug text-slate">{f.content}</p>
                      </div>
                      <div className="flex items-center justify-center gap-1.5 border-t border-dashed border-slate/30 px-4 py-2.5 font-space-mono text-[11px] uppercase tracking-wider text-slate/80 bg-fog/30">
                        See PR <span aria-hidden>→</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
            {idx < customerSections.length - 1 && <hr className="border-border w-full opacity-20" />}
          </section>
        ))}

        <hr className="border-border w-full opacity-30" />

        {/* Live Feed */}
        <section className="relative bg-background">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
                <span className="w-1.5 h-1.5 bg-bloom rounded-full animate-pulse-glow" />
                [ LIVE FROM THE FLEET ]
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-anybody font-extrabold text-slate tracking-tight">
                Catching issues in real-time.
              </h2>
              <p className="mt-4 text-lg text-slate/70 max-w-2xl">
                What SmartTec AURA is flagging across the deployed fleet right now.
              </p>
            </motion.div>

            <div className="border border-dashed border-slate/30 bg-fog/50">
              {liveFeed.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-4 px-5 py-4 ${i !== liveFeed.length - 1 ? "border-b border-dashed border-slate/20" : ""} hover:bg-greptile-green/10 transition-colors`}
                >
                  <span className="font-space-mono text-[10px] uppercase tracking-wider text-slate/40 w-24 shrink-0">{item.type}</span>
                  <span className="font-anybody text-sm md:text-base text-slate flex-1">{item.message}</span>
                  <span className="font-space-mono text-[11px] text-slate/60 hidden md:inline">{item.site}</span>
                  <span className="font-space-mono text-[11px] text-slate/40 shrink-0">{item.code}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button className="btn-hex-outline btn-hex-sm !border-slate !bg-slate !text-slate">
                Load more
              </button>
            </div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* Bottom CTA */}
        <section className="relative bg-greptile-green border-y border-slate/20 overflow-hidden">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28 text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-anybody font-extrabold text-slate tracking-tight mb-8">
              See SmartTec<br />power your fleet.
            </h2>
            <div className="btn-hex-group justify-center">
              <Link href="/contact" className="btn-hex-outline btn-hex-md !border-slate !bg-slate !text-slate xl:btn-hex-lg">
                Book a demo
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