import Link from "next/link";

import { SectionIntro } from "@/components/section-intro";
import { buttonClasses } from "@/components/ui/button";
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
            <Link
              href={STATUS_URL}
              className={buttonClasses({ variant: "primary", size: "lg" })}
            >
              Visit status.torvus.security
            </Link>
          </SectionIntro>
        </div>
      </section>
    </div>
  );
}
