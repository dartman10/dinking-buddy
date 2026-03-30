"use client";

import { useState } from "react";
import { Product } from "@/lib/shirts";
import { siteConfig } from "@/lib/config";
import ProductCard from "@/components/ProductCard";

export default function ShopGrid({ products }: { products: Product[] }) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = Array.from(new Set(products.flatMap((s) => s.tags))).sort();
  const filtered = activeTag
    ? products.filter((s) => s.tags.includes(activeTag))
    : products;

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveTag(null)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
            activeTag === null
              ? "bg-brand-green text-white border-brand-green"
              : "bg-white text-gray-600 border-gray-300 hover:border-brand-green hover:text-brand-green"
          }`}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors capitalize ${
              activeTag === tag
                ? "bg-brand-green text-white border-brand-green"
                : "bg-white text-gray-600 border-gray-300 hover:border-brand-green hover:text-brand-green"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-gray-400 text-center py-16">
          {siteConfig.shop.emptyFilter}
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
}
