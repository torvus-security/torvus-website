// app/fonts.ts
import localFont from "next/font/local";

/**
 * Adjust the filenames below if your /public/webfonts file names differ.
 * Keep the folder as /public/webfonts so the URLs are served statically.
 */
export const satoshi = localFont({
  src: [
    { path: "/webfonts/Satoshi-Variable.woff2", style: "normal", weight: "100 900" },
    { path: "/webfonts/Satoshi-VariableItalic.woff2", style: "italic", weight: "100 900" },
  ],
  variable: "--font-satoshi",
  display: "swap",
  preload: true,
});

export const erode = localFont({
  src: [
    { path: "/webfonts/Erode-Variable.woff2", style: "normal", weight: "100 900" },
    { path: "/webfonts/Erode-VariableItalic.woff2", style: "italic", weight: "100 900" },
  ],
  variable: "--font-erode",
  display: "swap",
  preload: true,
});
