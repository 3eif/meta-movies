import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Link from "next/link";
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

        <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-[#c9a84c]/20">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link
              href="/"
              className="font-[family-name:var(--font-playfair)] text-[#c9a84c] text-xl font-bold tracking-wide"
            >
              Meta Movies
            </Link>
            <div className="flex gap-8 text-sm tracking-widest uppercase">
              <Link
                href="/"
                className="hover:text-[#c9a84c] transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="hover:text-[#c9a84c] transition-colors duration-300"
              >
                About
              </Link>
              <Link
                href="/analysis"
                className="hover:text-[#c9a84c] transition-colors duration-300"
              >
                Analysis
              </Link>
              <Link
                href="/data-critique"
                className="hover:text-[#c9a84c] transition-colors duration-300"
              >
                Data Critique
              </Link>
              <Link
                href="/bibliography"
                className="hover:text-[#c9a84c] transition-colors duration-300"
              >
                Bibliography
              </Link>
            </div>
          </div>
        </nav>

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
