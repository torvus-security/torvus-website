import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AnimatedSection } from "./animated-section"

const faqs = [
  {
    question: "What legal and ethical safeguards are in place?",
    answer:
      "Torvus operates under strict Australian legal frameworks with built-in safeguards to prevent misuse. All releases require multi-factor verification, legal compliance checks, and follow jurisdictional requirements. We maintain detailed audit logs and work with legal professionals to ensure ethical use. Our terms of service explicitly prohibit illegal activities, and we reserve the right to suspend accounts that violate these guidelines.",
  },
  {
    question: "How do inactivity grace periods work?",
    answer:
      "Grace periods are fully customizable from 1 hour to 12 months, with multiple escalation steps to prevent accidental releases. The system sends escalating notifications via email, SMS, and push notifications before any release occurs. You can configure backup check-in methods, emergency contacts who can extend grace periods, and 'dead man's switch' overrides. Temporary unavailability due to travel, medical procedures, or other circumstances won't trigger releases.",
  },
  {
    question: "How are recipients verified before receiving information?",
    answer:
      "Recipients undergo multi-layered verification based on your security requirements: email OTP verification, government-issued ID verification, notarized identity confirmation, custom security questions, or biometric verification. For high-security releases, we support in-person verification through our partner network. Recipients must acknowledge receipt and confirm their identity before accessing any information.",
  },
  {
    question: "Can I test the system without actually releasing data?",
    answer:
      "Yes, our comprehensive dry-run feature simulates the entire release process without sending any actual information. You can test notification timing, recipient verification flows, grace period escalations, and delivery methods. The system generates detailed reports showing exactly what would happen during a real release, including timing, recipients contacted, and verification steps required.",
  },
  {
    question: "How is data deleted when no longer needed?",
    answer:
      "You maintain complete control over data retention with multiple deletion options: immediate deletion on-demand, scheduled automatic deletion after specified periods, or deletion triggered by specific events. All deletions use cryptographic erasure and secure overwriting methods. We provide deletion certificates and maintain audit logs of all deletion activities. Data can also be set to auto-delete if not accessed within specified timeframes.",
  },
  {
    question: "Which jurisdiction governs the service and where is data stored?",
    answer:
      "Torvus Security Pty Ltd (ABN: 12 345 678 901) operates under Australian law with primary data centers in Sydney and Melbourne. We offer data residency options in Australia, Singapore, and the EU to comply with local regulations. All data processing follows Australian Privacy Principles, GDPR requirements where applicable, and industry-specific regulations. Legal disputes are governed by Australian law with jurisdiction in New South Wales courts.",
  },
  {
    question: "What happens if Torvus Security ceases operations?",
    answer:
      "We maintain a comprehensive business continuity plan including data export tools, partner transition services, and advance notice requirements. In the unlikely event of service discontinuation, users receive 90 days notice and full data export capabilities. Our escrow arrangements with trusted partners ensure continued service availability during any transition period. All user data remains encrypted and accessible only to verified account holders.",
  },
  {
    question: "How do you handle law enforcement requests?",
    answer:
      "We comply with valid legal requests while protecting user privacy to the fullest extent possible. Due to our zero-knowledge encryption architecture, we cannot access user file contents even if compelled. We maintain detailed transparency reports and will challenge overly broad requests. Users in affected jurisdictions receive advance notice when legally permissible, and we provide guidance on legal protections available in their region.",
  },
]

export function FAQ() {
  return (
    <AnimatedSection>
      <section className="faq-section p-6 sm:p-8 elev-1 elev-transition">
        <div className="container max-w-3xl">
          <AnimatedSection className="text-left space-y-3 mb-8" delay={0.1}>
            <h2 className="h2">Frequently Asked Questions</h2>
            <p className="small max-w-2xl">
              Everything you need to know about digital guardianship and conditional release.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="faq-item px-5 elev-1 elev-transition">
                  <AccordionTrigger className="text-left body py-4 hover:no-underline">{faq.question}</AccordionTrigger>
                  <AccordionContent className="small pb-5">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </section>
    </AnimatedSection>
  )
}
