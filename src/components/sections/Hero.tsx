"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

// Halftone SVG illustration - stylized battery/energy module
function HalftoneIllustration() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="w-full h-full"
      style={{
        filter: 'grayscale(100%) contrast(1.1)',
      }}
    >
      <defs>
        {/* Halftone pattern */}
        <pattern id="halftone" patternUnits="userSpaceOnUse" width="6" height="6">
          <circle cx="3" cy="3" r="1.5" fill="#2C2C38" opacity="0.6" />
        </pattern>
        <pattern id="halftone-dense" patternUnits="userSpaceOnUse" width="4" height="4">
          <circle cx="2" cy="2" r="1.2" fill="#2C2C38" opacity="0.8" />
        </pattern>
        {/* Mint glow filter */}
        <filter id="mintGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feFlood floodColor="#34E2A0" floodOpacity="0.6" result="color" />
          <feComposite in="color" in2="blur" operator="in" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      {/* Background grid texture */}
      <rect width="400" height="400" fill="url(#halftone)" opacity="0.3" />
      
      {/* Main battery cell outline */}
      <g filter="url(#mintGlow)">
        {/* Outer housing */}
        <path
          d="M80 60 L320 60 L340 80 L340 320 L320 340 L80 340 L60 320 L60 80 Z"
          fill="none"
          stroke="#2C2C38"
          strokeWidth="3"
        />
        
        {/* Top terminal block */}
        <rect x="140" y="40" width="120" height="30" rx="4" fill="#2C2C38" />
        <rect x="160" y="30" width="80" height="20" rx="3" fill="#3A3A48" />
        
        {/* Inner battery stacks */}
        <rect x="100" y="100" width="200" height="200" rx="8" fill="#2C2C38" />
        <rect x="100" y="100" width="200" height="200" rx="8" fill="url(#halftone-dense)" />
        
        {/* Cell dividers */}
        <line x1="166" y1="100" x2="166" y2="300" stroke="#6E7079" strokeWidth="1" />
        <line x1="233" y1="100" x2="233" y2="300" stroke="#6E7079" strokeWidth="1" />
        
        {/* Energy level indicators */}
        <rect x="120" y="130" width="26" height="140" rx="3" fill="#34E2A0" opacity="0.9" />
        <rect x="187" y="130" width="26" height="140" rx="3" fill="#34E2A0" opacity="0.7" />
        <rect x="254" y="130" width="26" height="140" rx="3" fill="#34E2A0" opacity="0.5" />
        
        {/* Connection ports */}
        <rect x="100" y="260" width="200" height="25" rx="3" fill="#3A3A48" />
        <circle cx="140" cy="272" r="6" fill="#34E2A0" />
        <circle cx="200" cy="272" r="6" fill="#34E2A0" opacity="0.6" />
        <circle cx="260" cy="272" r="6" fill="#34E2A0" opacity="0.3" />
        
        {/* Cooling vents */}
        <line x1="110" y1="310" x2="130" y2="310" stroke="#6E7079" strokeWidth="2" />
        <line x1="140" y1="310" x2="160" y2="310" stroke="#6E7079" strokeWidth="2" />
        <line x1="170" y1="310" x2="190" y2="310" stroke="#6E7079" strokeWidth="2" />
        <line x1="200" y1="310" x2="220" y2="310" stroke="#6E7079" strokeWidth="2" />
        <line x1="230" y1="310" x2="250" y2="310" stroke="#6E7079" strokeWidth="2" />
        <line x1="260" y1="310" x2="280" y2="310" stroke="#6E7079" strokeWidth="2" />
      </g>
    </svg>
  );
}

// Decorative wireframe arc
function WireframeArc({ className, opacity = 0.2 }: { className?: string; opacity?: number }) {
  return (
    <svg
      className={`absolute ${className}`}
      viewBox="0 0 200 100"
      fill="none"
      style={{ opacity }}
    >
      <path
        d="M10 90 Q100 10 190 90"
        stroke="#34E2A0"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
}

export function Hero() {
  const scrollToFeatures = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSpecs = () => {
    document.getElementById("specs")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#E9EAE6] bg-dotted-grid">
      {/* Decorative wireframe arcs */}
      <WireframeArc className="top-20 left-[-10%] w-[400px] h-[200px]" opacity={0.15} />
      <WireframeArc className="bottom-40 right-[-5%] w-[300px] h-[150px] rotate-12" opacity={0.1} />
      <WireframeArc className="top-1/3 right-[10%] w-[250px] h-[125px] -rotate-6" opacity={0.08} />

      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-radial-glow-subtle pointer-events-none" />

      {/* Content container */}
      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left z-10">
            {/* Kicker */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="font-mono text-sm text-[#6E7079] tracking-wide">
                [ SmartTec Energy Systems ]
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-[#2C2C38] mb-8 leading-[0.95] tracking-tight"
              style={{ fontFamily: "'Archivo Expanded', sans-serif", fontWeight: 900 }}
            >
              The grid-independent data center.
            </motion.h1>

            {/* Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-[#6E7079] mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Proprietary battery energy stacks. Zero dependency on the public grid. Built in the USA.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button size="lg" onClick={scrollToFeatures}>
                Request a Demo
              </Button>
              <Button variant="accent" size="lg" onClick={scrollToSpecs}>
                View Technical Specs
              </Button>
            </motion.div>

            {/* Trust indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex items-center gap-4 justify-center lg:justify-start"
            >
              <span className="text-sm text-[#6E7079]">
                Trusted by operators across 40+ sites
              </span>
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-6 h-1 bg-[#34E2A0] rounded-full"
                    style={{ opacity: 1 - i * 0.15 }}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Hero illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full max-w-md lg:max-w-lg"
          >
            <motion.div
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              {/* Glow outline effect */}
              <div 
                className="absolute inset-0 blur-2xl bg-[#34E2A0]/20 rounded-3xl"
                style={{ transform: 'scale(1.05)' }}
              />
              
              {/* Main illustration container */}
              <div className="relative bg-[#F5F5F2] rounded-3xl p-8 border border-[#D9DAD5]">
                <HalftoneIllustration />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#E9EAE6] to-transparent pointer-events-none" />
    </section>
  );
}

export default Hero;
