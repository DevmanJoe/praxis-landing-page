import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef2f9",
          100: "#d9e1f0",
          200: "#b3c4e0",
          300: "#8aa5cd",
          400: "#5a7cb5",
          500: "#35599b",
          600: "#1d3a6e",
          700: "#162c54",
          800: "#101f3c",
          900: "#0a1428",
          950: "#060c1a",
        },
        ink: "#05060a",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-instrument)", "Georgia", "serif"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.06), 0 24px 80px -24px rgba(13,32,74,0.65)",
        card: "0 1px 2px rgba(16,31,60,0.04), 0 12px 40px -12px rgba(16,31,60,0.12)",
        "card-hover":
          "0 2px 4px rgba(16,31,60,0.06), 0 24px 60px -16px rgba(29,58,110,0.28)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.45" },
        },
        shimmer: {
          from: { backgroundPosition: "200% 0" },
          to: { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        marquee: "marquee 45s linear infinite",
        float: "float 7s ease-in-out infinite",
        "pulse-soft": "pulse-soft 2.4s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;