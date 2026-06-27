"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageShell from "@/components/PageShell";

const services = [
  { name: "SmartTec API", status: "operational", uptime: "99.99%" },
  { name: "Compute (NVIDIA + Cerebras)", status: "operational", uptime: "—" },
  { name: "Power (z1power BESS)", status: "operational", uptime: "—" },
  { name: "AURA Orchestration", status: "operational", uptime: "—" },
  { name: "Customer dashboard", status: "operational", uptime: "—" },
  { name: "Network · peering", status: "operational", uptime: "—" },
];

const incidents: { date: string; title: string; status: string; body: string }[] = [
  // No incidents yet — site is pre-launch.
];

const upcoming = [
  { date: "Q4 2026", title: "SmartTec site power-on", body: "First-phase capacity comes online in Oklahoma. Reserved customers notified." },
  { date: "Q1 2027", title: "Cerebras inference cluster", body: "Wafer-scale systems go live for early design partners." },
  { date: "Q2 2027", title: "On-site solar + storage integration", body: "Solar tap paired with z1power BESS for additional renewable capacity." },
];

export default function StatusPage() {
  const allOperational = services.every((s) => s.status === "operational");

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
                [ STATUS ]
              </span>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-anybody font-extrabold tracking-tight leading-[0.95] mb-6">
                System status.
              </h1>
              <p className="text-xl md:text-2xl text-slate/70 mb-10">
                Real-time status of SmartTec services. Updated live.
              </p>
              <div className="flex items-center gap-4">
                <div className={`flex items-center gap-3 px-5 py-3 border-2 ${allOperational ? "bg-greptile-green border-greptile-green" : "bg-bloom/20 border-bloom"}`}>
                  <span className={`w-2 h-2 rounded-full ${allOperational ? "bg-black" : "bg-bloom"} animate-pulse-glow`} />
                  <span className="font-anybody font-extrabold text-lg text-slate">
                    {allOperational ? "All systems operational" : "Active incident"}
                  </span>
                </div>
                <span className="font-space-mono text-xs text-slate/60 uppercase tracking-wider">
                  Now reserving — power-on Q4 2026
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* Services list */}
        <section className="bg-background">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-16 md:py-20">
            <div className="mb-10">
              <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
                <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
                [ SERVICES ]
              </span>
              <h2 className="text-3xl md:text-4xl font-anybody font-extrabold text-slate tracking-tight">
                Component status
              </h2>
            </div>

            <div className="border border-dashed border-slate/30">
              {services.map((s, i) => (
                <div key={s.name} className={`grid grid-cols-12 items-center gap-4 px-5 py-4 ${i !== services.length - 1 ? "border-b border-dashed border-slate/20" : ""}`}>
                  <div className="col-span-1">
                    <span className={`w-2.5 h-2.5 rounded-full inline-block ${s.status === "operational" ? "bg-greptile-green animate-pulse-glow" : "bg-bloom"}`} />
                  </div>
                  <div className="col-span-7 font-anybody font-bold text-slate">{s.name}</div>
                  <div className="col-span-2 font-space-mono text-[11px] uppercase tracking-wider text-slate/60">{s.uptime}</div>
                  <div className="col-span-2 text-right font-space-mono text-[11px] uppercase tracking-wider text-greptile-green">Operational</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* Incidents */}
        <section className="bg-fog border-y border-dashed border-silver">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-16 md:py-20">
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
                <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
                [ INCIDENTS · LAST 90 DAYS ]
              </span>
              <h2 className="text-3xl md:text-4xl font-anybody font-extrabold text-slate tracking-tight">
                No incidents.
              </h2>
              <p className="text-slate/70 mt-2">Site is pre-launch. First-phase power-on Q4 2026.</p>
            </div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* Upcoming */}
        <section className="bg-background">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-16 md:py-20">
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
                <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
                [ UPCOMING ]
              </span>
              <h2 className="text-3xl md:text-4xl font-anybody font-extrabold text-slate tracking-tight">
                Scheduled milestones.
              </h2>
            </div>

            <div className="space-y-3">
              {upcoming.map((u, i) => (
                <div key={u.title} className="border border-dashed border-slate/30 bg-fog/50 p-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                  <div className="md:col-span-2 font-space-mono text-xs uppercase tracking-wider text-greptile-green">{u.date}</div>
                  <div className="md:col-span-4 font-anybody font-bold text-slate">{u.title}</div>
                  <div className="md:col-span-6 text-sm text-slate/70 leading-relaxed">{u.body}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* CTA */}
        <section className="bg-greptile-green border-y border-slate/20">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-16 md:py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-anybody font-extrabold text-slate tracking-tight mb-3">
              Subscribe to status updates.
            </h2>
            <p className="text-slate/80 mb-8 max-w-md mx-auto">
              Get email alerts for incidents, scheduled maintenance, and milestones.
            </p>
            <Link href="/contact" className="btn-hex-outline btn-hex-md !border-slate !bg-slate !text-slate">
              Subscribe
            </Link>
          </div>
        </section>
      </div>
    </PageShell>
  );
}