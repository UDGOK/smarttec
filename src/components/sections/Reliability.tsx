"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui";

interface ReliabilityPillar {
  id: string;
  number: string;
  kicker: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const reliabilityPillars: ReliabilityPillar[] = [
  {
    id: "redundancy",
    number: "01",
    kicker: "REDUNDANCY",
    title: "Redundant Power Architecture",
    description:
      "Triple-redundant battery banks. If one fails, two more take over instantly. No single point of failure in the entire power chain.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
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
  },
  {
    id: "compliance",
    number: "02",
    kicker: "COMPLIANCE",
    title: "SOC 2 Type II Certified",
    description:
      "Annual independent audits. Full audit logs. Encryption at rest and in transit. The compliance documentation that enterprise procurement teams actually want to see.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 4l8 4v6c0 5.25-3.5 10-8 12-4.5-2-8-6.75-8-12V8l8-4z" />
        <path d="M12 16l2.5 2.5 5.5-5.5" />
      </svg>
    ),
  },
  {
    id: "guarantee",
    number: "03",
    kicker: "GUARANTEE",
    title: "99.99% Uptime SLA",
    description:
      "Financially-backed service level agreement. Payout clauses written into every contract. We&apos;ve never hit a payout trigger in 6 years of operation.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M28 22v4H4v-4" />
        <path d="M28 6H4v4l3 3" />
        <path d="M8 13v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V13" />
        <path d="M12 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </svg>
    ),
  },
];

function ReliabilityCard({ pillar, index }: { pillar: ReliabilityPillar; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        delay: index * 0.15,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative bg-[#111315] border border-[#1F2328] rounded-2xl p-8 transition-all duration-500 hover:border-[#B8FF5C]/30 hover:bg-[#131517]"
    >
      {/* Subtle background glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(184, 255, 92, 0.06) 0%, transparent 60%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* SectionLabel kicker */}
        <div className="mb-4">
          <SectionLabel>{pillar.kicker}</SectionLabel>
        </div>

        {/* Number and Icon row */}
        <div className="flex items-start justify-between mb-6">
          <span className="text-5xl font-bold text-[#1F2328] group-hover:text-[#1F2328]/50 transition-colors duration-500 select-none">
            {pillar.number}
          </span>
          <div className="w-14 h-14 rounded-xl bg-[#1a1d21] border border-[#2a2d32] flex items-center justify-center text-[#B8FF5C] group-hover:border-[#B8FF5C]/30 group-hover:bg-[#1a1d21]/80 transition-all duration-300">
            {pillar.icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#B8FF5C] transition-colors duration-300">
          {pillar.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#8A8F98] leading-relaxed group-hover:text-[#8A8F98]/80 transition-colors duration-300">
          {pillar.description}
        </p>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-8 right-8 h-px bg-[#1F2328] group-hover:bg-[#B8FF5C]/20 transition-colors duration-500" />
    </motion.div>
  );
}

export function Reliability() {
  return (
    <section id="reliability" className="relative py-24 md:py-32 bg-[#0A0B0D]">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(10, 11, 13, 0.5) 50%, transparent 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <SectionLabel className="mb-4">Reliability</SectionLabel>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Built to run. Guaranteed to stay up.
          </h2>
          <p className="text-[#8A8F98] text-lg max-w-2xl mx-auto">
            Industrial-grade infrastructure with redundant systems, compliance certifications,
            and enterprise service agreements that protect your operations around the clock.
          </p>
        </motion.div>

        {/* Reliability pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reliabilityPillars.map((pillar, index) => (
            <ReliabilityCard key={pillar.id} pillar={pillar} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reliability;
