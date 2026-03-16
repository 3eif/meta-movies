import LanguageProductionLineChart from "../LanguageProductionLineChart";
import TableauMapEmbed from "../TableauMapEmbed";
import AnalysisPager from "../AnalysisPager";

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
        <p className="text-[#ccc] page-copy">
          How do patterns of language, country of production, and genre
          intersect to shape which films achieve international popularity versus
          remaining regionally successful?
        </p>
      </header>

      <section className="space-y-6 text-[#ccc] page-copy mb-16">
        <h2 className="text-3xl font-bold text-[#c9a84c]">
          Global Production and Regional Reach
        </h2>
        <p>
          Global film production reflects the interaction between language,
          geography, and genre, all of which influence whether a film reaches
          international audiences or remains regionally successful. While the
          global film industry is often associated with Hollywood and
          English-language films, many countries maintain strong regional film
          industries that produce culturally specific stories for domestic
          audiences. Bignell and Woods (2023) argue that global media
          circulation is shaped by unequal power structures in which wealthier
          nations and well resourced industries dominate production and
          distribution, meaning that a film&rsquo;s success internationally is
          often determined by industrial factors as much as content.
          Understanding how these different factors intersect can reveal
          broader patterns about globalization in media and how cultural
          products do across national boundaries. Looking at the distribution
          of film production across countries and languages reveals that
          filmmaking is generally widespread, spanning Latin America, Europe,
          and Asia. The genre distribution chart, which shows each
          language&rsquo;s within-language genre proportions stacked by genre,
          reveal how English language films appear across nearly every genre
          category, reflecting the global dominance of English speaking films
          industries and the widespread use of English as a language in
          international media markets, suggesting these formats represent a
          universal default for film production regardless of national context.
          Something that stood out to us was the concentrations visible in
          other languages: French and German cinemas contribute
          disproportionately to Drama, while Japanese language films show
          notable presence in Action, which as talked about above is largely
          driven by the anime industry. It also shows how specific genres such
          as comedy and drama are the most common across many languages.
        </p>
      </section>

      <section className="space-y-6 text-[#ccc] page-copy mb-16">
        <h2 className="text-3xl font-bold text-[#c9a84c]">
          Geographic Concentration
        </h2>
        <p>
          At the same time, the global map of film production shows that movie
          output is geographically concentrated in a small number of countries,
          while many national industries produce films that primarily appeal to
          regional audiences.
        </p>
      </section>

      <section className="mb-16">
        <div className="mb-6 overflow-hidden rounded-lg border border-[#c9a84c]/12 bg-[#2f3136] p-4 shadow-[0_0_30px_rgba(0,0,0,0.24)] md:p-6">
          <TableauMapEmbed />
        </div>
      </section>

      <section className="space-y-6 text-[#ccc] page-copy mb-16">
        <h2 className="text-3xl font-bold text-[#c9a84c]">
          Non-English Film Production Over Time
        </h2>
        <p>
          Beyond genre distribution, looking into how non-English film
          production has changed over time reveals that a country&rsquo;s place
          in the global film market is not fixed, but shaped by the evolving
          industry. The line chart of non-English languages also illustrates
          these dynamics. French-language production grew most dramatically
          from the 1990s onward, dominating all other non-English languages by
          the 2010s, suggesting an expanding film industry that may be linked
          to French cultural policy. Italian-language production on the other
          hand peaked sharply in the 1960s and 1970s, corresponding to the
          global golden age of Italian cinema, before steadily declining. This
          shows how even strong cultural film traditions can decline without
          constant industrial support. According to Liao et al. (2022),
          cultural distance negatively impacts box office performance across
          borders, meaning films produced in languages with smaller global
          audiences face structural disadvantages in distributions and
          marketing regardless of quality. Gao et. all (2020) also touches on
          this, finding that the cultural alignment between a film&rsquo;s
          content and its target audience significantly shapes international
          performance, with Hollywood films that more closely reflected Chinese
          cultural values outperforming those that did not. All together, these
          patterns suggest that international success is not simply a function
          of content quality or genre appeal, but is shaped by the industrial
          and linguistic resources available to these different countries.
        </p>
      </section>

      <section className="mb-16">
        <div className="mb-6">
          <LanguageProductionLineChart />
        </div>
        <p className="text-[#ccc] page-copy">
          This chart looks at the annual film production in French, Italian,
          Japanese, German, Spanish, and Russian from 1920 to 2017. English
          was not included because it accounted for over 70% of the dataset
          and would compress all other languages to the bottom of the scale,
          making them less identifiable. The chart shows a few patterns:
          Italian cinema peaked at around 60 films per year in the early 1970s
          before declining quickly, French production grew steadily and
          surpassed 110 films per year by 2015, and Spanish and Japanese cinema
          both significantly grew in the 2010s. These trends align with
          specific events in global film history. For example, Italian
          cinema&rsquo;s peak in the 1960s and 1970s aligns with a
          &ldquo;golden age&rdquo; with directors like Fellini and Leone, and
          its decline mirrors the industry&rsquo;s struggle to keep up with
          competition from Hollywood. French cinema&rsquo;s consistent growth
          is reflected by France&rsquo;s longstanding government support which
          provides subsidies that protect domestic producers. These patterns
          support our research question about how language and country of
          production shape international film success, showing that non-English
          production is influenced by the policies of the country, historical
          events, and competition from other media landscapes.
        </p>
      </section>

      <AnalysisPager
        href="/analysis/conclusion"
        label="Conclusion"
      />
    </div>
  );
}
