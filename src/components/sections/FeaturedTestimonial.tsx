"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function FeaturedTestimonial() {
  return (
    <section className="relative bg-[#0A0B0D] py-24 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(184, 255, 92, 0.04) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Main testimonial card */}
          <div className="relative bg-[#111315] border border-[#1F2328] rounded-3xl p-10 sm:p-14 lg:p-16 transition-all duration-500 hover:border-[#B8FF5C]/30">
            {/* Subtle hover glow */}
            <div
              className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                boxShadow: "inset 0 0 0 1px rgba(184, 255, 92, 0.2), 0 0 60px rgba(184, 255, 92, 0.08)",
              }}
            />

            {/* Large decorative quote mark */}
            <div className="absolute top-8 left-8 sm:left-12">
              <span 
                className="text-8xl sm:text-9xl font-serif text-[#B8FF5C]/20 leading-none select-none"
                style={{ lineHeight: 1 }}
              >
                "
              </span>
            </div>

            {/* Quote text */}
            <blockquote className="relative">
              <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-white leading-relaxed italic pl-8 sm:pl-12 pr-4">
                We cut grid dependency by 73% in the first year. SmartTec's battery stack deployed in 90 days and has run flawlessly through two Texas grid events. That's the kind of infrastructure partner we needed.
              </p>
            </blockquote>

            {/* Author section */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 mt-10 sm:mt-12">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden ring-2 ring-[#B8FF5C]/30">
                  <Image
                    src="/img/exec1.jpg"
                    alt="Marcus Thompson"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Author info */}
              <div className="flex-grow">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
                  Marcus Thompson
                </h3>
                <p className="text-[#8A8F98] text-sm sm:text-base">
                  VP of Infrastructure at StackEdge Systems
                </p>
              </div>

              {/* Company badge */}
              <div className="flex-shrink-0">
                <div className="relative flex items-center justify-center px-5 py-3 rounded-lg border border-[#1F2328] bg-[#0D0E10]">
                  <span className="font-mono text-sm font-medium text-[#F5F5F2] uppercase tracking-wider">
                    StackEdge Systems
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats row below card */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            {[
              { value: "73%", label: "Grid Reduction" },
              { value: "90", label: "Day Deployment" },
              { value: "Zero", label: "Downtime Incidents" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.3 + index * 0.1,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="text-center p-4 rounded-xl border border-[#1F2328] bg-[#111315] transition-all duration-300 hover:border-[#B8FF5C]/30 hover:bg-[#141618]"
              >
                <div className="text-xl sm:text-2xl font-bold text-[#B8FF5C] mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-[#8A8F98] uppercase tracking-wider font-mono">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FeaturedTestimonial;
