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
          primary: "#E9EAE6",
          section: "#F2F2EF",
          dark: "#2A2A34",
        },
        txt: {
          primary: "#2C2C38",
          secondary: "#6E7079",
        },
        accent: {
          DEFAULT: "#34E2A0",
          secondary: "#E7B6DE",
        },
        border: "#D9DAD5",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        archivo: ["var(--font-archivo)", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        "mint-glow": "0 0 30px rgba(52, 226, 160, 0.15)",
        "mint-glow-lg": "0 0 60px rgba(52, 226, 160, 0.2)",
        "mint-glow-sm": "0 0 15px rgba(52, 226, 160, 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
