import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Indoor vs Outdoor Pickleball: What's the Difference?",
  description:
    "Indoor and outdoor pickleball play differently. Here's what changes — from balls and courts to shoes and strategy.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 prose-custom">
      <article>{children}</article>
    </main>
  );
}
