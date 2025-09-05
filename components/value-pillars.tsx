import { Card, CardContent } from "@/components/ui/card"
import { AnimatedCard, AnimatedSection } from "./animated-section"

const pillars = [
  {
    icon: "◆",
    ariaLabel: "Conditional release system",
    title: "Conditional release by design",
    description: "Configurable triggers and recipients with verifiable delivery.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: "●",
    ariaLabel: "Zero-knowledge encryption",
    title: "Zero-knowledge posture",
    description: "Client-side encryption roadmap; per-user keys; HSM-backed KMS.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: "■",
    ariaLabel: "Chain of custody tracking",
    title: "Chain-of-custody",
    description: "Immutable audit logs and identity-verified recipients.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: "▲",
    ariaLabel: "Hybrid custody solution",
    title: "Hybrid custody",
    description: "Digital vault plus optional physical document storage & prepaid delivery.",
    color: "from-orange-500 to-orange-600",
  },
]

export function ValuePillars() {
  return (
    <AnimatedSection>
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-background via-muted/10 to-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 max-w-7xl relative">
          <AnimatedSection className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16 lg:mb-20" delay={0.1}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ink2 ink2--cranberry-lagoon ink-shadow font-satoshi">
              Built for Security
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-erode">
              Enterprise-grade protection with user-friendly design that scales with your needs
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {pillars.map((pillar, index) => (
              <AnimatedCard key={index} delay={0.2 + index * 0.1}>
                <Card className="surface card-hover elev-1 elev-transition group h-full">
                  <CardContent className="p-6 sm:p-8 text-center space-y-4 sm:space-y-6 h-full flex flex-col">
                    <div className="mx-auto">
                      <div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${pillar.color} shadow-sm group-hover:shadow-md transition-all duration-300 flex items-center justify-center text-2xl text-white font-bold`}
                        aria-label={pillar.ariaLabel}
                        role="img"
                      >
                        {pillar.icon}
                      </div>
                    </div>

                    <div className="flex-1 space-y-3 sm:space-y-4">
                      <h3 className="font-bold text-lg sm:text-xl group-hover:text-rose-500 transition-colors duration-300 leading-tight font-satoshi">
                        {pillar.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm sm:text-base font-erode">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                      <div className="h-full ink2 ink2--cranberry-lagoon transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                    </div>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}
