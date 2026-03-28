import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "DinkingBuddy.com — your source for pickleball shirts and gear.",
};

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="font-display text-6xl tracking-wider text-brand-green mb-6">
        About DinkingBuddy
      </h1>
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          Friends don&apos;t let friends dink alone. DinkingBuddy.com was created
          for pickleball lovers who want to wear their passion on their sleeve
          &mdash; literally.
        </p>
        <p>
          We curate the best pickleball-themed shirts available on Amazon, so you
          can find the perfect match for your game or the ideal gift for your
          court crew.
        </p>
        <p>
          Whether you&apos;re a beginner just learning the basics or a seasoned
          player who lives at the kitchen line, there&apos;s a shirt here for you.
        </p>
        <h2 className="font-display text-4xl tracking-wider text-brand-green pt-4">
          Affiliate Disclosure
        </h2>
        <p className="text-sm text-gray-500">
          DinkingBuddy.com is a participant in the Amazon Services LLC Associates
          Program, an affiliate advertising program designed to provide a means for
          sites to earn advertising fees by advertising and linking to Amazon.com.
          As an Amazon Associate we earn from qualifying purchases.
        </p>
      </div>
    </main>
  );
}
