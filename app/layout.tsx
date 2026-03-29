import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "DinkingBuddy – Pickleball Shirts",
    template: "%s | DinkingBuddy",
  },
  description:
    "Pickleball-themed shirts for players who love the game. Curated designs, shipped from Amazon.",
  metadataBase: new URL("https://dinkingbuddy.com"),
  verification: {
    google: "GOOGLE_SEARCH_CONSOLE_ID",
  },
  openGraph: {
    siteName: "DinkingBuddy",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col font-sans antialiased bg-white text-gray-900">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
