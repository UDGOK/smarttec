"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqItems = [
  {
    question: "When does SmartTec actually go online?",
    answer:
      "Q4 2026 power-on is our current target. Power infrastructure is being built first; compute halls come online in phases through Q1 2027. We'll publish exact milestones on our /status page as construction progresses.",
  },
  {
    question: "What NVIDIA models are available?",
    answer:
      "At launch: H100 80GB and H200 141GB. B200 and GB200 follow in phase 2 (Q1 2027). All on InfiniBand NDR fabric, 8 GPUs per node, full fat-tree topology. Bare-metal or hypervisor-bounded — your choice.",
  },
  {
    question: "How is power actually delivered without the grid?",
    answer:
      "z1power megawatt-class BESS — built by us — provides primary power. Grid is a backup, not primary. AURA orchestrates charge/discharge cycles to keep GPU load steady. Sub-10ms failover to batteries.",
  },
  {
    question: "What's the minimum contract?",
    answer:
      "On-demand: no minimum. Reserved clusters: 12-month terms. Colocation: 5-year PPA typical. Design partners get launch pricing locked for 12 months from power-on.",
  },
  {
    question: "Who can reserve capacity?",
    answer:
      "Anyone with a clear workload profile and procurement budget. We're choosing three design partners for the first wave — each gets locked pricing and direct engineering access. After Q1 2027 we'll open general reservations.",
  },
  {
    question: "Where is SmartTec located?",
    answer:
      "Phase 1 in Mead, Oklahoma — on land, buildings, and a 3 MVA transformer we already own. We chose OK for low electricity prices, low disaster risk, and a friendly policy environment; batteries are manufactured at our Tulsa facility.",
  },
  {
    question: "What about Cerebras?",
    answer:
      "Dedicated wafer-scale CS-3 systems for committed inference workloads. Per-token billing on shared endpoints, dedicated CS-3 for committed customers. Cerebras handles multi-billion-parameter inference at the lowest latency on earth.",
  },
  {
    question: "How does AURA work?",
    answer:
      "AURA is our orchestration layer. It forecasts your load 72 hours out, pre-positions battery reserves, and islands your cluster automatically when the grid faults. Your workloads run normally — AURA handles the power underneath.",
  },
  {
    question: "Is the carbon footprint better than traditional data centers?",
    answer:
      "Yes. We don't run diesel generators, don't build dedicated gas turbines, and don't rely on grid coal. BESS charges from grid mix or on-site solar; dispatches batteries during high-carbon-intensity grid hours.",
  },
  {
    question: "Can I bring my own hardware for colocation?",
    answer:
      "Yes. Standard colocation starts at 100kW. Custom builds scale to multi-MW. We'll handle power, cooling, networking, and physical security.",
  },
];

function FAQItem({ item, index, isOpen, onToggle }: { item: typeof faqItems[0]; index: number; isOpen: boolean; onToggle: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
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
            <span className="text-base md:text-lg font-anybody font-bold text-slate">
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
            className="flex-shrink-0 text-slate/60"
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
      <div className="relative mx-auto w-full max-w-3xl px-6 md:px-12 py-20 md:py-28 lg:py-32">
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
            Buyer questions, answered.
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