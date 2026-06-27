"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="8" width="20" height="16" rx="2" />
        <path d="M10 8V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
        <path d="M16 14v4" />
        <path d="M14 16h4" />
      </svg>
    ),
    title: "Battery Energy Storage",
    description: "Advanced lithium-iron phosphate cells with intelligent load balancing for uninterrupted power delivery across extended off-grid operations.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4v4" />
        <path d="M8 8l2.83 2.83" />
        <path d="M24 8l-2.83 2.83" />
        <circle cx="16" cy="18" r="8" />
        <path d="M16 14v4l2.5 1.5" />
        <path d="M12 22c0 2 1.79 4 4 4s4-2 4-4" />
      </svg>
    ),
    title: "Thermal Management",
    description: "Precision climate control systems maintaining optimal operating temperatures for maximum hardware efficiency and longevity.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 16h4" />
        <path d="M24 16h4" />
        <rect x="8" y="8" width="16" height="16" rx="2" />
        <path d="M12 16l2-2 2 2 2-2 2 2" />
        <circle cx="16" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
    title: "Grid Independence",
    description: "Complete off-grid capability powered by integrated solar arrays and wind generation for true energy sovereignty.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="10" height="10" rx="1" />
        <rect x="18" y="4" width="10" height="10" rx="1" />
        <rect x="4" y="18" width="10" height="10" rx="1" />
        <rect x="18" y="18" width="10" height="10" rx="1" />
        <path d="M14 9h4" />
        <path d="M9 14v4" />
        <path d="M14 23h4" />
        <path d="M23 14v4" />
      </svg>
    ),
    title: "Modular Scaling",
    description: "Deploy any configuration from single pod to enterprise-grade infrastructure with hot-swappable modular components.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="6" width="24" height="16" rx="2" />
        <path d="M8 26h16" />
        <path d="M8 10h8" />
        <path d="M8 14h12" />
        <path d="M8 18h6" />
        <circle cx="22" cy="14" r="2" fill="currentColor" />
        <circle cx="22" cy="18" r="2" />
      </svg>
    ),
    title: "Real-time Monitoring",
    description: "AI-powered analytics dashboard providing instant visibility into power consumption, thermal metrics, and system health.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" />
        <path d="M8 22h16" />
        <path d="M10 22v4" />
        <path d="M22 22v4" />
        <path d="M14 26h4" />
      </svg>
    ),
    title: "Made-in-USA R&D",
    description: "Designed and engineered in California with domestic manufacturing ensuring quality control and supply chain resilience.",
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

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      style={{ transitionDelay: `${index * 0.1}s` }}
      className="group relative bg-[#111315] border border-[#1F2328] rounded-2xl p-8 overflow-hidden"
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
            background: "radial-gradient(circle, rgba(132, 204, 22, 0.1) 0%, transparent 70%)",
          }}
        />
      </div>
    </motion.div>
  );
}

export function FeatureGrid() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="features" className="relative py-24 md:py-32 bg-[#0A0B0D]">
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
            Core Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Built for <span className="text-[#B8FF5C]">uncompromising reliability</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Every system designed for zero-compromise performance in demanding
            environments where uptime is non-negotiable.
          </p>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default FeatureGrid;