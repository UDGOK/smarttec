"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqItems = [
  {
    question: "How long does a SmartTec deployment take?",
    answer: "From signed contract to live operations, typical deployments take 60-90 days. Site prep adds 30-60 days for ground-mount configurations. We provide a detailed project timeline during the engineering phase.",
  },
  {
    question: "What's the footprint requirement for a battery energy stack?",
    answer: "Our modular units start at 200kW and require approximately 400 sq ft per 100kW. A 1MW installation fits in a standard parking lot space. We can also do rooftop and ground-mount configurations.",
  },
  {
    question: "How does SmartTec handle thermal management?",
    answer: "Active liquid cooling with AI-driven temperature optimization. Our thermal management system maintains cell temperatures within 2°C variance, extending cycle life by up to 40% versus passive systems.",
  },
  {
    question: "What's included in the 99.99% uptime SLA?",
    answer: "Full power delivery guarantee with financial payout clauses. Covers battery availability, inverter uptime, and grid-transfer switching. Excludes scheduled maintenance windows agreed in advance.",
  },
  {
    question: "Can SmartTec integrate with existing UPS and generator infrastructure?",
    answer: "Yes. Our systems are designed to layer with existing UPS and generator assets. We map your current infrastructure during site survey and design integration points that maintain full redundancy.",
  },
  {
    question: "What financing options are available for enterprise deployments?",
    answer: "CAPEX purchase, operating lease, and power-purchase-agreement (PPA) models are available. We also work with select infrastructure lenders who specialize in data center assets.",
  },
];

function FAQItem({ item, index, isOpen, onToggle }: { item: typeof faqItems[0]; index: number; isOpen: boolean; onToggle: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay: index * 0.08,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative"
    >
      <button
        onClick={onToggle}
        className="w-full text-left relative group transition-all duration-300 hover:bg-[#34E2A0]/[0.03]"
      >
        {/* Left border accent on hover */}
        <div
          className={`absolute left-0 top-0 bottom-0 w-0.5 bg-[#34E2A0] transition-all duration-300 ${
            isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
        />
        
        <div className="px-6 py-5 flex items-center justify-between gap-4">
          <span className={`text-base font-medium transition-colors duration-300 ${
            isOpen ? "text-[#34E2A0]" : "text-[#2C2C38] group-hover:text-[#2C2C38]"
          }`}>
            {item.question}
          </span>
          
          <motion.svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className={`flex-shrink-0 transition-colors duration-300 ${
              isOpen ? "text-[#34E2A0]" : "text-[#6B6B75] group-hover:text-[#34E2A0]"
            }`}
          >
            <path d="M6 9l6 6 6-6" />
          </motion.svg>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pl-6 text-[#6B6B75] leading-relaxed text-sm border-l border-[#D9DAD5] ml-px">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 md:py-32 bg-[#E9EAE6]">
      <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block text-xs font-mono uppercase tracking-widest text-[#6B6B75] mb-4">
            [ FAQ ]
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C2C38]" style={{ fontFamily: "'Archivo Expanded', sans-serif" }}>
            Common questions.
          </h2>
        </motion.div>

        {/* FAQ accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="space-y-2"
        >
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-[#F2F2EF] border border-[#D9DAD5] rounded-xl overflow-hidden"
            >
              <FAQItem
                item={item}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => toggleItem(index)}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default FAQSection;