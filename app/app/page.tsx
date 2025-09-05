"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedText } from "@/components/animated-text"
import { FloatingElements } from "@/components/floating-elements"
import { EnhancedButton } from "@/components/enhanced-button"

export default function AppDashboard() {
  const [nextSweep, setNextSweep] = useState<string>("")
  const [isProcessing, setIsProcessing] = useState(false)

  useEffect(() => {
    const now = new Date()
    const next = new Date(now.getTime() + 5 * 60 * 1000)
    setNextSweep(next.toLocaleTimeString())
  }, [])

  const triggerSweep = async () => {
    setIsProcessing(true)
    try {
      console.log("[v0] Starting sweep request...")
      const response = await fetch("/api/cron/sweep", { method: "POST" })
      console.log("[v0] Response status:", response.status)
      console.log("[v0] Response headers:", Object.fromEntries(response.headers.entries()))

      if (response.ok) {
        const responseText = await response.text()
        console.log("[v0] Response text:", responseText)

        try {
          const result = JSON.parse(responseText)
          console.log("[v0] Sweep completed:", result)
          const now = new Date()
          const next = new Date(now.getTime() + 5 * 60 * 1000)
          setNextSweep(next.toLocaleTimeString())
        } catch (parseError) {
          console.error("[v0] JSON parse error:", parseError)
          console.error("[v0] Response was:", responseText)
        }
      } else {
        const errorText = await response.text()
        console.error("[v0] API error response:", errorText)
      }
    } catch (error) {
      console.error("[v0] Sweep failed:", error)
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <>
      <Header />
      <main className="container-page min-h-screen">
        <AnimatedSection className="py-20 sm:py-24 md:py-32 bg-mist relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-lapis/5 via-transparent to-cranberry/5 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-tl from-lagoon/3 via-transparent to-lapis/3 pointer-events-none" />
          <FloatingElements />

          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 max-w-7xl relative">
            <div className="space-y-12">
              <AnimatedText delay={0.2}>
                <div className="text-center">
                  <h1 className="h1 font-display bg-gradient-to-r from-lapis to-cranberry bg-clip-text text-transparent mb-6">
                    Dashboard Demo
                  </h1>
                  <p className="body font-sans text-thunder max-w-3xl mx-auto leading-relaxed">
                    Experience cryptographic provenance and automated release execution
                  </p>
                </div>
              </AnimatedText>

              <AnimatedText delay={0.4} variant="fadeUp">
                <div className="bg-gradient-to-br from-rose-50/80 to-pink-50/60 backdrop-blur-sm border border-rose-200/50 elev-2 elev-transition rounded-2xl overflow-hidden">
                  <div className="p-8">
                    <h2 className="h2 text-rose-600 flex items-center gap-3 mb-6">
                      <span className="text-rose-500 text-3xl">◆</span>
                      Cryptographic Provenance System
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="h3 mb-4 text-foreground">Signed Release Packages</h4>
                        <p className="body mb-6 leading-relaxed">
                          All release previews are cryptographically signed with Ed25519 for tamper-proof verification.
                        </p>
                        <EnhancedButton
                          variant="outline"
                          className="border-rose-200 text-rose-600 hover:bg-rose-50 hover:text-rose-700 hover:border-rose-300"
                          onClick={() => (window.location.href = "/recipient-portal")}
                        >
                          View Recipient Portal
                        </EnhancedButton>
                      </div>
                      <div>
                        <h4 className="h3 mb-4 text-foreground">Verification Status</h4>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm"></div>
                            <span className="text-foreground">Signatures verified ✓</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-blue-500 rounded-full shadow-sm"></div>
                            <span className="text-foreground">Provenance chain intact</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-purple-500 rounded-full shadow-sm"></div>
                            <span className="text-foreground">Ed25519 cryptography active</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedText>

              <AnimatedText delay={0.6} variant="fadeUp">
                <div className="bg-gradient-to-br from-pink-50/80 to-rose-50/60 backdrop-blur-sm border border-pink-200/50 elev-2 elev-transition rounded-2xl overflow-hidden">
                  <div className="p-8">
                    <h2 className="h2 text-pink-600 flex items-center gap-3 mb-6">
                      <span className="text-pink-500 text-3xl">◐</span>
                      Automated Release Executor
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4 text-lg text-foreground">Cron Sweep Status</h4>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          Next automated sweep:{" "}
                          <span className="font-mono text-pink-600 font-bold bg-pink-50 px-2 py-1 rounded">
                            {nextSweep}
                          </span>
                        </p>
                        <div className="flex gap-3">
                          <EnhancedButton
                            onClick={triggerSweep}
                            disabled={isProcessing}
                            className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white disabled:opacity-50"
                          >
                            {isProcessing ? "Processing..." : "Trigger Manual Sweep"}
                          </EnhancedButton>
                          <EnhancedButton
                            variant="outline"
                            className="border-pink-200 text-pink-600 hover:bg-pink-50 hover:text-pink-700 hover:border-pink-300"
                            onClick={() => (window.location.href = "/security")}
                          >
                            Security
                          </EnhancedButton>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4 text-lg text-foreground">Release Queue</h4>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-muted-foreground rounded-full shadow-sm"></div>
                            <span className="text-foreground">0 releases queued</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm"></div>
                            <span className="text-foreground">All check-ins current</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-blue-500 rounded-full shadow-sm"></div>
                            <span className="text-foreground">Scheduler active</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedText>
            </div>
          </div>
        </AnimatedSection>

        <div className="bg-gradient-to-b from-card/30 to-background py-20">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 max-w-7xl">
            <AnimatedText delay={0.8} variant="fadeUp">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-card/50 backdrop-blur-sm border border-border elev-1 elev-transition card-hover rounded-2xl p-8 group">
                  <h3 className="h4 flex items-center gap-3 mb-4 text-foreground group-hover:text-rose-600 transition-colors">
                    <span className="text-rose-500 text-2xl">▲</span>
                    Release Plans
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Set up conditional document release with cryptographic verification.
                  </p>
                  <div className="h4 text-rose-600 mb-2">3</div>
                  <p className="text-sm text-muted-foreground">Active plans</p>
                </div>

                <div className="bg-card/50 backdrop-blur-sm border border-border elev-1 elev-transition card-hover rounded-2xl p-8 group">
                  <h3 className="h4 flex items-center gap-3 mb-4 text-foreground group-hover:text-pink-600 transition-colors">
                    <span className="text-pink-500 text-2xl">◉</span>
                    Recipients
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Manage trusted contacts for secure document releases.
                  </p>
                  <div className="h4 text-pink-600 mb-2">7</div>
                  <p className="text-sm text-muted-foreground">Verified recipients</p>
                </div>

                <div className="bg-card/50 backdrop-blur-sm border border-border elev-1 elev-transition card-hover rounded-2xl p-8 group">
                  <h3 className="h4 flex items-center gap-3 mb-4 text-foreground group-hover:text-amber-600 transition-colors">
                    <span className="text-amber-500 text-2xl">■</span>
                    Secure Vault
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Encrypted storage for important documents and data.
                  </p>
                  <div className="h4 text-amber-600 mb-2">12</div>
                  <p className="text-sm text-muted-foreground">Documents stored</p>
                </div>
              </div>
            </AnimatedText>
          </div>
        </div>

        <div className="bg-gradient-to-b from-background to-secondary/20 py-20">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 max-w-7xl">
            <AnimatedText delay={1.0} variant="fadeUp">
              <div className="bg-card/80 backdrop-blur-sm border border-border elev-2 elev-transition rounded-2xl p-8">
                <h2 className="h2 mb-8 text-foreground">Recent Activity</h2>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-rose-50/50 border border-rose-100">
                    <div className="w-3 h-3 bg-rose-500 rounded-full shadow-sm"></div>
                    <span className="text-muted-foreground font-medium">2 hours ago</span>
                    <span className="text-foreground">Dashboard demo accessed directly</span>
                  </div>
                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-pink-50/50 border border-pink-100">
                    <div className="w-3 h-3 bg-pink-500 rounded-full shadow-sm"></div>
                    <span className="text-muted-foreground font-medium">1 day ago</span>
                    <span className="text-foreground">Cryptographic signatures verified</span>
                  </div>
                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-green-50/50 border border-green-100">
                    <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm"></div>
                    <span className="text-muted-foreground font-medium">2 days ago</span>
                    <span className="text-foreground">Release executor cron job completed</span>
                  </div>
                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-blue-50/50 border border-blue-100">
                    <div className="w-3 h-3 bg-blue-500 rounded-full shadow-sm"></div>
                    <span className="text-muted-foreground font-medium">3 days ago</span>
                    <span className="text-foreground">Provenance system initialized</span>
                  </div>
                </div>
              </div>
            </AnimatedText>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
