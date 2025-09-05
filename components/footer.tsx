import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-rose-100 bg-gradient-to-br from-rose-50/30 to-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-rose-500 font-bold text-lg">◆</span>
              <Link href="/" aria-label="Torvus Security — Home" className="brand">
                Torvus Security
              </Link>
            </div>
            <p className="small text-muted-foreground">Your information, protected until it matters most.</p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-semibold text-[var(--ink-on-light)]">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/product"
                  className="small text-muted-foreground hover:text-[var(--primary-ink)] hover:underline transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="small text-muted-foreground hover:text-[var(--primary-ink)] hover:underline transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/security"
                  className="small text-muted-foreground hover:text-[var(--primary-ink)] hover:underline transition-colors"
                >
                  Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-[var(--ink-on-light)]">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="small text-muted-foreground hover:text-[var(--primary-ink)] hover:underline transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="small text-muted-foreground hover:text-[var(--primary-ink)] hover:underline transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-[var(--ink-on-light)]">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/legal/privacy"
                  className="small text-muted-foreground hover:text-[var(--primary-ink)] hover:underline transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/terms"
                  className="small text-muted-foreground hover:text-[var(--primary-ink)] hover:underline transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-rose-200 flex flex-col md:flex-row justify-between items-center">
          <p className="small text-muted-foreground">© 2025 Torvus Security. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="small text-muted-foreground">Region: Australia</span>
            <span className="small text-muted-foreground">Currency: AUD</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
