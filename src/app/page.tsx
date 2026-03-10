import Link from "next/link";

import HomeProjectorHero from "./HomeProjectorHero";

export default function Home() {
  return (
    <div>
      <HomeProjectorHero />

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "45,000+", label: "Films Analyzed" },
            { number: "26M", label: "User Ratings" },
            { number: "130+", label: "Languages" },
            { number: "1874–2017", label: "Year Range" },
          ].map((stat) => (
            <div key={stat.label} className="card p-6 text-center">
              <p className="text-3xl font-bold text-[#c9a84c]">{stat.number}</p>
              <p className="text-xs text-[#888] mt-2 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent" />
      </div>

      {/* Research Questions */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-[#c9a84c]/80 uppercase tracking-[0.3em] text-xs text-center mb-3">
          What We Investigate
        </p>
        <h2 className="text-3xl font-bold text-[#c9a84c] mb-12 text-center">
          Research Questions
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              q: "How has the relationship between ratings and commercial success changed over time, and what might this reveal about studio goals and audience values?",
              icon: "01",
              href: "/analysis/ratings-commercial-success",
            },
            {
              q: "Are certain genres of film more popular than others in certain cultures/languages around the world and if so, what takeaways can be made about the cultures themselves based on their taste in film?",
              icon: "02",
              href: "/analysis/production-choices",
            },
            {
              q: "How do patterns of language, country of production, and genre intersect to shape which films achieve international popularity versus remaining regionally successful?",
              icon: "03",
              href: "/analysis/language-country-genre",
            },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="card block h-full p-6 transition-transform duration-200 hover:-translate-y-1 focus-visible:-translate-y-1"
            >
              <p className="text-[#c9a84c]/30 text-4xl font-bold font-[family-name:var(--font-playfair)] mb-4">
                {item.icon}
              </p>
              <p className="text-[#ccc] leading-relaxed text-sm">{item.q}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
