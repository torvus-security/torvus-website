import { SectionIntro } from "@/components/section-intro";
import { PrimarySoftLink } from "@/components/ui/button";
import { createMetadata } from "@/lib/metadata";

import type { Metadata } from "next";

export const revalidate = 3600;

const STATUS_URL = "https://status.torvus.security";

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
          >
            <PrimarySoftLink href={STATUS_URL}>
              Visit status.torvus.security
            </PrimarySoftLink>
          </SectionIntro>
        </div>
      </section>
    </div>
  );
}
