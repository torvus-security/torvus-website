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
    borderRadius: {
      sm: "6px",
      md: "10px",
      lg: "12px",
      xl: "14px",
      "2xl": "18px",
      full: "9999px",
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
        pastel: {
          cranberry: "var(--pastel-cranberry)",
          lagoon: "var(--pastel-lagoon)",
          lapis: "var(--pastel-lapis)",
        },
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
        "soft-1": "var(--shadow-soft-1)",
        "soft-2": "var(--shadow-soft-2)",
        focus: "var(--shadow-focus)",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
      maxWidth: {
        prose: "70ch",
      },
      backgroundImage: {
        "grad-hero": "var(--grad-hero)",
        "grad-panel": "var(--grad-panel)",
        "grad-divider": "var(--grad-divider)",
      },
      fontSize: {
        display: [
          "var(--fz-display)",
          { lineHeight: "var(--lh-display)", letterSpacing: "-0.03em" },
        ],
        h1: ["var(--fz-h1)", { lineHeight: "var(--lh-h1)", letterSpacing: "-0.02em" }],
        h2: ["var(--fz-h2)", { lineHeight: "var(--lh-h2)", letterSpacing: "-0.015em" }],
        h3: ["var(--fz-h3)", { lineHeight: "var(--lh-h3)", letterSpacing: "-0.01em" }],
        h4: ["var(--fz-h4)", { lineHeight: "var(--lh-h4)", letterSpacing: "-0.01em" }],
        lead: [
          "var(--fz-lead)",
          { lineHeight: "var(--lh-lead)", letterSpacing: "-0.005em" },
        ],
        body: ["clamp(15.75px, 0.55vw + 14px, 17px)", { lineHeight: "1.6" }],
        small: ["var(--fz-small)", { lineHeight: "1.4", letterSpacing: "0" }],
        micro: ["var(--fz-micro)", { lineHeight: "1.4", letterSpacing: "0.01em" }],
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
