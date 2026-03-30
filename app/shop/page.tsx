import { Metadata } from "next";
import shirts from "@/lib/shirts";
import { siteConfig } from "@/lib/config";
import ShopGrid from "@/components/ShopGrid";

export const metadata: Metadata = {
  title: siteConfig.shop.title,
  description: siteConfig.shop.description,
};

function shopJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: siteConfig.shop.jsonLdName,
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
        {siteConfig.shop.subtitle}
      </p>
      <ShopGrid products={shirts} />
    </main>
  );
}
