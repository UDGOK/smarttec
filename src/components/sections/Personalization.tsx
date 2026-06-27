"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Personalization() {
  return (
    <section id="personalization" className="relative py-24 md:py-32 bg-[#0A0B0D]">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block text-xs font-mono uppercase tracking-widest text-[#B8FF5C] mb-4">
            Adaptive Intelligence
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Load management that thinks ahead.
          </h2>
          <p className="text-[#8A8F98] text-lg max-w-2xl mx-auto">
            Our predictive algorithms analyze your traffic patterns 72 hours in advance, pre-positioning battery reserves. You run at peak efficiency whether it&apos;s a Tuesday morning or a holiday traffic spike.
          </p>
        </motion.div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side: Feature bullets */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#B8FF5C]/10 border border-[#B8FF5C]/20 flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-[#B8FF5C]"
                  >
                    <path d="M12 8v4l3 3" />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Predictive load positioning
                  </h3>
                  <p className="text-[#8A8F98]">
                    Reserves pre-charged before demand peaks. Our system forecasts load 72 hours ahead.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#B8FF5C]/10 border border-[#B8FF5C]/20 flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-[#B8FF5C]"
                  >
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Real-time power routing
                  </h3>
                  <p className="text-[#8A8F98]">
                    Sub-10ms failover between power sources. Zero perceptible interruption during grid events.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#B8FF5C]/10 border border-[#B8FF5C]/20 flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-[#B8FF5C]"
                  >
                    <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Thermal balancing
                  </h3>
                  <p className="text-[#8A8F98]">
                    AI-managed cooling reduces PUE by up to 18%. Intelligent temperature regulation across all modules.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side: Dashboard image with status badges */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative group"
          >
            <div className="relative bg-[#111315] border border-[#1F2328] rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#B8FF5C]/30">
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: "0 0 60px rgba(184, 255, 92, 0.1)",
                }}
              />

              {/* Dashboard image */}
              <div className="relative aspect-[4/3]">
                <Image
                  src="/img/dashboard.jpg"
                  alt="SmartTec Dashboard"
                  fill
                  className="object-cover"
                />

                {/* Status badges overlaid on image */}
                <div className="absolute top-4 left-4 right-4 flex flex-wrap gap-2">
                  {/* Grid Online badge */}
                  <div className="px-3 py-1.5 rounded-md bg-[#0A0B0D]/90 border border-[#1F2328] backdrop-blur-sm">
                    <span className="font-mono text-xs text-[#8A8F98] uppercase tracking-wider">
                      GRID ONLINE
                    </span>
                  </div>

                  {/* Battery Reserves badge */}
                  <div className="px-3 py-1.5 rounded-md bg-[#0A0B0D]/90 border border-[#B8FF5C]/30 backdrop-blur-sm">
                    <span className="font-mono text-xs text-[#B8FF5C] uppercase tracking-wider">
                      BATTERY RESERVES: 94%
                    </span>
                  </div>

                  {/* Load Optimal badge */}
                  <div className="px-3 py-1.5 rounded-md bg-[#0A0B0D]/90 border border-[#1F2328] backdrop-blur-sm">
                    <span className="font-mono text-xs text-white uppercase tracking-wider">
                      LOAD: OPTIMAL
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Personalization;
