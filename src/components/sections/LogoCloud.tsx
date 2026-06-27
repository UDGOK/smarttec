"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "Equinix", logo: "/logos/equinix.svg" },
  { name: "Digital Realty", logo: "/logos/digital_realty.svg" },
  { name: "Switch", logo: "/logos/switch.svg" },
  { name: "CyrusOne", logo: "/logos/cyrusone.svg" },
  { name: "QTS", logo: "/logos/qts.svg" },
  { name: "Iron Mountain", logo: "/logos/iron_mountain.svg" },
  { name: "NTT Data", logo: "/logos/ntt_data.svg" },
  { name: "Colt", logo: "/logos/colt.svg" },
];

export function LogoCloud() {
  return (
    <section className="py-16 md:py-20 border-y border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-block text-xs font-mono uppercase tracking-widest text-[#B8FF5C] mb-4">
            [ Trusted by operators across 40+ sites ]
          </span>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1 
              }}
              className="relative group"
            >
              <div className="w-32 h-16 md:w-40 md:h-20 flex items-center justify-center p-3 bg-white/[0.03] rounded-lg border border-white/10 transition-all duration-300 hover:border-[#B8FF5C]/30 hover:shadow-[0_0_20px_rgba(184,255,92,0.1)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-w-full max-h-full object-contain brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
