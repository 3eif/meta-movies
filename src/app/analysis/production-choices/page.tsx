import GenreLanguageChart from "../../text-analysis/GenreLanguageChart";

export default function ProductionChoicesPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <header className="mb-14">
        <p className="text-[#c9a84c]/80 uppercase tracking-[0.3em] text-xs mb-3">
          Analysis
        </p>
        <h1 className="text-5xl font-bold text-[#c9a84c] mb-4">
          Genres Across Languages
        </h1>
        <div className="w-16 h-0.5 bg-[#c9a84c] mb-8"></div>
      </header>

      <section className="space-y-6 text-[#ccc] page-copy">
        <p>
          Are certain genres of film more popular than others in certain
          cultures/languages around the world and if so, what takeaways can be
          made about the cultures themselves based on their taste in film?
        </p>

        <p>
          Across the world&rsquo;s major filmmaking languages, genre
          preferences vary, reflecting cultural differences amongst different
          countries. Based on the genre distribution chart, our findings
          suggest that while Drama and Comedy dominate film production across
          nearly every language, there do exist differences in genre
          concentration between linguistic traditions that reflect deeper
          cultural values and industrial histories. Fu (2013) found that genre
          taste differences between countries are positively correlated with
          cultural distance, suggesting that a nation&rsquo;s film preferences
          are shaped by broader social and cultural context rather than
          universal audience instincts.
        </p>

        <p>
          In France, film is often treated as something more than commercial
          entertainment where French-language cinema stands out for its
          disproportionate contribution to Drama relative to other genres.
          Similarly, German-language cinema shows a similar pattern, with drama
          making up most of its genre output and reflecting a broader European
          emphasis on storytelling and cultural themes. On the other hand,
          Japanese-language films show a strong presence in Action, a pattern
          largely attributed to the global influence of anime, which has
          established Japan as a major exporter of action oriented animated
          content. This genre focus may also contribute to international reach,
          as Francemone et al. (2023) found that action was among the genres
          most associated with high box office revenue and broad audience
          popularity, leading to believe that Japan&rsquo;s genre concentration
          positions its films favorably in global markets. These findings show
          that genre dominance in any given language is not arbitrary, but is
          shaped by specific cultural export strategies and specific
          industries. Spanish-language cinema shows a balanced distribution
          across Comedy and Drama, reflecting the diversity of Spanish-language
          film industries across Latin America and Spain, each with different
          cultural properties. All together, these patterns suggest that genre
          preferences are not simply a matter of audience taste, but tied to
          each culture&rsquo;s relationship with its film industry structure,
          history, and how it positions its cinema in relation to global
          markets.
        </p>
      </section>

      <section className="mb-16">
        <div className="mb-6">
          <GenreLanguageChart />
        </div>
        <p className="text-[#ccc] page-copy">
          This stacked bar chart shows the distribution of movie genres across
          major original languages in the dataset. Each bar represents a genre,
          while the colored segments indicate the proportion of films produced
          in different languages. The visualization shows that genres such as
          Drama and Comedy dominate across all languages, while genres like
          Western, War and Music appear less frequently. Overall, the chart
          illustrates how genre popularity varies by language while revealing
          common genre trends shared across global film production.
        </p>
      </section>
    </div>
  );
}
