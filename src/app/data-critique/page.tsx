export default function DataCritique() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold text-[#c9a84c] mb-4">Data Critique</h1>
      <div className="w-16 h-0.5 bg-[#c9a84c] mb-10"></div>

      <div className="space-y-6 text-[#ccc] leading-relaxed">
        <p>
          Our dataset, &ldquo;The Movies Dataset,&rdquo; contains the data and
          metadata of over 45,000 movies and has provided a strong launching
          point for our research questions. The dataset is composed of
          movie-level metadata, including movie titles, release dates, genres,
          and production companies. The metadata also contains the available
          languages, countries, posters, runtime, status, and popularity metrics
          of the movies, including TMDB votes and IMDB IDs. To gauge preference,
          user rating data of 26 million ratings from 270k users on a 1-5 scale
          represents audience ranking data, with an additional subset of 100k
          ratings from 700 users for added depth. Production and financial
          information are presented in budget/revenue figures, production
          companies and production countries. In terms of descriptions and
          narrative data, movie plot summaries, keyword tags, themes, settings,
          story elements are utilized to provide background data and context for
          each movie, helping to clarify any confusion surrounding movie genre
          and topic. Compiled cast and crew lists are also provided for
          information regarding labor and associated employees and actors.
        </p>

        <p>
          The dataset was compiled from multiple existing sources. Movie ratings
          were sourced from GroupLens, an academic research lab at the University
          of Minnesota that operates the MovieLens platform, where people
          voluntarily rate films. Movie metadata, credits, and plot keywords were
          pulled from The Movie Database (TMDB)&apos;s Open API which is a
          crowdsourced database maintained by volunteers. The dataset itself was
          compiled by Rounak Banik as part of a Springboard Data Science bootcamp
          capstone project. GroupLens operates through university funding and
          research grants. TMDB relies completely on volunteer contributions and
          has no direct institutional funding. Since the dataset was compiled
          from multiple different sources, the data might have biases and
          limitations of its original sources, including the fact that MovieLens
          reviewers are from volunteers who chose to participate and not a random
          sample of audiences.
        </p>

        <p>
          This vast dataset displays both economic and production-based patterns,
          such as the relationship between budget, revenue, and movie popularity,
          as well as humanistic correlations, including recurring collaborations
          between actors, directors or studios, patterns in ratings and user
          preferences, gender distribution among cast and crew roles, and trends
          in genres, languages, and countries over time. The data contains the
          data for movies produced before and during 2017, so we can analyze
          these trends over time to determine any drastic changes, or lack
          thereof.
        </p>

        <p>
          However, the data does contain some gaps. The data is only collected up
          through 2017, so to analyze more recent movie trends, we would need to
          source another dataset with a catalog of recently produced movies. The
          dataset also lacks demographic information on the cast, crew, and
          talent, as well as the demographics of the audience and users who
          reviewed and rated the films. The dataset cannot reveal qualitative
          data, as there are no written reviews or audience emotional reaction,
          meaning we cannot distinguish reasons behind given ratings. We cannot
          interpret the filmmakers&apos; motivations, creative constraints, or
          production challenges, or audience interpretations beyond numerical
          ratings. There&apos;s also no category for production duration, which
          can significantly affect budget and revenue, so we lack that
          correlation. Additionally, the dataset relies on films already included
          in the TMDB and MovieLens databases. Movies that were poorly archived
          or produced outside dominant Western film industries may be
          underrepresented in these datasets, therefore affecting the
          generalization of the data to the global film industry.
        </p>

        <p>
          The collected data was divided quantitatively, using numerical values
          to measure movie success through revenue, ratings, and vote counts.
          While this makes the data easily analyzable, it leaves out more
          qualitative values, so we would need to utilize additional datasets to
          fill the gaps due to our data&apos;s ontology. The reported gender
          information is limited and binary (represented by either a 1 for
          female, or a 2 for male), which doesn&apos;t represent the spectrum of
          gender diversity within the industry. The listed film labor is divided
          into fixed roles, such as actor, director, and writer, which also
          doesn&apos;t illuminate how collaborative filmmaking really is. The
          popularity metrics and ratings may also be skewed, as data was
          collected from MovieLens reviews, a mostly Western, English-speaking
          movie audience, potentially leading to bias that&apos;s unmentioned in
          the dataset. Overall, while &ldquo;The Movies Dataset&rdquo; enables
          large-scale analysis of film production, popularity, and audience
          opinions, it reduces cinema to quantifiable metrics, leaving out the
          cultural and historical factors that shape the film industry.
        </p>
      </div>
    </div>
  );
}
