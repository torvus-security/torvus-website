import { Badge } from "@/components/ui/badge"
import { AnimatedSection, AnimatedCard } from "./animated-section"

const badges = [
  { label: "GDPR-aligned", status: "active", icon: "✓", ariaLabel: "GDPR compliance verified" },
  { label: "APPs", status: "active", icon: "◆", ariaLabel: "Australian Privacy Principles compliant" },
  { label: "ISO27001", status: "progress", icon: "◉", ariaLabel: "ISO 27001 certification in progress" },
  { label: "SOC2", status: "progress", icon: "◐", ariaLabel: "SOC 2 compliance in progress" },
]

const securityFeatures = [
  {
    icon: "◈",
    ariaLabel: "Zero-knowledge security architecture",
    title: "Zero-Knowledge Architecture",
    description: "Your data is encrypted before it leaves your device. We can't access it, even if we wanted to.",
  },
  {
    icon: "◎",
    ariaLabel: "Global infrastructure network",
    title: "Global Infrastructure",
    description: "Distributed across multiple regions with 99.9% uptime SLA and automatic failover.",
  },
  {
    icon: "●",
    ariaLabel: "Identity verification system",
    title: "Identity Verification",
    description: "Multi-factor authentication and biometric verification for all recipients.",
  },
  {
    icon: "■",
    ariaLabel: "Immutable audit trail",
    title: "Immutable Audit Trail",
    description: "Blockchain-based logging ensures complete transparency and tamper-proof records.",
  },
]

export function TrustSecurity() {
  return (
    <AnimatedSection>
      <section className="py-24 bg-gradient-to-b from-background via-muted/20 to-muted/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

        <div className="container relative">
          <div className="text-center space-y-16">
            <AnimatedSection delay={0.1}>
              <h2 className="h2 font-display ink2 ink2--lapis-lagoon ink-shadow">Trust & Security</h2>
              <p className="body mx-auto mt-6 text-thunder">
                Built with enterprise-grade security and compliance standards that exceed industry requirements
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {badges.map((badge, index) => (
                <AnimatedCard key={index} delay={0.2 + index * 0.1}>
                  <div className="surface--light flex flex-col items-center space-y-4 p-6 hover:shadow-md hover:shadow-primary/5 transition-all duration-500 group">
                    <div
                      className="text-3xl p-4 rounded-2xl bg-gradient-to-br from-primary to-primary/80 shadow-sm group-hover:shadow-md transition-all duration-300 text-white"
                      aria-label={badge.ariaLabel}
                      role="img"
                    >
                      {badge.icon}
                    </div>
                    <div className="text-center space-y-2">
                      <Badge className={`badge ${badge.status === "active" ? "success" : "info"}`}>
                        {badge.label}
                        {badge.status === "progress" && " (In Progress)"}
                      </Badge>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>

            <AnimatedSection delay={0.6}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {securityFeatures.map((feature, index) => (
                  <AnimatedCard key={index} delay={0.7 + index * 0.1}>
                    <div className="surface--light flex items-start space-x-4 p-6 hover:shadow-sm transition-all duration-300 group">
                      <div
                        className="text-2xl p-3 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex-shrink-0 transition-all duration-300 text-white"
                        aria-label={feature.ariaLabel}
                        role="img"
                      >
                        {feature.icon}
                      </div>
                      <div className="space-y-2">
                        <h3 className="h3 text-thunder group-hover:text-[color:var(--ink-on-light)] transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="body text-thunder/80">{feature.description}</p>
                      </div>
                    </div>
                  </AnimatedCard>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={1.0}>
              <div className="surface--light backdrop-blur-sm rounded-3xl p-12 max-w-4xl mx-auto border border-border/50 shadow-lg">
                <blockquote className="text-xl md:text-2xl text-center font-medium text-foreground leading-relaxed">
                  "For journalists, lawyers, and families who need certainty in an uncertain world."
                </blockquote>
                <div className="flex justify-center mt-8">
                  <div className="flex space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-3 h-3 bg-gradient-to-r from-accent to-accent/80 rounded-full animate-pulse"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}
