"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Site Survey & Engineering",
    description: "Full power audit, structural assessment, and custom stack design.",
  },
  {
    number: "02",
    title: "Modular Integration",
    description: "Pre-tested battery modules integrated with your existing infrastructure.",
  },
  {
    number: "03",
    title: "Deploy & Operate",
    description: "We commission, monitor, and maintain. You run your business.",
  },
];

export function HowItWorks() {
  return (
    <section className="relative py-24 md:py-32 bg-[#2A2A34] overflow-hidden">
      {/* Dotted-grid texture visible in dark background */}
      <div 
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `radial-gradient(circle, #34E2A0 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block text-xs font-mono uppercase tracking-widest text-[#34E2A0] mb-4">
            [ HOW IT WORKS ]
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mt-4" style={{ fontFamily: "'Archivo Expanded', sans-serif" }}>
            Three steps to grid independence.
          </h2>
        </div>

        <div className="space-y-0">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              {/* Horizontal divider between steps (not before first) */}
              {index > 0 && (
                <div className="h-px bg-[#34E2A0]/20 mb-12" />
              )}

              <div className="pb-12">
                <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
                  {/* Step number */}
                  <div className="flex-shrink-0">
                    <span 
                      className="text-5xl md:text-6xl lg:text-7xl font-mono font-bold text-[#34E2A0] leading-none"
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-4" style={{ fontFamily: "'Archivo Expanded', sans-serif" }}>
                      {step.title}
                    </h3>
                    <p className="text-base md:text-lg text-[#A8A8B3] leading-relaxed max-w-2xl">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
