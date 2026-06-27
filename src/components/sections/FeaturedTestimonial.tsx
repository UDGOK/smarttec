"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Deployment {
  id: string;
  customer: string;
  file: string;
  filename: string;
  stats: { label: string; value: string }[];
  highlight: { type: "add" | "del"; content: string; w: string }[];
  testimonial: string;
  color: "seafoam" | "ice" | "lavender" | "peach" | "pink" | "sky";
}

const deployments: Deployment[] = [
  {
    id: "stackedge",
    customer: "StackEdge Systems",
    file: "stackedge/deployment.json",
    filename: "deployment.json",
    stats: [
      { label: "Capacity", value: "2MW" },
      { label: "Sites", value: "12" },
      { label: "Regions", value: "US-South" },
    ],
    highlight: [
      { type: "del", content: "Grid dependency: 73% baseline", w: "w-3/4" },
      { type: "add", content: "Battery autonomy: 96 hours", w: "w-4/5" },
      { type: "add", content: "PUE: 1.08 (industry avg 1.58)", w: "w-2/3" },
    ],
    testimonial: "73% grid reduction in year one. Zero downtime across 12 sites.",
    color: "seafoam",
  },
  {
    id: "cloudvault",
    customer: "CloudVault",
    file: "cloudvault/integrations.yaml",
    filename: "integrations.yaml",
    stats: [
      { label: "Capacity", value: "500kW" },
      { label: "Sites", value: "3" },
      { label: "Regions", value: "US-East" },
    ],
    highlight: [
      { type: "add", content: "Edge microgrid active", w: "w-3/4" },
      { type: "del", content: "Generator fallback removed", w: "w-2/5" },
      { type: "add", content: "AI-driven load forecasting", w: "w-5/6" },
    ],
    testimonial: "We retired our diesel generators. SmartTec handles peak demand solo.",
    color: "ice",
  },
  {
    id: "prism",
    customer: "Prism Analytics",
    file: "prism/fleet-status.json",
    filename: "fleet-status.json",
    stats: [
      { label: "Capacity", value: "1.5MW" },
      { label: "Sites", value: "8" },
      { label: "Regions", value: "US-West" },
    ],
    highlight: [
      { type: "add", content: "AURA predictive layer online", w: "w-4/5" },
      { type: "add", content: "Sub-10ms failover verified", w: "w-3/4" },
      { type: "del", content: "Manual load shedding disabled", w: "w-2/5" },
    ],
    testimonial: "From 50kW to 1.5MW with no re-engineering. Genuinely modular.",
    color: "lavender",
  },
  {
    id: "fortis",
    customer: "Fortis Networks",
    file: "fortis/compliance.audit",
    filename: "compliance.audit",
    stats: [
      { label: "Capacity", value: "800kW" },
      { label: "Sites", value: "5" },
      { label: "Regions", value: "Federal" },
    ],
    highlight: [
      { type: "add", content: "SOC 2 Type II evidence: collected", w: "w-3/4" },
      { type: "add", content: "FIPS 140-3 modules verified", w: "w-2/3" },
      { type: "del", content: "Pen-test findings: 0 critical", w: "w-4/5" },
    ],
    testimonial: "Compliance docs came upfront. Procurement signed in 11 days.",
    color: "peach",
  },
  {
    id: "nimbus",
    customer: "Nimbus Edge",
    file: "nimbus/thermal.config",
    filename: "thermal.config",
    stats: [
      { label: "Capacity", value: "300kW" },
      { label: "Sites", value: "24" },
      { label: "Regions", value: "Global" },
    ],
    highlight: [
      { type: "add", content: "Liquid cooling: 40% cycle gain", w: "w-3/4" },
      { type: "add", content: "Cell variance: 1.8°C (spec 2°C)", w: "w-4/5" },
      { type: "del", content: "CRAH units decommissioned", w: "w-1/2" },
    ],
    testimonial: "40% longer cycle life. The thermal AI is the moat.",
    color: "sky",
  },
  {
    id: "hadron",
    customer: "Hadron Compute",
    file: "hadron/sla.report",
    filename: "sla.report",
    stats: [
      { label: "Capacity", value: "5MW" },
      { label: "Sites", value: "2" },
      { label: "Regions", value: "US-Central" },
    ],
    highlight: [
      { type: "add", content: "Uptime: 99.997% over 18 months", w: "w-4/5" },
      { type: "add", content: "SLA payouts: $0", w: "w-1/2" },
      { type: "del", content: "Maintenance windows: zero unplanned", w: "w-3/4" },
    ],
    testimonial: "We've never hit the SLA payout trigger. Not once in 6 years.",
    color: "pink",
  },
];

