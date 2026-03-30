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
    date: "2026-03-05",
  },
  {
    slug: "best-pickleball-shirts-valentines-day",
    title: "The Best Pickleball Shirts for Valentine's Day Gifts",
    excerpt:
      "Surprise the pickleball lover in your life with a Valentine's Day gift they'll actually use.",
    date: "2026-02-07",
  },
  {
    slug: "pickleball-in-2026-why-its-still-growing",
    title: "Pickleball in 2026: Why It's Still the Fastest-Growing Sport",
    excerpt:
      "Pickleball isn't slowing down. Here's why the sport keeps growing in 2026 and what's fueling the boom.",
    date: "2026-01-14",
  },
  {
    slug: "pickleball-etiquette-unwritten-rules",
    title: "Pickleball Etiquette: 10 Unwritten Rules Every Player Should Know",
    excerpt:
      "Pickleball is a social sport. Here are the unwritten rules of court etiquette that will make you welcome anywhere.",
    date: "2025-12-04",
  },
  {
    slug: "how-to-choose-your-first-pickleball-paddle",
    title: "How to Choose Your First Pickleball Paddle",
    excerpt:
      "Buying your first paddle? Here's what to look for — weight, grip size, materials, and our top recommendations.",
    date: "2025-11-08",
  },
  {
    slug: "indoor-vs-outdoor-pickleball",
    title: "Indoor vs Outdoor Pickleball: What's the Difference?",
    excerpt:
      "Indoor and outdoor pickleball play differently. Here's what changes — from balls and courts to shoes and strategy.",
    date: "2025-10-10",
  },
  {
    slug: "pickleball-gift-guide",
    title: "The Ultimate Pickleball Gift Guide",
    excerpt:
      "Looking for the perfect gift for the pickleball player in your life? We've got you covered.",
    date: "2025-09-18",
  },
  {
    slug: "5-drills-to-improve-your-dink-game",
    title: "5 Drills to Improve Your Dink Game",
    excerpt:
      "The dink is the most important shot in pickleball. Here are 5 practice drills to make yours unbeatable.",
    date: "2025-08-22",
  },
  {
    slug: "pickleball-rules-for-beginners",
    title: "Pickleball Rules for Beginners: Everything You Need to Know",
    excerpt:
      "New to pickleball? Learn the basic rules, scoring, and court layout so you can jump into your first game with confidence.",
    date: "2025-07-15",
  },
  {
    slug: "what-to-wear-to-play-pickleball",
    title: "What to Wear to Play Pickleball",
    excerpt:
      "A beginner's guide to pickleball apparel — what works on the court and what to avoid.",
    date: "2025-06-12",
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
