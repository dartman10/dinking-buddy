import Link from "next/link";
import shirts from "@/lib/shirts";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  return (
    <main>
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
          {shirts.map((shirt) => (
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
