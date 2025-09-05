"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { EnhancedButton } from "@/components/enhanced-button"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b transition-all duration-200",
          isScrolled
            ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-subtle border-border"
            : "bg-background border-border",
        )}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 flex h-16 items-center justify-between">
          <Link
            href="/"
            aria-label="Torvus Security — Home"
            className="brand flex items-center space-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md"
          >
            <span className="text-rose-500 font-bold text-xl">◆</span>
            <span>Torvus Security</span>
          </Link>

          <nav className="hidden">
            {/* keep links as-is for potential future use, but hidden for now */}
            <Link
              href="/"
              className="nav-link text-sm font-medium text-muted-foreground hover:text-rose-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-2 py-1"
            >
              Home
            </Link>
            <Link
              href="/how-it-works"
              className="nav-link text-sm font-medium text-muted-foreground hover:text-rose-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-2 py-1"
            >
              How it works
            </Link>
            <Link
              href="/use-cases"
              className="nav-link text-sm font-medium text-muted-foreground hover:text-rose-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-2 py-1"
            >
              Use Cases
            </Link>
            <Link
              href="/pricing"
              className="nav-link text-sm font-medium text-muted-foreground hover:text-rose-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-2 py-1"
            >
              Pricing
            </Link>
            <Link
              href="/security"
              className="nav-link text-sm font-medium text-muted-foreground hover:text-rose-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-2 py-1"
            >
              Security
            </Link>
            <Link
              href="/about"
              className="nav-link text-sm font-medium text-muted-foreground hover:text-rose-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-2 py-1"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="nav-link text-sm font-medium text-muted-foreground hover:text-rose-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-2 py-1"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/app">
              <EnhancedButton variant="secondary" size="sm" className="text-muted-foreground hover:text-rose-500">
                Dashboard Demo
              </EnhancedButton>
            </Link>
            <Link href="#early-access">
              <EnhancedButton variant="primary" size="sm">
                Get Early Access
              </EnhancedButton>
            </Link>
          </div>

          <EnhancedButton
            variant="secondary"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center space-x-2 text-muted-foreground hover:text-primary hover:bg-secondary"
            aria-label="Toggle menu"
          >
            <span className="text-lg">{isMenuOpen ? "×" : "≡"}</span>
            <span className="hidden sm:inline">Menu</span>
          </EnhancedButton>
        </div>
      </header>

      {isMenuOpen && (
        <>
          {/* backdrop to close when clicking outside */}
          <button
            aria-label="Close menu"
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px]"
          />
          {/* slide-out panel */}
          <div className="fixed top-16 right-0 z-50 w-80 max-w-[92vw] bg-[color:var(--color-white)]/92 border border-border rounded-bl-lg elev-3 elev-transition">
            <div className="p-4">
              <nav className="flex flex-col space-y-2">
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="nav-link text-base font-medium text-muted-foreground hover:text-rose-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-2 py-1"
                >
                  Home
                </Link>
                <Link
                  href="/how-it-works"
                  onClick={() => setIsMenuOpen(false)}
                  className="nav-link text-base font-medium text-muted-foreground hover:text-rose-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-2 py-1"
                >
                  How it works
                </Link>
                <Link
                  href="/use-cases"
                  onClick={() => setIsMenuOpen(false)}
                  className="nav-link text-base font-medium text-muted-foreground hover:text-rose-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-2 py-1"
                >
                  Use Cases
                </Link>
                <Link
                  href="/pricing"
                  onClick={() => setIsMenuOpen(false)}
                  className="nav-link text-base font-medium text-muted-foreground hover:text-rose-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-2 py-1"
                >
                  Pricing
                </Link>
                <Link
                  href="/security"
                  onClick={() => setIsMenuOpen(false)}
                  className="nav-link text-base font-medium text-muted-foreground hover:text-rose-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-2 py-1"
                >
                  Security
                </Link>
                <Link
                  href="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className="nav-link text-base font-medium text-muted-foreground hover:text-rose-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-2 py-1"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="nav-link text-base font-medium text-muted-foreground hover:text-rose-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-2 py-1"
                >
                  Contact
                </Link>

                {/* Action buttons */}
                <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                  <Link href="/app" onClick={() => setIsMenuOpen(false)}>
                    <EnhancedButton variant="secondary" size="sm" className="w-full justify-center">
                      Dashboard Demo
                    </EnhancedButton>
                  </Link>
                  <Link href="#early-access" onClick={() => setIsMenuOpen(false)}>
                    <EnhancedButton variant="primary" size="sm" className="w-full">
                      Get Early Access
                    </EnhancedButton>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  )
}
