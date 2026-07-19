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
  metadataBase: new URL("https://smarttec.dev"),
  title: "SmartTec | Resilient AI Cloud — Stay Online When the Grid Goes Down",
  description:
    "Battery-backed AI compute on z1power LFP storage. AURA islands your cluster in <10ms when the grid faults. NVIDIA + Cerebras at our owned Mead, OK site.",
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
    title: "SmartTec | Battery-Backed AI Compute",
    description:
      "NVIDIA + Cerebras compute behind z1power LFP storage. Sub-10ms failover, behind-the-meter power, Mead, Oklahoma. Q4 2026.",
    type: "website",
    locale: "en_US",
    siteName: "SmartTec",
    url: "https://smarttec.dev",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SmartTec — battery-backed AI compute" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SmartTec | Battery-Backed AI Compute",
    description:
      "NVIDIA + Cerebras compute behind z1power LFP storage. Sub-10ms failover, Mead, Oklahoma.",
    images: ["/og.png"],
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