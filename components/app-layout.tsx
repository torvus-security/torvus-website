"use client"

import type React from "react"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DemoBanner } from "@/components/demo-banner"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Dashboard", href: "/app", icon: "🏠", ariaLabel: "Dashboard home" },
  { name: "Vault", href: "/app/vault", icon: "🔒", ariaLabel: "Secure vault" },
  { name: "Check-ins", href: "/app/check-ins", icon: "⏰", ariaLabel: "Check-in schedule" },
  { name: "Recipients", href: "/app/recipients", icon: "👥", ariaLabel: "Recipient management" },
  { name: "Release Plans", href: "/app/release-plans", icon: "📄", ariaLabel: "Release plans" },
  { name: "Audit", href: "/app/audit", icon: "📊", ariaLabel: "Audit logs" },
]

interface AppLayoutProps {
  children: React.ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  const pathname = usePathname()
  const router = useRouter()

  const handleSignOut = () => {
    // Mock sign out
    localStorage.removeItem("torvus-auth")
    router.push("/auth/sign-in")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Demo Banner */}
      <div className="border-b border-border">
        <div className="container py-3">
          <DemoBanner />
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 border-r border-border bg-card">
          <div className="p-6">
            <div className="flex items-center space-x-2 mb-8">
              <span className="text-2xl" aria-label="Torvus Security shield logo" role="img">
                🛡️
              </span>
              <Link href="/" aria-label="Torvus Security — Home" className="brand">
                Torvus Security
              </Link>
            </div>

            <nav className="space-y-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent",
                    )}
                  >
                    <span className="text-lg" aria-label={item.ariaLabel} role="img">
                      {item.icon}
                    </span>
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </nav>

            <div className="mt-8 pt-8 border-t border-border">
              <Button variant="ghost" onClick={handleSignOut} className="w-full justify-start text-muted-foreground">
                <span className="text-lg mr-3" aria-label="Sign out door" role="img">
                  🚪
                </span>
                Sign out
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <main className="p-6">{children}</main>
        </div>
      </div>
    </div>
  )
}
