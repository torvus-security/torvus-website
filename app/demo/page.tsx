"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { EnhancedButton } from "@/components/enhanced-button"
import { DemoSkeleton } from "@/components/skeleton"
import { Shield, AlertTriangle, ArrowRight, Check } from "lucide-react"

export default function DemoPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <Header />
        <main className="py-16 px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="container mx-auto max-w-7xl">
            <DemoSkeleton />
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <>
      <Header />
      <main className="container-page min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Hero Section */}
        <AnimatedSection>
          <section className="py-16 md:py-24 px-6 sm:px-8 lg:px-12 xl:px-16">
            <div className="container mx-auto max-w-7xl">
              <div className="text-center space-y-8 max-w-4xl mx-auto prose stack-lg">
                <h1 className="h1">Choose Your Demo Experience</h1>
                <p className="body max-w-2xl">
                  Explore how different users leverage Torvus Security for their unique digital guardianship needs.
                </p>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Demo Options */}
        <AnimatedSection>
          <section className="py-16 px-6 sm:px-8 lg:px-12 xl:px-16">
            <div className="container mx-auto max-w-7xl">
              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* Personal Account Demo */}
                <div className="bg-card border rounded-2xl p-8 elev-1 elev-transition card-hover">
                  <div className="flex items-center gap-3 mb-6">
                    <Shield className="w-8 h-8 text-primary" />
                    <h2 className="h2">Personal Account</h2>
                  </div>

                  <p className="body mb-8">
                    Perfect for individuals and families managing digital legacy, important documents, and ensuring
                    loved ones have access when needed.
                  </p>

                  <div className="space-y-4 mb-8">
                    <h3 className="h3">Key Features:</h3>
                    <div className="space-y-3">
                      {[
                        "Family emergency planning",
                        "Document inheritance management",
                        "Simple check-in protocols",
                        "Trusted recipient verification",
                        "Personal file organization",
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <Check className="w-4 h-4 text-green-600" />
                          <span className="small">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-8 text-center">
                    <div className="bg-primary/5 rounded-lg p-3">
                      <div className="h4 text-primary">3</div>
                      <div className="text-xs text-muted-foreground">Release Plans</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3">
                      <div className="h4 text-blue-700">5</div>
                      <div className="text-xs text-muted-foreground">Recipients</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3">
                      <div className="h4 text-green-700">12</div>
                      <div className="text-xs text-muted-foreground">Documents</div>
                    </div>
                  </div>

                  <EnhancedButton className="btn btn-primary w-full flex items-center justify-center gap-2" asChild>
                    <a href="/demo/personal">
                      View Personal Demo
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </EnhancedButton>
                </div>

                {/* Journalist Demo */}
                <div className="bg-card border rounded-2xl p-8 elev-1 elev-transition card-hover">
                  <div className="flex items-center gap-3 mb-6">
                    <AlertTriangle className="w-8 h-8 text-red-600" />
                    <h2 className="h2">Journalist Security</h2>
                  </div>

                  <p className="text-muted-foreground mb-8">
                    Specialized for investigative journalists working in dangerous environments, protecting sensitive
                    sources and classified information.
                  </p>

                  <div className="space-y-4 mb-8">
                    <h3 className="font-semibold text-lg">Advanced Features:</h3>
                    <div className="space-y-3">
                      {[
                        "Anonymous source protection",
                        "Secure upload portals for sources",
                        "Emergency data destruction",
                        "Dead man's switch protocols",
                        "Advanced threat monitoring",
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <Check className="w-4 h-4 text-red-600" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-8 text-center">
                    <div className="bg-red-50 rounded-lg p-3">
                      <div className="h4 text-red-700">7</div>
                      <div className="text-xs text-muted-foreground">Active Sources</div>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-3">
                      <div className="h4 text-orange-700">12</div>
                      <div className="text-xs text-muted-foreground">Secure Links</div>
                    </div>
                    <div className="bg-yellow-50 rounded-lg p-3">
                      <div className="h4 text-yellow-700">4</div>
                      <div className="text-xs text-muted-foreground">Investigations</div>
                    </div>
                  </div>

                  <EnhancedButton className="btn btn-danger w-full flex items-center justify-center gap-2" asChild>
                    <a href="/demo/journalist">
                      View Journalist Demo
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </EnhancedButton>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Feature Comparison */}
        <AnimatedSection>
          <section className="py-16 px-6 sm:px-8 lg:px-12 xl:px-16">
            <div className="container mx-auto max-w-7xl">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Feature Comparison</h2>

                <div className="bg-card border rounded-2xl overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="small font-semibold">Feature</th>
                          <th className="small font-semibold">Personal</th>
                          <th className="small font-semibold">Journalist</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {[
                          { feature: "Document Storage", personal: true, journalist: true },
                          { feature: "Release Plans", personal: true, journalist: true },
                          { feature: "Check-in Protocols", personal: true, journalist: true },
                          { feature: "Recipient Management", personal: true, journalist: true },
                          { feature: "Anonymous Source Protection", personal: false, journalist: true },
                          { feature: "Secure Upload Portals", personal: false, journalist: true },
                          { feature: "Emergency Data Destruction", personal: false, journalist: true },
                          { feature: "Dead Man's Switch", personal: false, journalist: true },
                          { feature: "Threat Monitoring", personal: false, journalist: true },
                          { feature: "Advanced Encryption", personal: true, journalist: true },
                        ].map((row, index) => (
                          <tr key={index} className="hover:bg-muted/30">
                            <td className="p-6 font-medium">{row.feature}</td>
                            <td className="p-6 text-center">
                              {row.personal ? (
                                <Check className="w-5 h-5 text-green-600 mx-auto" />
                              ) : (
                                <span className="text-muted-foreground">—</span>
                              )}
                            </td>
                            <td className="p-6 text-center">
                              {row.journalist ? (
                                <Check className="w-5 h-5 text-red-600 mx-auto" />
                              ) : (
                                <span className="text-muted-foreground">—</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection>
          <section className="py-16 px-6 sm:px-8 lg:px-12 xl:px-16">
            <div className="container mx-auto max-w-7xl">
              <div className="text-center space-y-8 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold">Ready to secure your digital assets?</h2>
                <p className="text-xl text-muted-foreground">
                  Choose the protection level that matches your security needs and join our early access program.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <EnhancedButton size="lg" className="btn btn-primary text-lg px-8 py-4" asChild>
                    <a href="/demo/personal">Try Personal Demo</a>
                  </EnhancedButton>
                  <EnhancedButton size="lg" className="btn btn-secondary text-lg px-8 py-4" asChild>
                    <a href="/demo/journalist">Try Journalist Demo</a>
                  </EnhancedButton>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>
      <Footer />
    </>
  )
}
