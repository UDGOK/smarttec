"use client";

import { motion } from "framer-motion";

const partners = [
  "Equinix",
  "Digital Realty",
  "Switch",
  "CyrusOne",
  "QTS",
  "Iron Mountain",
  "NTT Data",
  "Colt",
];

export function LogoCloud() {
  return (
    <section className="relative py-16 md:py-20 bg-[#F2F2EF] overflow-hidden">
      {/* Dotted-grid background texture */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `radial-gradient(circle, #6E7079 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-block text-xs font-mono uppercase tracking-widest text-[#6E7079] mb-4">
            [ TRUSTED BY OPERATORS ACROSS 40+ SITES ]
          </span>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
          {partners.map((partner, index) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.08 
              }}
              className="relative group"
            >
              <span className="text-base md:text-lg font-medium text-[#6E7079] transition-all duration-300 group-hover:text-[#2C2C38] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#34E2A0] after:transition-all after:duration-300 group-hover:after:w-full">
                {partner}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LogoCloud;
