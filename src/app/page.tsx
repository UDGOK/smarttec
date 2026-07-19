"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { TopologyDiagram } from "@/components/sections/TopologyDiagram";
import { MeadTwin } from "@/components/sections/MeadTwin";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";


// Partners row (real — no fake customers)
const partners = [
  { name: "NVIDIA" },
  { name: "Cerebras" },
  { name: "z1power" },
];

function WhyNowBand() {
  const stats = [
    { value: "4–7 yrs", label: "typical grid-connection wait" },
    { value: "~1,500 GW", label: "stuck in the US interconnection queue" },
    { value: "<10 ms", label: "battery failover · ride through" },
  ];

  return (
    <section className="relative bg-background">
      <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
            <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
            [ THE BOTTLENECK MOVED ]
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-anybody font-extrabold text-slate tracking-tight leading-[0.95] max-w-4xl mx-auto">
            The grid ran out of room.<br />We brought our own.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 max-w-4xl mx-auto">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border border-dashed border-slate/30 bg-fog/30 p-6 text-center"
            >
              <div className={`w-1.5 h-1.5 bg-greptile-green mx-auto mb-4`} />
              <div className="font-anybody text-3xl md:text-4xl font-extrabold text-slate tracking-tight">
                {s.value}
              </div>
              <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/60 mt-3 leading-relaxed">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ThreePillars() {
  const pillars = [
    {
      n: "01",
      kicker: "RESILIENT",
      title: "z1power LFP batteries, engineered by SmartTec into behind-the-meter storage. When the grid faults, AURA islands your cluster in under 10 milliseconds — no interruption, no diesel.",
      accent: "bg-greptile-green",
    },
    {
      n: "02",
      kicker: "PERFORMANT",
      title: "NVIDIA for training and dense inference. Cerebras for the fastest tokens on earth. AURA tunes every rack for tokens-per-watt — the new efficiency metric.",
      accent: "bg-seafoam",
    },
    {
      n: "03",
      kicker: "PROVABLE",
      title: "Real-time telemetry, design-basis SLA targets, US-built hardware, and compliance built in from day one.",
      accent: "bg-ice",
    },
  ];

  return (
    <section className="relative bg-background">
      <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
            <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
            [ WHY SMARTTEC ]
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-anybody font-extrabold text-slate tracking-tight leading-[0.95]">
            Powered. Performant. Provable.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-dashed border-slate/30 bg-fog/50 hover:bg-greptile-green/10 transition-colors"
            >
              <div className={`h-2 ${p.accent}`} />
              <div className="p-7 md:p-9 flex flex-col gap-5 flex-1">
                <div className="flex items-start justify-between">
                  <span className="font-anybody text-5xl md:text-6xl font-extrabold text-slate/15 select-none leading-none">
                    {p.n}
                  </span>
                  <span className="font-space-mono text-[11px] uppercase tracking-wider text-slate/60">
                    [ {p.kicker} ]
                  </span>
                </div>
                <p className="text-base md:text-lg text-slate leading-relaxed font-anybody">
                  {p.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Offer() {
  const offers = [
    {
      kind: "ON-DEMAND GPU",
      title: "NVIDIA instances by the hour.",
      body: "Spin up, train, tear down. Bare-metal or orchestrated.",
      bestFor: "Bursty training, experimentation.",
      cta: "Reserve",
      href: "/compute",
      accent: "bg-greptile-green",
    },
    {
      kind: "RESERVED GPU CLUSTERS",
      title: "Dedicated nodes, monthly or annual.",
      body: "Yours alone, on independent power.",
      bestFor: "Sustained training, production inference at scale.",
      cta: "Reserve",
      href: "/compute",
      accent: "bg-seafoam",
    },
    {
      kind: "CEREBRAS INFERENCE",
      title: "Wafer-scale endpoints for the lowest-latency tokens available.",
      body: "Ideal for real-time and agentic workloads.",
      bestFor: "Real-time and agentic inference.",
      cta: "Reserve",
      href: "/compute",
      accent: "bg-ice",
    },
    {
      kind: "COLOCATION & BUILD-TO-SUIT",
      title: "Bring your hardware onto our battery-backed power.",
      body: "Or we build dedicated MW behind the meter for you.",
      bestFor: "Operators who have silicon but can't get power.",
      cta: "Talk to us",
      href: "/contact",
      accent: "bg-lavender",
      enterprise: true,
    },
  ];

  return (
    <section className="relative bg-background">
      <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
            <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
            [ WHAT YOU CAN RESERVE ]
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-anybody font-extrabold text-slate tracking-tight leading-[0.95]">
            Compute that&apos;s already powered.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {offers.map((o, i) => (
            <motion.div
              key={o.kind}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative flex flex-col overflow-hidden rounded-lg border ${o.enterprise ? "border-2 border-slate bg-slate text-fog" : "border-dashed border-slate/30 bg-fog/50 hover:bg-greptile-green/10"} transition-colors`}
            >
              <div className={`h-2 ${o.accent}`} />
              <div className="p-7 md:p-9 flex flex-col gap-4 flex-1">
                <span className={`font-space-mono text-[11px] uppercase tracking-wider ${o.enterprise ? "text-greptile-green" : "text-slate/60"}`}>
                  [ {o.kind} ]
                </span>
                <h3 className={`text-xl md:text-2xl font-anybody font-extrabold leading-tight ${o.enterprise ? "text-fog" : "text-slate"}`}>
                  {o.title}
                </h3>
                <p className={`text-sm leading-relaxed ${o.enterprise ? "text-fog/70" : "text-slate/70"}`}>
                  {o.body}
                </p>
                <div className={`text-xs font-space-mono uppercase tracking-wider ${o.enterprise ? "text-greptile-green" : "text-slate/50"}`}>
                  Best for · {o.bestFor}
                </div>
                <Link href={o.href} className={`btn-hex btn-hex-sm ${o.enterprise ? "!border-greptile-green !bg-greptile-green !text-black" : "!border-slate !bg-slate !text-fog"} mt-2 self-start`}>
                  {o.cta} →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Reserve",
      body: "Tell us the workload — training run, inference SLA, or megawatts. We scope it and quote in 48 hours.",
      metric: "48h",
      metricLabel: "to quote",
    },
    {
      n: "02",
      title: "Provision",
      body: "Your instances or cluster come online on behind-the-meter power. Days, not years.",
      metric: "Days",
      metricLabel: "not years",
    },
    {
      n: "03",
      title: "Scale",
      body: "AURA optimizes tokens-per-watt automatically. Grow from one node to multiple megawatts with no re-architecture.",
      metric: "1 → MW",
      metricLabel: "linear scale",
    },
  ];

  return (
    <section className="relative bg-background">
      <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-5">
            <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
            [ HOW IT WORKS ]
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-anybody font-extrabold text-slate tracking-tight leading-[0.95]">
            From reservation to running.
          </h2>
        </motion.div>

        <div className="space-y-0">
          {steps.map((step, idx) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
            >
              {idx > 0 && <div className="h-px bg-slate/20 mb-16" />}
              <div className="pb-16">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-start">
                  <div className="md:col-span-3">
                    <span className="text-7xl md:text-8xl lg:text-9xl font-anybody font-bold text-slate/15 leading-none block">
                      {step.n}
                    </span>
                  </div>
                  <div className="md:col-span-6">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-anybody font-bold text-slate mb-4">
                      {step.title}
                    </h3>
                    <p className="text-base md:text-lg text-slate/70 leading-relaxed max-w-prose">
                      {step.body}
                    </p>
                  </div>
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

function PowerMoat() {
  return (
    <section id="power" className="relative bg-fog border-y border-dashed border-silver">
      <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
              <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
              [ THE MOAT ]
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-anybody font-extrabold text-slate tracking-tight leading-[0.95] mb-6">
              We don&apos;t buy power off a strained grid. We build it.
            </h2>
            <p className="text-lg text-slate/70 leading-relaxed mb-6">
              z1power megawatt battery stacks — lithium-iron-phosphate, triple-redundant banks, sub-10ms failover, US-built. Behind the meter means you&apos;re never in the queue and never at the mercy of a grid event.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "No air permits, no fuel logistics — silent and modular.",
                "Instant load-following for spiky AI workloads.",
                "Clean: fed by on-site solar where available.",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3 text-sm text-slate/80">
                  <div className="shrink-0 w-5 h-5 mt-0.5 bg-greptile-green flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                      <path d="M3 8.5L6.5 12L13 5" />
                    </svg>
                  </div>
                  {line}
                </li>
              ))}
            </ul>
            <Link href="/power" className="btn-hex-outline btn-hex-md !border-slate !bg-slate !text-slate">
              Inside the power stack
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <TopologyDiagram />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Reliability() {
  const pillars = [
    {
      n: "01",
      kicker: "REDUNDANCY",
      title: "Triple-redundant battery banks. If one fails, two take over in under 10ms. No single point of failure.",
      accent: "bg-greptile-green",
    },
    {
      n: "02",
      kicker: "COMPLIANCE",
      title: "SOC 2 Type II [in progress]. Encryption at rest and in transit. Full audit logging from day one.",
      accent: "bg-seafoam",
    },
    {
      n: "03",
      kicker: "SLA",
      title: "A financially-backed 99.9_% uptime SLA on every reserved deployment. Targets we&apos;ll put in the contract.",
      accent: "bg-ice",
    },
  ];

  return (
    <section className="relative bg-background">
      <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
            <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
            [ RELIABILITY ]
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-anybody font-extrabold text-slate tracking-tight leading-[0.95]">
            Engineered to stay up.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.kicker}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-dashed border-slate/30 bg-fog/50 hover:bg-greptile-green/10 transition-colors"
            >
              <div className={`h-2 ${p.accent}`} />
              <div className="p-7 md:p-9 flex flex-col gap-5 flex-1">
                <div className="flex items-start justify-between">
                  <span className="font-anybody text-5xl md:text-6xl font-extrabold text-slate/15 select-none leading-none">
                    {p.n}
                  </span>
                  <span className="font-space-mono text-[11px] uppercase tracking-wider text-slate/60">
                    [ {p.kicker} ]
                  </span>
                </div>
                <p
                  className="text-base md:text-lg text-slate leading-relaxed font-anybody"
                  dangerouslySetInnerHTML={{ __html: p.title }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClosingCTA() {
  return (
    <section id="cta" className="relative bg-background">
      <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
            <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
            [ NOW RESERVING ]
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-8xl font-anybody font-extrabold text-slate tracking-tight leading-[0.9] mb-6">
            Reserve your capacity<br />before power-on.
          </h2>
          <p className="text-lg text-slate/70 mb-10 max-w-xl mx-auto">
            First-wave slots are limited and priced for early partners. Tell us your workload; we&apos;ll scope a fixed quote in 48 hours.
          </p>
          <div className="btn-hex-group justify-center">
            <Link href="/contact" className="btn-hex btn-hex-md !border-greptile-green !bg-greptile-green !text-black xl:btn-hex-lg">
              Reserve compute
            </Link>
            <Link href="/contact" className="btn-hex-outline btn-hex-md !border-slate !bg-slate !text-slate xl:btn-hex-lg">
              Become a design partner
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-space-mono text-[11px] uppercase tracking-wider text-slate/60">
            <span>[ Q4 2026 power-on ]</span>
            <span>[ 48h to quote ]</span>
            <span>[ NVIDIA + Cerebras ]</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function DesignPartners() {
  return (
    <section className="relative bg-background">
      <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
              <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
              [ DESIGN PARTNERS WANTED ]
            </span>
            <h2 className="text-4xl md:text-5xl font-anybody font-extrabold text-slate tracking-tight leading-[0.95] mb-6">
              Become one of our first three.
            </h2>
            <p className="text-lg text-slate/70 leading-relaxed mb-6 max-w-xl">
              We&apos;re reserving discounted launch capacity for our first three design partners — teams with a serious training or inference workload who want to lock in early pricing and shape the platform.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Launch pricing locked for the first 12 months.",
                "Named case study + benchmark co-published at power-on.",
                "Direct line to the engineering team — no support tiers in between.",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3 text-sm text-slate/80">
                  <div className="shrink-0 w-5 h-5 mt-0.5 bg-greptile-green flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                      <path d="M3 8.5L6.5 12L13 5" />
                    </svg>
                  </div>
                  {line}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn-hex btn-hex-md !border-greptile-green !bg-greptile-green !text-black">
              Apply for design partner
            </Link>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-dashed border-slate/30 bg-fog/30 p-6">
              <div className="font-space-mono text-[11px] uppercase tracking-widest text-slate/60 mb-4">[ PROGRAM STATUS ]</div>
              <ul className="space-y-3 font-space-mono text-xs">
                <li className="flex items-center justify-between gap-3">
                  <span className="text-slate/70">Slots open</span>
                  <span className="text-slate">3 of 3</span>
                </li>
                <li className="flex items-center justify-between gap-3">
                  <span className="text-slate/70">Application deadline</span>
                  <span className="text-slate">Rolling</span>
                </li>
                <li className="flex items-center justify-between gap-3">
                  <span className="text-slate/70">Power-on (target)</span>
                  <span className="text-slate">Q4 2026</span>
                </li>
                <li className="flex items-center justify-between gap-3">
                  <span className="text-slate/70">Workload types</span>
                  <span className="text-slate">Training · Inference · Colo</span>
                </li>
              </ul>
              <div className="mt-5 pt-5 border-t border-dashed border-slate/30 flex items-center gap-2 font-space-mono text-[10px] uppercase tracking-wider text-slate/60">
                <span className="w-1.5 h-1.5 bg-greptile-green rounded-full animate-pulse-glow" />
                Now accepting design partners
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function DgxSparkCallout() {
  return (
    <section className="relative bg-fog/30 border-y border-dashed border-slate/30">
      <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-14 md:py-20">
        <div className="grid lg:grid-cols-[5fr_7fr] gap-8 items-center">
          {/* Photo */}
          <div className="relative border border-dashed border-slate/30 bg-slate overflow-hidden aspect-[16/10]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/hardware/nvidia-dgx-spark-desktop.jpg" alt="NVIDIA DGX Spark desktop supercomputer" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-slate/85 backdrop-blur px-4 py-2 border-t border-slate/30">
              <div className="flex items-baseline justify-between gap-3">
                <div className="font-space-mono text-[10px] uppercase tracking-[0.18em] text-greptile-green">[ NVIDIA CES 2025 ]</div>
                <div className="font-anybody font-bold text-sm text-fog">DGX Spark · GB10</div>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div>
            <div className="flex items-center gap-2 font-space-mono text-[11px] uppercase tracking-[0.18em] text-greptile-green mb-3">
              <span className="inline-block w-2 h-2 bg-greptile-green" />
              <span>[ NVIDIA JUST MOVED ]</span>
            </div>
            <h2 className="font-anybody font-extrabold text-3xl md:text-4xl lg:text-5xl text-slate tracking-tight leading-[1.05] mb-4">
              NVIDIA gave you a $3K desk box.<br />
              <span className="text-greptile-green">We give you the AI factory.</span>
            </h2>
            <p className="font-anybody text-slate/70 text-lg leading-relaxed mb-6 max-w-xl">
              The DGX Spark is the most exciting dev box of the year. Same GB10 architecture, same NVIDIA toolchain. Just at production scale — and behind the megawatt batteries we built.
            </p>
            <Link
              href="/dgx-spark"
              className="inline-flex items-center gap-2 bg-greptile-green text-slate font-space-mono text-[11px] uppercase tracking-wider px-5 py-3 hover:bg-greptile-green/85 transition-colors"
            >
              <span className="w-1.5 h-1.5 bg-slate" />
              See side-by-side →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnersBand() {
  return (
    <div className="relative bg-background">
      <div>
        <hr className="border-border w-full opacity-30" />
        <div className="flex items-center gap-6 px-6 md:px-12 lg:px-16 py-3">
          <div className="divider-plus-sm flex-1" />
          <span className="font-space-mono text-[11px] md:text-xs tracking-widest uppercase shrink-0 relative text-slate">
            <span className="relative">Built with NVIDIA · Cerebras · z1power</span>
          </span>
          <div className="divider-plus-sm flex-1" />
        </div>
        <hr className="border-border w-full opacity-30" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-3 border-t border-dashed border-silver"
      >
        {partners.map((p) => (
          <div
            key={p.name}
            className="flex items-center justify-center h-20 md:h-24 border-r border-b border-dashed border-silver bg-fog/50 hover:bg-greptile-green/10 transition-colors"
          >
            <span className="font-anybody font-extrabold text-2xl md:text-4xl text-slate/70 tracking-tight">
              {p.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-[6.5rem] sm:pt-[6.75rem]">
        <Hero />
        <PartnersBand />
        <WhyNowBand />
        <ThreePillars />
        <Offer />
        <HowItWorks />
        <PowerMoat />
        <AURA />
        <Reliability />
        <DesignPartners />
        <DgxSparkCallout />
        {/* NewsBand moved to /news page */}
        <ClosingCTA />
      </main>
      <Footer />
    </div>
  );
}

// Inline AURA dashboard (kept the great visual, re-pointed to compute+power)
function AURA() {
  const telemetry = [
    { time: "00:00", load: 32, solar: 18 },
    { time: "04:00", load: 28, solar: 0 },
    { time: "08:00", load: 56, solar: 24 },
    { time: "12:00", load: 78, solar: 64 },
    { time: "16:00", load: 84, solar: 72 },
    { time: "20:00", load: 62, solar: 28 },
  ];
  const maxLoad = Math.max(...telemetry.map((t) => t.load));
  return (
    <section id="aura" className="relative bg-background">
      <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
              <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
              [ AURA ENGINE ]
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-anybody font-extrabold text-slate tracking-tight leading-[0.95] mb-10">
              Operations that think ahead.
            </h2>

            <div className="space-y-5">
              {[
                { title: "Predictive load positioning", desc: "Reserves pre-charged capacity 72 hours before demand peaks." },
                { title: "Tokens-per-watt tuning", desc: "AURA balances compute and cooling for the best performance per megawatt." },
                { title: "Sub-10ms failover", desc: "Automatic routing across redundant battery banks." },
                { title: "Anomaly detection", desc: "Flags cell- and node-level issues before they become incidents." },
              ].map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="shrink-0 w-6 h-6 mt-1 flex items-center justify-center bg-greptile-green text-black">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8.5L6.5 12L13 5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-anybody text-lg md:text-xl font-bold text-slate mb-1">
                      {f.title}
                    </h3>
                    <p className="text-slate/70 text-sm leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="border border-dashed border-slate/30 bg-fog/50 overflow-hidden">
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

              <div className="p-6 md:p-8">
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="border border-dashed border-bloom/40 bg-bloom/5 p-3">
                    <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/60">Grid</div>
                    <div className="font-anybody text-2xl font-bold text-slate">OFFLINE</div>
                    <div className="font-space-mono text-[10px] text-greptile-green">Battery: 100%</div>
                  </div>
                  <div className="border border-dashed border-slate/30 bg-fog/50 p-3">
                    <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/60">Compute</div>
                    <div className="font-anybody text-2xl font-bold text-slate">84%</div>
                    <div className="font-space-mono text-[10px] text-slate/60">Tokens/W optimal</div>
                  </div>
                  <div className="border border-dashed border-slate/30 bg-fog/50 p-3">
                    <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/60">PUE</div>
                    <div className="font-anybody text-2xl font-bold text-slate">1.12</div>
                    <div className="font-space-mono text-[10px] text-greptile-green">-25% vs avg</div>
                  </div>
                </div>

                <div className="border border-dashed border-slate/30 p-4 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-space-mono text-[11px] uppercase tracking-wider text-slate/60">72h load forecast</span>
                    <span className="font-space-mono text-[10px] uppercase tracking-wider text-slate/40">AURA · predicted</span>
                  </div>
                  <div className="relative h-32">
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
                            <div className="w-full bg-greptile-green" style={{ height: `${(t.load / maxLoad) * 80}px` }} />
                            <div className="w-full bg-neon" style={{ height: `${(t.solar / maxLoad) * 30}px`, marginTop: "1px" }} />
                          </div>
                          <span className="font-space-mono text-[9px] text-slate/40 mt-1">{t.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

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

// Reuse the same Hero but with new copy
function Hero() {
  return (
    <div className="relative overflow-hidden bg-background bg-paper-plus-ruled">
      <section className="relative section-wrapper-compact">
        {/* Decorative texture blocks */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-6 -right-10 w-64 h-52 bg-grid-pattern opacity-20 rotate-3 bg-greptile-green"
               style={{ maskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)", WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)" }} />
          <div className="absolute -bottom-4 -left-8 w-56 h-44 bg-grid-pattern opacity-15 -rotate-2 bg-lavender"
               style={{ maskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)", WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)" }} />
          <div className="absolute top-1/2 -translate-y-1/2 left-4 w-28 h-36 bg-dither-dense opacity-20 rotate-1" />
          <div className="absolute top-16 right-1/3 w-40 h-28 bg-dither opacity-15 -rotate-1" />
          <div className="absolute bottom-10 left-1/3 w-48 h-32 bg-halftone opacity-20 rotate-2" />
        </div>

        <div
          className="absolute top-[48%] -translate-y-1/2 right-2 xl:right-10 pointer-events-none w-[min(38vw,560px)] hidden xl:block opacity-80"
          style={{ maskImage: "linear-gradient(to right, transparent 0%, black 22%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 22%)" }}
        >
          <MeadTwin />
        </div>


        <div className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-14 lg:px-16 pt-32 md:pt-40 lg:pt-44 pb-16">
          <div className="relative z-10">
            <motion.h1
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="text-slate text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-anybody font-extrabold tracking-tight leading-[0.95] max-w-3xl"
            >
              Stay online when<br />
              the grid goes down.
            </motion.h1>
          </div>

          <div className="relative z-10 pb-12 md:pb-20 lg:pb-24 mt-12">
            <motion.div
              initial={{ opacity: 0, filter: "blur(6px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl"
            >
              <p className="text-xl md:text-2xl xl:text-3xl text-slate mb-8">
                SmartTec runs NVIDIA and Cerebras compute behind battery storage we engineer on z1power LFP. When the grid faults, AURA islands your cluster in under 10 milliseconds and rides through on batteries. Up to 73% modeled grid reduction. Built in the USA.
              </p>
              <div className="btn-hex-group">
                <Link href="/contact" className="btn-hex btn-hex-md !border-greptile-green !bg-greptile-green !text-black xl:btn-hex-lg">
                  Reserve compute
                </Link>
                <Link href="/power" className="btn-hex-outline btn-hex-md !border-slate !bg-slate !text-slate xl:btn-hex-lg">
                  See the power story
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-space-mono text-[11px] uppercase tracking-wider text-slate/60">
                <span>[ Q4 2026 power-on ]</span>
                <span>[ 48h to quote ]</span>
                <span>[ NVIDIA + Cerebras ]</span>
                <span>[ Behind the meter ]</span>
                <span>[ US-built ]</span>
              </div>
              <div className="xl:hidden mt-10 -mx-2 max-w-xl">
                <MeadTwin />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}