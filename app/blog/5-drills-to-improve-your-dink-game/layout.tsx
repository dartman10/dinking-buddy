import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "5 Drills to Improve Your Dink Game",
  description:
    "The dink is the most important shot in pickleball. Here are 5 practice drills to make yours unbeatable.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 prose-custom">
      <article>{children}</article>
    </main>
  );
}
