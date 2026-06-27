"use client";

import { motion } from "framer-motion";
import { Marquee } from "@/components/ui/Marquee";
import Button from "@/components/ui/Button";

export function MarqueeCTA() {
  return (
    <section className="relative bg-[#0A0B0D]">
      {/* Marquee strip */}
      <Marquee text="DESIGN · DEPLOY · POWER" speed={40} />

      {/* Orb + CTA section */}
      <div className="relative py-24 md:py-32 overflow-hidden">
        {/* Radial glow background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(132, 204, 22, 0.12) 0%, transparent 60%)",
          }}
        />

        {/* Orb with pulse animation */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            {/* Pulse rings */}
            <motion.div
              className="absolute inset-0 rounded-full bg-lime-400/20"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 0, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-full bg-lime-400/15"
              animate={{
                scale: [1, 2, 1],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{
                duration: 3,
                delay: 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-full bg-lime-400/10"
              animate={{
                scale: [1, 2.5, 1],
                opacity: [0.2, 0, 0.2],
              }}
              transition={{
                duration: 3,
                delay: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Core orb */}
            <motion.div
              className="relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-lime-400 to-lime-500 shadow-[0_0_60px_rgba(132,204,22,0.4)]"
              animate={{
                boxShadow: [
                  "0 0 60px rgba(132, 204, 22, 0.4)",
                  "0 0 100px rgba(132, 204, 22, 0.6)",
                  "0 0 60px rgba(132, 204, 22, 0.4)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Inner highlight */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-white/30 to-transparent" />
            </motion.div>
          </div>
        </div>

        {/* CTA Content */}
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to power your{" "}
            <span className="text-lime-400">next breakthrough?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg text-gray-400 mb-10 max-w-xl mx-auto"
          >
            Join the leading facilities already running on SmartTec infrastructure.
            Schedule a consultation to explore deployment options.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="primary" size="lg">
              Schedule Consultation
            </Button>
            <Button variant="secondary" size="lg">
              View Specifications
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default MarqueeCTA;