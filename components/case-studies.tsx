import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AnimatedSection, AnimatedCard } from "./animated-section"
import { FileText, Users, Shield, ArrowRight } from "lucide-react"

const caseStudies = [
  {
    title: "Investigative Journalism Protection",
    industry: "Media",
    challenge: "Protecting source materials and ensuring story continuity if journalist becomes unavailable",
    solution: "Conditional release system with encrypted source protection and editor access controls",
    results: [
      "100% source confidentiality maintained",
      "Zero data breaches in 18 months",
      "3 successful conditional releases during emergencies",
    ],
    icon: FileText,
    color: "bg-blue-500",
  },
  {
    title: "Legal Practice Continuity",
    industry: "Legal Services",
    challenge: "Ensuring client representation continuity and case file access for partner attorneys",
    solution: "Multi-tier release system with client consent verification and partner notification",
    results: [
      "Seamless case transitions for 15+ clients",
      "Reduced client anxiety about representation gaps",
      "Full regulatory compliance maintained",
    ],
    icon: Users,
    color: "bg-green-500",
  },
  {
    title: "Family Digital Estate Planning",
    industry: "Personal/Family",
    challenge: "Managing digital assets and sensitive family information across generations",
    solution: "Graduated release system with family member verification and trustee oversight",
    results: [
      "Simplified estate administration process",
      "Reduced family conflicts over digital assets",
      "Clear audit trail for legal proceedings",
    ],
    icon: Shield,
    color: "bg-purple-500",
  },
]

export function CaseStudies() {
  return (
    <AnimatedSection>
      <section className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container">
          <AnimatedSection className="text-center space-y-6 mb-16" delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold ink2 ink2--lapis-lagoon ink-shadow">
              Real-World Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              See how professionals across industries are using Torvus Security to protect what matters most
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <AnimatedCard key={index} delay={0.2 + index * 0.1}>
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 card-hover elev-1 elev-transition group">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${study.color} text-white group-hover:scale-110 transition-transform duration-300`}
                      >
                        <study.icon className="w-6 h-6" />
                      </div>
                      <Badge variant="outline" className="small">
                        {study.industry}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{study.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold body mb-2 text-muted-foreground uppercase tracking-wide">
                        Challenge
                      </h4>
                      <p className="body leading-relaxed">{study.challenge}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold body mb-2 text-muted-foreground uppercase tracking-wide">
                        Solution
                      </h4>
                      <p className="body leading-relaxed">{study.solution}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold body mb-3 text-muted-foreground uppercase tracking-wide">Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-start space-x-2 body">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                            <span className="leading-relaxed">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button variant="ghost" className="w-full group-hover:bg-primary/10 transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
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
