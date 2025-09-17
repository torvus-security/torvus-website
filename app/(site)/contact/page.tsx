import { ContactForm } from "@/components/forms/contact-form";
import { SectionIntro } from "@/components/section-intro";
import { createMetadata } from "@/lib/metadata";

import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Reach the Torvus team for product discussions, partnerships, or security questions.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="pb-24">
      <section className="heading-band band-home relative overflow-hidden border-b border-storm/10 bg-white pt-[var(--section-pt)] pb-[var(--section-pb)]">
        <div className="pointer-events-none absolute inset-0 bg-grad-panel opacity-40" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-grad-divider opacity-40" aria-hidden="true" />
        <div className="container relative space-y-8">
          <SectionIntro
            eyebrow="Contact"
            title="Let’s talk about protecting your most critical information"
            description="Use the form below for product conversations, security reviews, or partnership ideas. We store the minimum needed to respond."
          />
        </div>
      </section>

      <section className="pt-[calc(var(--section-pt)*0.85)] pb-[calc(var(--section-pb)*0.85)]">
        <div className="container">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
