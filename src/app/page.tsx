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
import { Button } from "@/components/ui/Button";

function ClosingCTA() {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6">
            Ready to go off-grid?
          </h2>
          <p className="text-lg text-zinc-400 mb-8">
            Join leading data center operators who have made the switch to grid-independent infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              Request a Demo
            </Button>
            <Button variant="secondary" size="lg">
              View Technical Specs
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <Navigation />
      <main>
        <Hero />
        <LogoCloud />
        <HowItWorks />
        <FeaturedTestimonial />
        <FeatureGrid />
        <Personalization />
        <IntegrationCards />
        <MarqueeCTA />
        <Reliability />
        <TestimonialWall />
        <ClosingCTA />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
