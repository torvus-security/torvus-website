import { getStructuredDataJson } from "@/lib/structured-data";

export function StructuredData() {
  return (
    <script
      id="torvus-structured-data"
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: getStructuredDataJson() }}
    />
  );
}
