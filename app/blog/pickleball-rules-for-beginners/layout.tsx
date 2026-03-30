import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pickleball Rules for Beginners: Everything You Need to Know",
  description:
    "New to pickleball? Learn the basic rules, scoring, and court layout so you can jump into your first game with confidence.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 prose-custom">
      <article>{children}</article>
    </main>
  );
}
