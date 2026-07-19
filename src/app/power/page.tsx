"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageShell from "@/components/PageShell";

const z1powerSpecs = [
  { label: "Chemistry", value: "Lithium-iron-phosphate (LFP)" },
  { label: "Scale per stack", value: "1 MW+ · modular to multiple MW" },
  { label: "Redundancy", value: "Triple-redundant banks" },
  { label: "Failover", value: "< 10ms automatic" },
  { label: "Design life", value: "20 years" },
  { label: "Origin", value: "US-built (Oklahoma)" },
  { label: "Compliance", value: "NDAA §889 compliant · FEOC restricted · SOC 2 (in progress)" },
  { label: "Operating temp", value: "-20°C to +50°C" },
];

const whyBatteries = [
  { title: "No air permits", desc: "Batteries are silent, sealed, and don't need combustion air permits." },
  { title: "No fuel logistics", desc: "No diesel deliveries, no fuel-quality sampling, no storage tanks." },
  { title: "Silent operation", desc: "Quieter than a server room. No noise complaints, no sound walls." },
  { title: "Instant load-follow", desc: "Sub-cycle response to spiky AI workloads. Diesel can't keep up." },
  { title: "Modular & fast", desc: "Ship in containers, install in days, expand in weeks." },
  { title: "Clean", desc: "Fed by on-site solar where available. No combustion byproducts." },
];

