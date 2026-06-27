import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0A0B0D",
          secondary: "#0B0C0E",
          section: "#111315",
        },
        txt: {
          primary: "#F5F5F2",
          secondary: "#8A8F98",
        },
        accent: {
          DEFAULT: "#B8FF5C",
          alt: "#A3E635",
        },
        border: "#1F2328",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        "lime-glow": "0 0 30px rgba(184, 255, 92, 0.15)",
        "lime-glow-lg": "0 0 60px rgba(184, 255, 92, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;