"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { LogoCloud } from "@/components/sections/LogoCloud";
import { FeaturedTestimonial } from "@/components/sections/FeaturedTestimonial";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Personalization } from "@/components/sections/Personalization";
import { IntegrationCards } from "@/components/sections/IntegrationCards";
import { MarqueeCTA } from "@/components/sections/MarqueeCTA";
import { Reliability } from "@/components/sections/Reliability";
import { TestimonialWall } from "@/components/sections/TestimonialWall";
import { FAQSection } from "@/components/sections/FAQSection";
import { Footer } from "@/components/sections/Footer";

function ClosingCTA() {
  return (
    <section id="contact" className="relative bg-background section-wrapper-compact">
      <div className="absolute inset-0 pointer-events-none hidden md:block text-slate/20">
        <div className="absolute top-0 bottom-0 left-8 border-l border-dashed border-current">
          <svg width="10" height="12" viewBox="0 0 10 12" className="absolute -top-[6px] -left-[5px]">
            <polygon points="5,0 10,3 10,9 5,12 0,9 0,3" fill="currentColor" />
          </svg>
          <svg width="10" height="12" viewBox="0 0 10 12" className="absolute -bottom-[6px] -left-[5px]">
            <polygon points="5,0 10,3 10,9 5,12 0,9 0,3" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute top-0 bottom-0 right-8 border-r border-dashed border-current">
          <svg width="10" height="12" viewBox="0 0 10 12" className="absolute -top-[6px] -right-[5px]">
            <polygon points="5,0 10,3 10,9 5,12 0,9 0,3" fill="currentColor" />
          </svg>
          <svg width="10" height="12" viewBox="0 0 10 12" className="absolute -bottom-[6px] -right-[5px]">
            <polygon points="5,0 10,3 10,9 5,12 0,9 0,3" fill="currentColor" />
          </svg>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 font-space-mono text-xs uppercase tracking-widest text-slate/60 mb-4">
            <span className="w-1.5 h-1.5 bg-greptile-green rounded-full" />
            [ START THE CONVERSATION ]
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-8xl font-anybody font-extrabold text-slate tracking-tight leading-[0.9] mb-6">
            Go grid-independent.
          </h2>
          <p className="text-lg text-slate/70 mb-10 max-w-xl mx-auto">
            Talk to our engineering team about your power requirements. We&apos;ll scope a fixed-price solution in 14 days.
          </p>
          <div className="btn-hex-group justify-center">
            <a href="#sales" className="btn-hex-outline btn-hex-md !border-slate !bg-slate !text-slate xl:btn-hex-lg">
              Contact Sales
            </a>
            <a href="#specs" className="btn-hex btn-hex-md !border-greptile-green !bg-greptile-green !text-black xl:btn-hex-lg">
              Download Spec Sheet
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 max-w-md mx-auto">
            <div className="border border-dashed border-slate/30 p-3 bg-fog/30">
              <div className="font-anybody text-xl font-bold text-slate">14d</div>
              <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/60">to proposal</div>
            </div>
            <div className="border border-dashed border-slate/30 p-3 bg-fog/30">
              <div className="font-anybody text-xl font-bold text-slate">90d</div>
              <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/60">to live ops</div>
            </div>
            <div className="border border-dashed border-slate/30 p-3 bg-fog/30">
              <div className="font-anybody text-xl font-bold text-slate">99.997%</div>
              <div className="font-space-mono text-[10px] uppercase tracking-wider text-slate/60">uptime</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-[6.5rem] sm:pt-[6.75rem]">
        <Hero />
        <LogoCloud />
        <FeaturedTestimonial />
        <HowItWorks />
        <FeatureGrid />
        <Personalization />
        <IntegrationCards />
        <MarqueeCTA />
        <Reliability />
        <TestimonialWall />
        <FAQSection />
        <ClosingCTA />
      </main>
      <Footer />
    </div>
  );
}