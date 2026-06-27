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

export function Hero() {
  const scrollToFeatures = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0B0D]">
      {/* Energy Core Orb */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Outer glow layers */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(184,255,92,0.15) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(184,255,92,0.25) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.7, 0.9, 0.7],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Core orb */}
        <motion.div
          className="relative w-[200px] h-[200px]"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_0_60px_rgba(184,255,92,0.5)]">
            <defs>
              <radialGradient id="orbGradient" cx="30%" cy="30%">
                <stop offset="0%" stopColor="#B8FF5C" stopOpacity="1" />
                <stop offset="50%" stopColor="#8ED64A" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#4A7A2A" stopOpacity="0.6" />
              </radialGradient>
              <filter id="orbGlow">
                <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            
            {/* Outer ring */}
            <motion.circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="rgba(184,255,92,0.3)"
              strokeWidth="2"
              filter="url(#orbGlow)"
              animate={{
                strokeOpacity: [0.2, 0.5, 0.2],
                r: [90, 95, 90],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Middle ring */}
            <motion.circle
              cx="100"
              cy="100"
              r="70"
              fill="none"
              stroke="rgba(184,255,92,0.4)"
              strokeWidth="1.5"
              animate={{
                strokeOpacity: [0.3, 0.6, 0.3],
                r: [70, 72, 70],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Inner orb */}
            <motion.circle
              cx="100"
              cy="100"
              r="50"
              fill="url(#orbGradient)"
              filter="url(#orbGlow)"
              animate={{
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Core highlight */}
            <motion.ellipse
              cx="85"
              cy="85"
              rx="20"
              ry="15"
              fill="rgba(255,255,255,0.3)"
              animate={{
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </svg>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <SectionLabel>SmartTec Energy Systems</SectionLabel>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            The grid-independent{" "}
            <span className="text-[#B8FF5C]">data center.</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
          >
            Sustainable infrastructure that operates completely off-grid.
            Powered by renewable energy, secured by intelligent systems,
            built for the future of computing.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" onClick={scrollToFeatures}>
              Explore Solutions
            </Button>
            <Button variant="secondary" size="lg">
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={scrollToFeatures}
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
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
            className="text-lime-400"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;