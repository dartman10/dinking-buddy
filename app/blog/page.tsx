import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Pickleball tips, gear guides, and everything dinking. The DinkingBuddy blog.",
};

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
}

const posts: Post[] = [
  {
    slug: "best-pickleball-shirts-2026",
    title: "The 10 Best Pickleball Shirts in 2026",
    excerpt:
      "From funny slogans to UPF 50+ performance tees, here are the best pickleball shirts you can buy right now.",
    date: "2026-03-29",
  },
  {
    slug: "pickleball-gift-guide",
    title: "The Ultimate Pickleball Gift Guide",
    excerpt:
      "Looking for the perfect gift for the pickleball player in your life? We've got you covered.",
    date: "2026-03-29",
  },
  {
    slug: "what-to-wear-to-play-pickleball",
    title: "What to Wear to Play Pickleball",
    excerpt:
      "A beginner's guide to pickleball apparel — what works on the court and what to avoid.",
    date: "2026-03-29",
  },
];

export default function BlogPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="font-display text-5xl tracking-wider text-brand-green mb-4 text-center">
        Blog
      </h1>
      <p className="text-center text-gray-600 mb-12">
        Pickleball tips, gear guides, and everything dinking.
      </p>
      <div className="space-y-10">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-gray-200 pb-8">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="font-display text-3xl tracking-wider text-brand-green hover:text-brand-yellow transition-colors mb-2">
                {post.title}
              </h2>
            </Link>
            <time className="text-sm text-gray-500">{post.date}</time>
            <p className="mt-2 text-gray-700">{post.excerpt}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="inline-block mt-3 text-brand-green font-bold text-sm uppercase tracking-widest hover:text-brand-yellow transition-colors"
            >
              Read More →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
