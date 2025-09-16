// app/fonts.ts
import localFont from "next/font/local";

/**
 * IMPORTANT
 * ----------
 * This file assumes your font files are in:
 *   /public/webfonts/Satoshi-Variable.woff2
 *   /public/webfonts/Satoshi-VariableItalic.woff2
 *   /public/webfonts/Erode-Variable.woff2
 *   /public/webfonts/Erode-VariableItalic.woff2
 *
 * If they aren't there yet, please create that folder and move the files.
 * (Next will then serve them at https://your-site/webfonts/... automatically.)
 */

export const satoshi = localFont({
  src: [
    { path: "../public/webfonts/Satoshi-Variable.woff2", style: "normal", weight: "100 900" },
    { path: "../public/webfonts/Satoshi-VariableItalic.woff2", style: "italic", weight: "100 900" },
  ],
  variable: "--font-satoshi",
  display: "swap",
  preload: true,
});

export const erode = localFont({
  src: [
    { path: "../public/webfonts/Erode-Variable.woff2", style: "normal", weight: "100 900" },
    { path: "../public/webfonts/Erode-VariableItalic.woff2", style: "italic", weight: "100 900" },
  ],
  variable: "--font-erode",
  display: "swap",
  preload: true,
});