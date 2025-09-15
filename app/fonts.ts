// app/fonts.ts
import localFont from "next/font/local";

export const satoshi = localFont({
  src: [
    { path: "../public/webfonts/Satoshi-Variable.woff2", style: "normal" },
    { path: "../public/webfonts/Satoshi-VariableItalic.woff2", style: "italic" },
  ],
  variable: "--font-satoshi",
  display: "swap",
  preload: true,
});

export const erode = localFont({
  src: [
    { path: "../public/webfonts/Erode-Variable.woff2", style: "normal" },
    { path: "../public/webfonts/Erode-VariableItalic.woff2", style: "italic" },
  ],
  variable: "--font-erode",
  display: "swap",
  preload: true,
});
