"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageShell from "@/components/PageShell";

const faqs = [
  { q: "How fast can I get GPUs online vs. a hyperscaler waitlist?", a: "From signed reservation to running, typical onboarding is days — not the 6-12 months typical of major hubs. The power is already there." },
  { q: "What NVIDIA and Cerebras models do you run?", a: "NVIDIA H100 / H200 / B200 / GB200 [confirm fleet before publishing exact mix]. Cerebras wafer-scale systems for fastest-inference workloads. Bare-metal or orchestrated." },
  { q: "Can I reserve a dedicated cluster?", a: "Yes — monthly or annual reserved clusters, with early-partner pricing during the build phase. Discounted launch capacity available to design partners." },
  { q: "What's the contract minimum?", a: "On-demand has no minimum. Reserved clusters are typically 12-month terms. Colo starts at 100kW." },
  { q: "Do you offer spot / preemptible instances?", a: "Yes — preemptible NVIDIA instances at significant discounts, suitable for fault-tolerant training jobs." },
];

const serviceModels = [
  { name: "Bare-metal", desc: "Full hardware, maximum isolation and performance. Best for HPC and security-sensitive workloads.", accent: "bg-greptile-green" },
  { name: "Cluster", desc: "Orchestrated multi-node for distributed training and inference. Kubernetes and Slurm supported.", accent: "bg-seafoam" },
  { name: "VM / instance", desc: "Right-sized on-demand compute. Spin up by the hour, tear down when done.", accent: "bg-ice" },
  { name: "Inference endpoint", desc: "Managed model serving on Cerebras and NVIDIA. Per-token billing.", accent: "bg-lavender" },
];

const benchmarks = [
  { workload: "LLM training (70B, continued pretrain)", nvidia: "H100 8-way", cerebras: "CS-3 dedicated", price: "from $2.40/GPU-hr" },
  { workload: "Real-time inference (<50ms p99)", nvidia: "H200", cerebras: "CS-3 (fastest)", price: "from $0.04/1K tokens" },
  { workload: "Fine-tuning (7B, LoRA)", nvidia: "H100", cerebras: "CS-3 (preferred)", price: "from $1.20/GPU-hr" },
  { workload: "Batch embedding (large corpus)", nvidia: "L40S preferred", cerebras: "—", price: "from $0.60/GPU-hr" },
];

