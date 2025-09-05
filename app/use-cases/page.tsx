"use client"

import { useState, useEffect } from "react"
import { AnimatedSection } from "@/components/animated-section"
import { DemoSkeleton } from "@/components/skeleton"
import { Shield, AlertTriangle, ArrowRight, Check } from "lucide-react"

export default function UseCasesPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <main className="container-page section">
        <div className="max-w-7xl">
          <DemoSkeleton />
        </div>
      </main>
    )
  }

  return (
    <main className="container-page section">
      {/* Hero Section */}
      <AnimatedSection>
        <section className="py-16 md:py-24">
          <div className="max-w-7xl">
            <div className="text-left space-y-3 mb-8">
              <h1 className="h1 ink2 ink2--lapis-lagoon ink-shadow">Real-World Use Cases</h1>
              <p className="body max-w-2xl">
                Discover how different users leverage Torvus Security for their unique digital guardianship needs, from
                personal legacy planning to high-security journalism.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Use Case Scenarios */}
      <AnimatedSection>
        <section className="py-16">
          <div className="max-w-7xl">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto tint-grid tint-grid--neutral">
              {/* Personal & Family Use Case */}
              <div className="bg-card border rounded-2xl p-8 card-hover elev-1 elev-transition transition-shadow tintable">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-8 h-8 text-rose-500" />
                  <h3 className="h4">Personal & Family</h3>
                </div>

                <p className="body mb-8">
                  Perfect for individuals and families managing digital legacy, important documents, and ensuring loved
                  ones have access when needed.
                </p>

                <div className="space-y-4 mb-8">
                  <h3 className="h3 text-rose-600">Key Features:</h3>
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
                  <div className="bg-rose-50 rounded-lg p-3">
                    <div className="h4 text-rose-600">3</div>
                    <div className="small text-muted-foreground">Release Plans</div>
                  </div>
                  <div className="bg-pink-50 rounded-lg p-3">
                    <div className="h4 text-pink-600">5</div>
                    <div className="small text-muted-foreground">Recipients</div>
                  </div>
                  <div className="bg-rose-100 rounded-lg p-3">
                    <div className="h4 text-rose-700">12</div>
                    <div className="small text-muted-foreground">Documents</div>
                  </div>
                </div>

                <a href="/demo/personal" className="btn btn-primary w-full flex items-center justify-center gap-2">
                  View Personal Demo
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Journalist Security Use Case */}
              <div className="bg-card border rounded-2xl p-8 card-hover elev-1 elev-transition transition-shadow tintable">
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                  <h3 className="h4">Journalist Security</h3>
                </div>

                <p className="body mb-8">
                  Specialized for investigative journalists working in dangerous environments, protecting sensitive
                  sources and classified information.
                </p>

                <div className="space-y-4 mb-8">
                  <h3 className="h3 text-red-600">Advanced Features:</h3>
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
                        <span className="small">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-8 text-center">
                  <div className="bg-red-50 rounded-lg p-3">
                    <div className="h4 text-red-700">7</div>
                    <div className="small text-muted-foreground">Active Sources</div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-3">
                    <div className="h4 text-orange-700">12</div>
                    <div className="small text-muted-foreground">Secure Links</div>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-3">
                    <div className="h4 text-yellow-700">4</div>
                    <div className="small text-muted-foreground">Investigations</div>
                  </div>
                </div>

                <a href="/demo/journalist" className="btn btn-danger w-full flex items-center justify-center gap-2">
                  View Journalist Demo
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Feature Comparison */}
      <AnimatedSection>
        <section className="py-16">
          <div className="container-narrow">
            <div className="max-w-3xl">
              <h2 className="h2 mb-8">Feature Comparison</h2>

              <div className="bg-card border rounded-2xl overflow-hidden elev-1 tintable">
                <div className="overflow-x-auto">
                  <table className="table table--compact text-sm">
                    <thead>
                      <tr>
                        <th className="font-semibold">Feature</th>
                        <th className="font-semibold text-rose-600">Personal</th>
                        <th className="font-semibold text-red-600">Journalist</th>
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
                        <tr key={index} className="hover:bg-rose-50/30">
                          <td className="p-6 body">{row.feature}</td>
                          <td className="p-6 text-center">
                            {row.personal ? (
                              <Check className="w-5 h-5 text-rose-600 mx-auto" />
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
        <section className="py-16">
          <div className="max-w-7xl">
            <div className="space-y-8 max-w-3xl mx-auto">
              <h2 className="h2">Ready to secure your digital assets?</h2>
              <p className="body">
                Choose the protection level that matches your security needs and join our early access program.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/demo/personal" className="btn btn-primary text-lg px-8 py-4">
                  Try Personal Demo
                </a>
                <a href="/demo/journalist" className="btn btn-secondary text-lg px-8 py-4">
                  Try Journalist Demo
                </a>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </main>
  )
}