export default function PowerPage() {
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
                [ POWER · z1power ]
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-anybody font-extrabold tracking-tight leading-[0.95] mb-6">
                We own our power.<br />That&apos;s the whole advantage.
              </h1>
              <p className="text-xl md:text-2xl text-slate/70 max-w-3xl mb-10">
                Most clouds make you choose between availability and performance. We don&apos;t — because the thing that constrains everyone else, power, is the thing we own.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <Link href="/contact" className="btn-hex btn-hex-md !border-greptile-green !bg-greptile-green !text-black">
                  Get a power proposal
                </Link>
                <Link href="/contact" className="btn-hex-outline btn-hex-md !border-slate !bg-slate !text-slate">
                  Book a site tour
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* The queue problem */}
        <section className="bg-background">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
              <div className="lg:col-span-5">
                <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
                  <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
                  [ THE QUEUE PROBLEM ]
                </span>
                <h2 className="text-4xl md:text-5xl font-anybody font-extrabold text-slate tracking-tight leading-[0.95] mb-6">
                  Building an AI data center used to mean buying chips. Now it means finding power.
                </h2>
              </div>
              <div className="lg:col-span-7 space-y-6">
                <p className="text-lg text-slate/70 leading-relaxed">
                  Grid connections in major hubs run <span className="font-bold text-slate">4–7 years</span>. Over <span className="font-bold text-slate">~1,500 GW</span> is stuck in the US interconnection queue.
                </p>
                <p className="text-lg text-slate/70 leading-relaxed">
                  The bottleneck moved from the rack to the substation — and most &quot;solutions&quot; are diesel.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="border border-dashed border-slate/30 bg-fog/30 p-4 text-center">
                    <div className="font-anybody text-2xl font-extrabold text-slate">4–7 yrs</div>
                    <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/60 mt-2">Grid wait</div>
                  </div>
                  <div className="border border-dashed border-slate/30 bg-fog/30 p-4 text-center">
                    <div className="font-anybody text-2xl font-extrabold text-slate">~1.5 TW</div>
                    <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/60 mt-2">US queue</div>
                  </div>
                  <div className="border border-dashed border-slate/30 bg-fog/30 p-4 text-center">
                    <div className="font-anybody text-2xl font-extrabold text-slate">~50 GW</div>
                    <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/60 mt-2">BYOP 2025</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* Why batteries beat gensets */}
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
                [ BATTERIES BEAT GENSETS ]
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-anybody font-extrabold text-slate tracking-tight leading-[0.95]">
                The industry&apos;s BYOP answer is gas. Ours isn&apos;t.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {whyBatteries.map((w, i) => (
                <motion.div
                  key={w.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="bg-background border border-dashed border-slate/30 p-6"
                >
                  <div className="w-1.5 h-1.5 bg-greptile-green mb-4" />
                  <h3 className="font-anybody font-bold text-lg text-slate mb-2">{w.title}</h3>
                  <p className="text-sm text-slate/70 leading-relaxed">{w.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* The z1power stack */}
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
                [ THE z1power STACK ]
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-anybody font-extrabold text-slate tracking-tight leading-[0.95]">
                Megawatt-scale LFP. Built in Oklahoma.
              </h2>
              <p className="text-lg text-slate/70 mt-4 max-w-2xl">
                Specifications shown are design targets; as-built numbers published at power-on.
              </p>
            </motion.div>

            <div className="border border-dashed border-slate/30 bg-fog/30">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {z1powerSpecs.map((s, i) => (
                  <div
                    key={s.label}
                    className={`p-5 ${i !== z1powerSpecs.length - 1 ? "border-b md:border-b-0 border-dashed border-slate/20" : ""} ${i % 4 !== 3 ? "lg:border-r border-dashed border-slate/20" : ""}`}
                  >
                    <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/60 mb-2">[ {s.label} ]</div>
                    <div className="font-anybody text-lg font-bold text-slate">{s.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* Topology */}
        <section className="bg-fog border-y border-dashed border-silver">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
                <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
                [ TOPOLOGY ]
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-anybody font-extrabold text-slate tracking-tight">
                Grid (backup) → z1power → GPU halls.
              </h2>
            </motion.div>

            <div className="bg-background border border-dashed border-slate/30 p-8 md:p-12">
              <svg viewBox="0 0 800 280" className="w-full h-auto">
                {/* Grid */}
                <rect x="20" y="120" width="110" height="50" fill="#3D3B4F" />
                <text x="75" y="148" fill="#EEEEEE" fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="bold">UTILITY GRID</text>
                <text x="75" y="162" fill="#28E99F" fontSize="8" fontFamily="monospace" textAnchor="middle">(BACKUP)</text>
                {/* Solar */}
                <rect x="20" y="40" width="110" height="40" fill="#FDFCF9" stroke="#3D3B4F" strokeWidth="1" />
                <text x="75" y="64" fill="#3D3B4F" fontSize="10" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">ON-SITE SOLAR</text>
                {/* z1power */}
                <rect x="200" y="40" width="180" height="220" fill="#28E99F" />
                <text x="290" y="80" fill="#000" fontSize="14" fontFamily="sans-serif" textAnchor="middle" fontWeight="900">z1power BESS</text>
                <text x="290" y="100" fill="#000" fontSize="9" fontFamily="monospace" textAnchor="middle">1MW+ LFP ×3 REDUNDANT</text>
                {[0, 1, 2].map((i) => (
                  <g key={i}>
                    <rect x="220" y={120 + i * 35} width="140" height="25" fill="#3D3B4F" />
                    <text x="290" y={137 + i * 35} fill="#28E99F" fontSize="9" fontFamily="monospace" textAnchor="middle">BANK {i + 1}</text>
                  </g>
                ))}
                {/* Switchgear */}
                <rect x="430" y="135" width="70" height="40" fill="#EEEEEE" stroke="#3D3B4F" strokeWidth="1.5" />
                <text x="465" y="160" fill="#3D3B4F" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">SWITCH</text>
                {/* AURA */}
                <rect x="380" y="210" width="120" height="50" fill="#3D3B4F" stroke="#28E99F" strokeWidth="2" />
                <text x="440" y="234" fill="#28E99F" fontSize="13" fontFamily="sans-serif" textAnchor="middle" fontWeight="900">AURA</text>
                <text x="440" y="248" fill="#EEEEEE" fontSize="8" fontFamily="monospace" textAnchor="middle">ORCHESTRATION</text>
                {/* NVIDIA hall */}
                <rect x="540" y="60" width="140" height="80" fill="#3D3B4F" />
                <text x="610" y="92" fill="#76B900" fontSize="14" fontFamily="sans-serif" textAnchor="middle" fontWeight="900">NVIDIA</text>
                <text x="610" y="110" fill="#EEEEEE" fontSize="9" fontFamily="monospace" textAnchor="middle">GPU HALL</text>
                <text x="610" y="125" fill="#28E99F" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">[ POWERED ]</text>
                {/* Cerebras hall */}
                <rect x="540" y="160" width="140" height="80" fill="#3D3B4F" />
                <text x="610" y="192" fill="#FFBCB3" fontSize="14" fontFamily="sans-serif" textAnchor="middle" fontWeight="900">CEREBRAS</text>
                <text x="610" y="210" fill="#EEEEEE" fontSize="9" fontFamily="monospace" textAnchor="middle">INFERENCE</text>
                <text x="610" y="225" fill="#28E99F" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">[ POWERED ]</text>
                {/* Arrows */}
                <g stroke="#28E99F" strokeWidth="1.5" fill="none">
                  <line x1="130" y1="145" x2="200" y2="145" />
                  <polygon points="200,145 194,141 194,149" fill="#28E99F" />
                  <line x1="380" y1="155" x2="430" y2="155" />
                  <polygon points="430,155 424,151 424,159" fill="#28E99F" />
                  <line x1="500" y1="150" x2="540" y2="100" />
                  <polygon points="540,100 534,104 534,96" fill="#28E99F" />
                  <line x1="500" y1="160" x2="540" y2="200" />
                  <polygon points="540,200 534,196 534,204" fill="#28E99F" />
                </g>
                <g stroke="#DAFF01" strokeWidth="1" fill="none" strokeDasharray="2 2">
                  <line x1="75" y1="80" x2="75" y2="120" />
                  <line x1="75" y1="120" x2="200" y2="120" />
                  <polygon points="200,120 194,116 194,124" fill="#DAFF01" />
                </g>
              </svg>
            </div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* CTA */}
        <section className="bg-greptile-green border-y border-slate/20">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28 text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-anybody font-extrabold text-slate tracking-tight mb-8">
              Power your compute.
            </h2>
            <div className="btn-hex-group justify-center">
              <Link href="/contact" className="btn-hex-outline btn-hex-md !border-slate !bg-slate !text-slate xl:btn-hex-lg">
                Get a power proposal
              </Link>
              <Link href="/contact" className="btn-hex btn-hex-md !border-slate !bg-slate !text-fog xl:btn-hex-lg">
                Book a site tour
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}