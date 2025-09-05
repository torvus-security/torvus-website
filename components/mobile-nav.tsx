"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          aria-label="Open navigation menu"
        >
          <span className="text-lg">☰</span>
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80 surface--light" aria-describedby="mobile-nav-description">
        <SheetHeader className="sr-only">
          <SheetTitle>Navigation Menu</SheetTitle>
        </SheetHeader>
        <div id="mobile-nav-description" className="sr-only">
          Main navigation menu with links to all pages and account actions
        </div>

        <div className="flex items-center space-x-2 mb-8 p-2 -m-2">
          <span className="text-2xl">🛡️</span>
          <Link href="/" aria-label="Torvus Security — Home" className="brand">
            Torvus Security
          </Link>
        </div>

        <nav className="flex flex-col space-y-2" role="navigation" aria-label="Main navigation">
          <Link
            href="/"
            className="text-base font-medium text-thunder hover:text-lapis focus-visible:text-lapis transition-colors py-3 px-2 -mx-2 rounded-md hover:surface--mist focus-visible:surface--mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lapis"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/product"
            className="text-base font-medium text-thunder hover:text-lapis focus-visible:text-lapis transition-colors py-3 px-2 -mx-2 rounded-md hover:surface--mist focus-visible:surface--mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lapis"
            onClick={() => setOpen(false)}
          >
            Product
          </Link>
          <Link
            href="/pricing"
            className="text-base font-medium text-thunder hover:text-lapis focus-visible:text-lapis transition-colors py-3 px-2 -mx-2 rounded-md hover:surface--mist focus-visible:surface--mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lapis"
            onClick={() => setOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href="/blog"
            className="text-base font-medium text-thunder hover:text-lapis focus-visible:text-lapis transition-colors py-3 px-2 -mx-2 rounded-md hover:surface--mist focus-visible:surface--mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lapis"
            onClick={() => setOpen(false)}
          >
            Blog
          </Link>

          <div className="border-t border-border pt-6 mt-4">
            <h3 className="text-sm font-semibold text-gray-900 mb-4 px-2">Company</h3>
            <div className="space-y-2">
              <Link
                href="/about"
                className="block text-base font-medium text-thunder hover:text-lapis focus-visible:text-lapis transition-colors py-3 px-2 -mx-2 rounded-md hover:surface--mist focus-visible:surface--mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lapis"
                onClick={() => setOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/security"
                className="block text-base font-medium text-thunder hover:text-lapis focus-visible:text-lapis transition-colors py-3 px-2 -mx-2 rounded-md hover:surface--mist focus-visible:surface--mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lapis"
                onClick={() => setOpen(false)}
              >
                Security
              </Link>
              <Link
                href="/transparency"
                className="block text-base font-medium text-thunder hover:text-lapis focus-visible:text-lapis transition-colors py-3 px-2 -mx-2 rounded-md hover:surface--mist focus-visible:surface--mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lapis"
                onClick={() => setOpen(false)}
              >
                Transparency
              </Link>
              <Link
                href="/contact"
                className="block text-base font-medium text-thunder hover:text-lapis focus-visible:text-lapis transition-colors py-3 px-2 -mx-2 rounded-md hover:surface--mist focus-visible:surface--mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lapis"
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="pt-6 border-t border-border space-y-3 mt-6">
            <Link href="/auth/sign-in" onClick={() => setOpen(false)}>
              <Button className="btn btn-secondary w-full justify-start h-12">Sign in</Button>
            </Link>
            <Link href="/#early-access" onClick={() => setOpen(false)}>
              <Button className="btn btn-primary w-full h-12">Get early access</Button>
            </Link>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
