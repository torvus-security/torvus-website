import { FilloutWaitlistEmbed } from "@/components/fillout-waitlist-embed";
import { SectionIntro } from "@/components/section-intro";
import { createMetadata } from "@/lib/metadata";

import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = createMetadata({
  title: "Sign up for updates",
  description:
    "Join the Torvus updates list to hear about private beta cohorts, roadmap milestones, and rollout timelines for conditional release.",
  path: "/waitlist",
});

export default function WaitlistPage() {
  return (
    <div className="pb-24">
      <section className="border-b border-storm/10 bg-white py-20">
        <div className="container space-y-8">
          <SectionIntro
            eyebrow="Updates"
            title="Private beta is rolling out in cohorts"
            description="Share a little context about your team and the problems you’re solving. We’ll line you up with the right walkthrough, migration path, and security briefings."
            className="[&>h2]:text-gradient-hero"
          />
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="overflow-hidden rounded-xl border border-storm/10 bg-white/95 p-3 shadow-soft-1 md:p-6">
            <FilloutWaitlistEmbed className="h-[900px] w-full rounded-lg border border-storm/10" />
          </div>
        </div>
      </section>
    </div>
  );
}
