"use client";

import { motion } from "framer-motion";
import SectionLabel from "../ui/SectionLabel";

const partners = [
  "Equinix",
  "Digital Realty",
  "Switch",
  "CyrusOne",
  "QTS",
  "Iron Mountain",
  "Aligned",
  "Voltari",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function LogoCloud() {
  return (
    <section className="relative bg-[#0A0B0D] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <SectionLabel className="mb-4 block">Trusted Partners</SectionLabel>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Powering the Industry&apos;s Leaders
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Leading data center providers trust our solutions to deliver
            reliable infrastructure at scale.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4"
        >
          {partners.map((partner) => (
            <motion.div
              key={partner}
              variants={itemVariants}
              className="group relative flex items-center justify-center rounded-lg border border-gray-800 bg-[#111113] px-6 py-8 transition-all duration-300 hover:border-[#B8FF5C]/40 hover:bg-[#161718]"
            >
              <span className="font-mono text-sm font-medium uppercase tracking-wider text-gray-300 transition-colors duration-300 group-hover:text-[#B8FF5C] sm:text-base">
                {partner}
              </span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#B8FF5C]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}