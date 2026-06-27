"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function FeaturedTestimonial() {
  return (
    <section className="relative bg-[#E9EAE6] py-24 md:py-32 overflow-hidden">
      {/* Wireframe arc decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <svg 
          width="900" 
          height="500" 
          viewBox="0 0 900 500" 
          fill="none" 
          className="opacity-[0.08]"
        >
          <path 
            d="M450 500 C 150 500, 0 350, 0 200 C 0 50, 150 -50, 450 -50 C 750 -50, 900 50, 900 200 C 900 350, 750 500, 450 500" 
            stroke="#34E2A0" 
            strokeWidth="1" 
            strokeDasharray="4 4"
            fill="none"
          />
          <path 
            d="M450 450 C 200 450, 50 330, 50 200 C 50 70, 200 0, 450 0 C 700 0, 850 70, 850 200 C 850 330, 700 450, 450 450" 
            stroke="#34E2A0" 
            strokeWidth="0.5" 
            strokeDasharray="2 4"
            fill="none"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Main testimonial card */}
          <div className="relative bg-white border border-[#D9DAD5] rounded-sm p-10 sm:p-14 lg:p-16 transition-all duration-500 hover:border-[#34E2A0]/40 hover:shadow-[0_0_40px_rgba(52,226,160,0.08)]">
            {/* Large decorative quote mark */}
            <div className="absolute top-8 left-8 sm:left-12">
              <span 
                className="text-8xl sm:text-9xl font-serif text-[#34E2A0]/15 leading-none select-none"
                style={{ lineHeight: 1 }}
              >
                "
              </span>
            </div>

            {/* Quote text */}
            <blockquote className="relative">
              <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-[#2C2C38] leading-relaxed font-light italic pl-8 sm:pl-12 pr-4" style={{ fontFamily: "'Archivo Expanded', sans-serif" }}>
                We cut grid dependency by 73% in the first year. SmartTec's battery stack deployed in 90 days and has run flawlessly through two Texas grid events. That's the kind of infrastructure partner we needed.
              </p>
            </blockquote>

            {/* Author section */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 mt-10 sm:mt-12">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-sm overflow-hidden ring-1 ring-[#D9DAD5]">
                  <Image
                    src="/img/exec1.jpg"
                    alt="Marcus Thompson"
                    fill
                    className="object-cover grayscale"
                    style={{ filter: 'grayscale(100%)' }}
                  />
                </div>
              </div>

              {/* Author info */}
              <div className="flex-grow">
                <h3 className="text-lg sm:text-xl font-semibold text-[#2C2C38] mb-1" style={{ fontFamily: "'Archivo Expanded', sans-serif" }}>
                  Marcus Thompson
                </h3>
                <p className="text-[#6E7079] text-sm sm:text-base font-mono">
                  VP of Infrastructure, StackEdge Systems
                </p>
              </div>
            </div>
          </div>

          {/* Stats row below card */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            {[
              { value: "73%", label: "Grid Reduction" },
              { value: "90 days", label: "Day Deployment" },
              { value: "Zero incidents", label: "Downtime" },
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
                className="text-center p-4 rounded-sm border border-[#D9DAD5] bg-white transition-all duration-300 hover:border-[#34E2A0]/40"
              >
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#34E2A0] mb-1" style={{ fontFamily: "'Archivo Expanded', sans-serif" }}>
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-[#6E7079] uppercase tracking-wider font-mono">
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
