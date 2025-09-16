import { siteConfig, type SitePath } from "./site-config";

import type { Metadata } from "next";

const metadataBase = new URL(siteConfig.url);

type MetadataOptions = {
  title: string;
  description: string;
  path: SitePath;
  openGraphTitle?: string;
  keywords?: string[];
};

export function createMetadata({
  title,
  description,
  path,
  openGraphTitle,
  keywords,
}: MetadataOptions): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  const ogTitle = openGraphTitle ?? title;
  const ogImage = `/api/og?title=${encodeURIComponent(ogTitle)}`;

  return {
    title,
    description,
    metadataBase,
    alternates: {
      canonical: url,
    },
    keywords: keywords ?? siteConfig.keywords,
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_AU",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${ogTitle} – ${siteConfig.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: siteConfig.twitter.site,
      creator: siteConfig.twitter.handle,
      images: [ogImage],
    },
  };
}
