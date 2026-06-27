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
        // Greptile-aligned palette
        background: "#E9E9E9",
        fog: "#EEEEEE",
        slate: "#3D3B4F",
        silver: "#D6D6D6",
        border: "rgba(85, 83, 104, 0.30)",
        "greptile-green": "#28E99F",
        seafoam: "#C5FFD6",
        magenta: "#FFACFE",
        ice: "#D1E5FF",
        lavender: "#FFCFFE",
        peach: "#FFBCB3",
        pink: "#F783A3",
        bloom: "#FF6D6D",
        coral: "#FF7F59",
        blue: "#5882FF",
        neon: "#DAFF01",
        sky: "#71ADFF",
        lime: "#ECFFA3",
        sage: "#C8EAD0",
        customwhite: "#FDFCF9",
        paper: "#F8F7F3",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
        anybody: ["var(--font-anybody)", "sans-serif"],
        "pen-script": ["var(--font-nanum-pen-script)", "cursive"],
      },
      letterSpacing: {
        wider2: "0.1em",
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;