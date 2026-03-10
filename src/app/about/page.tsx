import Link from "next/link";
import TeamSection from "./TeamSection";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold text-[#c9a84c] mb-4">About</h1>
      <div className="w-16 h-0.5 bg-[#c9a84c] mb-10"></div>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#c9a84c] mb-6">
          Project Levels
        </h2>
        <div className="pb-8 mb-8 border-b border-[#c9a84c]/10">
          <h3 className="text-lg font-bold text-[#c9a84c] mb-3">
            Selecting Sources
          </h3>
          <div className="space-y-4 text-[#ccc] page-copy">
            <p>
              Our main dataset, The Movies Dataset, includes data from over
              45,000 films, categorized by name, genre, directors, production
              companies, production countries, language, cast and crew gender,
              revenue, budget, and audience ratings. This dataset was selected
              because of its breadth of information that provides insight into
              patterns of genre, global distribution, and revenue. However, we
              also recognized that the dataset reflects existing global power
              structures, particularly the dominance of Western and
              English-language film industries, creating silences in the
              representation of the global industry. More information about our
              dataset and its limitations can be found in our{" "}
              <Link
                href="/data-critique"
                className="text-[#c9a84c] hover:text-[#e8d48b] underline underline-offset-4"
              >
                data critique
              </Link>
              .
            </p>
            <p>
              To address these limitations, we used peer-reviewed scholarly
              sources on global cinema and systems of production. These
              secondary sources were selected to contextualize patterns observed
              in the dataset, specifically the concentration of film production
              in the United States and Western Europe. This gave us insight into
              how historical, economic, and political factors have shaped the
              film industry throughout history into the present. This approach
              follows Michel-Rolph Trouillot&rsquo;s ideas in Silencing the Past
              (1995), which emphasizes how power influences what becomes visible
              in data and historical narratives. More information on the
              secondary sources we used to supplement our data can be found in
              our{" "}
              <Link
                href="/bibliography"
                className="text-[#c9a84c] hover:text-[#e8d48b] underline underline-offset-4"
              >
                annotated bibliography
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="pb-8 mb-8 border-b border-[#c9a84c]/10">
          <h3 className="text-lg font-bold text-[#c9a84c] mb-3">
            Data Processing
          </h3>
          <p className="text-[#ccc] page-copy">
            The dataset was already relatively clean, but we used R to do some
            additional data cleaning and organization to prepare it for
            analysis. We removed duplicate entries so that each movie appeared
            only once in the dataset. We also cleaned messy text fields and
            replaced blank cells with NA to standardize missing values. We
            replaced values of 0 in variables such as budget, revenue, and
            runtime with NA when those values likely represented missing
            information. These steps helped make the dataset more consistent
            and easier to analyze and visualize. To make our visualizations and
            graphs, we used Tableau and Python. We chose these tools because of
            our team members’ familiarity using them as well as knowledge
            gained from Professor Sabo during course lectures. The types of
            visualizations we chose were dependent on the data being studied.
            Factors such as qualitative or quantitative, and range of values
            helped us determine what types of graphs or charts we created. To
            create a text analysis of key terms used in film descriptions we
            used Voyant. Finally, we used Timeline.js to create our timeline of
            important historical events that have shaped the film industry into
            what it is today.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-[#c9a84c] mb-3">
            Narrative Presentation
          </h3>
          <p className="text-[#ccc] page-copy">
            Our web developer, Seif, is quite familiar with Vercel and coding,
            so we decided to use Vercel rather than WordPress to create and
            organize our argument. We chose a dark theme with gold and red
            accents as a subtle nod to the Oscars color scheme, thematically
            representing Hollywood and the entertainment industry. We included
            hyperlinks to previous and next pages as well as to any sections
            mentioned throughout the project. Our headlines and subtext are
            included for clarity and written in easily legible fonts for
            accessibility.
          </p>
        </div>
      </section>

      <TeamSection />

      <section>
        <h2 className="text-2xl font-bold text-[#c9a84c] mb-6">
          Acknowledgments
        </h2>
        <ul className="text-[#ccc] page-copy space-y-4">
          <li>
            <span className="text-[#e8e8e8] font-semibold">
              Pietro Santachiara
            </span>{" "}
            for the continued support over the course of this project. Your
            guidance in choosing a database and forming our visualizations was
            incredibly insightful. Thank you!
          </li>
          <li>
            <span className="text-[#e8e8e8] font-semibold">
              Dr. Nicholas Sabo
            </span>{" "}
            for sharing your knowledge and passion for Digital Humanities. Your
            course gave us helpful tools and skills to succeed in the future.
            Thank you!
          </li>
        </ul>
      </section>
    </div>
  );
}
