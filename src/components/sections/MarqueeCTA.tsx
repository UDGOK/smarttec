"use client";

import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import Button from "@/components/ui/Button";

export function MarqueeCTA() {
  const constraintsRef = useRef(null);
  const x = useMotionValue(0);

  useEffect(() => {
    const finalX = -100 / 2;
    animate(x, [0, finalX], {
      duration: 40,
      repeat: Infinity,
      ease: "linear",
    });
  }, [x]);

  return (
    <section className="relative bg-[#34E2A0]">
      {/* Marquee strip */}
      <div ref={constraintsRef} className="overflow-hidden py-6 md:py-8">
        <motion.div
          style={{ x }}
          className="flex whitespace-nowrap"
        >
          {[...Array(10)].map((_, i) => (
            <span
              key={i}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#2C2C38] tracking-wider mx-8 font-['Archivo_Expanded',sans-serif]"
            >
              DESIGN · DEPLOY · POWER
            </span>
          ))}
        </motion.div>
      </div>

      {/* CTA Content */}
      <div className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C2C38] mb-8 font-['Archivo_Expanded',sans-serif]"
          >
            Ready to go grid-independent?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="primary" size="lg">
              Schedule a Consultation
            </Button>
            <Button variant="outline" size="lg">
              View Technical Specs
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default MarqueeCTA;