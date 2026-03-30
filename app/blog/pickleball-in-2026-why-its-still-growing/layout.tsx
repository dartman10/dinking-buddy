import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pickleball in 2026: Why It's Still the Fastest-Growing Sport",
  description:
    "Pickleball isn't slowing down. Here's why the sport keeps growing in 2026 and what's fueling the boom.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 prose-custom">
      <article>{children}</article>
    </main>
  );
}
