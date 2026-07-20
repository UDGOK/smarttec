"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageShell from "@/components/PageShell";

const capabilities = [
  {
    n: "01",
    title: "Predictive load positioning",
    desc: "Reserves pre-charged capacity 72 hours before demand peaks. AURA correlates weather, GPU workload patterns, and historical load.",
    accent: "bg-greptile-green",
  },
  {
    n: "02",
    title: "Tokens-per-watt tuning",
    desc: "AURA continuously rebalances compute and cooling for the best performance per megawatt. The metric that matters in 2026.",
    accent: "bg-seafoam",
  },
  {
    n: "03",
    title: "Sub-10ms failover",
    desc: "Automatic routing across redundant battery banks. Your compute keeps running through grid events that would shut down a hyperscaler.",
    accent: "bg-ice",
  },
  {
    n: "04",
    title: "Cell-level anomaly detection",
    desc: "Catches anomalies 14 days before they become incidents. Predictive, not reactive.",
    accent: "bg-lavender",
  },
  {
    n: "05",
    title: "Workload-aware cooling",
    desc: "AI-managed liquid cooling that maintains cell temperatures within 2°C variance. 40% longer cycle life vs. passive systems.",
    accent: "bg-peach",
  },
  {
    n: "06",
    title: "Real-time fleet telemetry",
    desc: "Sub-second telemetry across every battery, every compute node, every cooling loop. One unified telemetry plane.",
    accent: "bg-pink",
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

const industryPulse = [
  {
    value: "40%",
    label: "of AI data centers power-constrained by 2027",
    source: "Gartner, Nov 2024",
    accent: "bg-greptile-green",
  },
  {
    value: "1,500 MW",
    label: "lost in a single NoVA grid event — 60 data centers dropped simultaneously",
    source: "Belfer Center, Jul 2024",
    accent: "bg-seafoam",
  },
  {
    value: "160%",
    label: "data center power demand growth 2024 → 2026",
    source: "Gartner, Nov 2024",
    accent: "bg-peach",
  },
  {
    value: "500 TWh",
    label: "annual power needed for AI servers by 2027 (2.6× the 2023 baseline)",
    source: "Gartner, Nov 2024",
    accent: "bg-lavender",
  },
];

const stackChips = [
  {
    vendor: "NVIDIA",
    product: "Blackwell GB200 NVL72",
    stat: "1.4 exaFLOPS / rack",
    detail: "36 Grace CPUs + 72 Blackwell GPUs per liquid-cooled rack. 30× real-time speedup for trillion-parameter LLM inference. General availability across AWS, Azure, GCP, OCI, CoreWeave.",
    href: "https://nvidianews.nvidia.com/news/nvidia-blackwell-platform-arrives-to-power-a-new-era-of-computing",
    source: "NVIDIA newsroom",
    accent: "bg-greptile-green",
  },
  {
    vendor: "Cerebras",
    product: "CS-3 wafer-scale system",
    stat: "125 PFLOPS / system",
    detail: "WSE-3 chip: 4 trillion transistors, 900k AI cores, 44GB on-wafer SRAM, 21 PB/s memory bandwidth. AWS Bedrock deployment announced March 2026, rollout underway. OpenAI and AWS are anchor customers.",
    href: "https://www.cerebras.ai/blog/cerebras-is-coming-to-aws",
    source: "Cerebras newsroom",
    accent: "bg-peach",
  },
];

export default function AuraPage() {
  const maxLoad = Math.max(...telemetry.map((t) => t.load));
  return (
    <PageShell>
      <div className="bg-background">
        {/* Hero */}
        <section className="relative bg-paper-plus-ruled">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28 lg:py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl"
            >
              <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-5">
                <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
                [ AURA ]
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-anybody font-extrabold tracking-tight leading-[0.95] mb-6">
                The AI between<br />your compute and your power.
              </h1>
              <p className="text-xl md:text-2xl text-slate/70 max-w-3xl">
                AURA orchestrates compute, power, and cooling as a single system. It&apos;s why SmartTec can hit tokens-per-watt numbers that isolated GPU clouds can&apos;t.
              </p>
            </motion.div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* Live dashboard */}
        <section className="bg-background">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-16 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="border border-dashed border-slate/30 bg-fog/50 overflow-hidden"
            >
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

              <div className="p-6 md:p-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                  <div className="border border-dashed border-bloom/40 bg-bloom/5 p-4">
                    <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/60">Grid</div>
                    <div className="relative h-8">
                      <div className="absolute inset-0 font-anybody text-2xl font-bold text-slate aura-grid-live">LIVE</div>
                      <div className="absolute inset-0 font-anybody text-2xl font-bold text-bloom aura-grid-fault">FAULT</div>
                      <div className="absolute inset-0 font-anybody text-2xl font-bold text-greptile-green aura-grid-restored">RESTORED</div>
                    </div>
                    <div className="font-space-mono text-[10px] text-greptile-green">Battery: 100%</div>
                  </div>
                  <div className="border border-dashed border-slate/30 bg-fog/50 p-4">
                    <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/60">Compute</div>
                    <div className="font-anybody text-2xl font-bold text-slate">84%</div>
                    <div className="font-space-mono text-[10px] text-slate/60">Tokens/W optimal</div>
                  </div>
                  <div className="border border-dashed border-slate/30 bg-fog/50 p-4">
                    <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/60">PUE</div>
                    <div className="font-anybody text-2xl font-bold text-slate">1.12</div>
                    <div className="font-space-mono text-[10px] text-greptile-green">-25% vs avg</div>
                  </div>
                  <div className="border border-dashed border-slate/30 bg-fog/50 p-4">
                    <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/60">Failover</div>
                    <div className="font-anybody text-2xl font-bold text-slate">&lt;10 ms</div>
                    <div className="font-space-mono text-[10px] text-greptile-green">last 30 days</div>
                  </div>
                </div>

                <div className="border border-dashed border-slate/30 p-5 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-space-mono text-[11px] uppercase tracking-wider text-slate/60">72h load forecast</span>
                    <span className="font-space-mono text-[10px] uppercase tracking-wider text-slate/40">AURA · predicted</span>
                  </div>
                  <div className="relative h-40">
                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                      {[100, 75, 50, 25, 0].map((v) => (
                        <div key={v} className="border-t border-dashed border-slate/15 flex items-center">
                          <span className="font-space-mono text-[9px] text-slate/40 -mt-2 -ml-1">{v}%</span>
                        </div>
                      ))}
                    </div>
                    <div className="absolute inset-0 flex items-end justify-around px-2 pt-4">
                      {telemetry.map((t, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-0.5 px-1">
                          <div className="w-full flex flex-col items-center">
                            <div className="w-full bg-greptile-green" style={{ height: `${(t.load / maxLoad) * 100}px` }} />
                            <div className="w-full bg-neon" style={{ height: `${(t.solar / maxLoad) * 35}px`, marginTop: "1px" }} />
                          </div>
                          <span className="font-space-mono text-[9px] text-slate/40 mt-1">{t.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-greptile-green text-black px-5 py-4 flex items-center justify-between">
                  <div>
                    <div className="font-anybody text-sm font-bold uppercase tracking-wider">AURA alert</div>
                    <div className="font-space-mono text-[11px]">Design scenario: regional grid alert at 14:23 — AURA islands the cluster on full reserves before the sag arrives. Simulated preview; as-built telemetry publishes at power-on.</div>
                  </div>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* Industry Pulse — verified 2024–2026 stats with attribution */}
        <section className="bg-fog border-y border-dashed border-silver">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-16 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
                <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
                [ INDUSTRY PULSE · JUNE 2026 ]
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-anybody font-extrabold text-slate tracking-tight leading-[0.95] max-w-3xl">
                The grid is the bottleneck. <br />The data backs it up.
              </h2>
              <p className="text-lg text-slate/70 mt-4 max-w-2xl">
                Real numbers from real sources. This is why AURA exists.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate/30 border border-dashed border-slate/30">
              {industryPulse.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-background p-6 md:p-7 group hover:bg-greptile-green/5 transition-colors"
                >
                  <div className={`w-8 h-1.5 ${s.accent} mb-5`} />
                  <div className="font-anybody text-4xl md:text-5xl font-extrabold text-slate tracking-tight leading-none mb-3">
                    {s.value}
                  </div>
                  <p className="text-sm text-slate/80 leading-snug mb-4 min-h-[3.5rem]">
                    {s.label}
                  </p>
                  <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/50 pt-4 border-t border-dashed border-slate/20">
                    [ SOURCE · {s.source} ]
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 font-space-mono text-[11px] uppercase tracking-wider text-slate/50 text-center md:text-left">
              [ COMPILED FROM PUBLIC INDUSTRY FORECASTS · UPDATED JUNE 2026 ]
            </div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* What we're building on — verified compute platform stats */}
        <section className="bg-background">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-16 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
                <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
                [ WHAT WE BUILD ON ]
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-anybody font-extrabold text-slate tracking-tight leading-[0.95] max-w-3xl">
                The silicon under AURA.
              </h2>
              <p className="text-lg text-slate/70 mt-4 max-w-2xl">
                Verified specs from primary sources. Both chips are in production today.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
              {stackChips.map((s, i) => (
                <motion.div
                  key={s.vendor}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="border border-dashed border-slate/30 bg-fog/50 p-7 md:p-8"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <span className="font-space-mono text-[11px] uppercase tracking-wider text-slate/60">[ {s.vendor.toUpperCase()} ]</span>
                      <h3 className="text-2xl md:text-3xl font-anybody font-extrabold text-slate tracking-tight leading-tight mt-1">
                        {s.product}
                      </h3>
                    </div>
                    <div className={`w-12 h-12 ${s.accent} shrink-0 relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-halftone opacity-30" />
                    </div>
                  </div>
                  <div className="font-anybody text-3xl md:text-4xl font-extrabold text-slate mb-4">
                    {s.stat}
                  </div>
                  <p className="text-sm text-slate/70 leading-relaxed mb-5">
                    {s.detail}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-dashed border-slate/20">
                    <span className="font-space-mono text-[10px] uppercase tracking-wider text-slate/50">
                      [ SOURCE · {s.source} ]
                    </span>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-space-mono text-[10px] uppercase tracking-wider text-slate hover:text-greptile-green inline-flex items-center gap-1"
                    >
                      [ PRIMARY SOURCE ↗ ]
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 font-space-mono text-[11px] uppercase tracking-wider text-slate/50 text-center md:text-left">
              [ STATS VERIFIED AGAINST VENDOR DOCUMENTATION · UPDATED JUNE 2026 ]
            </div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* Capabilities */}
        <section className="bg-background">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 md:mb-16"
            >
              <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
                <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
                [ CAPABILITIES ]
              </span>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-anybody font-extrabold text-slate tracking-tight leading-[0.95]">
                What AURA does.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {capabilities.map((c, i) => (
                <motion.div
                  key={c.n}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group relative flex flex-col overflow-hidden rounded-lg border border-dashed border-slate/30 bg-fog/50 hover:bg-greptile-green/10 transition-colors"
                >
                  <div className={`h-2 ${c.accent}`} />
                  <div className="p-7 md:p-9 flex flex-col gap-4 flex-1">
                    <div className="flex items-start justify-between">
                      <span className="font-anybody text-5xl md:text-6xl font-extrabold text-slate/15 select-none leading-none">{c.n}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-anybody font-bold text-slate">{c.title}</h3>
                    <p className="text-sm text-slate/70 leading-relaxed">{c.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* CTA */}
        <section className="bg-greptile-green border-y border-slate/20">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28 text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-anybody font-extrabold text-slate tracking-tight mb-8">
              See it on your workload.
            </h2>
            <div className="btn-hex-group justify-center">
              <Link href="/contact" className="btn-hex-outline btn-hex-md !border-slate !bg-slate !text-slate xl:btn-hex-lg">
                Get a quote
              </Link>
              <Link href="/power" className="btn-hex btn-hex-md !border-slate !bg-slate !text-fog xl:btn-hex-lg">
                See the power stack
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}