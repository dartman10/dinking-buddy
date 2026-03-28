"use client";

import { useState } from "react";
import { Shirt } from "@/lib/shirts";
import ProductCard from "@/components/ProductCard";

export default function ShopGrid({ shirts }: { shirts: Shirt[] }) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = Array.from(new Set(shirts.flatMap((s) => s.tags))).sort();
  const filtered = activeTag
    ? shirts.filter((s) => s.tags.includes(activeTag))
    : shirts;

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
          No shirts found for this filter.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((shirt) => (
            <ProductCard key={shirt.id} shirt={shirt} />
          ))}
        </div>
      )}
    </>
  );
}
