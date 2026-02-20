export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-3xl">
          <p className="text-[#c9a84c] uppercase tracking-[0.3em] text-sm mb-6">
            A Digital Humanities Project
          </p>
          <h1 className="text-6xl md:text-7xl font-bold text-[#c9a84c] mb-6 leading-tight">
            Meta Movies
          </h1>
          <p className="text-xl text-[#999] leading-relaxed max-w-2xl mx-auto">
            Exploring the patterns, power structures, and cultural forces behind
            45,000+ films through data-driven analysis.
          </p>
          <div className="mt-10 flex gap-4 justify-center">
            <a
              href="/about"
              className="px-6 py-3 bg-[#c9a84c] text-[#0a0a0a] font-semibold text-sm uppercase tracking-wider hover:bg-[#e8d48b] transition-colors"
            >
              About the Project
            </a>
            <a
              href="/data-critique"
              className="px-6 py-3 border border-[#c9a84c]/50 text-[#c9a84c] text-sm uppercase tracking-wider hover:bg-[#c9a84c]/10 transition-colors"
            >
              Data Critique
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "45,000+", label: "Films Analyzed" },
            { number: "26M", label: "User Ratings" },
            { number: "130+", label: "Languages" },
            { number: "1874–2017", label: "Year Range" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-[#141414] border border-[#c9a84c]/10 p-6 text-center"
            >
              <p className="text-3xl font-bold text-[#c9a84c]">
                {stat.number}
              </p>
              <p className="text-sm text-[#999] mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Research Questions */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-[#c9a84c] mb-10 text-center">
          Research Questions
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "How has the relationship between ratings and commercial success changed over time, and what might this reveal about studio goals and audience values?",
            "Are films with unconventional genres or production choices more likely to come from independent studios, and how are they received compared to mainstream productions?",
            "How do patterns of language, country of production, and genre intersect to shape which films achieve international popularity versus remaining regionally successful?",
          ].map((q, i) => (
            <div
              key={i}
              className="bg-[#141414] border border-[#c9a84c]/10 p-6 hover:border-[#c9a84c]/30 transition-colors"
            >
              <p className="text-[#c9a84c] text-sm font-bold mb-3">
                Question {i + 1}
              </p>
              <p className="text-[#ccc] leading-relaxed text-sm">{q}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
