import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rent NVIDIA B200 GPUs — Reserved & On-Demand Pricing | SmartTec",
  description: "Reserve NVIDIA B200 capacity at $4.50/GPU-hr (Q4 2026 power-on) or H100 from $2.40/GPU-hr on-demand. Reserved node and cluster plans, Cerebras inference per-token. Launch pricing open.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: 'Rent NVIDIA B200 GPUs — Reserved & On-Demand Pricing | SmartTec',
    description: 'Reserve NVIDIA B200 capacity at $4.50/GPU-hr (Q4 2026 power-on) or H100 from $2.40/GPU-hr on-demand. Launch pricing open.',
    url: "https://smarttec.dev/pricing",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
