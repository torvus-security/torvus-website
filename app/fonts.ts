// app/fonts.ts
import localFont from "next/font/local";

/**
 * Paths here are relative to THIS file (`app/fonts.ts`).
 * If your fonts are in /public/webfonts, use ../public/webfonts/...
 * (Next copies anything in /public as-is; next/font/local still wants a local file path.)
 */

export const satoshi = localFont({
  src: [
    {
      path: "../public/webfonts/Satoshi-Variable.woff2",
      style: "normal",
      weight: "100 900",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
  preload: true,
});

export const erode = localFont({
  src: [
    {
      path: "../public/webfonts/Erode-Variable.woff2",
      style: "normal",
      weight: "100 900",
    },
  ],
  variable: "--font-erode",
  display: "swap",
  preload: true,
});
