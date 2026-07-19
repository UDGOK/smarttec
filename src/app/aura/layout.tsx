import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AURA Orchestration | SmartTec",
  description: "AURA islands your cluster onto battery in under 10ms when the grid faults — power-aware workload orchestration built in-house.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
