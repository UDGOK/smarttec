"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <motion.div
      className={`bg-[#111315] border border-[#1F2328] rounded-2xl ${className}`}
      whileHover={{
        borderColor: "#84cc16",
        boxShadow: "0 0 20px rgba(132, 204, 22, 0.3)",
      }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}