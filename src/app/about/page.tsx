"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageShell from "@/components/PageShell";

const team = [
  { name: "Founder / CEO", role: "Built z1power from a Tulsa garage into megawatt-scale LFP manufacturing.", initials: "?" },
  { name: "CTO", role: "Designed AURA after too many pager-duty years at hyperscalers.", initials: "?" },
  { name: "Head of Power", role: "10+ years at the grid edge. Knows every interconnect queue in the US.", initials: "?" },
  { name: "Head of Compute", role: "Former NVIDIA partner-engineering lead. Believes in fast inference.", initials: "?" },
];

const values = [
  {
    title: "We build what we sell.",
    desc: "z1power batteries are made in our own facility. We're vertically integrated because we couldn't find anyone else doing it right.",
  },
  {
    title: "Power is the product.",
    desc: "We sell compute, but compute is downstream of power. Own the power and you own the constraint.",
  },
  {
    title: "Battery, not diesel.",
    desc: "The industry's BYOP answer is gas. We'd rather not put more combustion on the planet.",
  },
  {
    title: "Ship honest numbers.",
    desc: "If a spec isn't real, we don't publish it. If a target is aspirational, we say so.",
  },
];

const milestones = [
  { date: "2023", title: "z1power founded in Tulsa, Oklahoma", body: "Built first megawatt-scale LFP stack in a converted machine shop." },
  { date: "2024", title: "First commercial deployment", body: "Single-site 500kW deployment for a regional colocation operator." },
  { date: "2025", title: "Multi-site rollouts + AURA v1", body: "5+ sites, predictive load forecasting, automated failover." },
  { date: "2026", title: "SmartTec AI cloud launch", body: "Vertical integration under one brand. NVIDIA + Cerebras compute on z1power power. Now reserving capacity for Q4 2026 power-on." },
];

export default function AboutPage() {
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
                [ ABOUT ]
              </span>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-anybody font-extrabold tracking-tight leading-[0.95] mb-6">
                We build our own power.
              </h1>
              <p className="text-xl md:text-2xl text-slate/70 max-w-3xl">
                SmartTec runs NVIDIA and Cerebras compute on z1power megawatt batteries. Founded in Tulsa, Oklahoma. Now reserving capacity ahead of Q4 2026 power-on.
              </p>
            </motion.div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* Origin story */}
        <section className="bg-background">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12"
            >
              <div className="lg:col-span-5">
                <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
                  <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
                  [ THE STORY ]
                </span>
                <h2 className="text-4xl md:text-5xl font-anybody font-extrabold text-slate tracking-tight leading-[0.95]">
                  From a Tulsa garage to megawatt-scale LFP.
                </h2>
              </div>
              <div className="lg:col-span-7 space-y-5 text-slate/80 leading-relaxed text-lg">
                <p>
                  We started SmartTec because we watched too many good GPU deployments get stuck waiting for grid connections. A 5-year interconnection queue is a great way to kill an AI roadmap.
                </p>
                <p>
                  We&apos;d been building battery systems for years under the z1power brand — for utilities, for industrial sites. We knew the tech. What we didn&apos;t know was why nobody had built a vertically-integrated AI cloud on top of it.
                </p>
                <p>
                  So we built it. z1power makes the batteries. SmartTec runs the compute. AURA orchestrates the whole thing. One team, one roof, one phone number.
                </p>
                <p>
                  First-phase capacity is reserved. Power-on is targeted for Q4 2026 in Oklahoma. We&apos;re looking for design partners who want to lock in launch pricing.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* Values */}
        <section className="bg-fog border-y border-dashed border-silver">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12 max-w-3xl"
            >
              <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
                <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
                [ WHAT WE BELIEVE ]
              </span>
              <h2 className="text-4xl md:text-5xl font-anybody font-extrabold text-slate tracking-tight leading-[0.95]">
                How we work.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-background border border-dashed border-slate/30 p-7"
                >
                  <h3 className="text-xl font-anybody font-bold text-slate mb-3">{v.title}</h3>
                  <p className="text-sm text-slate/70 leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* Milestones */}
        <section className="bg-background">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
                <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
                [ TIMELINE ]
              </span>
              <h2 className="text-4xl md:text-5xl font-anybody font-extrabold text-slate tracking-tight leading-[0.95]">
                Where we&apos;ve been.
              </h2>
            </motion.div>

            <div className="space-y-4">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.date}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start border-l-4 border-greptile-green pl-6 py-3"
                >
                  <div className="md:col-span-2 font-anybody font-extrabold text-2xl text-slate">{m.date}</div>
                  <div className="md:col-span-3 font-anybody font-bold text-slate">{m.title}</div>
                  <div className="md:col-span-7 text-slate/70 leading-relaxed">{m.body}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* Team */}
        <section className="bg-fog border-y border-dashed border-silver">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12 max-w-3xl"
            >
              <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
                <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
                [ TEAM ]
              </span>
              <h2 className="text-4xl md:text-5xl font-anybody font-extrabold text-slate tracking-tight leading-[0.95]">
                The people behind it.
              </h2>
              <p className="text-slate/70 mt-4 max-w-2xl">
                [Add real names + backgrounds before publishing. Roles are real; descriptions are directionally accurate.]
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {team.map((m) => (
                <div key={m.role} className="bg-background border border-dashed border-slate/30 p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-fog border border-dashed border-slate/30 flex items-center justify-center font-anybody font-bold text-2xl text-slate">
                    {m.initials}
                  </div>
                  <div className="font-anybody font-bold text-slate mb-1">{m.role}</div>
                  <div className="text-sm text-slate/60 leading-relaxed">{m.role}</div>
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
              Join the design partner program.
            </h2>
            <div className="btn-hex-group justify-center">
              <Link href="/contact" className="btn-hex-outline btn-hex-md !border-slate !bg-slate !text-slate xl:btn-hex-lg">
                Become a design partner
              </Link>
              <Link href="/careers" className="btn-hex btn-hex-md !border-slate !bg-slate !text-fog xl:btn-hex-lg">
                See open roles
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}