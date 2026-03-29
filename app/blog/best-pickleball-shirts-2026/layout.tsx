import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The 10 Best Pickleball Shirts in 2026",
  description:
    "From funny slogans to UPF 50+ performance tees, here are the best pickleball shirts you can buy right now.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 prose-custom">
      <article>{children}</article>
    </main>
  );
}
