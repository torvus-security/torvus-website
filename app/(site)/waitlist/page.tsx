import { FilloutWaitlistEmbed } from "@/components/fillout-waitlist-embed";
import { SectionIntro } from "@/components/section-intro";
import { createMetadata } from "@/lib/metadata";

import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = createMetadata({
  title: "Join the waitlist",
  description:
    "Request access to Torvus private beta and help shape how conditional release, duress controls, and digital legacy workflows land in your organisation.",
  path: "/waitlist",
});

export default function WaitlistPage() {
  return (
    <div className="pb-24">
      <section className="border-b border-storm/10 bg-white py-20">
        <div className="container space-y-8">
          <SectionIntro
            eyebrow="Waitlist"
            title="Private beta is rolling out in cohorts"
            description="Share a little context about your team and the problems you’re solving. We’ll line you up with the right product walkthrough and migration path."
          />
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="overflow-hidden rounded-xl border border-storm/10 bg-white p-3 shadow-sm md:p-6">
            <FilloutWaitlistEmbed className="h-[900px] w-full rounded-lg border" />
          </div>
        </div>
      </section>
    </div>
  );
}
