"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Particle component for floating dots
function Particle({ delay, x, duration }: { delay: number; x: number; duration: number }) {
  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full bg-[#B8FF5C]/40"
      style={{
        left: `${x}%`,
        bottom: "10%",
      }}
      initial={{ y: 0, opacity: 0 }}
      animate={{
        y: [-20, -200],
        opacity: [0, 0.6, 0],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}

export function Hero() {
  const scrollToFeatures = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSpecs = () => {
    document.getElementById("specs")?.scrollIntoView({ behavior: "smooth" });
  };

  // Generate random particles
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    delay: Math.random() * 5,
    x: Math.random() * 100,
    duration: 6 + Math.random() * 4,
  }));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0B0D]">
      {/* Background image with dark overlay */}
      <div
        className="absolute inset-0 hero-bg"
        style={{
          backgroundImage: `url(/img/datacenter.jpg)`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0B0D]/85 via-[#0A0B0D]/70 to-[#0A0B0D]" />
        
        {/* Animated lime gradient overlay */}
        <div className="absolute inset-0 animate-gradient-glow bg-gradient-to-t from-[#B8FF5C]/10 via-transparent to-transparent" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <Particle
            key={particle.id}
            delay={particle.delay}
            x={particle.x}
            duration={particle.duration}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <SectionLabel>SmartTec Energy Systems</SectionLabel>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.05] tracking-tight"
          >
            The grid-independent{" "}
            <span className="text-[#B8FF5C]">data center.</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Proprietary battery energy stacks. Zero dependency on the public grid. Built in the USA.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <Button size="lg" onClick={scrollToFeatures}>
              Request a Demo
            </Button>
            <Button variant="secondary" size="lg" onClick={scrollToSpecs}>
              View Technical Specs
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <div className="flex flex-col items-center gap-2 cursor-pointer" onClick={scrollToFeatures}>
          <span className="text-xs text-gray-500 uppercase tracking-widest font-mono">
            Scroll
          </span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#B8FF5C]"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
