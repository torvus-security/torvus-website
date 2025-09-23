import { describe, expect, it } from "vitest";

import { getStructuredDataJson } from "@/lib/structured-data";

describe("structured data", () => {
  it("omits SearchAction entries that reference unavailable routes", () => {
    const raw: unknown = JSON.parse(getStructuredDataJson());

    expect(Array.isArray(raw)).toBe(true);
    if (!Array.isArray(raw)) {
      throw new Error("structured data is expected to be an array");
    }

    expect(raw.every((entry) => typeof entry === "object" && entry !== null)).toBe(true);

    const entries = raw as Record<string, unknown>[];
    const websiteEntry = entries.find(
      (entry) => typeof entry["@type"] === "string" && entry["@type"] === "WebSite",
    );

    expect(websiteEntry).toBeDefined();
    if (!websiteEntry) {
      throw new Error("structured data is missing the WebSite entry");
    }

    expect(websiteEntry).toMatchObject({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Torvus Security",
      url: "https://platform.torvussecurity.com",
    });
    expect(websiteEntry).not.toHaveProperty("potentialAction");
  });
});
