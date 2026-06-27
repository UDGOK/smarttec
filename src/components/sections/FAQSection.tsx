"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqItems = [
  {
    question: "How long does a SmartTec deployment take?",
    answer:
      "From signed contract to live operations, typical deployments take 60-90 days. Site prep adds 30-60 days for ground-mount configurations. We provide a detailed project timeline during the engineering phase.",
  },
  {
    question: "What's the footprint requirement for a battery energy stack?",
    answer:
      "Our modular units start at 200kW and require approximately 400 sq ft per 100kW. A 1MW installation fits in a standard parking lot space. We also do rooftop and ground-mount configurations.",
  },
  {
    question: "How does SmartTec handle thermal management?",
    answer:
      "Active liquid cooling with AI-driven temperature optimization. Our thermal management system maintains cell temperatures within 2°C variance, extending cycle life by up to 40% versus passive systems.",
  },
  {
    question: "What's included in the 99.997% uptime SLA?",
    answer:
      "Full power delivery guarantee with financial payout clauses. Covers battery availability, inverter uptime, and grid-transfer switching. Excludes scheduled maintenance windows agreed in advance.",
  },
  {
    question: "Can SmartTec integrate with existing UPS and generator infrastructure?",
    answer:
      "Yes. Our systems are designed to layer with existing UPS and generator assets. We map your current infrastructure during site survey and design integration points that maintain full redundancy.",
  },
  {
    question: "What financing options are available for enterprise deployments?",
    answer:
      "CAPEX purchase, operating lease, and power-purchase-agreement (PPA) models are available. We also work with select infrastructure lenders who specialize in data center assets.",
  },
];

function FAQItem({ item, index, isOpen, onToggle }: { item: typeof faqItems[0]; index: number; isOpen: boolean; onToggle: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="border border-dashed border-slate/30 bg-fog/50"
    >
      <button
        onClick={onToggle}
        className="w-full text-left relative group transition-colors hover:bg-greptile-green/10"
      >
        <div className={`absolute left-0 top-0 bottom-0 w-1 bg-greptile-green transition-opacity ${isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />

        <div className="px-5 py-4 md:px-6 md:py-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="font-space-mono text-[11px] text-slate/40 font-bold">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className={`text-base md:text-lg font-anybody font-bold transition-colors ${isOpen ? "text-slate" : "text-slate"}`}>
              {item.question}
            </span>
          </div>

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
            transition={{ duration: 0.25 }}
            className={`flex-shrink-0 text-slate/60`}
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
            <div className="px-5 pb-4 md:px-6 md:pb-5 pl-12 md:pl-14 text-slate/70 leading-relaxed text-sm border-t border-dashed border-slate/20 pt-4">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-background section-wrapper-compact">
      <div className="absolute inset-0 pointer-events-none hidden md:block text-slate/20">
        <div className="absolute top-0 bottom-0 left-8 border-l border-dashed border-current">
          <svg width="10" height="12" viewBox="0 0 10 12" className="absolute -top-[6px] -left-[5px]">
            <polygon points="5,0 10,3 10,9 5,12 0,9 0,3" fill="currentColor" />
          </svg>
          <svg width="10" height="12" viewBox="0 0 10 12" className="absolute -bottom-[6px] -left-[5px]">
            <polygon points="5,0 10,3 10,9 5,12 0,9 0,3" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute top-0 bottom-0 right-8 border-r border-dashed border-current">
          <svg width="10" height="12" viewBox="0 0 10 12" className="absolute -top-[6px] -right-[5px]">
            <polygon points="5,0 10,3 10,9 5,12 0,9 0,3" fill="currentColor" />
          </svg>
          <svg width="10" height="12" viewBox="0 0 10 12" className="absolute -bottom-[6px] -right-[5px]">
            <polygon points="5,0 10,3 10,9 5,12 0,9 0,3" fill="currentColor" />
          </svg>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-3xl px-6 md:px-12 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
            <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
            [ FAQ ]
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-anybody font-bold text-slate tracking-tight leading-[0.95]">
            Common questions.
          </h2>
        </motion.div>

        <div className="space-y-2">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;