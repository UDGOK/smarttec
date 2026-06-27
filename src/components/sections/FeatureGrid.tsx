"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Feature {
  label: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    label: "01",
    title: "Battery Energy Storage",
    description: "Proprietary lithium-iron phosphate cells. 20-year design life. Made in the USA.",
  },
  {
    label: "02",
    title: "Thermal Management",
    description: "AI-controlled cooling reduces PUE to 1.12 in average climates.",
  },
  {
    label: "03",
    title: "Grid Independence",
    description: "Zero draw from the public grid during peak pricing events.",
  },
  {
    label: "04",
    title: "Modular Scaling",
    description: "Start at 200kW. Scale to 50MW+ without re-engineering.",
  },
  {
    label: "05",
    title: "Real-Time Monitoring",
    description: "Sub-second power metrics. Predictive failure alerts. Full audit trail.",
  },
  {
    label: "06",
    title: "USA Manufacturing",
    description: "R&D and manufacturing in the USA. ITAR-compliant facilities.",
  },
];

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative bg-[#F2F2EF] border border-[#D9DAD5] rounded-sm p-8 transition-all duration-300 hover:border-[#34E2A0]/60"
    >
      {/* Chamfered label */}
      <div className="flex items-center gap-3 mb-5">
        <span className="inline-flex items-center justify-center w-10 h-10 bg-[#E9EAE6] border border-[#D9DAD5] text-[#34E2A0] font-mono text-sm font-bold transform skew-x-[-6deg] group-hover:bg-[#34E2A0]/10 group-hover:border-[#34E2A0]/40 transition-all duration-300">
          {feature.label}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg md:text-xl font-semibold text-[#2C2C38] mb-3" style={{ fontFamily: "'Archivo Expanded', sans-serif" }}>
        {feature.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-[#6E7079] leading-relaxed">
        {feature.description}
      </p>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-px h-8 bg-[#D9DAD5] rotate-45 origin-bottom-right group-hover:bg-[#34E2A0]/40 transition-colors duration-300" />
        <div className="absolute top-0 right-0 w-px h-12 bg-[#D9DAD5] rotate-45 origin-bottom-right group-hover:bg-[#34E2A0]/40 transition-colors duration-300" />
      </div>
    </motion.div>
  );
}

export function FeatureGrid() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="features" className="relative py-24 md:py-32 bg-[#E9EAE6] overflow-hidden">
      {/* Measurement tick marks along section edges */}
      <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between py-8 pointer-events-none">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <div key={i} className="h-px w-4 bg-[#6E7079]/20" />
        ))}
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-8 flex flex-col justify-between py-8 pointer-events-none">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <div key={i} className="h-px w-4 bg-[#6E7079]/20 ml-auto" />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-8 lg:px-12">
        {/* Section header */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block text-xs font-mono uppercase tracking-widest text-[#6E7079] mb-4">
            [ CORE CAPABILITIES ]
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C2C38] mb-6" style={{ fontFamily: "'Archivo Expanded', sans-serif" }}>
            Built for serious infrastructure.
          </h2>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureGrid;
