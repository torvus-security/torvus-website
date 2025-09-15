/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./styles/**/*.css",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Satoshi as default text font; Erode as display font for big headings
        sans: ["var(--font-satoshi)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-erode)", "var(--font-satoshi)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      // brandy v0-ish gradient tokens (purple ➜ fuchsia ➜ rose)
      colors: {
        brand: {
          from: "#6B4DFF",
          via: "#B5179E",
          to: "#FF4D6D",
        },
      },
      backgroundImage: {
        "v0-text": "linear-gradient(90deg, var(--v0-grad-from), var(--v0-grad-via), var(--v0-grad-to))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
