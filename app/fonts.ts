import localFont from "next/font/local";

export const satoshi = localFont({
  variable: "--font-satoshi",
  display: "swap",
  src: [
    {
      path: "../public/webfonts/Satoshi-Variable.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../public/webfonts/Satoshi-VariableItalic.woff2",
      weight: "100 900",
      style: "italic",
    },
  ],
});

export const erode = localFont({
  variable: "--font-erode",
  display: "swap",
  src: [
    {
      path: "../public/webfonts/Erode-Variable.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../public/webfonts/Erode-VariableItalic.woff2",
      weight: "100 900",
      style: "italic",
    },
  ],
});
