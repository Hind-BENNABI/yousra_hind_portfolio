import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#fcfdff",
        ink: "#2e3a59",
        muted: "#6d7d93",
        primary: {
          DEFAULT: "#7cb7e8",
          dark: "#6fb2e9",
          soft: "#9fe2ff",
        },
        blue: {
          light: "#d8ebff",
          soft: "#cfe9ff",
        },
        pink: {
          light: "#ffe4e9",
          DEFAULT: "#ea9aa9",
          dark: "#904d4d",
          accent: "#ff84c0",
        },
        yellow: {
          light: "#f5e7cf",
          DEFAULT: "#eed1a1",
          dark: "#c09448",
        },
        green: {
          light: "#e6f5e2",
          soft: "#c7fbd1",
          DEFAULT: "#7cc98a",
          dark: "#639e6e",
        },
      },
      fontFamily: {
        display: ["var(--font-dm-serif)", "serif"],
        script: ["var(--font-playwrite)", "cursive"],
        nav: ["var(--font-inder)", "sans-serif"],
        body: ["var(--font-noto-sans)", "sans-serif"],
        signature: ["var(--font-flamenco)", "cursive"],
      },
      borderRadius: {
        "4xl": "28px",
        "5xl": "39px",
      },
      maxWidth: {
        "8xl": "1440px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
