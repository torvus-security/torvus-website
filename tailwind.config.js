/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.css",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Use Satoshi everywhere `font-sans` is used
        sans: ["var(--font-satoshi)", "ui-sans-serif", "system-ui", "sans-serif"],
        // Use Erode for display headings when we add `font-display`
        display: ["var(--font-erode)", "var(--font-satoshi)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
