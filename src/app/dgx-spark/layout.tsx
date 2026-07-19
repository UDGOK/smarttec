import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DGX Spark vs Data Center | SmartTec",
  description: "Where NVIDIA DGX Spark ends and rack-scale GB200 begins — specs, memory, and when to graduate from desk to data center.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
