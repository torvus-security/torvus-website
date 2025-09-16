import { headers } from "next/headers";

import { getStructuredDataJson } from "@/lib/structured-data";

export function StructuredData() {
  const nonce = headers().get("x-torvus-csp-nonce") ?? "";

  if (!nonce) {
    return null;
  }

  return (
    <script
      nonce={nonce}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: getStructuredDataJson() }}
    />
  );
}
