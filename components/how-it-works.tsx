import { AnimatedSection, AnimatedCard } from "./animated-section"
import { EnhancedButton } from "./enhanced-button"

const steps = [
  {
    number: "01",
    title: "Upload & classify files",
    description: "Securely upload documents to your encrypted vault with classification labels and metadata.",
    details: ["Drag & drop interface", "Automatic file classification", "End-to-end encryption"],
  },
  {
    number: "02",
    title: "Schedule check-ins",
    description: "Set up regular check-ins via email, SMS, or authenticator to prove you're active.",
    details: ["Flexible scheduling", "Multiple verification methods", "Grace period settings"],
  },
  {
    number: "03",
    title: "Define recipients & release rules",
    description: "Configure who receives what information and under which conditions.",
    details: ["Identity verification", "Conditional triggers", "Customizable delivery"],
  },
]

export function HowItWorks() {
  return (
    <AnimatedSection>
      <section id="how-it-works" className="py-16 sm:py-20 md:py-24 bg-mist relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-lapis/5 via-transparent to-cranberry/5" />

        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 max-w-7xl relative">
          <AnimatedSection className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16 lg:mb-20" delay={0.1}>
            <h2 className="h2 px-4 ink2 ink2--lapis-lagoon ink-shadow">How it works</h2>
            <p className="body text-center px-4">
              Three simple steps to protect your most important information with enterprise-grade security
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative">
            <div className="hidden lg:block absolute top-24 left-1/3 right-1/3 h-px ink2 ink2--lapis-lagoon" />

            {steps.map((step, index) => (
              <AnimatedCard key={index} delay={0.2 + index * 0.15}>
                <div className="surface--light relative p-8 text-center space-y-6 group elev-1 elev-transition card-hover transition-all duration-500 h-full">
                  <div className="relative">
                    <div className="w-16 h-16 bg-lapis rounded-xl flex items-center justify-center mx-auto shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
                      <span className="text-[var(--ink-on-dark)] font-bold text-lg">{step.number}</span>
                    </div>
                    <div className="absolute -left-8 top-0 bottom-0 w-1 bg-lapis rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                  </div>

                  <div className="space-y-4">
                    <h3 className="h3 group-hover:text-[color:var(--ink-on-light)] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="body text-center">{step.description}</p>

                    <div className="space-y-3 pt-2">
                      {step.details.map((detail, detailIndex) => (
                        <div
                          key={detailIndex}
                          className="flex items-center justify-center space-x-3 small text-muted-foreground"
                        >
                          <div className="w-1 h-1 bg-lapis rounded-full flex-shrink-0" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-6 transform">
                      <div className="w-4 h-4 border-t-2 border-r-2 border-lapis transform rotate-45" />
                    </div>
                  )}
                </div>
              </AnimatedCard>
            ))}
          </div>

          <AnimatedSection delay={0.8} className="text-center mt-16 sm:mt-20">
            <div className="surface--light p-8 max-w-2xl mx-auto">
              <h3 className="h3 mb-4">Ready to get started?</h3>
              <p className="body text-center mb-6">
                Join our early access program and be among the first to experience next-generation digital security.
              </p>
              <a href="#early-access">
                <EnhancedButton className="btn btn-primary" size="lg">
                  Get Early Access
                </EnhancedButton>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </AnimatedSection>
  )
}
