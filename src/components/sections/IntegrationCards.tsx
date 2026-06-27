"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface IntegrationStep {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const integrationSteps: IntegrationStep[] = [
  {
    number: "01",
    title: "Site Survey & Engineering",
    description:
      "Full power audit, structural assessment, and custom stack design by our engineering team.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Modular Deployment",
    description:
      "Pre-tested modules ship to your site. Commissioning takes days, not months.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Managed Operations",
    description:
      "24/7 monitoring, predictive maintenance, and quarterly performance reviews included.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

export function IntegrationCards() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="integrations" className="relative py-24 md:py-32 bg-[#2A2A34]">
      {/* Dotted grid background texture */}
      <div 
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `radial-gradient(circle, #34E2A0 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block text-xs font-mono uppercase tracking-widest text-[#34E2A0] mb-4">
            [ HOW IT PLUGS IN ]
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-['Archivo_Expanded',sans-serif]">
            Three ways to deploy.
          </h2>
        </motion.div>

        {/* Integration cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {integrationSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative"
            >
              <div className="relative bg-[#2A2A34] border border-[#3A3B44] rounded-2xl p-8 transition-all duration-300 hover:border-[#34E2A0]/50">
                {/* Icon container */}
                <div className="w-12 h-12 flex items-center justify-center mb-6 text-[#34E2A0]">
                  {step.icon}
                </div>

                {/* Number badge */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-sm text-[#34E2A0] font-medium">
                    [ {step.number} ]
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-4 font-['Archivo_Expanded',sans-serif]">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#9A9BA3] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IntegrationCards;