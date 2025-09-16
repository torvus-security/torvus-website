// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: "#0f172a",       // deep navy for headings
          teal: "#10b981",      // emerald-teal
          cyan: "#22d3ee",      // cyan
          rose: "#ef4444",      // buttons
          gray: "#6b7280",
        },
      },
      fontFamily: {
        sans: ["var(--font-satoshi)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-erode)", "var(--font-satoshi)", "ui-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(2,6,23,0.08), 0 8px 28px rgba(2,6,23,0.10)",
      },
    },
  },
  plugins: [],
};
export default config;