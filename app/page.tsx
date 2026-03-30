import Link from "next/link";
import shirts from "@/lib/shirts";
import ProductCard from "@/components/ProductCard";

function shuffled<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export const dynamic = "force-dynamic";

function featuredJsonLd(items: typeof shirts) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Featured Pickleball Shirts",
    numberOfItems: items.length,
    itemListElement: items.map((s, i) => ({
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

export default function HomePage() {
  const featured = shuffled(shirts).slice(0, 10);
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(featuredJsonLd(featured)) }}
      />
      <section className="bg-brand-green text-white py-24 px-4 text-center">
        <h1 className="font-display text-7xl md:text-9xl tracking-wider text-brand-yellow mb-4">
          Dinking Buddy
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-xl mx-auto mb-8">
          Pickleball shirts for players who live for the dink. Find your
          perfect shirt below.
        </p>
        <Link
          href="/shop"
          className="inline-block bg-brand-yellow text-brand-green font-bold uppercase tracking-widest py-3 px-8 rounded hover:brightness-105 transition-all text-sm"
        >
          Shop All Shirts
        </Link>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="font-display text-5xl tracking-wider text-brand-green mb-8 text-center">
          Featured Shirts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((shirt) => (
            <ProductCard key={shirt.id} shirt={shirt} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/shop"
            className="inline-block border-2 border-brand-green text-brand-green font-bold uppercase tracking-widest py-3 px-8 rounded hover:bg-brand-green hover:text-white transition-all text-sm"
          >
            See All Shirts
          </Link>
        </div>
      </section>
    </main>
  );
}
