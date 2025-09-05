import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import "../styles/tokens.css"
import { Header } from "../components/header"
import { Footer } from "../components/footer"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.torvussecurity.com"),
  title: { default: "Torvus Security", template: "%s · Torvus Security" },
  description: "Breach-resilient identity and trust infrastructure for modern SaaS.",
  openGraph: {
    title: "Torvus Security",
    description: "Breach-resilient identity and trust infrastructure for modern SaaS.",
    url: "https://www.torvussecurity.com",
    siteName: "Torvus Security",
    type: "website",
  },
  twitter: { card: "summary_large_image", site: "@torvus" },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="type-comfort">
      <head>
        <link rel="preload" href="/webfonts/Satoshi-700.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/webfonts/Erode-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className="antialiased font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
