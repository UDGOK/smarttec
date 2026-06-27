"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-background bg-paper-plus-ruled">
      {/* Section tick marks at edges (greptile signature) */}
      <div className="absolute inset-0 pointer-events-none hidden md:block text-slate/30">
        <div className="absolute top-0 bottom-0 left-8 border-l border-dashed border-current">
          <svg width="10" height="12" viewBox="0 0 10 12" className="absolute -top-[6px] -left-[5px]">
            <polygon points="5,0 10,3 10,9 5,12 0,9 0,3" fill="currentColor" stroke="currentColor" strokeWidth="1" />
          </svg>
          <svg width="10" height="12" viewBox="0 0 10 12" className="absolute -bottom-[6px] -left-[5px]">
            <polygon points="5,0 10,3 10,9 5,12 0,9 0,3" fill="currentColor" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
        <svg className="absolute top-0 bottom-0 h-full left-0 w-8" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="grid-left" width="6" height="6" patternUnits="userSpaceOnUse">
              <path d="M 6 0 L 0 0 0 6" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-left)" />
        </svg>
        <div className="absolute top-0 bottom-0 right-8 border-r border-dashed border-current">
          <svg width="10" height="12" viewBox="0 0 10 12" className="absolute -top-[6px] -right-[5px]">
            <polygon points="5,0 10,3 10,9 5,12 0,9 0,3" fill="currentColor" stroke="currentColor" strokeWidth="1" />
          </svg>
          <svg width="10" height="12" viewBox="0 0 10 12" className="absolute -bottom-[6px] -right-[5px]">
            <polygon points="5,0 10,3 10,9 5,12 0,9 0,3" fill="currentColor" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
        <svg className="absolute top-0 bottom-0 h-full right-0 w-8" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="grid-right" width="6" height="6" patternUnits="userSpaceOnUse">
              <path d="M 6 0 L 0 0 0 6" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-right)" />
        </svg>
      </div>

      <section className="relative section-wrapper-compact">
        {/* Decorative texture blocks */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-6 -right-10 w-64 h-52 bg-grid-pattern opacity-20 rotate-3 bg-greptile-green"
               style={{ maskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)", WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)" }} />
          <div className="absolute -bottom-4 -left-8 w-56 h-44 bg-grid-pattern opacity-15 -rotate-2 bg-lavender"
               style={{ maskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)", WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)" }} />
          <div className="absolute top-1/2 -translate-y-1/2 left-4 w-28 h-36 bg-dither-dense opacity-20 rotate-1" />
          <div className="absolute top-16 right-1/3 w-40 h-28 bg-dither opacity-15 -rotate-1" />
          <div className="absolute bottom-10 left-1/3 w-48 h-32 bg-halftone opacity-20 rotate-2" />
        </div>

        {/* Mascot image bottom-right (greptile-style lizard replacement) */}
        <div className="absolute bottom-0 right-0 pointer-events-none h-auto aspect-square w-[max(500px,min(55vw,100vh))] hidden md:block">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-radial-glow" />
            <Image
              src="/lizard-mobile.svg"
              alt="SmartTec Sparky mascot"
              width={900}
              height={900}
              className="object-contain object-right-bottom w-full h-full"
              priority
            />
          </div>
        </div>

        {/* Mobile mascot */}
        <div className="absolute bottom-0 right-0 pointer-events-none aspect-square w-[80vw] max-w-[500px] opacity-30 md:hidden">
          <Image src="/lizard-mobile.svg" alt="" width={500} height={500} className="object-contain object-right-bottom w-full h-full" />
        </div>

        <div className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-14 lg:px-16 pt-32 md:pt-40 lg:pt-44 pb-16">
          {/* Top - Headline */}
          <div className="relative z-10">
            <motion.h1
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="text-slate text-6xl sm:text-7xl lg:text-8xl font-anybody font-extrabold tracking-tight leading-[0.9] max-w-3xl"
            >
              The grid-independent<br />
              data center.
            </motion.h1>
          </div>

          {/* Bottom - Description + CTAs */}
          <div className="relative z-10 pb-12 md:pb-20 lg:pb-24 mt-12">
            <motion.div
              initial={{ opacity: 0, filter: "blur(6px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-lg xl:max-w-2xl"
            >
              <p className="text-xl md:text-2xl xl:text-3xl text-slate mb-8">
                AI-managed battery energy stacks that keep your infrastructure running — even when the grid doesn&apos;t.
              </p>
              <div className="btn-hex-group">
                <a href="#contact" className="btn-hex-outline btn-hex-md !border-slate !bg-slate !text-slate xl:btn-hex-lg">
                  Contact Sales
                </a>
                <a href="#specs" className="btn-hex btn-hex-md !border-greptile-green !bg-greptile-green !text-black xl:btn-hex-lg">
                  See live specs
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;