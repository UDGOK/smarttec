"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

interface MarqueeProps {
  text?: string;
  speed?: number;
}

export function Marquee({ text = "DESIGN · DEPLOY · POWER", speed = 30 }: MarqueeProps) {
  const constraintsRef = useRef(null);
  const x = useMotionValue(0);

  useEffect(() => {
    const finalX = -100 / 2;
    animate(x, [0, finalX], {
      duration: speed,
      repeat: Infinity,
      ease: "linear",
    });
  }, [x, speed]);

  return (
    <div ref={constraintsRef} className="overflow-hidden py-4 bg-neutral-900">
      <motion.div
        style={{ x }}
        className="flex whitespace-nowrap"
        whileHover={{ animationPlayState: "paused" }}
      >
        {[...Array(10)].map((_, i) => (
          <span
            key={i}
            className="text-4xl md:text-6xl font-bold text-white tracking-wider mx-8"
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}