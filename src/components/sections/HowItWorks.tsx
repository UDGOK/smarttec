"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

const steps = [
  {
    number: "01",
    title: "Design the site",
    description:
      "Our engineers analyze your energy requirements, location constraints, and sustainability goals to architect the perfect off-grid data center solution.",
  },
  {
    number: "02",
    title: "Integrate the battery stack",
    description:
      "We deploy our proprietary energy storage systems, designed for maximum density and reliability, seamlessly integrated with renewable power sources.",
  },
  {
    number: "03",
    title: "Deploy & operate",
    description:
      "Your facility goes live with 24/7 intelligent monitoring, predictive maintenance, and continuous optimization for peak performance.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

export function HowItWorks() {
  return (
    <section className="relative py-24 md:py-32 bg-[#0A0B0D]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4">
            From concept to <span className="text-[#B8FF5C]">powering on</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -8 }}
              className="group relative bg-[#12141A] border border-[#1E2028] rounded-2xl p-8 md:p-10 overflow-hidden transition-all duration-300 hover:border-[#B8FF5C]/30"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 100%, rgba(184, 255, 92, 0.15) 0%, transparent 60%)",
                  }}
                />
              </div>

              {/* Step number */}
              <div className="relative z-10">
                <span className="inline-block text-6xl md:text-7xl font-bold text-[#B8FF5C]/20 mb-6 select-none">
                  {step.number}
                </span>

                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                  {step.title}
                </h3>

                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  {step.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#B8FF5C]/0 to-transparent group-hover:via-[#B8FF5C]/50 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;