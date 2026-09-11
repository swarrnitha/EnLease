import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EnLease — Industrial & Warehousing Leasing Platform",
  description: "Discover strategically located industrial and warehousing spaces designed for manufacturing, logistics, storage, and business growth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.className} h-full antialiased`}>
      <body className="bg-slate-50 text-slate-900 min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
