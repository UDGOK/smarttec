"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Personalization() {
  return (
    <section id="personalization" className="relative py-24 md:py-32 bg-[#E9EAE6]">
      {/* Dotted grid background texture */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `radial-gradient(circle, #2C2C38 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C2C38] mb-6 font-['Archivo_Expanded',sans-serif]">
            Load management that thinks ahead.
          </h2>
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
              {/* Feature 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="text-[#34E2A0]"
                  >
                    <path
                      d="M3 8.5L6.5 12L13 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#2C2C38] mb-1 font-['Archivo_Expanded',sans-serif]">
                    Predictive load positioning
                  </h3>
                  <p className="text-[#6B6C70] text-sm">
                    Reserves pre-charged 72 hours before demand peaks.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="text-[#34E2A0]"
                  >
                    <path
                      d="M3 8.5L6.5 12L13 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#2C2C38] mb-1 font-['Archivo_Expanded',sans-serif]">
                    Real-time power routing
                  </h3>
                  <p className="text-[#6B6C70] text-sm">
                    Sub-10ms automatic failover between grid and battery.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="text-[#34E2A0]"
                  >
                    <path
                      d="M3 8.5L6.5 12L13 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#2C2C38] mb-1 font-['Archivo_Expanded',sans-serif]">
                    Thermal balancing
                  </h3>
                  <p className="text-[#6B6C70] text-sm">
                    AI-managed cooling reduces PUE by up to 18%.
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
            <div className="relative bg-white border border-[#D4D5D0] rounded-2xl overflow-hidden transition-all duration-500 shadow-sm hover:shadow-md hover:border-[#34E2A0]/30">
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
                  <div className="px-3 py-1.5 rounded-md bg-white/90 border border-[#D4D5D0] backdrop-blur-sm">
                    <span className="font-mono text-xs text-[#6B6C70] uppercase tracking-wider">
                      GRID ONLINE
                    </span>
                  </div>

                  {/* Battery Reserves badge */}
                  <div className="px-3 py-1.5 rounded-md bg-white/90 border border-[#34E2A0]/50 backdrop-blur-sm">
                    <span className="font-mono text-xs text-[#34E2A0] uppercase tracking-wider">
                      BATTERY RESERVES: 94%
                    </span>
                  </div>

                  {/* Load Optimal badge */}
                  <div className="px-3 py-1.5 rounded-md bg-white/90 border border-[#D4D5D0] backdrop-blur-sm">
                    <span className="font-mono text-xs text-[#2C2C38] uppercase tracking-wider">
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