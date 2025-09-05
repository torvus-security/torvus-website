"use client"

import { Button } from "@/components/ui/button"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"
import { AnimatedText } from "@/components/animated-text"
import { EnhancedCard } from "@/components/enhanced-card"

export default function ContactPageClient() {
  return (
    <main className="container-page section">
      <section className="py-24 bg-gradient-to-br from-rose-50/30 to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <AnimatedText>
              <h1 className="h1 ink2 ink2--lapis-lagoon ink-shadow">Secure Communication</h1>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <div className="prose stack-lg">
                <p className="body max-w-3xl mx-auto leading-relaxed text-xl text-muted-foreground">
                  Get in touch through our secure channels. All inquiries are handled with confidentiality and encrypted
                  where possible.
                </p>
              </div>
            </AnimatedText>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <section className="container-narrow section">
              <div className="surface--light border rounded-2xl p-6 sm:p-8 elev-1 elev-transition">
                <h1 className="h2 mb-2">Secure Inquiry</h1>
                <p className="small text-muted-foreground mb-4">
                  We'll respond with an encrypted channel where appropriate.
                </p>
                <ContactForm />
              </div>
            </section>

            {/* Contact Information */}
            <div className="space-y-6">
              <EnhancedCard delay={0.4} className="surface--light backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <span className="text-rose-500 text-xl">◉</span>
                    <span className="text-gray-900">Contact Details</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">General Inquiries</h4>
                    <p className="text-muted-foreground">hello@torvus.security</p>
                    <p className="text-xs text-muted-foreground">Response time: 24-48 hours</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Security Research</h4>
                    <p className="text-muted-foreground">security@torvus.security</p>
                    <p className="text-xs text-muted-foreground">Responsible disclosure program</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Legal & Compliance</h4>
                    <p className="text-muted-foreground">legal@torvus.security</p>
                    <p className="text-xs text-muted-foreground">Privacy, terms, and regulatory matters</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Media Relations</h4>
                    <p className="text-muted-foreground">media@torvus.security</p>
                    <p className="text-xs text-muted-foreground">Press inquiries and interviews</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Enterprise Sales</h4>
                    <p className="text-muted-foreground">sales@torvus.security</p>
                    <p className="text-xs text-muted-foreground">Custom solutions and partnerships</p>
                  </div>
                </CardContent>
              </EnhancedCard>

              <EnhancedCard delay={0.6} className="surface--light backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <span className="text-rose-500 text-xl">◈</span>
                    <span className="text-gray-900">Secure Communication</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-rose-50 border border-rose-200 rounded-lg p-4">
                    <h4 className="font-medium text-rose-800 mb-2">PGP Public Key</h4>
                    <div className="surface--light/80 p-3 rounded font-mono text-xs text-gray-700 space-y-1">
                      <p>Key ID: 0x7A8B9C2D3E4F5A6B</p>
                      <p>Fingerprint: 7A8B 9C2D 3E4F 5A6B 1C2D</p>
                      <p className="text-xs">3E4F 5A6B 7C8D 9E0F 1A2B</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-3 border-rose-200 text-rose-600 hover:bg-rose-50 bg-transparent"
                    >
                      Download PGP Key
                    </Button>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Signal</h4>
                    <p className="text-muted-foreground text-sm">Available for sensitive communications</p>
                    <p className="text-xs text-muted-foreground">Contact us for Signal number</p>
                  </div>
                </CardContent>
              </EnhancedCard>

              <EnhancedCard delay={0.8} className="surface--light backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <span className="text-rose-500 text-xl">◎</span>
                    <span className="text-gray-900">Company Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-900">Legal Entity</h4>
                    <p className="text-muted-foreground">TBD</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Headquarters</h4>
                    <p className="text-muted-foreground">TBD</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Phone</h4>
                    <p className="text-muted-foreground">TBD</p>
                  </div>
                </CardContent>
              </EnhancedCard>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
