/* eslint-disable import/no-unused-modules */
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Torvus Security",
    short_name: "Torvus",
    description: "Policy-driven digital vault with conditional release and provenance.",
    theme_color: "#0B1220",
    background_color: "#FFFFFF",
    display: "standalone",
    start_url: "/",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any maskable",
      },
    ],
  };
}