export default function ComputePage() {
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
                [ COMPUTE ]
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-anybody font-extrabold tracking-tight leading-[0.95] mb-6">
                The right silicon,<br />on power that never blinks.
              </h1>
              <p className="text-xl md:text-2xl text-slate/70 max-w-3xl mb-10">
                Most clouds make you choose between availability and performance. We don&apos;t — because the thing that constrains everyone else, power, is the thing we own. Run NVIDIA, Cerebras, or both, on behind-the-meter capacity.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <Link href="/contact" className="btn-hex btn-hex-md !border-greptile-green !bg-greptile-green !text-black">
                  Reserve compute
                </Link>
                <Link href="/pricing" className="btn-hex-outline btn-hex-md !border-slate !bg-slate !text-slate">
                  See pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* NVIDIA + Cerebras */}
        <section className="bg-background">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="border border-dashed border-slate/30 bg-fog/50 p-8 md:p-10"
              >
                <span className="font-anybody font-extrabold text-2xl text-slate mb-4 block">[ NVIDIA ]</span>
                <h3 className="text-3xl md:text-4xl font-anybody font-extrabold text-slate mb-4 leading-tight">
                  For training and dense inference.
                </h3>
                <p className="text-slate/70 leading-relaxed mb-6">
                  H100 / H200 / B200 / GB200 [confirm fleet]. Deployed to the NVIDIA Cloud Partner reference architecture [pursuing NCP status — confirm before claiming]. On-demand or reserved, bare-metal or orchestrated with Kubernetes or Slurm.
                </p>
                <Link href="/contact" className="btn-hex btn-hex-sm !border-slate !bg-slate !text-fog">
                  Reserve NVIDIA →
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="border border-dashed border-slate/30 bg-fog/50 p-8 md:p-10"
              >
                <span className="font-anybody font-extrabold text-2xl text-peach mb-4 block">[ CEREBRAS ]</span>
                <h3 className="text-3xl md:text-4xl font-anybody font-extrabold text-slate mb-4 leading-tight">
                  For the fastest tokens on earth.
                </h3>
                <p className="text-slate/70 leading-relaxed mb-6">
                  Wafer-scale compute for the lowest-latency inference available — ideal for real-time and agentic workloads. Very few clouds offer Cerebras alongside NVIDIA. We run both on one network.
                </p>
                <Link href="/contact" className="btn-hex btn-hex-sm !border-slate !bg-slate !text-fog">
                  Reserve Cerebras →
                </Link>
              </motion.div>
            </div>

            {/* Integrated pitch banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-12 border-2 border-slate bg-slate text-fog p-10 md:p-12 text-center"
            >
              <h3 className="text-3xl md:text-4xl font-anybody font-extrabold mb-3">
                One network. One bill. One power source you can trust.
              </h3>
              <p className="text-fog/70 max-w-2xl mx-auto">
                Choose NVIDIA, Cerebras, or both — on independent power that never waits for the grid.
              </p>
            </motion.div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* Service models */}
        <section className="bg-fog border-y border-dashed border-silver">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
                <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
                [ SERVICE MODELS ]
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-anybody font-extrabold text-slate tracking-tight">
                Pick the shape of compute that fits.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {serviceModels.map((m, i) => (
                <motion.div
                  key={m.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-background border border-dashed border-slate/30 p-6 hover:border-greptile-green transition-colors"
                >
                  <div className={`w-1.5 h-1.5 ${m.accent} mb-4`} />
                  <h3 className="font-anybody font-extrabold text-xl text-slate mb-3">{m.name}</h3>
                  <p className="text-sm text-slate/70 leading-relaxed">{m.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* Benchmarks */}
        <section className="bg-background">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12 max-w-3xl"
            >
              <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
                <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
                [ REFERENCE WORKLOADS ]
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-anybody font-extrabold text-slate tracking-tight">
                The right silicon for the job.
              </h2>
              <p className="text-lg text-slate/70 mt-4">
                Pick the platform by workload. We&apos;ll help you benchmark before you commit.
              </p>
            </motion.div>

            <div className="border border-dashed border-slate/30 overflow-hidden">
              <div className="grid grid-cols-12 bg-fog border-b border-dashed border-slate/30 px-5 py-3 font-space-mono text-[11px] uppercase tracking-wider text-slate/60">
                <div className="col-span-5">Workload</div>
                <div className="col-span-3">NVIDIA</div>
                <div className="col-span-3">Cerebras</div>
                <div className="col-span-1 text-right">From</div>
              </div>
              {benchmarks.map((b, i) => (
                <div key={b.workload} className={`grid grid-cols-12 px-5 py-4 ${i !== benchmarks.length - 1 ? "border-b border-dashed border-slate/20" : ""} hover:bg-greptile-green/5`}>
                  <div className="col-span-5 font-anybody font-bold text-slate">{b.workload}</div>
                  <div className="col-span-3 font-space-mono text-xs text-slate/80">{b.nvidia}</div>
                  <div className="col-span-3 font-space-mono text-xs text-slate/80">{b.cerebras}</div>
                  <div className="col-span-1 text-right font-anybody font-bold text-slate">{b.price}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* FAQ */}
        <section className="bg-background">
          <div className="relative mx-auto w-full max-w-3xl px-6 md:px-12 py-20 md:py-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
                <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
                [ FAQ ]
              </span>
              <h2 className="text-4xl sm:text-5xl font-anybody font-extrabold text-slate tracking-tight">
                Compute questions.
              </h2>
            </motion.div>

            <div className="space-y-3">
              {faqs.map((f, i) => (
                <details key={i} className="group border border-dashed border-slate/30 bg-fog/50">
                  <summary className="cursor-pointer px-5 py-4 flex items-center justify-between gap-4 hover:bg-greptile-green/10">
                    <div className="flex items-center gap-4">
                      <span className="font-space-mono text-[11px] text-slate/40 font-bold">{String(i + 1).padStart(2, "0")}</span>
                      <span className="font-anybody font-bold text-slate">{f.q}</span>
                    </div>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate/60 transition-transform group-open:rotate-180">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 pl-12 md:pl-14 text-slate/70 leading-relaxed text-sm border-t border-dashed border-slate/20 pt-4">
                    {f.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* CTA */}
        <section className="bg-greptile-green border-y border-slate/20">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28 text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-anybody font-extrabold text-slate tracking-tight mb-8">
              Reserve your compute.
            </h2>
            <div className="btn-hex-group justify-center">
              <Link href="/contact" className="btn-hex-outline btn-hex-md !border-slate !bg-slate !text-slate xl:btn-hex-lg">
                Get a quote in 48h
              </Link>
              <Link href="/pricing" className="btn-hex btn-hex-md !border-slate !bg-slate !text-fog xl:btn-hex-lg">
                See pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}