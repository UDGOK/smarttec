"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageShell from "@/components/PageShell";

const faqs = [
  { q: "How is pricing structured?", a: "On-demand by the GPU-hour, or reserved by node/cluster. [Starting from $__/GPU-hr — confirm before publishing.] Reserve now for launch pricing." },
  { q: "What GPUs are available on-demand?", a: "H100 / H200 / B200 / GB200 [confirm exact fleet]. Spot / preemptible available at significant discount." },
  { q: "What about Cerebras?", a: "Dedicated wafer-scale systems for committed inference workloads. Inference endpoints billed per-token." },
  { q: "Can I prepay for a discount?", a: "Yes — multi-year and pre-paid contracts receive tiered discounts. 10% off annual prepay, 20% off 3-year prepay." },
  { q: "Do you offer colocation pricing?", a: "Yes — starting at 100kW. We'll size the right configuration during scoping." },
  { q: "How do I cancel?", a: "On-demand has no commitment. Reserved clusters are typically 12-month terms with 90-day cancellation notice. No early termination fees on monthly plans." },
];

const ondemand = [
  { gpu: "H100 80GB", price: "$2.40", unit: "/GPU-hr", note: "Spot: $1.20" },
  { gpu: "H200 141GB", price: "$3.20", unit: "/GPU-hr", note: "Spot: $1.60" },
  { gpu: "B200", price: "$4.80", unit: "/GPU-hr", note: "Q4 2026" },
  { gpu: "GB200", price: "$6.40", unit: "/GPU-hr", note: "Q4 2026" },
  { gpu: "L40S", price: "$1.60", unit: "/GPU-hr", note: "Best for batch" },
];

const reserved = [
  { size: "1 node (8×H100)", monthly: "$12,800", annual: "$138,240", discount: "10% prepay" },
  { size: "4 nodes (32×H100)", monthly: "$46,080", annual: "$497,664", discount: "15% prepay" },
  { size: "16 nodes (128×H100)", monthly: "$174,080", annual: "$1,879,000", discount: "20% prepay" },
];

const cerebras = [
  { plan: "Inference endpoint", price: "$0.04", unit: "/1K tokens", note: "Bursty workload" },
  { plan: "Dedicated CS-3 system", price: "$48,000", unit: "/month", note: "Committed inference" },
  { plan: "Wafer-scale cluster", price: "Custom", unit: "", note: "Multi-system capacity" },
];

