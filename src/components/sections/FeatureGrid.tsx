"use client";

import { motion } from "framer-motion";

interface Feature {
  label: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  accent: string;
}

const features: Feature[] = [
  {
    label: "01",
    title: "Battery Energy Stack",
    description: "Proprietary lithium-iron-phosphate cells. 20-year design life. Made in the USA. NDAA §889 / FEOC-compliant supply chain.",
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="6" width="20" height="22" rx="2" />
        <rect x="11" y="2" width="10" height="6" rx="1" />
        <line x1="11" y1="14" x2="21" y2="14" />
        <line x1="11" y1="20" x2="21" y2="20" />
        <line x1="11" y1="26" x2="17" y2="26" />
      </svg>
    ),
    accent: "bg-greptile-green",
  },
  {
    label: "02",
    title: "AI Load Management",
    description: "Predictive positioning reserves pre-charged capacity 72 hours before demand peaks. AURA engine.",
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="16" r="3" />
        <path d="M16 2v4M16 26v4M2 16h4M26 16h4M5.6 5.6l2.8 2.8M23.6 23.6l2.8 2.8M5.6 26.4l2.8-2.8M23.6 8.4l2.8-2.8" />
      </svg>
    ),
    accent: "bg-seafoam",
  },
  {
    label: "03",
    title: "Thermal AI",
    description: "Liquid cooling with sub-2°C cell variance. 40% longer cycle life vs. passive systems.",
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4v18" />
        <path d="M10 12c0 4 6 4 6 8" />
        <path d="M22 12c0 4-6 4-6 8" />
        <circle cx="16" cy="26" r="2" />
      </svg>
    ),
    accent: "bg-ice",
  },
  {
    label: "04",
    title: "Triple-Redundant Cells",
    description: "If one bank fails, two more take over in under 10ms. Zero single points of failure.",
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="10" width="6" height="14" rx="1" />
        <rect x="13" y="10" width="6" height="14" rx="1" />
        <rect x="20" y="10" width="6" height="14" rx="1" />
        <path d="M9 14v6M16 14v6M23 14v6" />
      </svg>
    ),
    accent: "bg-lavender",
  },
  {
    label: "05",
    title: "Real-Time Monitoring",
    description: "Sub-second telemetry. Predictive failure alerts. Full audit trail. SOC 2 Type II.",
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="6" width="24" height="20" rx="2" />
        <path d="M4 12h24" />
        <path d="M8 18l4-4 4 4 8-8" />
      </svg>
    ),
    accent: "bg-peach",
  },
  {
    label: "06",
    title: "Modular Scaling",
    description: "Start at 200kW. Scale to 50MW+ without re-engineering. Pay-as-you-grow PPA available.",
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="10" height="10" rx="1" />
        <rect x="18" y="4" width="10" height="10" rx="1" />
        <rect x="4" y="18" width="10" height="10" rx="1" />
        <rect x="18" y="18" width="10" height="10" rx="1" />
      </svg>
    ),
    accent: "bg-pink",
  },
];

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-lg border border-dashed border-border bg-fog/50 hover:bg-greptile-green/10 transition-all duration-300"
    >
      {/* Top color band */}
      <div className={`h-2 ${feature.accent}`} />

      <div className="p-7 md:p-9 flex flex-col gap-5 flex-1">
        {/* Icon + number row */}
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 border border-dashed border-slate/30 bg-fog flex items-center justify-center text-slate group-hover:bg-greptile-green group-hover:text-black transition-colors">
            {feature.icon}
          </div>
          <span className="font-space-mono text-xs text-slate/40 font-bold tracking-wider">
            {feature.label}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-anybody text-xl md:text-2xl font-bold text-slate tracking-tight">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate/70 leading-relaxed">
          {feature.description}
        </p>

        {/* Bottom spacer */}
        <div className="mt-auto pt-2" />

        {/* Bottom border accent */}
        <div className={`border-t border-dashed ${feature.accent.replace("bg-", "border-")}/40 -mx-6 -mb-6 px-6 py-3 flex items-center justify-between text-slate/50 text-xs font-space-mono uppercase tracking-wider`}>
          <span>Spec sheet →</span>
          <span className="w-2 h-2 bg-greptile-green rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </motion.div>
  );
}

export function FeatureGrid() {
  return (
    <section className="relative bg-background section-wrapper-compact">
      <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-20"
        >
          <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
            <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
            [ CORE CAPABILITIES ]
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-anybody font-bold text-slate tracking-tight leading-[0.95] max-w-3xl mx-auto">
            Built for serious infrastructure.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureGrid;