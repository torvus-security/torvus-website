import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection, AnimatedCard } from "./animated-section"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Investigative Journalist",
    organization: "Metro Daily",
    content:
      "Torvus gives me peace of mind knowing my sources are protected even if something happens to me. The conditional release system is exactly what investigative journalism needs.",
    rating: 5,
    verified: true,
  },
  {
    name: "Michael Rodriguez",
    role: "Estate Planning Attorney",
    organization: "Rodriguez & Associates",
    content:
      "My clients love having a modern solution for digital estate planning. The audit trail and verification system gives everyone confidence in the process.",
    rating: 5,
    verified: true,
  },
  {
    name: "Dr. Emily Watson",
    role: "Family Physician",
    organization: "Private Practice",
    content:
      "As someone handling sensitive medical information, I needed a way to ensure continuity of care. Torvus provides the security and reliability I require.",
    rating: 5,
    verified: true,
  },
]

export function Testimonials() {
  return (
    <AnimatedSection>
      <section className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container">
          <AnimatedSection className="text-center space-y-6 mb-16" delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold ink2 ink2--lapis-lagoon ink-shadow">
              Trusted by Professionals
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how Torvus Security is helping professionals protect what matters most
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedCard key={index} delay={0.2 + index * 0.1}>
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 card-hover elev-1 elev-transition">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <Quote className="w-8 h-8 text-primary/30" />
                      <div className="flex items-center space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                        ))}
                      </div>
                    </div>

                    <blockquote className="text-muted-foreground italic leading-relaxed">
                      "{testimonial.content}"
                    </blockquote>

                    <div className="pt-4 border-t border-border/50">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          <p className="text-xs text-muted-foreground">{testimonial.organization}</p>
                        </div>
                        {testimonial.verified && (
                          <Badge variant="secondary" className="text-xs">
                            Verified
                          </Badge>
                        )}
                      </div>
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
