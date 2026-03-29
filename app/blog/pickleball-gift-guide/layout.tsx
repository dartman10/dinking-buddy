import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Ultimate Pickleball Gift Guide",
  description:
    "Looking for the perfect gift for the pickleball player in your life? We've got you covered with shirts, gear ideas, and more.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 prose-custom">
      <article>{children}</article>
    </main>
  );
}
