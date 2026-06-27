"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface IntegrationOption {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const integrations: IntegrationOption[] = [
  {
    number: "01",
    title: "Direct DC Coupling",
    description: "Seamless integration with existing solar arrays. Direct DC connection enables maximum efficiency by eliminating conversion losses between photovoltaic generation and storage systems.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="14" cy="14" r="3" />
        <path d="M14 4v3" />
        <path d="M14 21v3" />
        <path d="M4 14h3" />
        <path d="M21 14h3" />
        <path d="M6.93 6.93l2.12 2.12" />
        <path d="M18.95 18.95l2.12 2.12" />
        <path d="M6.93 21.07l2.12-2.12" />
        <path d="M18.95 9.05l2.12-2.12" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "AC Interconnection",
    description: "Grid-tied deployment with bidirectional power flow. Advanced inverters manage grid synchronization, net metering, and seamless transition during grid disturbances.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="8" width="8" height="12" rx="1" />
        <rect x="17" y="8" width="8" height="12" rx="1" />
        <path d="M11 11h6" />
        <path d="M11 14h6" />
        <path d="M11 17h6" />
        <path d="M14 6v4" />
        <path d="M14 18v4" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Hybrid Integration",
    description: "Multi-source architecture combining solar, wind, and grid inputs. Intelligent load balancing optimizes energy distribution across all available power sources.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="14" cy="14" r="5" />
        <path d="M14 4v5" />
        <path d="M14 19v5" />
        <path d="M4 14h5" />
        <path d="M19 14h5" />
        <path d="M7.05 7.05l3.54 3.54" />
        <path d="M17.41 17.41l3.54 3.54" />
        <path d="M7.05 20.95l3.54-3.54" />
        <path d="M17.41 10.59l3.54-3.54" />
        <circle cx="14" cy="14" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Standalone Deployment",
    description: "Complete off-grid solution for remote locations. Self-sustaining infrastructure with integrated generation, storage, and intelligent load management systems.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="6" width="20" height="16" rx="2" />
        <path d="M4 10h20" />
        <path d="M10 6v4" />
        <path d="M18 6v4" />
        <path d="M9 15h4" />
        <path d="M9 18h7" />
        <circle cx="19" cy="16" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

function IntegrationCard({ option, index }: { option: IntegrationOption; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      style={{ transitionDelay: `${index * 0.1}s` }}
      className="group relative bg-[#111315] border border-[#1F2328] rounded-2xl p-7 overflow-hidden"
      whileHover={{
        borderColor: "#84cc16",
        boxShadow: "0 0 30px rgba(132, 204, 22, 0.15), 0 0 60px rgba(132, 204, 22, 0.05)",
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 50% 0%, rgba(132, 204, 22, 0.08) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Number badge */}
        <div className="flex items-center gap-3 mb-5">
          <span className="text-xs font-mono text-[#B8FF5C]/60 tracking-wider">
            {option.number}
          </span>
          <div className="flex-1 h-px bg-[#1F2328] group-hover:bg-[#B8FF5C]/20 transition-colors duration-300" />
        </div>

        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-[#1a1d21] border border-[#2a2d32] flex items-center justify-center mb-5 text-[#B8FF5C] group-hover:border-[#B8FF5C]/30 group-hover:bg-[#1a1d21]/80 transition-all duration-300">
          {option.icon}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-[#B8FF5C] transition-colors duration-300">
          {option.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors duration-300">
          {option.description}
        </p>
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div
          className="absolute top-4 right-4 w-16 h-16"
          style={{
            background: "radial-gradient(circle, rgba(132, 204, 22, 0.1) 0%, transparent 70%)",
          }}
        />
      </div>
    </motion.div>
  );
}

export function IntegrationCards() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="integrations" className="relative py-24 md:py-32 bg-[#0A0B0D]">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, transparent 0%, rgba(10, 11, 13, 0.5) 50%, transparent 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block text-xs font-mono uppercase tracking-widest text-[#B8FF5C] mb-4">
            Deployment Options
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Flexible <span className="text-[#B8FF5C]">integration methods</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose the deployment architecture that best fits your infrastructure requirements and energy goals.
          </p>
        </motion.div>

        {/* Integration cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {integrations.map((option, index) => (
            <IntegrationCard key={option.number} option={option} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default IntegrationCards;