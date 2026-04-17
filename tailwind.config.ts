import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#020403",
        foreground: "#EAFDF5",
        "panel-edge": "rgba(143, 255, 213, 0.18)",
        "panel-fill": "rgba(3, 18, 13, 0.78)",
        emeraldx: "#00F5A0",
        cyanx: "#32D5FF",
      },
      boxShadow: {
        glow: "0 0 36px rgba(0, 245, 160, 0.18)",
        cyan: "0 0 32px rgba(50, 213, 255, 0.16)",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-120%) skewX(-18deg)" },
          "100%": { transform: "translateX(220%) skewX(-18deg)" },
        },
        grid: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
        pulseLine: {
          "0%, 100%": { opacity: "0.42" },
          "50%": { opacity: "0.86" },
        },
      },
      animation: {
        shimmer: "shimmer 2.8s linear infinite",
        grid: "grid 16s linear infinite",
        pulseLine: "pulseLine 3s ease-in-out infinite",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
