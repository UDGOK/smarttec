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
      "Our team conducts a full power audit, RFQ analysis, and structural assessment. We handle the engineering — you just approve the plans.",
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
      "Pre-tested battery modules ship to your site. Our commissioning team installs and validates in days, not months. No construction, no downtime.",
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
      "24/7 monitoring, predictive maintenance, and quarterly performance reviews. We treat your infrastructure like it's ours.",
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
    <section id="integrations" className="relative py-24 md:py-32 bg-[#0A0B0D]">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block text-xs font-mono uppercase tracking-widest text-[#B8FF5C] mb-4">
            [ How It Plugs In ]
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            From contract to <span className="text-[#B8FF5C]">grid independence</span>
          </h2>
          <p className="text-[#8A8F98] text-lg max-w-2xl mx-auto">
            Three phases. Zero surprises. Your deployment roadmap from initial consultation to 24/7 operations.
          </p>
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
              <div className="relative bg-[#111315] border border-[#1F2328] rounded-2xl p-8 transition-all duration-300 hover:border-[#B8FF5C]/30 hover:bg-[#B8FF5C]/[0.03] hover:shadow-[0_0_20px_rgba(184,255,92,0.1)]">
                {/* Top accent line on hover */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#B8FF5C]/0 to-transparent group-hover:via-[#B8FF5C]/50 transition-all duration-500" />

                {/* Icon container */}
                <div className="w-12 h-12 rounded-xl bg-[#1a1d21] border border-[#2a2d32] flex items-center justify-center mb-6 text-[#B8FF5C] group-hover:border-[#B8FF5C]/30 group-hover:bg-[#1a1d21]/80 transition-all duration-300">
                  {step.icon}
                </div>

                {/* Number badge */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-sm text-[#B8FF5C] font-medium">
                    [ {step.number} ]
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-[#B8FF5C] transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#8A8F98] leading-relaxed group-hover:text-[#8A8F98]/80 transition-colors duration-300">
                  {step.description}
                </p>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-[#1F2328] group-hover:bg-[#B8FF5C]/20 transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IntegrationCards;