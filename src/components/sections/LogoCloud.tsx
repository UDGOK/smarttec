"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Customer logos (data center / enterprise style)
const customers = [
  { name: "Equinix", file: "equinix.svg" },
  { name: "Digital Realty", file: "digital_realty.svg" },
  { name: "CoreWeave", file: null, text: "CoreWeave" },
  { name: "Switch", file: "switch.svg" },
  { name: "StackPath", file: null, text: "StackPath" },
  { name: "CyrusOne", file: "cyrusone.svg" },
  { name: "QTS", file: "qts.svg" },
  { name: "Cloudflare", file: null, text: "Cloudflare" },
  { name: "Vultr", file: null, text: "Vultr" },
  { name: "Iron Mountain", file: "iron_mountain.svg" },
  { name: "Lambda", file: null, text: "Lambda" },
  { name: "NTT Data", file: "ntt_data.svg" },
  { name: "Colt", file: "colt.svg" },
  { name: "PhoenixNAP", file: null, text: "PhoenixNAP" },
  { name: "Hetzner", file: null, text: "Hetzner" },
  { name: "OVHcloud", file: null, text: "OVHcloud" },
];

export function LogoCloud() {
  return (
    <div className="relative bg-background">
      <div>
        <hr className="border-border w-full opacity-30" />
        <div className="flex items-center gap-6 px-6 md:px-12 lg:px-16 py-1.5">
          <div className="divider-plus-sm flex-1" />
          <span className="font-space-mono text-[11px] md:text-xs tracking-widest uppercase shrink-0 relative text-slate">
            <span className="absolute inset-0 -mx-1 -my-0.5 rounded-sm origin-left opacity-25" style={{ backgroundColor: "#C5FFD6", transform: "scaleX(0)" }} />
            <span className="relative">Trusted by 40+ data center operators</span>
          </span>
          <div className="divider-plus-sm flex-1" />
        </div>
        <hr className="border-border w-full opacity-30" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-4 lg:grid-cols-8 border-t border-dashed border-silver"
      >
        {customers.map((c) => (
          <div
            key={c.name}
            className="flex items-center justify-center h-14 md:h-16 border-r border-b border-dashed border-silver bg-fog/50 hover:bg-greptile-green/10 transition-colors"
          >
            {c.file ? (
              <Image
                src={`/logos/${c.file}`}
                alt={c.name}
                width={120}
                height={40}
                className="object-contain w-20 h-6 md:w-24 md:h-7 grayscale opacity-70"
              />
            ) : (
              <span className="font-anybody font-bold text-sm md:text-base text-slate/70 grayscale tracking-tight">
                {c.text || c.name}
              </span>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default LogoCloud;