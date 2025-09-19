import { SectionIntro } from "@/components/section-intro";
import { PrimarySubtleLink } from "@/components/ui/button";
import { createMetadata } from "@/lib/metadata";

import type { Metadata } from "next";

export const revalidate = 3600;

const STATUS_URL = "https://status.torvussecurity.com";

export const metadata: Metadata = createMetadata({
  title: "Status",
  description: "View live uptime and incident history for Torvus infrastructure.",
  path: "/status",
});

export default function StatusPage() {
  return (
    <div className="pb-24">
      <section className="py-20">
        <div className="container">
          <SectionIntro
            eyebrow="Status"
            title="Infrastructure transparency"
            description="Live availability, maintenance notices, and incident post-mortems live on our public status page."
            className="[&>h2]:text-gradient-hero"
          >
            <PrimarySubtleLink href={STATUS_URL}>
              Visit status.torvussecurity.com
            </PrimarySubtleLink>
          </SectionIntro>
        </div>
      </section>
    </div>
  );
}
