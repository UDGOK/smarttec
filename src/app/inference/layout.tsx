import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fastest AI Inference | Cerebras + GPU | SmartTec",
  description: "Cerebras CS-3 wafer-scale inference and batch-optimized GPU serving with a fleet cost calculator. Deployed at our Mead, OK site Q4 2026.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
