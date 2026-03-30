import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pickleball Etiquette: 10 Unwritten Rules Every Player Should Know",
  description:
    "Pickleball is a social sport. Here are the unwritten rules of court etiquette that will make you a welcome player anywhere.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 prose-custom">
      <article>{children}</article>
    </main>
  );
}
