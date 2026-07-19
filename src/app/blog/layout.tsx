import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | SmartTec",
  description: "Engineering writing on AI data center power, GPU economics, batteries, and grid resilience.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
