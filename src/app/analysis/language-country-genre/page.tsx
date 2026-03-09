import GenreLanguageChart from "../../text-analysis/GenreLanguageChart";
import LanguageProductionLineChart from "../LanguageProductionLineChart";
import TableauMapEmbed from "../TableauMapEmbed";

export default function LanguageCountryGenrePage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <header className="mb-14">
        <p className="text-[#c9a84c]/80 uppercase tracking-[0.3em] text-xs mb-3">
          Analysis
        </p>
        <h1 className="text-5xl font-bold text-[#c9a84c] mb-4">
          Language, Country, &amp; Genre
        </h1>
        <div className="w-16 h-0.5 bg-[#c9a84c] mb-8"></div>
        <p className="text-[#ccc] leading-relaxed text-base">
          How do patterns of language, country of production, and genre
          intersect to shape which films achieve international popularity versus
          remaining regionally successful?
        </p>
      </header>

      <section className="space-y-6 text-[#ccc] leading-relaxed mb-16">
        <p>
          Global film production reflects a complex interaction between
          language, geography, and genre, all of which influence whether a film
          reaches international audiences or remains regionally successful.
          While the global film industry is often associated with Hollywood and
          English-language films, many countries maintain strong regional film
          industries that produce culturally specific stories for domestic
          audiences. Understanding how these different factors intersect can
          reveal broader patterns about globalization in media and how cultural
          products do across national boundaries.
        </p>
        <p>
          Looking at the distribution of film production across countries and
          languages reveals that filmmaking is generally widespread, spanning
          Latin America, Europe, and Asia. The genre distribution chart, which
          shows each language&rsquo;s within-language genre proportions stacked
          by genre, reveal how English language films appear across nearly every
          genre category, reflecting the global dominance of English speaking
          films industries and the widespread use of English as a language in
          international media markets, suggesting these formats represent a
          universal default for film production regardless of national context.
          Something that stood out to us was the concentrations visible in other
          languages: French and German cinemas contribute disproportionately to
          Drama, while Japanese language films show notable presence in Action,
          largely driven by the anime industry. It also shows how specific
          genres such as comedy and drama are the most common across many
          languages.
        </p>
      </section>

      <section className="mb-16">
        <div className="mb-6">
          <GenreLanguageChart />
        </div>
        <p className="text-[#999] leading-relaxed">[add brief chart analysis]</p>
      </section>

      <section className="mb-16">
        <div className="mb-6">
          <LanguageProductionLineChart />
        </div>
        <p className="text-[#999] leading-relaxed">[add brief chart analysis]</p>
      </section>

      <section className="space-y-6 text-[#ccc] leading-relaxed mb-16">
        <p>
          At the same time, the global map of film production shows that movie
          output is geographically concentrated in a small number of countries,
          while many national industries produce films that primarily appeal to
          regional audiences.
        </p>
      </section>

      <section className="mb-16">
        <div className="bg-white rounded-lg p-4 md:p-6 mb-6 overflow-hidden">
          <TableauMapEmbed />
          <p className="text-[#666] text-sm mt-4 leading-relaxed">
            [add map caption]
          </p>
        </div>
        <p className="text-[#999] leading-relaxed">[add brief map analysis]</p>
      </section>
    </div>
  );
}
