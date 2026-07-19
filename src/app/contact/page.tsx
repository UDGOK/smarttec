"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import PageShell from "@/components/PageShell";

const teams = [
  { id: "sales", label: "Sales", email: "sales@smarttec.dev", desc: "Talk to our team about deployment scope and pricing." },
  { id: "engineering", label: "Engineering", email: "engineering@smarttec.dev", desc: "Connect with our solutions engineers for technical scoping." },
  { id: "partnerships", label: "Partnerships", email: "partners@smarttec.dev", desc: "Reseller, integrator, and OEM programs." },
  { id: "press", label: "Press", email: "press@smarttec.dev", desc: "Media inquiries and interview requests." },
];

export default function ContactPage() {
  const [activeTeam, setActiveTeam] = useState("sales");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [sentTo, setSentTo] = useState("");
  const team = teams.find((t) => t.id === activeTeam)!;

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
                [ CONTACT ]
              </span>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-anybody font-extrabold tracking-tight leading-[0.95] mb-6">
                Start the<br />conversation.
              </h1>
              <p className="text-xl md:text-2xl text-slate/70">
                Talk to our team about your power requirements. We&apos;ll scope a fixed-price solution within 14 days.
              </p>
            </motion.div>
          </div>
        </section>

        <hr className="border-border w-full opacity-30" />

        {/* Tabs + form */}
        <section className="bg-background">
          <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-16 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Left: team selector */}
              <div className="lg:col-span-4">
                <h2 className="font-anybody text-2xl md:text-3xl font-extrabold text-slate tracking-tight mb-6">
                  Who do you want to talk to?
                </h2>
                <div className="space-y-2">
                  {teams.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => { setActiveTeam(t.id); setSubmitted(false); }}
                      className={`w-full text-left px-5 py-4 border border-dashed transition-colors ${activeTeam === t.id ? "bg-greptile-green border-greptile-green text-black" : "border-slate/30 hover:bg-fog/50 text-slate"}`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-anybody font-bold text-lg">{t.label}</div>
                          <div className={`text-xs mt-1 ${activeTeam === t.id ? "text-black/70" : "text-slate/60"}`}>{t.email}</div>
                        </div>
                        {activeTeam === t.id && (
                          <span className="font-space-mono text-[10px] uppercase tracking-wider text-black">→</span>
                        )}
                      </div>
                      <p className={`text-xs mt-2 leading-relaxed ${activeTeam === t.id ? "text-black/80" : "text-slate/60"}`}>
                        {t.desc}
                      </p>
                    </button>
                  ))}
                </div>

                <div className="mt-8 border border-dashed border-slate/30 bg-fog/30 p-5">
                  <div className="font-space-mono text-[11px] uppercase tracking-widest text-slate/60 mb-3">[ RESPONSE TIMES ]</div>
                  <ul className="space-y-2 font-space-mono text-xs text-slate/70">
                    <li className="flex items-center justify-between"><span>Sales</span><span className="text-greptile-green">{"< 4 hours"}</span></li>
                    <li className="flex items-center justify-between"><span>Engineering</span><span className="text-greptile-green">{"< 8 hours"}</span></li>
                    <li className="flex items-center justify-between"><span>Partnerships</span><span>{"< 24 hours"}</span></li>
                    <li className="flex items-center justify-between"><span>Press</span><span>{"< 24 hours"}</span></li>
                  </ul>
                </div>
              </div>

              {/* Right: form */}
              <div className="lg:col-span-8">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="border-2 border-greptile-green bg-greptile-green/10 p-12 text-center"
                  >
                    <div className="w-16 h-16 mx-auto mb-6 bg-greptile-green flex items-center justify-center">
                      <svg width="32" height="32" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                        <path d="M3 8.5L6.5 12L13 5" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-anybody font-extrabold text-slate mb-3">Message received.</h3>
                    <p className="text-slate/70">
                      The {team.label.toLowerCase()} team will reply to <span className="font-bold">{sentTo || "your email"}</span> within {team.id === "sales" ? "4" : team.id === "engineering" ? "8" : "24"} hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    onSubmit={async (e) => {
                      e.preventDefault();
                      setSending(true); setError(false);
                      const fd = new FormData(e.currentTarget);
                      const payload = Object.fromEntries(fd.entries());
                      try {
                        const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...payload, team: team.id }) });
                        if (!r.ok) throw new Error();
                        setSentTo(String(payload.email || ""));
                        setSubmitted(true);
                      } catch { setError(true); } finally { setSending(false); }
                    }}
                    className="border border-dashed border-slate/30 bg-fog/50 p-8 md:p-10"
                  >
                    <div className="font-space-mono text-[11px] uppercase tracking-widest text-slate/60 mb-6">
                      [ {team.label.toUpperCase()} INQUIRY · routes to {team.email} ]
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="block font-space-mono text-[11px] uppercase tracking-wider text-slate/70 mb-2">Full name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          className="w-full px-4 py-3 bg-background border border-dashed border-slate/30 focus:border-greptile-green focus:outline-none font-sans text-slate"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block font-space-mono text-[11px] uppercase tracking-wider text-slate/70 mb-2">Work email *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 bg-background border border-dashed border-slate/30 focus:border-greptile-green focus:outline-none font-sans text-slate"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="block font-space-mono text-[11px] uppercase tracking-wider text-slate/70 mb-2">Company</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-background border border-dashed border-slate/30 focus:border-greptile-green focus:outline-none font-sans text-slate"
                          name="company" placeholder="Your company"
                        />
                      </div>
                      <div>
                        <label className="block font-space-mono text-[11px] uppercase tracking-wider text-slate/70 mb-2">Power requirement</label>
                        <select name="power" className="w-full px-4 py-3 bg-background border border-dashed border-slate/30 focus:border-greptile-green focus:outline-none font-sans text-slate">
                          <option>1 — 8 GPUs (reserved)</option>
                          <option>8 — 30 GPUs (dedicated)</option>
                          <option>Dedicated CS-3 / inference</option>
                          <option>{"Colo / power (100 kW+)"}</option>
                          <option>Not sure yet</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-8">
                      <label className="block font-space-mono text-[11px] uppercase tracking-wider text-slate/70 mb-2">Tell us about your deployment *</label>
                      <textarea
                        required
                        name="message"
                        rows={5}
                        className="w-full px-4 py-3 bg-background border border-dashed border-slate/30 focus:border-greptile-green focus:outline-none font-sans text-slate resize-none"
                        placeholder="Site location, current power setup, target deployment date, anything else we should know..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-hex btn-hex-md !border-greptile-green !bg-greptile-green !text-black w-full justify-center"
                    disabled={sending}
                    >
                      {sending ? "Sending…" : `Send to ${team.label}`}
                    </button>
                    {error && (
                      <p className="mt-4 font-space-mono text-[12px] text-bloom">
                        [ Couldn&apos;t send — email us directly at hello@smarttec.dev ]
                      </p>
                    )}

                    <p className="font-space-mono text-[10px] uppercase tracking-wider text-slate/50 mt-4 text-center">
                      We never share your info. By submitting, you agree to our privacy policy.
                    </p>
                  </motion.form>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}