import { Metadata } from "next";
import shirts from "@/lib/shirts";
import ShopGrid from "@/components/ShopGrid";

export const metadata: Metadata = {
  title: "Shop Pickleball Shirts",
  description: "Browse our full collection of pickleball-themed shirts. The perfect gift or treat for any player.",
};

function shopJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Pickleball Shirts",
    numberOfItems: shirts.length,
    itemListElement: shirts.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: s.title,
        description: s.description,
        image: s.image || undefined,
        url: s.affiliateUrl,
      },
    })),
  };
}

export default function ShopPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(shopJsonLd()) }}
      />
      <h1 className="font-display text-6xl tracking-wider text-brand-green mb-2">
        Shop
      </h1>
      <p className="text-gray-500 mb-10">
        Pickleball shirts for every player on the court.
      </p>
      <ShopGrid shirts={shirts} />
    </main>
  );
}
