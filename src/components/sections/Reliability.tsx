"use client";

import { motion } from "framer-motion";

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
    title: "Triple-redundant battery banks. If one fails, two more take over instantly. No single point of failure.",
    description: "",
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
    title: "SOC 2 Type II certified. Annual independent audits. Full audit logs. Encryption at rest and in transit.",
    description: "",
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
    title: "99.99% financially-backed uptime SLA. We've never hit a payout trigger in 6 years of operation.",
    description: "",
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
      className="group relative bg-[#E9EAE6] border border-[#D9DAD5] rounded-2xl p-8 transition-all duration-500 hover:border-[#B5B6B1]"
    >
      {/* Content */}
      <div className="relative z-10">
        {/* SectionLabel kicker */}
        <div className="mb-4">
          <span className="font-mono text-xs uppercase tracking-wider text-[#34E2A0]">
            [ {pillar.kicker} ]
          </span>
        </div>

        {/* Number and Icon row */}
        <div className="flex items-start justify-between mb-6">
          <span className="text-5xl font-bold text-[#E4E5E0] select-none font-['Archivo_Expanded',sans-serif]">
            {pillar.number}
          </span>
          <div className="w-14 h-14 rounded-xl bg-[#E9EAE6] border border-[#D9DAD5] flex items-center justify-center text-[#34E2A0] group-hover:border-[#34E2A0]/30 transition-all duration-300">
            {pillar.icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-[#2C2C38] leading-relaxed font-['Archivo_Expanded',sans-serif]">
          {pillar.title}
        </h3>
      </div>
    </motion.div>
  );
}

export function Reliability() {
  return (
    <section id="reliability" className="relative py-24 md:py-32 bg-[#F2F2EF]">
      {/* Measurement tick marks along edges */}
      <div className="absolute left-0 top-0 bottom-0 w-2 flex flex-col justify-between py-8">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="w-full h-px bg-[#D9DAD5]" />
        ))}
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-2 flex flex-col justify-between py-8">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="w-full h-px bg-[#D9DAD5]" />
        ))}
      </div>

      {/* Wireframe arc decoration behind cards */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <svg
          className="w-full max-w-4xl opacity-[0.08]"
          viewBox="0 0 800 200"
          fill="none"
          stroke="#34E2A0"
          strokeWidth="1"
        >
          <path d="M50 200 Q400 0 750 200" />
          <path d="M100 200 Q400 40 700 200" />
          <path d="M150 200 Q400 80 650 200" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block text-xs font-mono uppercase tracking-wider text-[#6E7079] mb-4">
            [ RELIABILITY ]
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C2C38] mb-6 font-['Archivo_Expanded',sans-serif]">
            Built to run. Guaranteed to stay up.
          </h2>
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