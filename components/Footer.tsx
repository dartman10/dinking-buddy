export default function Footer() {
  return (
    <footer className="bg-brand-green text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8 text-center space-y-2">
        <p className="text-white/70 text-sm">
          © {new Date().getFullYear()} DinkingBuddy.com · All rights reserved.
        </p>
        <p className="text-white/50 text-xs max-w-2xl mx-auto">
          DinkingBuddy.com is a participant in the Amazon Services LLC Associates
          Program, an affiliate advertising program designed to provide a means
          for sites to earn advertising fees by advertising and linking to
          Amazon.com. As an Amazon Associate we earn from qualifying purchases.
        </p>
      </div>
    </footer>
  );
}
