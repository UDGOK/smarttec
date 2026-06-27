"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ReliabilityFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
}

const reliabilityFeatures: ReliabilityFeature[] = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
    title: "Redundant Power",
    description: "Dual UPS systems with automatic failover ensure continuous operation during power interruptions. N+1 configuration guarantees uptime even during maintenance.",
    badge: "99.99% Uptime",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4l8 4v6c0 5.25-3.5 10-8 12-4.5-2-8-6.75-8-12V8l8-4z" />
        <path d="M12 16l2.5 2.5 5.5-5.5" />
      </svg>
    ),
    title: "SOC 2 / NERC-Compliant",
    description: "Full compliance with SOC 2 Type II and NERC CIP standards. End-to-end encryption, audit logging, and continuous security monitoring across all infrastructure.",
    badge: "Certified",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="6" width="24" height="20" rx="2" />
        <path d="M4 12h24" />
        <path d="M10 6v6" />
        <path d="M22 6v6" />
        <path d="M10 17h4" />
        <path d="M10 21h8" />
        <path d="M22 17v8" />
        <path d="M19 20h6" />
      </svg>
    ),
    title: "Enterprise SLAs",
    description: "Mission-critical service level agreements with financial guarantees. 24/7 priority support, dedicated account managers, and rapid response time commitments.",
    badge: "SLA-Backed",
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
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

function ReliabilityCard({ feature, index }: { feature: ReliabilityFeature; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      style={{ transitionDelay: `${index * 0.12}s` }}
      className="group relative bg-[#111315] border border-[#1F2328] rounded-2xl p-8 overflow-hidden"
      whileHover={{
        borderColor: "#84cc16",
        boxShadow: "0 0 40px rgba(132, 204, 22, 0.2), 0 0 80px rgba(132, 204, 22, 0.08)",
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 50% 0%, rgba(132, 204, 22, 0.1) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Badge */}
        {feature.badge && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B8FF5C]/10 border border-[#B8FF5C]/20 text-[#B8FF5C] text-xs font-medium mb-5">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 1l1.5 3 3.5.5-2.5 2.5.5 3.5L6 9l-3 1.5.5-3.5L1 4.5l3.5-.5L6 1z" fill="currentColor" />
            </svg>
            {feature.badge}
          </div>
        )}

        {/* Icon */}
        <div className="w-14 h-14 rounded-xl bg-[#1a1d21] border border-[#2a2d32] flex items-center justify-center mb-6 text-[#B8FF5C] group-hover:border-[#B8FF5C]/30 group-hover:bg-[#1a1d21]/80 transition-all duration-300">
          {feature.icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#B8FF5C] transition-colors duration-300">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors duration-300">
          {feature.description}
        </p>
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div
          className="absolute top-4 right-4 w-16 h-16"
          style={{
            background: "radial-gradient(circle, rgba(132, 204, 22, 0.12) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#84cc16]/0 to-transparent group-hover:via-[#84cc16]/50 transition-all duration-500" />
    </motion.div>
  );
}

export function Reliability() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="reliability" className="relative py-24 md:py-32 bg-[#0A0B0D]">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

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
            Enterprise Reliability
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Zero-compromise{" "}
            <span className="text-[#B8FF5C]">uptime guarantees</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Industrial-grade infrastructure with redundant systems, compliance certifications,
            and enterprise service agreements that protect your operations 24/7.
          </p>
        </motion.div>

        {/* Reliability cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {reliabilityFeatures.map((feature, index) => (
            <ReliabilityCard key={feature.title} feature={feature} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Reliability;