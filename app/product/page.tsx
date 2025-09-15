// app/product/page.tsx (server component wrapper)
import type { Metadata } from "next";
import ProductClient from "./product-client";

export const metadata: Metadata = {
  title: "Product — Torvus Security",
  description:
    "From simple setup to strong guarantees — Torvus in plain language first, then deeper details.",
};

export default function ProductPage() {
  return <ProductClient />;
}
