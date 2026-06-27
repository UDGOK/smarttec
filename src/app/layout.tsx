import type { Metadata } from "next";
import { DM_Sans, Space_Mono, Anybody, Nanum_Pen_Script } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
});

const anybody = Anybody({
  subsets: ["latin"],
  variable: "--font-anybody",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const nanumPenScript = Nanum_Pen_Script({
  subsets: ["latin"],
  variable: "--font-nanum-pen-script",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "SmartTec | Resilient AI Cloud — Stay Online When the Grid Goes Down",
  description:
    "AI compute on megawatt-scale LFP batteries. AURA islands your cluster in <10ms when the grid faults. Up to 73% modeled grid reduction. Built in the USA.",
  keywords: [
    "data center",
    "battery energy storage",
    "grid resilience",
    "behind the meter",
    "AI cooling",
    "modular data center",
    "PUE optimization",
    "islanded operation",
  ],
  openGraph: {
    title: "SmartTec | Resilient AI Cloud",
    description:
      "Megawatt-scale battery-backed AI compute. AURA islands your cluster in under 10 milliseconds. Built in the USA.",
    type: "website",
    locale: "en_US",
    siteName: "SmartTec",
  },
  twitter: {
    card: "summary_large_image",
    title: "SmartTec | Resilient AI Cloud",
    description:
      "Megawatt-scale battery-backed AI compute. AURA islands your cluster in under 10 milliseconds.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${spaceMono.variable} ${anybody.variable} ${nanumPenScript.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-background bg-noise font-sans text-slate antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}