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
      <section className="border-b border-storm/10 bg-white py-20">
        <div className="container space-y-8">
          <SectionIntro
            eyebrow="Contact"
            title="Let’s talk about protecting your most critical information"
            description="Use the form below for product conversations, security reviews, or partnership ideas. We store the minimum needed to respond."
          />
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
