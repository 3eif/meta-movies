import Image from "next/image";
import GenreLanguageChart from "../text-analysis/GenreLanguageChart";
import LanguageProductionLineChart from "./LanguageProductionLineChart";
import TableauMapEmbed from "./TableauMapEmbed";

export default function AnalysisPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <header className="mb-14">
        <p className="text-[#c9a84c]/80 uppercase tracking-[0.3em] text-xs mb-3">
          Main Narrative
        </p>
        <h1 className="text-5xl font-bold text-[#c9a84c] mb-4">Analysis</h1>
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
            Those interested in specific culture or language&rsquo;s relationship
            with film can also learn from the visualizations presented here. As
            films become engrained in the overarching cultural development of
            nations, tracking and analyzing the languages used in films made
            over the span of our dataset (and beyond) could prove invaluable.
            Far in the future, there may come a time when a language can only
            be heard through the films its speakers once made. For the benefit
            of historical and linguistic research, movies must be studied to
            learn and adapt our collective approach to culture in the theaters.
          </p>
        </div>
      </header>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-[#c9a84c] mb-4">
          Thematic Patterns in Film Keywords
        </h2>
        <p className="text-[#999] text-sm leading-relaxed mb-6">
          [add transition connecting the literature review to the first
          visualization and explaining why keyword frequency helps introduce the
          cultural patterns inside the dataset]
        </p>

        <div className="bg-white rounded-lg p-4 md:p-6 mb-6">
          <div className="w-full aspect-10/7">
            <iframe
              className="w-full h-full rounded-lg"
              style={{ minHeight: "420px", minWidth: "320px" }}
              src="https://voyant-tools.org/tool/Cirrus/?visible=250&corpus=7b5af96b06e6109621d7fac901d24ece"
              title="Voyant Cirrus word cloud of film keywords"
              allowFullScreen
            />
          </div>
        </div>

        <div className="space-y-4 text-[#ccc] leading-relaxed">
          <p>
            This visualization was generated on Voyant to explore the most
            frequently occurring terms in the Key Words of our dataset. Each
            word represents a term extracted during text processing and the size
            of the word indicates its frequency within the dataset with larger
            words appearing more often across film descriptions. The
            visualization highlights dominant themes such as love, life, family,
            young, home, world, suggesting that the dataset strongly features
            relationship-driven plots. Other words such as death, murder,
            police, and war indicate the presence of genres such as crime,
            drama, social justice films and thrillers. This visualization
            provides insight into thematic patterns or recurring elements and
            genres.
          </p>
          <p className="text-[#999]">
            [add 1 to 2 sentences connecting these recurring themes back to the
            research questions about industry power, audience reception, or
            global circulation]
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-[#c9a84c] mb-4">
          Genre Distribution Across Major Languages
        </h2>
        <p className="text-[#999] text-sm leading-relaxed mb-6">
          [add transition showing how the project moves from keyword-level
          themes to language-level production patterns]
        </p>

        <div className="mb-6">
          <GenreLanguageChart />
        </div>

        <div className="space-y-4 text-[#ccc] leading-relaxed">
          <p>
            This stacked bar chart shows the distribution of movie genres across
            major original languages in the dataset. Each bar represents a
            genre, while the colored segments indicate the proportion of films
            produced in different languages. The visualization shows that genres
            such as Drama and Comedy dominate across all languages, while genres
            like Western, War and Music appear less frequently. Overall, the
            chart illustrates how genre popularity varies by language while
            revealing common genre trends shared across global film production.
          </p>
          <p className="text-[#999]">
            [add interpretation of why shared genre dominance matters and what
            it suggests about global film markets, audience expectations, or
            industry standardization]
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-[#c9a84c] mb-4">
          Non-English Film Production Over Time
        </h2>
        <p className="text-[#999] text-sm leading-relaxed mb-6">
          [add transition from genre distribution to how non-English production
          changes over time]
        </p>

        <div className="mb-6">
          <LanguageProductionLineChart />
        </div>

        <div className="space-y-4 text-[#ccc] leading-relaxed">
          <p className="text-[#999]">
            [add paragraph describing which languages grow most sharply over
            time, where major spikes appear, and what that suggests about global
            film production beyond English-language markets]
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-[#c9a84c] mb-4">
          Ratings and Revenue by Decade
        </h2>
        <p className="text-[#999] text-sm leading-relaxed mb-6">
          [add transition into how the relationship between ratings and revenue
          changes over time]
        </p>

        <div className="mb-6">
          <Image
            src="/charts/ratings-revenue-correlation.png"
            alt="Line and bubble chart showing Pearson correlation between vote average and log revenue by decade, with larger circles representing more films."
            width={2536}
            height={1572}
            unoptimized
            className="w-full h-auto rounded-lg"
          />
        </div>

        <p className="text-[#999] leading-relaxed">
          [add paragraph explaining whether higher ratings become less predictive
          of revenue in later decades and what that suggests about studio
          strategy, marketing, and audience behavior]
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-[#c9a84c] mb-4">
          Geographic Patterns of Film Production
        </h2>
        <p className="text-[#999] text-sm leading-relaxed mb-6">
          [add transition from language to geography and explain why location is
          necessary for understanding power in global film production]
        </p>

        <div className="bg-white rounded-lg p-4 md:p-6 mb-6 overflow-hidden">
          <TableauMapEmbed />
          <p className="text-[#666] text-sm mt-4 leading-relaxed">
            [add caption/source credit for the map and a short alt-text style
            description]
          </p>
        </div>

        <p className="text-[#999] leading-relaxed">
          [add paragraph explaining what the map shows, which countries or
          regions dominate production, and how that supports your argument about
          unequal industry power structures]
        </p>
      </section>
    </div>
  );
}
