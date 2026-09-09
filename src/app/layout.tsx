import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
