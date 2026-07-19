import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GPU Cloud & Cerebras Compute | SmartTec",
  description: "NVIDIA H100/H200/B200 and Cerebras CS-3 on InfiniBand fabric, behind battery-backed power in Mead, Oklahoma. Reserved, on-demand, and bare-metal.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
