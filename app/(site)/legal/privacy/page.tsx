import { IconChip } from "@/components/icon-chip";
import { PrimarySubtleLink } from "@/components/ui/button";
import { loadLegalDocument } from "@/lib/mdx";
import { createMetadata } from "@/lib/metadata";

import type { Metadata } from "next";

export const revalidate = 86400;

export const metadata: Metadata = createMetadata({
  title: "Privacy",
  description:
    "Privacy notice covering how Torvus handles personal information and encrypted data.",
  path: "/legal/privacy",
});

export default async function PrivacyPage() {
  const { content, frontmatter } = await loadLegalDocument("privacy");
  const updated = frontmatter.updated;

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white via-pastel-lagoon/20 to-white pb-24 pt-20">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(214,31,105,0.14),transparent_45%)]"
        aria-hidden="true"
      />

      <div className="container relative flex justify-center">
        <article className="w-full max-w-3xl rounded-3xl border border-storm/12 bg-white/96 p-8 shadow-[0_32px_70px_rgba(14,23,38,0.12)] backdrop-blur">
          <header className="space-y-3">
            <p className="text-small font-semibold uppercase tracking-[0.18em] text-cranberry">
              Legal
            </p>
            <h1 className="text-gradient-hero text-display font-semibold text-storm">
              {frontmatter.title ?? "Privacy Notice"}
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-[0.95rem] text-thunder">
              {updated ? (
                <IconChip tone="lagoon" icon="timer" className="justify-start">
                  Last updated {updated}
                </IconChip>
              ) : null}
              <IconChip tone="cranberry" icon="shield" className="justify-start">
                Zero-knowledge data handling by default
              </IconChip>
            </div>
          </header>

          <div className="mt-6 max-h-[65vh] overflow-y-auto pr-3">
            <div className="prose prose-slate max-w-none text-[0.98rem] leading-7">
              {content}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <PrimarySubtleLink
              href="mailto:privacy@torvussecurity.com"
              className="w-auto min-w-[200px]"
            >
              Contact privacy team
            </PrimarySubtleLink>
            <a
              href="/security"
              className="inline-flex items-center justify-center rounded-full border border-lapis/40 px-5 py-3 text-[0.95rem] font-semibold text-lapis transition hover:bg-pastel-lagoon/40"
            >
              View security commitments
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