export default function PricingPage() {
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
              className="max-w-3xl"
            >
              <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-5">
                <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
                [ PRICING ]
              </span>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-anybody font-extrabold tracking-tight leading-[0.9] mb-6">
                SmartTec pricing.
              </h1>
              <p className="text-xl md:text-2xl text-slate/70 max-w-2xl mb-8">
                Simple, transparent pricing for battery-backed NVIDIA and Cerebras compute. Fixed-price proposals in 48 hours.
              </p>
              <Link href="/contact" className="btn-hex btn-hex-md !border-greptile-green !bg-greptile-green !text-black">
                Get a quote in 48h
              </Link>
            </motion.div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* On-demand GPU pricing */}
        <section className="bg-background">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-16 md:py-20">
            <div className="mb-10">
              <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
                <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
                [ ON-DEMAND NVIDIA ]
              </span>
              <h2 className="text-3xl md:text-4xl font-anybody font-extrabold text-slate tracking-tight">
                GPUs by the hour.
              </h2>
              <p className="text-slate/70 mt-2">Spin up, train, tear down. Spot / preemptible available.</p>
            </div>

            {/* Hardware hero strip — 3 cards showing the actual systems */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10">
              {/* H100 / H200 */}
              <div className="relative border border-dashed border-slate/30 bg-slate overflow-hidden group">
                <div className="relative w-full aspect-[16/9]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/hardware/nvidia-h200-tensor-core.jpg" alt="NVIDIA H100 / H200 8-GPU node" className="absolute inset-0 w-full h-full object-cover opacity-90" />
                </div>
                <div className="p-4 bg-slate text-fog">
                  <div className="flex items-baseline justify-between gap-3">
                    <div className="font-space-mono text-[10px] uppercase tracking-[0.18em] text-greptile-green">[ H100 / H200 ]</div>
                    <div className="font-anybody font-bold text-sm tracking-tight">Hopper · SXM5</div>
                  </div>
                </div>
              </div>

              {/* B200 */}
              <div className="relative border border-dashed border-slate/30 bg-slate overflow-hidden group">
                <div className="relative w-full aspect-[16/9]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/hardware/nvidia-hgx-b200-baseboard.jpg" alt="NVIDIA HGX B200 8-GPU baseboard" className="absolute inset-0 w-full h-full object-cover opacity-90" />
                </div>
                <div className="p-4 bg-slate text-fog">
                  <div className="flex items-baseline justify-between gap-3">
                    <div className="font-space-mono text-[10px] uppercase tracking-[0.18em] text-greptile-green">[ B200 ]</div>
                    <div className="font-anybody font-bold text-sm tracking-tight">Blackwell · HGX</div>
                  </div>
                </div>
              </div>

              {/* GB200 */}
              <div className="relative border border-dashed border-slate/30 bg-slate overflow-hidden group">
                <div className="relative w-full aspect-[16/9]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/hardware/nvidia-gb200-nvl72-rack.jpg" alt="NVIDIA GB200 NVL72 rack" className="absolute inset-0 w-full h-full object-cover opacity-90" />
                </div>
                <div className="p-4 bg-slate text-fog">
                  <div className="flex items-baseline justify-between gap-3">
                    <div className="font-space-mono text-[10px] uppercase tracking-[0.18em] text-greptile-green">[ GB200 ]</div>
                    <div className="font-anybody font-bold text-sm tracking-tight">Blackwell · NVL72</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-dashed border-slate/30 overflow-hidden">
              <div className="grid grid-cols-12 bg-fog border-b border-dashed border-slate/30 px-5 py-3 font-space-mono text-[11px] uppercase tracking-wider text-slate/60">
                <div className="col-span-4">GPU</div>
                <div className="col-span-3">Price</div>
                <div className="col-span-3">Note</div>
                <div className="col-span-2 text-right">Reserve</div>
              </div>
              {ondemand.map((g, i) => (
                <div key={g.gpu} className={`grid grid-cols-12 items-center px-5 py-4 ${i !== ondemand.length - 1 ? "border-b border-dashed border-slate/20" : ""} hover:bg-greptile-green/5`}>
                  <div className="col-span-4 font-anybody font-bold text-slate">{g.gpu}</div>
                  <div className="col-span-3 font-anybody text-xl font-bold text-slate">{g.price}<span className="font-space-mono text-xs text-slate/60 ml-1">{g.unit}</span></div>
                  <div className="col-span-3 font-space-mono text-xs text-slate/60">{g.note}</div>
                  <div className="col-span-2 text-right">
                    <Link href="/contact" className="btn-hex-outline btn-hex-sm !border-slate !bg-slate !text-slate">Reserve</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* Reserved clusters */}
        <section className="bg-fog border-y border-dashed border-silver">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-16 md:py-20">
            <div className="mb-10">
              <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
                <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
                [ RESERVED CLUSTERS · H100 ]
              </span>
              <h2 className="text-3xl md:text-4xl font-anybody font-extrabold text-slate tracking-tight">
                Dedicated nodes, on independent power.
              </h2>
              <p className="text-slate/70 mt-2">Yours alone, monthly or annual. Discounts on prepay.</p>
            </div>

            <div className="border border-dashed border-slate/30 bg-background overflow-hidden">
              <div className="grid grid-cols-12 bg-fog border-b border-dashed border-slate/30 px-5 py-3 font-space-mono text-[11px] uppercase tracking-wider text-slate/60">
                <div className="col-span-5">Cluster</div>
                <div className="col-span-3">Monthly</div>
                <div className="col-span-2">Annual</div>
                <div className="col-span-2 text-right">Prepay discount</div>
              </div>
              {reserved.map((r, i) => (
                <div key={r.size} className={`grid grid-cols-12 items-center px-5 py-4 ${i !== reserved.length - 1 ? "border-b border-dashed border-slate/20" : ""} hover:bg-greptile-green/5`}>
                  <div className="col-span-5 font-anybody font-bold text-slate">{r.size}</div>
                  <div className="col-span-3 font-anybody font-bold text-slate">{r.monthly}</div>
                  <div className="col-span-2 font-anybody text-slate">{r.annual}</div>
                  <div className="col-span-2 text-right font-space-mono text-xs text-greptile-green">{r.discount}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* Cerebras */}
        <section className="bg-background">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-16 md:py-20">
            <div className="mb-10">
              <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
                <span className="w-1.5 h-1.5 bg-peach rounded-full" />
                [ CEREBRAS INFERENCE ]
              </span>
              <h2 className="text-3xl md:text-4xl font-anybody font-extrabold text-slate tracking-tight">
                The fastest tokens on earth.
              </h2>
            </div>

            {/* CS-3 hardware photo */}
            <div className="grid grid-cols-1 md:grid-cols-[5fr_7fr] gap-3 mb-10">
              <div className="relative border border-dashed border-slate/30 bg-slate overflow-hidden">
                <div className="relative w-full aspect-[4/3]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/hardware/cerebras-cs3-system.png" alt="Cerebras CS-3 system" className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className="p-4 bg-slate text-fog">
                  <div className="flex items-baseline justify-between gap-3">
                    <div className="font-space-mono text-[10px] uppercase tracking-[0.18em] text-peach">[ CEREBRAS CS-3 ]</div>
                    <div className="font-anybody font-bold text-sm tracking-tight">WSE-3 · 4 trillion tx</div>
                  </div>
                </div>
              </div>
              <div className="relative border border-dashed border-slate/30 bg-fog/30 overflow-hidden">
                <div className="relative w-full aspect-[4/3]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/hardware/cerebras-cs3-datacenter.jpg" alt="Cerebras CS-3 in production rack" className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className="p-4 bg-fog">
                  <div className="flex items-baseline justify-between gap-3">
                    <div className="font-space-mono text-[10px] uppercase tracking-[0.18em] text-peach">[ IN PRODUCTION ]</div>
                    <div className="font-anybody font-bold text-sm text-slate tracking-tight">2× CS-3 per rack · 25 kW each</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {cerebras.map((c) => (
                <div key={c.plan} className="border border-dashed border-slate/30 bg-fog/50 p-6">
                  <div className="font-anybody font-extrabold text-xl text-slate mb-3">{c.plan}</div>
                  <div className="font-anybody text-3xl font-extrabold text-slate">
                    {c.price}<span className="font-space-mono text-xs text-slate/60 ml-1">{c.unit}</span>
                  </div>
                  <div className="font-space-mono text-xs text-slate/60 mt-3">{c.note}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* Colocation */}
        <section className="bg-slate text-fog">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-16 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="font-space-mono text-[11px] uppercase tracking-widest text-greptile-green mb-4 block">[ COLOCATION · ENTERPRISE ]</span>
                <h2 className="text-3xl md:text-4xl font-anybody font-extrabold mb-3">Bring your hardware.</h2>
                <p className="text-fog/70 leading-relaxed">
                  Colocate onto our battery-backed power, or we&apos;ll build dedicated MW for you. Starting at 100kW. PPA, operating lease, or CAPEX structures available.
                </p>
              </div>
              <div>
                <Link href="/contact" className="btn-hex-outline btn-hex-md !border-greptile-green !bg-greptile-green !text-slate">
                  Talk to sales
                </Link>
              </div>
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
                Pricing questions.
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
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-16 md:py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-anybody font-extrabold text-slate tracking-tight mb-3">
              Reserve launch pricing.
            </h2>
            <p className="text-slate/80 mb-8 max-w-md mx-auto">
              Lock in early-partner pricing before Q4 2026 power-on. Three design-partner slots open.
            </p>
            <Link href="/contact" className="btn-hex-outline btn-hex-md !border-slate !bg-slate !text-slate">
              Get a quote
            </Link>
          </div>
        </section>
      </div>
    </PageShell>
  );
}