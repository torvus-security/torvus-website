"use client"
import { FAQ } from "@/components/faq"
import { FinalCTA } from "@/components/final-cta"
import { AnimatedSection } from "@/components/animated-section"
import { MobileAppMockup } from "@/components/mobile-app-mockup"
import { SmoothScroll } from "@/components/smooth-scroll"
import { TourTrigger } from "@/components/product-tour"
// import HomeAppendix from "@/components/home/HomeAppendix" // Removed as it contains duplicated content
import Link from "next/link"

export default function HomePage() {
  return (
    <>
      <SmoothScroll />
      <main id="main-content" className="min-h-screen container-page">
        <div className="hero hero--cranberry elev-2 elev-transition">
          <div className="hero__inner">
            {/* Left column - Text content */}
            <div className="hero-content">
              <div className="hero-eyebrow">
                <span className="hero-eyebrow__badge">
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: 9999,
                      display: "inline-block",
                      background: "color-mix(in oklab, var(--color-cranberry) 65%, white)",
                      marginRight: "0.5rem",
                    }}
                    aria-hidden
                  />
                  Built for security
                </span>
              </div>

              <h1 className="h1 ink2 ink2--lapis-lagoon ink-shadow">Guard your most important information.</h1>

              <p className="body">
                Torvus Security helps you safeguard private materials, set release rules, and prove what happened — from
                inheritance to journalism to personal contingencies.
              </p>

              <div className="hero-cta">
                <Link href="#early-access" className="btn btn-primary">
                  Get Early Access
                </Link>
                <Link href="/app" className="btn btn-secondary">
                  Dashboard Demo
                </Link>
              </div>
            </div>

            {/* Right column - Mobile mockup */}
            <aside className="hero-mockup order-last lg:order-none">
              <div className="hero-mockup__frame">
                <MobileAppMockup />
              </div>
            </aside>
          </div>
        </div>

        <section aria-labelledby="built-for-security" className="section mt-8 lg:mt-12">
          <div className="container-page stack-lg">
            <h2 id="built-for-security" className="h2">
              Built for security
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* 1. Identity */}
              <article className="feature-sm elev-1 elev-transition tintable">
                <div className="flex items-center gap-3">
                  <span className="icon-chip icon-chip--blue" aria-hidden="true">
                    {/* example icon (lucide or your set) */}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Z" />
                      <path d="M2 22a10 10 0 0 1 20 0" />
                    </svg>
                  </span>
                  <h3 className="h4">Passkeys & SSO</h3>
                </div>
                <p className="small">Passwordless sign-in with WebAuthn; SSO for teams; short-lived sessions.</p>
              </article>

              {/* 2. Encryption */}
              <article className="feature-sm elev-1 elev-transition tintable">
                <div className="flex items-center gap-3">
                  <span className="icon-chip icon-chip--green" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22C7 20 4 17 4 12V7l8-5 8 5v5c0 5-3 8-8 10Z" />
                    </svg>
                  </span>
                  <h3 className="h4">Encryption by default</h3>
                </div>
                <p className="small">TLS 1.3 in transit; AES-256-GCM at rest; keys in KMS with rotation.</p>
              </article>

              {/* 3. Monitoring */}
              <article className="feature-sm elev-1 elev-transition tintable">
                <div className="flex items-center gap-3">
                  <span className="icon-chip icon-chip--purple" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 3v7h7" />
                      <path d="M21 21v-7h-7" />
                      <path d="M21 3l-7 7" />
                      <path d="M3 21l7-7" />
                    </svg>
                  </span>
                  <h3 className="h4">Monitoring & alerts</h3>
                </div>
                <p className="small">Immutable audit logs, anomaly signals, on-call rotation with runbooks.</p>
              </article>

              {/* 4. Backups */}
              <article className="feature-sm elev-1 elev-transition tintable">
                <div className="flex items-center gap-3">
                  <span className="icon-chip icon-chip--orange" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16v6H4z" />
                      <path d="M4 14h16v6H4z" />
                      <path d="M8 8h8M8 18h8" />
                    </svg>
                  </span>
                  <h3 className="h4">Backups & recovery</h3>
                </div>
                <p className="small">Daily encrypted backups, point-in-time restore, defined RPO/RTO.</p>
              </article>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-b from-accent/5 to-muted/10">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 max-w-7xl">
            <AnimatedSection className="py-20 sm:py-24">
              {/* Removed text-center wrapper around h2 */}
              <div className="max-w-4xl mx-auto">
                <h2 className="h2 mb-8">If you go silent, your plan goes into action</h2>
                <div className="prose stack-lg mx-auto">
                  <p className="body text-lg mb-8">
                    When you miss your scheduled check-ins, Torvus automatically executes your predefined release plan.
                    No manual intervention required—your information reaches the right people at the right time.
                  </p>
                  <div className="grid md:grid-cols-3 gap-8 mt-12">
                    <div className="surface--light p-8 text-center tintable">
                      <div className="w-16 h-16 bg-lapis/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-lapis" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="h3 mb-3">Missed Check-in</h3>
                      <p className="body small">
                        System detects you haven't checked in within your specified timeframe
                      </p>
                    </div>
                    <div className="surface--light p-8 text-center tintable">
                      <div className="w-16 h-16 bg-lagoon/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-lagoon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="h3 mb-3">Plan Activated</h3>
                      <p className="body small">Your predefined release plan automatically triggers without delay</p>
                    </div>
                    <div className="surface--light p-8 text-center tintable">
                      <div className="w-16 h-16 bg-cranberry/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-cranberry" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                        </svg>
                      </div>
                      <h3 className="h3 mb-3">Information Released</h3>
                      <p className="body small">Your documents reach designated recipients exactly as you specified</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* When it matters */}
        <section id="when-it-matters" className="surface--mist p-6 sm:p-8 rounded-2xl section-accent stack-lg">
          <div className="stack-sm">
            <h2 className="h2">When it matters</h2>
            <p className="body">
              Life is unpredictable. Torvus ensures critical information reaches the right people only when the rules
              you set are met.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 tint-grid tint-grid--neutral">
            <article className="feature-sm elev-1 elev-transition tintable">
              <div className="flex items-center gap-3">
                <span className="icon-chip icon-chip--blue icon-chip--sm" aria-hidden>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22C7 20 4 17 4 12V7l8-5 8 5v5c0 5-3 8-8 10Z" />
                  </svg>
                </span>
                <h3 className="h4">Loss or incapacity</h3>
              </div>
              <p className="small">Nominate recipients and triggers so access unlocks only when it should.</p>
            </article>

            <article className="feature-sm elev-1 elev-transition tintable">
              <div className="flex items-center gap-3">
                <span className="icon-chip icon-chip--green icon-chip--sm" aria-hidden>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 8v4l2 2" />
                    <circle cx="12" cy="12" r="8" />
                  </svg>
                </span>
                <h3 className="h4">Travel or detention</h3>
              </div>
              <p className="small">Time-locked access, multi-approver release, and emergency contacts.</p>
            </article>

            <article className="feature-sm elev-1 elev-transition tintable">
              <div className="flex items-center gap-3">
                <span className="icon-chip icon-chip--purple icon-chip--sm" aria-hidden>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 3v7h7M21 21v-7h-7M21 3l-7 7M3 21l7-7" />
                  </svg>
                </span>
                <h3 className="h4">Source protection</h3>
              </div>
              <p className="small">Isolated drops, redaction workflows, and controlled release.</p>
            </article>

            <article className="feature-sm elev-1 elev-transition tintable">
              <div className="flex items-center gap-3">
                <span className="icon-chip icon-chip--orange icon-chip--sm" aria-hidden>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16v6H4zM4 14h16v6H4zM8 8h8M8 18h8" />
                  </svg>
                </span>
                <h3 className="h4">Estate transition</h3>
              </div>
              <p className="small">Deliver documents and keys with a full audit trail for proof.</p>
            </article>
          </div>
        </section>

        <div className="bg-gradient-to-b from-accent/5 to-background">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 max-w-7xl">
            <FAQ />
          </div>
        </div>

        <FinalCTA />
      </main>
      <TourTrigger />
    </>
  )
}
