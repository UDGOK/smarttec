import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GPU Pricing & Reserved Plans | SmartTec",
  description: "H100 from $2.40/GPU-hr on-demand, reserved node and cluster plans with prepay discounts, Cerebras inference per-token. Launch pricing open.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
