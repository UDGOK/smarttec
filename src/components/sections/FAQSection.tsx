"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const faqItems = [
  {
    question: "How long does a SmartTec deployment take?",
    answer: "A standard enterprise deployment — from site survey to commissioned infrastructure — typically runs 60 to 90 days. Our modular pre-testing process means hardware ships ready to install, eliminating on-site debugging. For facilities with existing infrastructure, we can often integrate within 30 days using our hybrid deployment methodology. Complex multi-site rollouts are scoped individually with detailed project timelines.",
  },
  {
    question: "What's the footprint requirement for a battery energy stack?",
    answer: "Each battery module pod occupies approximately 4 square meters and delivers 250kW of continuous power with 4 hours of backup capacity. A fully-loaded deployment of 10 pods requires roughly 50 square meters including maintenance corridors. We also offer vertical stacking configurations for facilities with constrained floor space. Our engineering team will provide a detailed site layout during the survey phase.",
  },
  {
    question: "How does SmartTec handle thermal management?",
    answer: "Our integrated liquid cooling system uses a closed-loop design with adaptive heat exchange. The system monitors cell temperatures at 1-second intervals and automatically adjusts cooling capacity based on load, ambient conditions, and battery state of charge. This maintains optimal 25°C operating temperatures even during peak summer conditions. Redundant pumps and fail-safe modes ensure thermal management remains active during any single-point failure.",
  },
  {
    question: "What's included in the 99.99% uptime SLA?",
    answer: "The SLA covers complete infrastructure availability including power delivery, cooling systems, and network connectivity to your critical loads. It includes 24/7 monitoring, quarterly preventive maintenance visits, and guaranteed response times: 1 hour for critical issues, 4 hours for major incidents. If we miss the SLA threshold in any calendar month, service credits are automatically applied per the contract terms. We have never triggered a payout in six years of commercial operation.",
  },
  {
    question: "Can SmartTec integrate with our existing UPS and generator infrastructure?",
    answer: "Yes. Our systems are designed for hybrid deployment with legacy infrastructure. We support parallel operation modes where SmartTec battery systems absorb short-duration transients while your existing UPS handles steady-state loads. For generator integration, our intelligent transfer switches coordinate seamless transitions with configurable lead times. We can phase deployment by replacing aging UPS units incrementally without disrupting current operations.",
  },
  {
    question: "What financing options are available for enterprise deployments?",
    answer: "We offer multiple engagement models to match your capital planning requirements. Traditional capital purchase with full equipment ownership and warranty. Operating lease with fixed monthly payments over 3-5 year terms. Power-as-a-Service model where you pay per kWh delivered rather than equipment capacity. All models include our full managed services package. Enterprise customers can also arrange project financing through our banking partners with rates competitive to conventional equipment loans.",
  },
];

function FAQItem({ item, index, isOpen, onToggle }: { item: typeof faqItems[0]; index: number; isOpen: boolean; onToggle: () => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        delay: index * 0.08,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative"
    >
      <button
        onClick={onToggle}
        className={`w-full text-left relative group transition-all duration-300 ${
          isOpen ? "bg-[#B8FF5C]/[0.03]" : "hover:bg-[#B8FF5C]/[0.02]"
        }`}
      >
        {/* Left border accent on hover and when open */}
        <div
          className={`absolute left-0 top-0 bottom-0 w-0.5 bg-[#B8FF5C] transition-all duration-300 ${
            isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-50"
          }`}
        />
        
        <div className="px-6 py-5 flex items-center justify-between gap-4">
          <span className={`text-base font-medium transition-colors duration-300 ${
            isOpen ? "text-[#B8FF5C]" : "text-[#F5F5F2] group-hover:text-white"
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
              isOpen ? "text-[#B8FF5C]" : "text-[#8A8F98] group-hover:text-[#B8FF5C]"
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
            <div className="px-6 pb-5 pl-6 text-[#8A8F98] leading-relaxed text-sm border-l border-[#1F2328] ml-px">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 md:py-32 bg-[#0A0B0D]">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(184, 255, 92, 0.03) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block text-xs font-mono uppercase tracking-widest text-[#B8FF5C] mb-4">
            [ FAQ ]
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Common questions.
          </h2>
          <p className="text-[#8A8F98] text-lg">
            Technical answers to help you plan your deployment.
          </p>
        </motion.div>

        {/* FAQ accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="space-y-2"
        >
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-[#111315] border border-[#1F2328] rounded-xl overflow-hidden"
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