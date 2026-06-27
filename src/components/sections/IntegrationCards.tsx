"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    number: "01",
    kicker: "REDUNDANCY",
    title: "Triple-redundant battery banks. If one fails, two more take over instantly. No single point of failure.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4v8" />
        <path d="M12 8l4-4 4 4" />
        <rect x="6" y="12" width="20" height="14" rx="2" />
        <path d="M11 12v14" />
        <path d="M16 12v14" />
        <path d="M21 12v14" />
        <circle cx="11" cy="19" r="1.5" fill="currentColor" />
        <circle cx="16" cy="19" r="1.5" fill="currentColor" />
        <circle cx="21" cy="19" r="1.5" fill="currentColor" />
      </svg>
    ),
    accent: "bg-greptile-green",
  },
  {
    number: "02",
    kicker: "COMPLIANCE",
    title: "SOC 2 Type II certified. Annual independent audits. Full audit logs. Encryption at rest and in transit.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4l8 4v6c0 5.25-3.5 10-8 12-4.5-2-8-6.75-8-12V8l8-4z" />
        <path d="M12 16l2.5 2.5 5.5-5.5" />
      </svg>
    ),
    accent: "bg-seafoam",
  },
  {
    number: "03",
    kicker: "GUARANTEE",
    title: "99.997% financially-backed uptime SLA. We&apos;ve never hit a payout trigger in 6 years of operation.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M28 22v4H4v-4" />
        <path d="M28 6H4v4l3 3" />
        <path d="M8 13v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V13" />
        <path d="M12 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </svg>
    ),
    accent: "bg-ice",
  },
];

function PillarCard({ pillar, index }: { pillar: typeof pillars[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-lg border border-dashed border-border bg-fog/50 hover:bg-greptile-green/10 transition-all"
    >
      <div className={`h-2 ${pillar.accent}`} />
      <div className="p-7 md:p-9 flex flex-col gap-4 flex-1">
        <div className="flex items-start justify-between">
          <span className="font-anybody text-5xl md:text-6xl font-bold text-slate/15 select-none leading-none">
            {pillar.number}
          </span>
          <div className="w-14 h-14 border border-dashed border-slate/30 bg-fog flex items-center justify-center text-slate group-hover:bg-greptile-green group-hover:text-black transition-colors">
            {pillar.icon}
          </div>
        </div>

        <div>
          <div className="font-space-mono text-[11px] uppercase tracking-wider text-slate/60 mb-3">
            [ {pillar.kicker} ]
          </div>
          <h3
            className="font-anybody text-lg md:text-xl font-bold text-slate leading-relaxed"
            dangerouslySetInnerHTML={{ __html: pillar.title }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export function IntegrationCards() {
  return (
    <section id="reliability" className="relative bg-background section-wrapper-compact">
      <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-20 max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
            <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
            [ RELIABILITY ]
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-anybody font-bold text-slate tracking-tight leading-[0.95]">
            Built to run.<br />Guaranteed to stay up.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {pillars.map((p, i) => (
            <PillarCard key={p.kicker} pillar={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default IntegrationCards;