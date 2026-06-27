"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "40+", label: "Live deployments", accent: "bg-greptile-green" },
  { value: "12 MW", label: "Total capacity deployed", accent: "bg-seafoam" },
  { value: "99.997%", label: "Uptime (24-mo avg)", accent: "bg-ice" },
  { value: "$0", label: "SLA payouts ever", accent: "bg-lavender" },
  { value: "6 yrs", label: "Operating history", accent: "bg-peach" },
  { value: "73%", label: "Avg grid reduction", accent: "bg-pink" },
];

const customers = [
  { name: "StackEdge Systems", role: "Hyperscale edge" },
  { name: "CloudVault", role: "Mid-market SaaS" },
  { name: "Prism Analytics", role: "Data infrastructure" },
  { name: "Fortis Networks", role: "Federal / defense" },
  { name: "Nimbus Edge", role: "CDN / edge compute" },
  { name: "Hadron Compute", role: "AI infrastructure" },
];

export function Reliability() {
  return (
    <section id="enterprise" className="relative bg-fog section-wrapper-compact border-y border-dashed border-silver">
      <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28 lg:py-32">
        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-16 md:mb-20 border border-dashed border-slate/30"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`p-5 md:p-6 ${i !== 0 ? "border-l border-dashed border-slate/30" : ""} ${i >= 3 ? "border-t md:border-t lg:border-t border-dashed border-slate/30" : ""} ${i === 3 ? "md:border-t-0" : ""} ${i >= 2 ? "md:border-t lg:border-t border-dashed border-slate/30" : ""}`}
            >
              <div className={`w-1.5 h-1.5 ${s.accent} mb-3`} />
              <div className="font-anybody text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate tracking-tight">
                {s.value}
              </div>
              <div className="font-space-mono text-[10px] md:text-[11px] uppercase tracking-wider text-slate/60 mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Customers + quote */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Featured quote */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
              <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
              [ CASE STUDY ]
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-anybody font-bold text-slate tracking-tight leading-[0.95] mb-6">
              StackEdge cut grid dependency by 73% in year one.
            </h2>
            <blockquote className="font-anybody text-lg md:text-xl text-slate/80 leading-relaxed mb-6 italic border-l-4 border-greptile-green pl-4">
              &ldquo;SmartTec&apos;s battery stack deployed in 90 days and has run flawlessly through two Texas grid events. We cut grid dependency by 73% in the first year. That&apos;s the kind of infrastructure partner we needed.&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 border border-dashed border-slate/30 bg-fog flex items-center justify-center font-anybody font-bold text-slate">
                MT
              </div>
              <div>
                <div className="font-anybody font-bold text-slate">Marcus Thompson</div>
                <div className="font-space-mono text-xs uppercase tracking-wider text-slate/60">VP Infra · StackEdge</div>
              </div>
            </div>
          </motion.div>

          {/* Customer list */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="border border-dashed border-slate/30 bg-background p-6">
              <div className="font-space-mono text-[11px] uppercase tracking-wider text-slate/60 mb-4">
                [ DEPLOYMENT ROSTER ]
              </div>
              <ul className="divide-y divide-dashed divide-slate/20">
                {customers.map((c) => (
                  <li key={c.name} className="flex items-center justify-between py-3">
                    <div>
                      <div className="font-anybody font-bold text-slate">{c.name}</div>
                      <div className="font-space-mono text-[11px] text-slate/60">{c.role}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
                      <span className="font-space-mono text-[10px] uppercase tracking-wider text-slate/60">Live</span>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-dashed border-slate/20 flex items-center justify-between">
                <span className="font-space-mono text-[11px] text-slate/60">+ 34 more under NDA</span>
                <a href="#case-studies" className="font-space-mono text-[11px] uppercase tracking-wider text-slate hover:bg-greptile-green hover:text-black px-2 py-1">
                  See all →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Reliability;