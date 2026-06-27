"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Predictive load positioning",
    description: "Reserves pre-charged capacity 72 hours before demand peaks.",
  },
  {
    title: "Real-time power routing",
    description: "Sub-10ms automatic failover between grid and battery banks.",
  },
  {
    title: "Thermal balancing",
    description: "AI-managed liquid cooling reduces PUE by up to 18%.",
  },
  {
    title: "Anomaly detection",
    description: "Catches cell-level anomalies 14 days before they become incidents.",
  },
];

const telemetry = [
  { time: "00:00", load: 32, solar: 18 },
  { time: "04:00", load: 28, solar: 0 },
  { time: "08:00", load: 56, solar: 24 },
  { time: "12:00", load: 78, solar: 64 },
  { time: "16:00", load: 84, solar: 72 },
  { time: "20:00", load: 62, solar: 28 },
];

export function Personalization() {
  const maxLoad = Math.max(...telemetry.map((t) => t.load));
  return (
    <section id="aura" className="relative bg-background section-wrapper-compact">
      <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left - copy + bullets */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
              <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
              [ AURA ENGINE ]
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-anybody font-bold text-slate tracking-tight leading-[0.95] mb-10">
              Load management<br />that thinks ahead.
            </h2>

            <div className="space-y-5">
              {features.map((f, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 mt-1 flex items-center justify-center bg-greptile-green text-black">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8.5L6.5 12L13 5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-anybody text-lg md:text-xl font-bold text-slate mb-1">
                      {f.title}
                    </h3>
                    <p className="text-slate/70 text-sm leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="border border-dashed border-slate/30 bg-fog/50 overflow-hidden">
              {/* Status bar */}
              <div className="border-b border-dashed border-slate/30 px-4 py-2.5 flex items-center justify-between bg-fog">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-bloom/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-neon" />
                    <span className="w-2.5 h-2.5 rounded-full bg-greptile-green" />
                  </div>
                  <span className="font-space-mono text-[11px] text-slate/60">aura.smarttec.io/dashboard</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-space-mono text-[10px] uppercase tracking-wider text-slate/60">Live</span>
                  <span className="w-1.5 h-1.5 bg-greptile-green rounded-full animate-pulse-glow" />
                </div>
              </div>

              <div className="p-7 md:p-9">
                {/* Top metrics row */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="border border-dashed border-seafoam/40 bg-seafoam/10 p-3">
                    <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/60">Grid</div>
                    <div className="font-anybody text-2xl font-bold text-slate">OFFLINE</div>
                    <div className="font-space-mono text-[10px] text-slate/60">Battery: 100%</div>
                  </div>
                  <div className="border border-dashed border-slate/30 bg-fog/50 p-3">
                    <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/60">Load</div>
                    <div className="font-anybody text-2xl font-bold text-slate">84%</div>
                    <div className="font-space-mono text-[10px] text-slate/60">Optimal range</div>
                  </div>
                  <div className="border border-dashed border-slate/30 bg-fog/50 p-3">
                    <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/60">PUE</div>
                    <div className="font-anybody text-2xl font-bold text-slate">1.08</div>
                    <div className="font-space-mono text-[10px] text-greptile-green">-32% vs avg</div>
                  </div>
                </div>

                {/* Chart */}
                <div className="border border-dashed border-slate/30 p-5 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-space-mono text-[11px] uppercase tracking-wider text-slate/60">24h load forecast</span>
                    <span className="font-space-mono text-[10px] uppercase tracking-wider text-slate/40">AURA · predicted</span>
                  </div>
                  <div className="relative h-32">
                    {/* Gridlines */}
                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                      {[100, 75, 50, 25, 0].map((v) => (
                        <div key={v} className="border-t border-dashed border-slate/15 flex items-center">
                          <span className="font-space-mono text-[9px] text-slate/40 -mt-2 -ml-1">{v}%</span>
                        </div>
                      ))}
                    </div>
                    {/* Bars */}
                    <div className="absolute inset-0 flex items-end justify-around px-2 pt-4">
                      {telemetry.map((t, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-0.5 px-1">
                          <div className="w-full flex flex-col items-center">
                            <div
                              className="w-full bg-greptile-green"
                              style={{ height: `${(t.load / maxLoad) * 80}px` }}
                            />
                            <div
                              className="w-full bg-neon"
                              style={{ height: `${(t.solar / maxLoad) * 30}px`, marginTop: "1px" }}
                            />
                          </div>
                          <span className="font-space-mono text-[9px] text-slate/40 mt-1">{t.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom callout */}
                <div className="bg-greptile-green text-black px-4 py-3 flex items-center justify-between">
                  <div>
                    <div className="font-anybody text-sm font-bold uppercase tracking-wider">AURA alert</div>
                    <div className="font-space-mono text-[11px]">Peak demand predicted at 16:00 — pre-charged reserves ready.</div>
                  </div>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
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