import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Platform Features | SmartTec",
  description: "NVIDIA reference architecture, InfiniBand fabric, z1power-based BESS, AURA orchestration, and transparent pricing.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
