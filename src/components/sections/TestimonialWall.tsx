"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "We went from 4-hour outage events to zero. SmartTec paid for itself in 18 months.",
    name: "Marcus Thompson",
    role: "CTO · StackEdge",
    initials: "MT",
    accent: "bg-greptile-green",
  },
  {
    quote: "The deployment was surgical. Our team barely had to lift a finger. Live in 90 days, exactly as promised.",
    name: "Sarah Chen",
    role: "VP Ops · CloudVault",
    initials: "SC",
    accent: "bg-seafoam",
  },
  {
    quote: "We scaled from 50kW to 2MW without a single re-engineering cycle. That kind of flexibility is rare.",
    name: "David Park",
    role: "CEO · Prism Analytics",
    initials: "DP",
    accent: "bg-ice",
  },
  {
    quote: "Enterprise-grade compliance documentation delivered upfront. Procurement signed in 11 days.",
    name: "Rachel Torres",
    role: "CISO · Fortis Networks",
    initials: "RT",
    accent: "bg-lavender",
  },
  {
    quote: "The AURA load forecasts are eerie. It knew about a Texas grid event 48 hours before ERCOT did.",
    name: "James Okonkwo",
    role: "SRE Lead · Hadron Compute",
    initials: "JO",
    accent: "bg-peach",
  },
  {
    quote: "Best engineering partnership we&apos;ve ever had. These people actually pick up the phone.",
    name: "Elena Vasquez",
    role: "Director · Nimbus Edge",
    initials: "EV",
    accent: "bg-pink",
  },
];

export function TestimonialWall() {
  return (
    <section id="blog" className="relative bg-background section-wrapper-compact">
      <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-28 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 md:mb-20 max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
            <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
            [ WHAT OPERATORS SAY ]
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-anybody font-bold text-slate tracking-tight leading-[0.95]">
            No marketing speak.<br />Just results.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group relative flex flex-col gap-4 p-7 md:p-9 border border-dashed border-slate/30 bg-fog/50 hover:bg-greptile-green/10 transition-colors"
            >
              {/* Top accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 ${t.accent}`} />

              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-slate/30">
                <path d="M11 7H7.5C6.12 7 5 8.12 5 9.5V10c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-.5c0-.28.22-.5.5-.5H11c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zm0 6H7.5c-1.38 0-2.5 1.12-2.5 2.5V18c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-1.5c0-.28.22-.5.5-.5H11c.55 0 1-.45 1-1V14c0-.55-.45-1-1-1zm6-6h-3.5C12.12 7 11 8.12 11 9.5V10c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-.5c0-.28.22-.5.5-.5H17c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zm0 6h-3.5c-1.38 0-2.5 1.12-2.5 2.5V18c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-1.5c0-.28.22-.5.5-.5H17c.55 0 1-.45 1-1V14c0-.55-.45-1-1-1z" />
              </svg>

              <p
                className="font-anybody text-base md:text-lg text-slate leading-relaxed italic flex-1"
                dangerouslySetInnerHTML={{ __html: `&ldquo;${t.quote}&rdquo;` }}
              />

              <div className="flex items-center gap-3 pt-4 border-t border-dashed border-slate/20">
                <div className="w-10 h-10 border border-dashed border-slate/30 bg-fog flex items-center justify-center font-anybody font-bold text-slate text-sm">
                  {t.initials}
                </div>
                <div>
                  <div className="font-anybody font-bold text-slate text-sm">{t.name}</div>
                  <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/60">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialWall;