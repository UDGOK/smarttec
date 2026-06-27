"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Accordion } from "@/components/ui/Accordion";

const faqItems = [
  {
    question: "What battery chemistry do your data center solutions use?",
    answer: "We utilize lithium-iron phosphate (LiFePO4) cells, which offer superior thermal stability, longer cycle life exceeding 4,000 cycles, and safer operation compared to traditional lithium-ion chemistries. This makes them ideal for mission-critical infrastructure environments.",
  },
  {
    question: "How long can your battery systems sustain a full data center load?",
    answer: "Our modular battery banks are scalable from 4 hours to 48+ hours of backup runtime depending on your power requirements. Each pod configuration can deliver up to 500kW of continuous power with seamless transition during grid failures.",
  },
  {
    question: "What monitoring capabilities are included with your infrastructure?",
    answer: "Every system includes our AI-powered SmartGrid console providing real-time state-of-charge monitoring, thermal imaging dashboards, predictive maintenance alerts, and remote firmware updates. All metrics integrate with standard SNMP and Modbus protocols.",
  },
  {
    question: "How does thermal management work in off-grid deployments?",
    answer: "Our integrated climate control system uses liquid cooling with adaptive heat exchange. The system automatically adjusts cooling capacity based on ambient temperature, battery load, and humidity levels to maintain optimal 25°C operating conditions.",
  },
  {
    question: "What maintenance is required for the battery infrastructure?",
    answer: "LiFePO4 batteries are virtually maintenance-free with no scheduled deep discharge cycles required. Our systems perform automatic cell balancing and health diagnostics. Annual inspections are recommended for connections and cooling system filters.",
  },
  {
    question: "Can existing data center UPS systems be integrated with your solutions?",
    answer: "Yes, our battery infrastructure is designed for hybrid deployment. We offer seamless integration with legacy UPS systems through parallel operation modes, allowing phased upgrades without disrupting current operations.",
  },
];

export function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="relative py-24 md:py-32 bg-[#0A0B0D]">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(132, 204, 22, 0.03) 0%, transparent 60%)",
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
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Common questions about{" "}
            <span className="text-[#B8FF5C]">battery infrastructure</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know about deploying autonomous power systems
            for your data center operations.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <Accordion items={faqItems} />
        </motion.div>
      </div>
    </section>
  );
}

export default FAQSection;