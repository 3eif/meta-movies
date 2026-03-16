export default function ConclusionPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <header className="mb-14">
        <p className="text-[#c9a84c]/80 uppercase tracking-[0.3em] text-xs mb-3">
          Analysis
        </p>
        <h1 className="text-5xl font-bold text-[#c9a84c] mb-4">Conclusion</h1>
        <div className="w-16 h-0.5 bg-[#c9a84c] mb-8"></div>
      </header>
      <div className="space-y-6 text-[#ccc] page-copy">
        <p>
          The film industry is constantly changing based on consumer demands,
          studio goals, and improved technology. Based on our research, dataset,
          visualizations, and analysis, these changes in budget, revenue,
          trending genres, country of production, and audience ratings have been
          increasingly affected by a recent emphasis on the marketing,
          globalization, and commercialization of films.
        </p>

        <h2 className="text-3xl font-bold text-[#c9a84c]">
          How has the relationship between ratings and commercial success changed
          over time, and what might this reveal about studio goals and audience
          values?
        </h2>
        <p>
          The film industry has grown to depend on more than just box office
          revenue as a measure of success. As seen in our visualizations
          comparing vote averages and revenue, as well as budget and revenue, the
          relationship between film ratings and commercial success has slowly
          declined over time. Higher ratings were more strongly associated with
          strong box office performance in previous decades, likely because
          audiences had a smaller variety of home entertainment options and there
          was a greater emphasis on viewing films in theaters for the full
          experience and effect.
        </p>
        <p>
          Overall, the chart suggests that while film quality once had a stronger
          association with financial success, the relationship has weakened over
          the decades as other factors such as marketing and globalization have
          become increasingly important in determining box office performance.
          Some high-budget films underperform, while some lower-budget films earn
          strong returns. This supports one of the main ideas of our project, that
          commercial success is shaped by more than budget alone and reflects a
          wider mix of industrial, cultural, and economic factors.
        </p>
        <p>
          Although the relationship remains positive, the declining correlation
          suggests that audience ratings have become less predictive of
          commercial success over time. The data also show a dramatic increase in
          the number of films released in later decades, as reflected in larger
          sample sizes. With thousands of films competing for audience attention,
          financial outcomes may increasingly depend on factors beyond audience
          ratings alone.
        </p>
        <p>
          The industry at the time possessed fewer entertainment alternatives and
          more limited distribution channels, meaning audience recommendations and
          word of mouth likely played a larger role in shaping box office
          outcomes.
        </p>
        <p>
          Streaming services, global marketing campaigns, online rating
          platforms, and social media allow audience reactions to spread
          quickly and influence public perception worldwide. Because of these
          global networks, a film&apos;s early popularity and visibility can
          spread quickly, increasing both revenue and audience engagement. All of
          these findings suggest that modern studios are prioritizing aspects
          other than critic or audience ratings. This may include big-budget
          marketing campaigns, development of franchises, star power, and global
          distribution. Research has supported that blockbuster films and sequels
          often generate high revenues regardless of ratings, which may lead
          studios to invest more heavily in recognizable brands rather than
          unique or experimental films whose reception is less predictable.
        </p>

        <h2 className="text-3xl font-bold text-[#c9a84c]">
          Are certain genres of film more popular than others in certain
          cultures/languages around the world and if so, what takeaways can be
          made about the cultures themselves based on their taste in film?
        </h2>
        <p>
          While there are some historical specificities surrounding a particular
          culture and/or language&apos;s interest in a specific genre or genres,
          it is difficult to make broad conclusions about correlations between
          genre and language. There is evidence that culture and language impact
          a nation&apos;s film production. For example, Japan is well known for
          its flourishing anime industry and has a far higher proportion of
          animation films than other genres. Italian had the highest proportion of
          Western films made due to the Spaghetti Westerns of the 60s and 70s.
          Almost 10% of the romance films present in the dataset were filmed in
          French. This is the closest we get to answering the question. On the
          whole, though, only specific examples of a language&apos;s interaction
          with film production can be drawn from this data, and the dataset is
          largely inconclusive for broad generalizations about language and
          genre.
        </p>
        <p>
          Across the world&apos;s major filmmaking languages, genre preferences
          vary, reflecting cultural differences amongst different countries.
          Based on distribution patterns, our findings suggest that while Drama and
          Comedy dominate production across many languages, differences in genre
          concentration between linguistic traditions reflect deeper cultural
          values and industrial histories. Some work has found genre taste
          differences between countries to be positively correlated with cultural
          distance, suggesting that a nation&apos;s film preferences are shaped by
          broader social context rather than universal audience instincts.
        </p>

        <h2 className="text-3xl font-bold text-[#c9a84c]">
          How do patterns of language, country of production, and genre intersect to
          shape which films achieve international popularity versus remaining
          regionally successful?
        </h2>
        <p>
          Since film production largely relies on storytelling and human
          experience, films created in different countries represent different
          cultural values, changing how they are perceived on a global scale.
          After analyzing our map, it&apos;s apparent that high rates of movie
          output are concentrated in a small number of countries, and smaller,
          global industries have smaller outputs that appeal more to regional
          audiences than larger ones. The most prominent, high-revenue countries
          tend to market their films to wider audiences, resulting in higher
          revenue, ratings, and global appeal, often focusing on broader themes
          and less culturally specific references. Certain genres generate more
          revenue in their home regions, such as Japanese animated films and
          Spanish-language comedies and dramas, due to relevance of language,
          culture, and themes.
        </p>
        <p>
          In recent years, where storytelling trends have focused on portraying
          underrepresented voices and narratives, films about specific cultural and
          social struggles of minority groups have risen in popularity, including
          Everything Everywhere All At Once, Moonlight, Parasite, CODA, and
          Sinners. While these films were produced and released in English,
          smaller production countries can also gain global recognition for their
          filmmaking in the same way these U.S.-produced films did.
        </p>
        <p>
          Overall, these patterns support our research question about how language
          and country of production shape international film success, showing that
          non-English production is influenced by the policies of each country,
          historical events, and competition from other media landscapes. Global
          trends are likely to change as societal norms and expectations around
          filmmaking and storytelling continue to evolve.
        </p>

        <p>
          While a film&apos;s success was once associated primarily with financial
          and social recognition, social media and digital marketing tools have
          increased the scale of promotion, resulting in more audience-studio
          interaction and investment through tailored campaigns and red carpet
          events. Overall, the continuous global popularity and acclaim for the
          film and television industry can be attributed to more than just
          economic factors; it is the result of larger industrial, cultural, and
          social influences at play. So, the next time you sit down in a theater
          or open a streaming service, it is worth remembering that your choice of
          film is a reflection not only of ratings or reviews, but of larger global
          industry forces, marketing strategies, and cultural values that shape
          the power of film today.
        </p>
      </div>
    </div>
  );
}