const colorBorder: Record<Deployment["color"], string> = {
  seafoam: "border-seafoam/30",
  ice: "border-ice/30",
  lavender: "border-lavender/30",
  peach: "border-peach/30",
  pink: "border-pink/30",
  sky: "border-sky/30",
};

function DeploymentCard({ d, delay }: { d: Deployment; delay: number }) {
  return (
    <motion.a
      href="#examples"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group block transition-opacity hover:opacity-95"
    >
      {/* Header */}
      <div className="py-4">
        <h3 className="font-anybody text-xl md:text-2xl font-bold text-slate">{d.customer}</h3>
        <div className="mt-3 flex flex-wrap gap-4">
          {d.stats.map((s) => (
            <div key={s.label} className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center border border-fog/30 bg-fog/10 text-fog bg-slate/10 border-slate/20 text-slate/70">
                <span className="font-space-mono text-[10px] font-bold">
                  {s.label[0]}
                </span>
              </div>
              <div className="font-space-mono text-slate">
                <div className="text-[11px] font-semibold">{s.value}</div>
                <div className="text-[9px] text-slate/60">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Code-diff card */}
      <div className={`flex flex-col overflow-hidden rounded-lg border border-dashed bg-fog/50 ${colorBorder[d.color]}`}>
        <div className={`border-b border-dashed px-4 py-2.5 flex items-center gap-2 ${colorBorder[d.color]}`}>
          <svg width="14" height="14" fill="currentColor" viewBox="0 0 256 256" className="h-3.5 w-3.5 text-slate/40">
            <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z" />
          </svg>
          <span className="font-space-mono text-[11px] font-medium truncate text-slate/60">{d.filename}</span>
        </div>

        <div className={`flex flex-1 flex-col justify-center border-b border-dashed py-1.5 ${colorBorder[d.color]}`}>
          {d.highlight.map((h, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 px-4 py-1 ${h.type === "del" ? "bg-magenta/10" : "bg-seafoam/10"}`}
            >
              <span className="w-5 shrink-0 text-right font-space-mono text-[11px] text-slate/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={`shrink-0 font-space-mono text-[11px] font-bold ${
                  h.type === "del" ? "text-magenta" : "text-greptile-green"
                }`}
              >
                {h.type === "del" ? "-" : "+"}
              </span>
              <div className={`h-3 rounded-full ${h.w} ${h.type === "del" ? "bg-magenta/40" : "bg-greptile-green/40"}`} />
            </div>
          ))}
        </div>

        <div className="flex flex-1 flex-col px-4 py-3">
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="SmartTec" width={16} height={16} className="h-4 w-4" />
            <span className="text-[13px] text-slate/70">smarttec</span>
          </div>
          <p className="mt-2 font-anybody text-sm font-bold leading-tight text-slate">
            &ldquo;{d.testimonial}&rdquo;
          </p>
        </div>

        <div className={`flex items-center justify-center gap-1.5 border-t border-dashed px-4 py-2.5 font-space-mono text-[11px] uppercase tracking-wider text-slate/80 bg-fog/15 ${colorBorder[d.color]}`}>
          See deployment
          <svg width="12" height="12" fill="currentColor" viewBox="0 0 256 256" className="h-3 w-3">
            <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
          </svg>
        </div>
      </div>
    </motion.a>
  );
}

export function FeaturedTestimonial() {
  return (
    <section className="relative bg-background py-16 md:py-24">
      <div className="relative mx-auto w-full max-w-[1550px] px-6 md:px-12 lg:px-16">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
            <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
            [ DEPLOYMENTS ]
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-anybody font-bold text-slate tracking-tight">
            What changed after going grid-independent.
          </h2>
        </motion.div>

        {/* 3-column grid of deployment cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {deployments.map((d, i) => (
            <DeploymentCard key={d.id} d={d} delay={(i % 3) * 0.1} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a href="#examples" className="btn-hex font-space-mono text-sm !bg-lavender !text-slate">
            See more deployments
          </a>
        </div>
      </div>
    </section>
  );
}

export default FeaturedTestimonial;