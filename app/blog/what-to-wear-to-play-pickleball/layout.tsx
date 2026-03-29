import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What to Wear to Play Pickleball",
  description:
    "A beginner's guide to pickleball apparel — what works on the court, what to avoid, and how to look good doing it.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 prose-custom">
      <article>{children}</article>
    </main>
  );
}
