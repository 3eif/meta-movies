import Image from "next/image";

import AnalysisPager from "../AnalysisPager";
import BudgetRevenueScatterChart from "../BudgetRevenueScatterChart";

export default function RatingsCommercialSuccessPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <header className="mb-14">
        <p className="text-[#c9a84c]/80 uppercase tracking-[0.3em] text-xs mb-3">
          Analysis
        </p>
        <h1 className="text-5xl font-bold text-[#c9a84c] mb-4">
          Ratings &amp; Commercial Success
        </h1>
        <div className="w-16 h-0.5 bg-[#c9a84c] mb-8"></div>
        <p className="text-[#ccc] page-copy">
          How has the relationship between ratings and commercial success
          changed over time, and what might this reveal about studio goals and
          audience values?
        </p>
      </header>

      <section className="space-y-6 text-[#ccc] page-copy mb-16">
        <h2 className="text-3xl font-bold text-[#c9a84c]">
          Ratings &amp; Commercial Success
        </h2>
        <p>
          We wanted to first understand the relationship between general
          audience ratings and commercial success to understand whether
          higher-rated films tend to generate greater revenue. By analyzing
          rating scores alongside box office performance over time, we aimed to
          identify patterns in how strongly film quality according to audiences
          correlates with financial outcomes. Observing this relationship over
          time also helps to reveal whether the importance of ratings in
          determining commercial success has strengthened or weakened as the
          film industry has evolved.
        </p>
      </section>

      <section className="mb-16">
        <div className="mb-6 rounded-lg border border-[#c9a84c]/12 bg-[#0c0c0c] p-6 shadow-[0_0_30px_rgba(0,0,0,0.24)]">
          <Image
            src="/charts/ratings-revenue-correlation.png"
            alt="Line and bubble chart showing Pearson correlation between vote average and log revenue by decade, with larger circles representing more films."
            width={2536}
            height={1572}
            unoptimized
            className="h-auto w-full rounded-lg"
          />
        </div>
        <p className="text-[#ccc] page-copy">
          This correlation plot shows the relationship between film ratings and
          box office revenue across different decades. Each point represents the
          Pearson correlation between the average IMDb rating of films and the
          logarithm of their revenue for that decade, while the size of each
          point reflects the number of films included in the sample. The
          visualization indicates that the relationship between revenue and
          ratings was strongest in the 1970s and 1980s, suggesting that higher
          rated films at the time were more closely associated with higher
          revenue during that period. The correlation steadily declines from the
          1990s and on, reaching the lowest correlation in the 2000s and 2010s.
          Overall, the chart suggests that while film quality once had a
          stronger association with financial success, the relationship has
          weakened over the decades as other factors such as marketing and
          globalization have become increasingly important in determining box
          office performance.
        </p>
      </section>

      <section className="mb-16">
        <BudgetRevenueScatterChart />
        <p className="text-[#999] page-muted mt-4">
          This chart uses a mixed sample of films with non-missing budget and
          revenue values, including top-grossing outliers, to keep the
          visualization readable.
        </p>
        <p className="text-[#ccc] page-copy mt-6">
          This scatter plot compares film budgets and box office revenue across
          films in the dataset. The visualization shows that while films with
          larger budgets often earn higher revenue, the relationship is not
          exact. Some high-budget films underperform, while some lower-budget
          films earn strong returns. This supports one of the main ideas of our
          project, that commercial success is shaped by more than budget alone
          and reflects a wider mix of industrial, cultural, and economic
          factors.
        </p>
      </section>

      <section className="space-y-6 text-[#ccc] page-copy mb-16">
        <h2 className="text-3xl font-bold text-[#c9a84c]">
          Earlier Period (1960s-1980s): Ratings More Closely Linked to Success
        </h2>
        <p>
          Our analysis began with film data from the 1960s. By examining the
          correlation between average IMDB vote scores and revenue, we found
          that from 1960 through the 1980s, audience ratings strongly correlated
          with revenue earned. In the 1960s, the Pearson correlation coefficient
          between ratings and revenue was approximately r=0.15 (n=148). This
          relationship strengthened in the following decades, rising to around
          r=0.24 (n=250) in the 1970s and eventually r=0.28 (n=870) in the
          1980s.
        </p>
        <p>
          These values indicate a positive relationship during this period when
          films with higher audience ratings were more likely to generate higher
          revenues. This increasing correlation across these decades suggests
          that audience perceptions of film quality were relatively strong
          predictors of financial success. The industry at the time possessed
          fewer entertainment alternatives and more limited distribution
          channels, meaning audience recommendations and word-of-mouth likely
          played a significant role in shaping a film&rsquo;s commercial
          success. As a result, films that were well received by audiences
          benefited financially.
        </p>
      </section>

      <section className="space-y-6 text-[#ccc] page-copy mb-16">
        <h2 className="text-3xl font-bold text-[#c9a84c]">
          Modern Era (1990s-2010s): Evolving Relationships
        </h2>
        <p>
          Following the 1980s, the correlation between ratings and revenue began
          to steadily decrease. In the 1990s, the relationship dropped to
          approximately r=0.18 (n=1,253), indicating that while higher-rated
          films still tended to perform somewhat better financially, the
          relationship was noticeably weaker than in previous decades. This
          trend continued into the 2000s, where the correlation fell to roughly
          r=0.10 (n=2,097), and declined slightly further in the 2010s to around
          r=0.08 (n=2,069).
        </p>
        <p>
          Although the relationship remains positive, the declining correlation
          suggests that audience ratings have become less predictive of
          commercial success over time. The data also show a dramatic increase
          in the number of films released in later decades, as reflected in the
          larger sample sizes. With thousands of films competing for audience
          attention, financial outcomes may increasingly depend on factors
          beyond audience ratings alone.
        </p>
        <p>
          This shift suggests that while audience reception still matters,
          additional forces within modern studio goals and audience values, may
          now play a larger role in shaping a film&rsquo;s commercial
          performance.
        </p>
      </section>

      <section className="space-y-6 text-[#ccc] page-copy">
        <h2 className="text-3xl font-bold text-[#c9a84c]">
          Studio Goals &amp; Audience Values
        </h2>
        <p>
          The weakening relationship between audience ratings and financial
          success suggests that the factors that previously drove box office
          performance have changed over time. While earlier decades saw a
          stronger connection between film quality and revenue, more recent
          decades indicate that financial success is increasingly influenced by
          other factors.
        </p>
        <p>
          Our research using secondary sources supports this shift. According to
          Moon et al. (2010), movie ratings and revenues interact dynamically,
          but ratings are only one of several factors influencing financial
          performance. Their findings show a reverse effect in that early
          financial success can increase a film&rsquo;s visibility, which may
          then influence audience ratings. They also found that advertising and
          promotion are most effective when positive ratings already exist,
          suggesting that marketing strategies and public perception work
          together to shape a film&rsquo;s success. In today&rsquo;s globalized
          media environment, this relationship may be amplified by digital
          platforms and international distribution networks. As Bignell and
          Woods (2023) explain, modern media industries operate within complex
          global systems of production, marketing, and distribution in which
          films can reach audiences across national boundaries within seconds.
          Streaming services, global marketing campaigns, online rating
          platforms, and social media allow audience reactions to spread quickly
          and influence public perception worldwide. Because of these global
          networks, a film&rsquo;s early popularity and visibility can spread
          quickly, increasing both revenue and audience engagement.
        </p>
        <p>
          Other studies also suggest that industry strategies play a significant
          role in shaping financial outcomes. Greenwald and Landry (2023)
          emphasize that filmmaking is both a creative and business-driven
          process, where factors such as financing, marketing campaigns, and
          distribution access significantly influence a film&rsquo;s reach and
          profitability. Palsson et al. (2012) show that the content rating of a
          film (G, PG, PG-13, or R) can also strongly affect box office
          performance, because it determines the size of the potential audience.
          Their study finds that films that narrowly avoid receiving an R rating
          earn significantly higher revenues than comparable films that receive
          the stricter rating. This suggests that studios may strategically
          adjust film content or marketing in order to secure ratings that allow
          them to reach larger audiences, regardless of how that decision may be
          interpreted by audiences.
        </p>
        <p>
          All of these findings suggest that modern studios are prioritizing
          aspects other than critic or audience ratings. This may include
          big-budget marketing campaigns, development of franchises, star power,
          and global distribution. Research has supported that blockbuster films
          and sequels often generate high revenues regardless of ratings, which
          may lead studios to invest more heavily in recognizable brands rather
          than unique or experimental films whose reception is less predictable.
        </p>
        <p>
          Simultaneously, it may be possible that values within audiences are
          changing over time and contributing to a weaker correlation between
          ratings and revenue. As discussed, the changing media landscape has
          influenced how audiences form opinions on films, with the help of peer
          reviews. Along with this, streaming services provide convenience and
          accessibility to a multitude of films and television programs,
          allowing viewers to be more selective in their media consumption. In
          the past, the main way to view a film was in the theater, meaning the
          viewing options were limited. However, in today&rsquo;s society,
          viewers can choose from a much larger selection and can watch many
          films with ease in the comfort of their own homes. This means that
          these audiences are more likely to choose that may pique their
          interests, even if the ratings do not reflect a high quality. In
          earlier decades, audiences had fewer ways to discover films, so
          ratings and word-of-mouth had a much stronger influence on whether
          people went to the theater to see a movie. Finally, studies such as Hu
          (2025) have found that public evaluations do not always match critic
          ratings. The findings show that high critic ratings often correlate
          with high revenue, but audience ratings do not always. Culturally
          diverse films in particular receive lower critic ratings and yet
          maintain successful box office performances. This diversion highlights
          how audience perspectives and cultural experiences can shape reception
          in ways that differ from professional criticism. It also suggests that
          audiences are increasingly seeking representation and relatable
          narratives, even when these films are not evaluated as highly by
          critics.
        </p>
      </section>

      <AnalysisPager
        href="/analysis/production-choices"
        label="Genres Across Languages"
      />
    </div>
  );
}
