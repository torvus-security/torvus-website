import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";
import animate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
      },
    },
    extend: {
      colors: {
        storm: "var(--color-storm)",
        thunder: "var(--color-thunder)",
        lapis: "var(--color-lapis)",
        cranberry: "var(--color-cranberry)",
        lagoon: "var(--color-lagoon)",
        mist: "var(--color-mist)",
        white: "var(--color-white)",
        border: "rgba(11, 18, 32, 0.1)",
      },
      fontFamily: {
        sans: [
          "Satoshi",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        display: [
          "Satoshi",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        body: ["Erode", "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 45px rgba(11, 18, 32, 0.14)",
        focus: "0 0 0 3px rgba(38, 97, 156, 0.35)",
      },
      borderRadius: {
        lg: "1rem",
        xl: "1.25rem",
        "2xl": "1.75rem",
        full: "9999px",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
      maxWidth: {
        prose: "70ch",
      },
      fontSize: {
        display: ["3.5rem", { lineHeight: "1.05", letterSpacing: "-0.04em" }],
        h1: ["3rem", { lineHeight: "1.1", letterSpacing: "-0.035em" }],
        h2: ["2.25rem", { lineHeight: "1.15", letterSpacing: "-0.03em" }],
        h3: ["1.75rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        h4: ["1.375rem", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        lead: ["1.375rem", { lineHeight: "1.6", letterSpacing: "-0.01em" }],
        body: ["1.0625rem", { lineHeight: "1.7" }],
        small: ["0.9375rem", { lineHeight: "1.5", letterSpacing: "0" }],
        micro: ["0.8125rem", { lineHeight: "1.45", letterSpacing: "0.02em" }],
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0", transform: "translateY(0.25rem)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 300ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
      typography: ({ theme }: PluginAPI) => ({
        DEFAULT: {
          css: {
            color: theme("colors.thunder"),
            maxWidth: "65ch",
            h1: { color: theme("colors.storm") },
            h2: { color: theme("colors.storm") },
            h3: { color: theme("colors.storm") },
            a: {
              color: theme("colors.lapis"),
              textDecoration: "none",
              fontWeight: "600",
              "&:hover": {
                textDecoration: "underline",
              },
            },
            strong: { color: theme("colors.storm") },
            code: {
              color: theme("colors.cranberry"),
              backgroundColor: "rgba(214,31,105,0.08)",
              padding: "0.125rem 0.375rem",
              borderRadius: "0.5rem",
            },
          },
        },
      }),
    },
  },
  plugins: [animate, typography],
};

export default config;
