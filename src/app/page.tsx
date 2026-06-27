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

// Chamfered button styles
const chamferedButtonBase = "relative px-6 py-3 font-medium text-sm transition-all duration-200 overflow-hidden";

function ClosingCTA() {
  return (
    <section className="py-24 bg-[#F2F2EF]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2C38] mb-6" style={{ fontFamily: "'Archivo Expanded', sans-serif" }}>
            Start the conversation.
          </h2>
          <p className="text-lg text-[#6B6B75] mb-10 max-w-xl mx-auto">
            Talk to our team about your power requirements. We&apos;ll scope a solution within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#demo"
              className="relative px-8 py-4 bg-[#34E2A0] text-[#2C2C38] font-semibold text-sm transition-all duration-200 hover:opacity-90 clip-path-chamfered"
              style={{
                clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))"
              }}
            >
              Request a Demo
            </a>
            <a
              href="#specsheet"
              className="relative px-8 py-4 bg-transparent text-[#2C2C38] font-semibold text-sm border border-[#2C2C38] transition-all duration-200 hover:bg-[#2C2C38] hover:text-white"
              style={{
                clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))"
              }}
            >
              Download Spec Sheet
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
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