import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import SiteNav from "./SiteNav";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Meta Movies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        {/* Film grain overlay */}
        <div className="film-grain" />

        {/* Film strip edges */}
        <div className="film-strip-left" />
        <div className="film-strip-right" />

        <SiteNav />

        <main className="pt-20">{children}</main>

        <footer className="border-t border-[#c9a84c]/20 mt-20">
          <div className="max-w-6xl mx-auto px-6 py-8 text-center text-sm text-[#888]">
            <p className="font-[family-name:var(--font-playfair)] text-[#c9a84c] mb-2">
              Meta Movies
            </p>
            <p>DGT HUM 101 — Group A2 — UCLA</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
