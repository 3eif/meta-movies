"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import AnalysisDropdown from "./AnalysisDropdown";

const analysisItems = [
  { href: "/analysis", label: "Overview" },
  {
    href: "/analysis/ratings-commercial-success",
    label: "Ratings & Commercial Success",
  },
  {
    href: "/analysis/production-choices",
    label: "Genres Across Languages",
  },
  {
    href: "/analysis/language-country-genre",
    label: "Language, Country, & Genre",
  },
  { href: "/analysis/conclusion", label: "Conclusion" },
];

const navLinkClass =
  "hover:text-[#c9a84c] transition-colors duration-300";

export default function SiteNav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [analysisOpen, setAnalysisOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
    setAnalysisOpen(false);
  }, [pathname]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-[#c9a84c]/20">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="font-[family-name:var(--font-playfair)] text-[#c9a84c] text-xl font-bold tracking-wide"
          >
            Meta Movies
          </Link>

          <div className="hidden md:flex gap-8 text-sm tracking-widest uppercase items-center">
            <Link href="/" className={navLinkClass}>
              Home
            </Link>
            <Link href="/about" className={navLinkClass}>
              About
            </Link>
            <AnalysisDropdown />
            <Link href="/data-critique" className={navLinkClass}>
              Data Critique
            </Link>
            <Link href="/bibliography" className={navLinkClass}>
              Bibliography
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((current) => !current)}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
            className="md:hidden inline-flex items-center justify-center rounded-md border border-[#c9a84c]/30 p-2 text-[#e8e8e8] hover:text-[#c9a84c] hover:border-[#c9a84c]/50 transition-colors duration-300"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {mobileOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileOpen ? (
          <div className="md:hidden mt-4 rounded-xl border border-[#c9a84c]/20 bg-[#111111]/95 p-3 shadow-2xl backdrop-blur-sm">
            <div className="flex flex-col text-sm uppercase tracking-[0.18em]">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-3 hover:bg-[#c9a84c]/10 hover:text-[#c9a84c] transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-3 hover:bg-[#c9a84c]/10 hover:text-[#c9a84c] transition-colors duration-300"
              >
                About
              </Link>
              <button
                type="button"
                onClick={() => setAnalysisOpen((current) => !current)}
                aria-expanded={analysisOpen}
                className="flex items-center justify-between rounded-lg px-3 py-3 text-left hover:bg-[#c9a84c]/10 hover:text-[#c9a84c] transition-colors duration-300"
              >
                <span>Analysis</span>
                <svg
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${analysisOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.1 1.02l-4.25 4.5a.75.75 0 0 1-1.1 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {analysisOpen ? (
                <div className="mt-1 mb-2 ml-3 border-l border-[#c9a84c]/20 pl-2">
                  {analysisItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-lg px-3 py-2 text-xs tracking-[0.14em] text-[#cfcfcf] hover:bg-[#c9a84c]/10 hover:text-[#c9a84c] transition-colors duration-300"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ) : null}
              <Link
                href="/data-critique"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-3 hover:bg-[#c9a84c]/10 hover:text-[#c9a84c] transition-colors duration-300"
              >
                Data Critique
              </Link>
              <Link
                href="/bibliography"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-3 hover:bg-[#c9a84c]/10 hover:text-[#c9a84c] transition-colors duration-300"
              >
                Bibliography
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
