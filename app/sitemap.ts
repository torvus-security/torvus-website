import { loadLegalDocument } from "@/lib/mdx";
import { siteConfig, type SitePath } from "@/lib/site-config";

import type { MetadataRoute } from "next";

const staticPaths: SitePath[] = [
  "/",
  "/product",
  "/features",
  "/security",
  "/digital-legacy",
  "/pricing",
  "/use-cases",
  "/waitlist",
  "/faq",
  "/contact",
  "/status",
  "/trust-center",
  "/legal/privacy",
  "/legal/terms",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.url;
  const entries = await Promise.all(
    staticPaths.map(async (path) => {
      let lastModified = new Date();
      if (path.startsWith("/legal")) {
        const slug = path.split("/").pop() ?? "";
        const { frontmatter } = await loadLegalDocument(slug);
        if (frontmatter.updated) {
          const parsed = new Date(frontmatter.updated);
          if (!Number.isNaN(parsed.getTime())) {
            lastModified = parsed;
          }
        }
      }
      return {
        url: new URL(path, base).toString(),
        lastModified,
      } satisfies MetadataRoute.Sitemap[0];
    }),
  );

  return entries;
}
