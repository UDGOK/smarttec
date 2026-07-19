import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security & Privacy | SmartTec",
  description: "Tenant isolation, telemetry, and data handling at SmartTec.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
