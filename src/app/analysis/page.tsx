export default function AnalysisOverviewPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <header className="mb-14">
        <p className="text-[#c9a84c]/80 uppercase tracking-[0.3em] text-xs mb-3">
          Main Narrative
        </p>
        <h1 className="text-5xl font-bold text-[#c9a84c] mb-4">Overview</h1>
        <div className="w-16 h-0.5 bg-[#c9a84c] mb-8"></div>
        <div className="space-y-6 text-[#ccc] leading-relaxed text-base">
          <p>
            The global film industry is one of the largest industries in the
            world, generating billions of dollars annually, shaped by creative
            vision as well as economic forces. In this project, we examine how
            patterns of production, budget, revenue, and audience ratings reveal
            broader trends in global film culture and industry power structures.
            Using &ldquo;The Movies Dataset,&rdquo; which contains metadata for
            over 45,000 films and more than 26 million user ratings, we analyze
            the intersection between many different factors, such as country
            production, original language, genre and success. The dataset also
            compiles movie metadata financial information from The Movie
            Database (TMDB)&rsquo;s Open API and user rating data from
            GroupLen&rsquo;s MovieLens platform, allowing us to dive deeper into
            the industry and audience level perspectives. Since we have a wide
            range of data, films released during or before 2017, this dataset
            allows us to address our research questions by exploring both
            economic and humanistic patterns in the film industry. We were able
            to answer our research questions, as well as ground our arguments
            with quantitative evidence while also examining the limitations
            within the data itself.
          </p>

          <p>
            The literature explored topics related to the film industry that
            touched on many different aspects. The overall consensus between
            scholars is that the success of films across the globe is not
            determined by content alone, but by a combination of social,
            industrial, and economic factors. This idea was explored in depth in
            &ldquo;Television Cultures and Globalisation&rdquo; (Bignell &
            Woods, 2023), in which the authors considered how unequal power
            contributes to the domination of production and distribution of
            films by a small sector of the globe. Related to this idea, many of
            the sources reviewed focused on different social and economic
            factors that can be used to predict film success. Studies include
            how genre correlates with revenue and critic ratings (Francemone,
            2023), with some evidence even suggesting that R rated films receive
            lower ratings than more family-friendly films (Palsson, 2012). Other
            scholars have focused on the impact of factors such as awards won,
            budget (Garcia-del-Barrio, et al., 2017) and star-power in films
            (Liao, et al., 2022; Nelson & Glotfelty, 2012) on success in
            revenue and ratings. However, contradictions do exist in the
            literature. While some scholars argue that star power, large
            budgets, wide distribution, and marketing are the primary drivers of
            revenue, others argue for a greater impact of cultural values. These
            cultural values appear through film aspects such as themes, genres,
            and representations of racial, gender, ethnic, sexual, and economic
            diversity. There are also some disagreements about the value of
            stars in the cast and crew. While many scholars have found evidence
            suggesting that star power increases revenue and ratings, others
            argue that the findings are misleading. They claim that
            profitability is actually determined by budget or franchise size,
            which often goes hand-in-hand with star power, so the line of
            causation may get confused (Ravid, 1999). Finally, there have been
            disagreements on the effects of representation in the film industry.
            Some studies argue that films with a larger female or black cast
            receive lower critic ratings even when box office performance is
            strong (Hu, 2025; Lindner, et al., 2015). On the other hand, others
            support that ratings, revenue, and perceived quality typically have
            a positive correlation and impact each other equally. While there
            are contradictions in the literature, there are some concepts that
            most scholars tend to agree on. As previously mentioned, one such
            concept is the idea that film success is determined by industry
            factors other than the content itself (Bignell & Woods, 2023;
            Greenwald & Landry, 2023; Moon et al., 2010). There may be
            contradictions on what factors are the most important, but it is
            generally accepted that content does not act alone in determining
            the commercial success of a film. Another general agreement is that
            audience reception is impacted by the language, cultural
            familiarity, and national context of a film (Fu, 2013; Gao, et al,
            2020; Liao, et al., 2022). Global revenue and ratings may vary
            widely because of cultural differences across countries that affect
            audience expectations and desires of film content. Finally, a
            typical consensus within the literature is that large production
            companies and independent film studios operate differently.
            Blockbuster studios tend to prioritize scale and global appeal while
            independent film productions focus more on the opinions of critics
            and niche audiences (Briggs, 2022; King, et al., 2013). The
            literature available today explores many questions and aspects of
            the film industry, however some questions still remain unanswered.
            These include how streaming platforms have affected relationships
            between ratings, revenue, and global popularity and the effect of
            westernized industry choices on global audiences&rsquo; tastes. Also
            important to explore in the future are studies looking at more
            recent data, specifically post-pandemic data, as well as independent
            and international film data.
          </p>

          <p>
            Due to how subjective film can be as an art form, it can be
            difficult to analyze strictly by the numbers. However, by combining
            dataset analysis with this site&rsquo;s visualizations we hope to
            contextualize the importance of film industry demographics. Through
            attempting to answer our research questions we hope to illuminate
            the impacts of culture, language, and nationality on film
            production and distribution. Although there are many scholarly
            papers written about the effects that social factors have on movie
            success, for example, we felt that using these visualizations to
            present our findings would make the depth of research on movie
            industry demographics more accessible and readable. By relying on
            the concept that movie success is determined by industry factors
            rather than content we can make conclusions about the relationship
            between demographics and film metrics. One such conclusion is that
            unequal access to industry resources affects an audience&rsquo;s
            taste, reception, and ratings of a film. A major weakness of the
            data set we studied was its focus almost exclusively on films made
            in Western countries, especially the United States. However, this is
            representative of the film industry as a whole. The data we are
            left with, after accounting for its inherent bias, can still reveal
            important findings. By interpreting the data available and its
            context within the industry, patterns and trends in revenue and
            budget can be presented informatively. Filmmakers and anyone else
            interested in film production, distribution, or marketing can learn
            more about how to adjust their product for worldwide release and
            suit the tastes of people everywhere. Those not on the production
            side of movies benefit from these findings as well. Understanding
            how language and international dynamics play into film distribution
            can keep consumers aware of film marketing strategies and success.
            Those interested in a specific culture or language&rsquo;s
            relationship with film can also learn from the visualizations
            presented here. As films become engrained in the overarching
            cultural development of nations, tracking and analyzing the
            languages used in films made over the span of our dataset (and
            beyond) could prove invaluable. Far in the future, there may come a
            time when a language can only be heard through the films its
            speakers once made. For the benefit of historical and linguistic
            research, movies must be studied to learn and adapt our collective
            approach to culture in the theaters.
          </p>
        </div>
      </header>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-[#c9a84c] mb-6">
          Research Questions
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "How has the relationship between ratings and commercial success changed over time, and what might this reveal about studio goals and audience values?",
            "Are films with unconventional genres or production choices more likely to come from independent studios, and how are they received compared to mainstream productions?",
            "How do patterns of language, country of production, and genre intersect to shape which films achieve international popularity versus remaining regionally successful?",
          ].map((question) => (
            <div key={question} className="card p-6">
              <p className="text-[#ccc] leading-relaxed text-sm">{question}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-[#c9a84c] mb-4">
          Historical Context
        </h2>
        <p className="text-[#999] text-sm leading-relaxed mb-6">
          [add short timeline transition]
        </p>

        <div className="bg-white rounded-lg p-4 md:p-6 mb-6">
          <iframe
            src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=v2%3A2PACX-1vRWIpWgGwIkxIV_ZafxQYEHGWL9BhpgBqxWM1hYo4mbpi2p96QgJd_Z2jaGrQXJAdB5ArbaR8CsWkHA&font=Default&lang=en&initial_zoom=2&width=100%25&height=650"
            width="100%"
            height="650"
            allowFullScreen
            title="Timeline of key developments in global film industry history"
            className="rounded-lg border-0"
          />
        </div>

        <p className="text-[#999] leading-relaxed">
          [add brief timeline analysis]
        </p>
      </section>
    </div>
  );
}
