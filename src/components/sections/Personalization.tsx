"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface LoadState {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
  metrics: { label: string; value: string }[];
}

const loadStates: LoadState[] = [
  {
    id: "light",
    title: "Light Load",
    subtitle: "Off-Peak Operations",
    description: "Optimized for minimal energy draw during idle periods. SmartTec automatically scales down while maintaining critical monitoring functions.",
    gradient: "linear-gradient(145deg, #0f1729 0%, #1a2744 40%, #0d1321 100%)",
    metrics: [
      { label: "Power Draw", value: "2.4 kW" },
      { label: "Efficiency", value: "98.2%" },
      { label: "Runtime", value: "72h+" },
    ],
  },
  {
    id: "peak",
    title: "Peak Load",
    subtitle: "Full Capacity",
    description: "Maximum performance mode for demanding workloads. Intelligent load balancing across all modules ensures consistent output without degradation.",
    gradient: "linear-gradient(145deg, #1a0f29 0%, #2d1a44 40%, #1a0d2e 100%)",
    metrics: [
      { label: "Power Draw", value: "18.7 kW" },
      { label: "Efficiency", value: "94.8%" },
      { label: "Output", value: "99.7%" },
    ],
  },
  {
    id: "backup",
    title: "Backup Mode",
    subtitle: "Emergency Reserve",
    description: "Seamless transition to battery reserves during grid failure. Sub-10ms failover maintains continuous operation for sensitive equipment.",
    gradient: "linear-gradient(145deg, #0f2918 0%, #1a4428 40%, #0d1f12 100%)",
    metrics: [
      { label: "Capacity", value: "45 kWh" },
      { label: "Switch", value: "<10ms" },
      { label: "Reserve", value: "24h+" },
    ],
  },
];

const slideVariants = {
  hiddenLeft: { opacity: 0, x: -80 },
  hiddenRight: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
  },
};

export function Personalization() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="personalization" className="relative py-24 md:py-32 bg-[#0A0B0D]">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block text-xs font-mono uppercase tracking-widest text-[#B8FF5C] mb-4">
            Adaptive Intelligence
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Load-aware <span className="text-[#B8FF5C]">personalization</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            SmartTec continuously analyzes power demands and automatically adjusts
            configurations for optimal efficiency across every operating mode.
          </p>
        </motion.div>

        {/* Load state cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {loadStates.map((state, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={state.id}
                variants={slideVariants}
                initial={isEven ? "hiddenLeft" : "hiddenRight"}
                animate={isInView ? "visible" : isEven ? "hiddenLeft" : "hiddenRight"}
                transition={{ delay: index * 0.15, duration: 0.7 }}
                className="group relative"
              >
                {/* Card container */}
                <div className="relative bg-[#111315] border border-[#1F2328] rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#B8FF5C]/40">
                  {/* Gradient visualization card (CSS-only image) */}
                  <div
                    className="relative h-48 overflow-hidden"
                    style={{ background: state.gradient }}
                  >
                    {/* Animated pulse rings */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="absolute w-32 h-32 rounded-full border border-white/10 animate-pulse" />
                      <div
                        className="absolute w-24 h-24 rounded-full border border-white/15"
                        style={{ animationDelay: "0.5s" }}
                      />
                      <div
                        className="absolute w-16 h-16 rounded-full border border-white/20"
                        style={{ animationDelay: "1s" }}
                      />
                    </div>

                    {/* State indicator dot */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          state.id === "light"
                            ? "bg-blue-400"
                            : state.id === "peak"
                            ? "bg-purple-500"
                            : "bg-green-400"
                        }`}
                      />
                      <span className="text-xs font-mono text-white/60 uppercase tracking-wider">
                        {state.subtitle}
                      </span>
                    </div>

                    {/* Power level bars */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-end gap-1 h-16">
                        {Array.from({ length: 12 }).map((_, i) => {
                          const heights = {
                            light: [20, 25, 30, 25, 20, 25, 30, 25, 20, 25, 20, 15],
                            peak: [70, 85, 90, 95, 100, 95, 90, 85, 95, 100, 90, 80],
                            backup: [45, 50, 55, 50, 45, 50, 55, 50, 45, 50, 55, 50],
                          };
                          const barHeights = heights[state.id as keyof typeof heights];
                          const isActive = barHeights[i] > 40;
                          return (
                            <div
                              key={i}
                              className="flex-1 rounded-t-sm transition-all duration-500"
                              style={{
                                height: `${barHeights[i]}%`,
                                background: isActive
                                  ? state.id === "light"
                                    ? "linear-gradient(to top, #3b82f6, #60a5fa)"
                                    : state.id === "peak"
                                    ? "linear-gradient(to top, #8b5cf6, #a78bfa)"
                                    : "linear-gradient(to top, #22c55e, #4ade80)"
                                  : "rgba(255,255,255,0.1)",
                              }}
                            />
                          );
                        })}
                      </div>
                    </div>

                    {/* Center icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                        {state.id === "light" ? (
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className="text-blue-400"
                          >
                            <circle cx="12" cy="12" r="5" />
                            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                          </svg>
                        ) : state.id === "peak" ? (
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className="text-purple-400"
                          >
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                          </svg>
                        ) : (
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className="text-green-400"
                          >
                            <rect x="2" y="7" width="20" height="14" rx="2" />
                            <path d="M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
                            <path d="M6 14h12" />
                            <path d="M8 14v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4" />
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#B8FF5C] transition-colors duration-300">
                      {state.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                      {state.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#1F2328]">
                      {state.metrics.map((metric) => (
                        <div key={metric.label}>
                          <p className="text-xs text-gray-600 uppercase tracking-wider mb-1">
                            {metric.label}
                          </p>
                          <p className="text-sm font-semibold text-white">
                            {metric.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "radial-gradient(circle at 50% 0%, rgba(132, 204, 22, 0.05) 0%, transparent 50%)",
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-500">
            All configurations automatically optimized via machine learning algorithms
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Personalization;