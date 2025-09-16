// app/fonts.ts
import localFont from "next/font/local";

// NOTE: These paths assume your font files live in /webfonts at repo root.
// If you keep them in /public/webfonts instead, change '../webfonts' to '../public/webfonts'.

export const satoshi = localFont({
  src: [
    { path: "../webfonts/Satoshi-Variable.woff2", style: "normal", weight: "100 900" },
    { path: "../webfonts/Satoshi-VariableItalic.woff2", style: "italic", weight: "100 900" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const erode = localFont({
  src: [
    { path: "../webfonts/Erode-Variable.woff2", style: "normal", weight: "100 900" },
    { path: "../webfonts/Erode-VariableItalic.woff2", style: "italic", weight: "100 900" },
  ],
  variable: "--font-erode",
  display: "swap",
});