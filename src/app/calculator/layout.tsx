import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GPU Cost & Power Calculator — Model Fit, VRAM, $/Month | SmartTec",
  description:
    "Free calculator: pick a model (Llama, DeepSeek, Qwen, Kimi K3), a GPU (H100, H200, B200, MI455X), and get VRAM fit, throughput, fleet cost per month, and battery-backed power draw.",
  alternates: { canonical: "/calculator" },
  openGraph: {
    title: "GPU Cost & Power Calculator — Model Fit, VRAM, $/Month | SmartTec",
    description:
      "Pick a model and a GPU: VRAM fit, throughput, fleet cost per month, and battery-backed power draw.",
    url: "https://smarttec.dev/calculator",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
