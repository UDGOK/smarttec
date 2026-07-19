"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageShell from "@/components/PageShell";

const features = [
  {
    label: "01",
    title: "NVIDIA reference architecture",
    description: "Reference-architecture NVIDIA deployments: H100 / H200 / B200 / GB200 on InfiniBand NDR, 8 GPUs per node, full fat-tree topology. Bare-metal or hypervisor-bounded.",
    accent: "bg-greptile-green",
  },
  {
    label: "02",
    title: "Cerebras wafer-scale inference",
    description: "Dedicated CS-3 systems for committed inference workloads. The fastest tokens-per-dollar on earth, on the same fabric as your NVIDIA compute.",
    accent: "bg-peach",
  },
  {
    label: "03",
    title: "AURA orchestration",
    description: "Predictive 72-hour load forecasting. Coordinates BESS charge cycles, GPU thermal load, and grid events so your workloads run uninterrupted.",
    accent: "bg-seafoam",
  },
  {
    label: "04",
    title: "z1power-based BESS",
    description: "Grid-independent power engineered in-house on z1power LFP modules. Sub-10ms failover from grid to battery by design. We control the full integration: storage, inverters, and AURA.",
    accent: "bg-lavender",
  },
  {
    label: "05",
    title: "Live observability",
    description: "Real-time telemetry for every node, GPU, and battery cell. Per-job cost tracking. SOC 2 Type II. Public status page at /status.",
    accent: "bg-ice",
  },
  {
    label: "06",
    title: "Bare-metal isolation",
    description: "Full hardware access for HPC and security-sensitive workloads. No noisy neighbors. Single-tenant nodes available on every cluster.",
    accent: "bg-pink",
  },
];

const integrations = [
  { name: "NVIDIA NGC", category: "Containers & models" },
  { name: "Cerebras Model Zoo", category: "Inference" },
  { name: "Weights & Biases", category: "Experiment tracking" },
  { name: "Hugging Face", category: "Model hub" },
  { name: "Kubernetes", category: "Orchestration" },
  { name: "Slurm", category: "HPC scheduler" },
  { name: "Datadog", category: "Observability" },
  { name: "PagerDuty", category: "Incident paging" },
  { name: "Snowflake", category: "Telemetry warehouse" },
  { name: "HashiCorp Vault", category: "Secrets" },
];

export default function FeaturesPage() {
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
                [ FEATURES · COMPUTE ]
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-anybody font-extrabold tracking-tight leading-[0.95] mb-6">
                Everything in the stack.
              </h1>
              <p className="text-xl md:text-2xl text-slate/70 max-w-3xl">
                NVIDIA and Cerebras compute on z1power megawatt batteries, orchestrated by AURA. Every layer — silicon, power, cooling, AI, observability — designed and shipped together.
              </p>
            </motion.div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* Core capabilities grid */}
        <section className="bg-background">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
                <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
                [ CORE CAPABILITIES ]
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-anybody font-extrabold text-slate tracking-tight leading-[0.95] max-w-3xl mx-auto">
                Six layers. <br />One platform.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate/30 border border-dashed border-slate/30">
              {features.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="bg-background p-7 md:p-8 group hover:bg-greptile-green/5 transition-colors"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <span className={`w-10 h-10 ${f.accent} shrink-0 relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-halftone opacity-30" />
                    </span>
                    <span className="font-space-mono text-[11px] uppercase tracking-wider text-slate/40 font-bold mt-2">
                      [{f.label}]
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-anybody font-bold text-slate mb-3">{f.title}</h3>
                  <p className="text-sm text-slate/70 leading-relaxed">{f.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* NVIDIA + Cerebras side-by-side */}
        <section className="bg-fog border-y border-dashed border-silver">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <div className="border border-dashed border-slate/30 bg-background p-8 md:p-10">
                <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-greptile-green mb-4">
                  <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
                  [ NVIDIA ]
                </span>
                <h3 className="text-3xl md:text-4xl font-anybody font-extrabold text-slate mb-4 leading-tight">
                  For training and dense inference.
                </h3>
                <p className="text-slate/70 leading-relaxed mb-6">
                  H100 / H200 / B200 / GB200 built to NVIDIA reference-architecture practices. 8 GPUs per node, InfiniBand NDR fabric, fat-tree topology. Bare-metal or orchestrated with Kubernetes or Slurm.
                </p>
                <Link href="/compute#nvidia" className="btn-hex-outline btn-hex-sm !border-slate !bg-slate !text-fog">
                  Explore NVIDIA compute →
                </Link>
              </div>
              <div className="border border-dashed border-slate/30 bg-background p-8 md:p-10">
                <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-peach mb-4">
                  <span className="w-1.5 h-1.5 bg-peach rounded-full" />
                  [ CEREBRAS ]
                </span>
                <h3 className="text-3xl md:text-4xl font-anybody font-extrabold text-slate mb-4 leading-tight">
                  For the fastest tokens on earth.
                </h3>
                <p className="text-slate/70 leading-relaxed mb-6">
                  Wafer-scale CS-3 systems for committed inference workloads. Lowest latency inference available, on the same fabric as your NVIDIA compute. Per-token billing on shared endpoints.
                </p>
                <Link href="/compute#cerebras" className="btn-hex-outline btn-hex-sm !border-slate !bg-slate !text-fog">
                  Explore Cerebras inference →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* Integrations */}
        <section className="bg-background">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-16 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12 max-w-3xl"
            >
              <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
                <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
                [ INTEGRATIONS ]
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-anybody font-extrabold text-slate tracking-tight leading-[0.95]">
                Plays well with your stack.
              </h2>
              <p className="text-lg text-slate/70 mt-4">
                Bring your own scheduler, observability, model hub, and secrets. SmartTec doesn&apos;t lock you in.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-slate/30 border border-dashed border-slate/30">
              {integrations.map((i) => (
                <div key={i.name} className="bg-background p-5 hover:bg-greptile-green/5 transition-colors">
                  <div className="font-anybody font-bold text-sm text-slate">{i.name}</div>
                  <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/60 mt-1">{i.category}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* CTA */}
        <section className="bg-greptile-green border-y border-slate/20">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28 text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-anybody font-extrabold text-slate tracking-tight mb-8">
              See it running.
            </h2>
            <div className="btn-hex-group justify-center">
              <Link href="/compute" className="btn-hex-outline btn-hex-md !border-slate !bg-slate !text-slate xl:btn-hex-lg">
                Browse compute
              </Link>
              <Link href="/contact" className="btn-hex btn-hex-md !border-slate !bg-slate !text-fog xl:btn-hex-lg">
                Book a tour
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}