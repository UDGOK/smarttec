"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Site survey & engineering",
    description: "Full power audit, structural assessment, and custom stack design by our in-house engineers. We deliver a fixed-price proposal in 14 days.",
    metric: "14 days",
    metricLabel: "to proposal",
  },
  {
    number: "02",
    title: "Modular deployment",
    description: "Pre-tested battery modules ship to your site. Our crew handles integration with existing UPS, switchgear, and generator assets.",
    metric: "90 days",
    metricLabel: "to live ops",
  },
  {
    number: "03",
    title: "Managed operations",
    description: "24/7 monitoring, predictive maintenance, and quarterly performance reviews included. You run your business. We run the power.",
    metric: "99.997%",
    metricLabel: "uptime SLA",
  },
];

export function HowItWorks() {
  return (
    <section id="features" className="relative bg-background section-wrapper-compact">
      {/* Edge marks */}
      <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-5">
            <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
            [ HOW IT WORKS ]
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-anybody font-bold text-slate tracking-tight leading-[0.95]">
            Three steps to grid independence.
          </h2>
        </motion.div>

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
              {index > 0 && <div className="h-px bg-slate/20 mb-16" />}
              <div className="pb-16">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-start">
                  {/* Number */}
                  <div className="md:col-span-3">
                    <span className="text-7xl md:text-8xl lg:text-9xl font-anybody font-bold text-slate/15 leading-none block">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-6">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-anybody font-bold text-slate mb-4 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-base md:text-lg text-slate/70 leading-relaxed max-w-prose">
                      {step.description}
                    </p>
                  </div>

                  {/* Metric box */}
                  <div className="md:col-span-3">
                    <div className="border border-dashed border-slate/30 p-5 bg-fog/30">
                      <div className="font-anybody text-3xl md:text-4xl font-bold text-slate">
                        {step.metric}
                      </div>
                      <div className="font-space-mono text-[11px] uppercase tracking-wider text-slate/60 mt-2">
                        {step.metricLabel}
                      </div>
                    </div>
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