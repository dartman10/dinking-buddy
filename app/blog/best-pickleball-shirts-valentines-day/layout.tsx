import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Best Pickleball Shirts for Valentine's Day Gifts",
  description:
    "Surprise the pickleball lover in your life with a Valentine's Day gift they'll actually use. Here are the best pickleball shirts to give this February.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 prose-custom">
      <article>{children}</article>
    </main>
  );
}
