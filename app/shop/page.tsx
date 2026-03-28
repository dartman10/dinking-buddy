import { Metadata } from "next";
import shirts from "@/lib/shirts";
import ShopGrid from "@/components/ShopGrid";

export const metadata: Metadata = {
  title: "Shop Pickleball Shirts",
  description: "Browse our full collection of pickleball-themed shirts. The perfect gift or treat for any player.",
};

export default function ShopPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
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
