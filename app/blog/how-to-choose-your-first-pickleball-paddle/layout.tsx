import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Choose Your First Pickleball Paddle",
  description:
    "Buying your first pickleball paddle? Here's what to look for — weight, grip size, materials, and our top recommendations for beginners.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 prose-custom">
      <article>{children}</article>
    </main>
  );
}
