import TeamSection from "./TeamSection";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold text-[#c9a84c] mb-4">About</h1>
      <div className="w-16 h-0.5 bg-[#c9a84c] mb-10"></div>

      {/* Sources, Processing, Presentation */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#c9a84c] mb-6">
          Project Levels
        </h2>
        {[
          {
            title: "Sources",
            text: "Our main dataset, The Movies Dataset, includes data from over 45,000 films, categorized by name, genre, directors, production companies, production countries, cast gender, etc. Our additional sources were selected to attempt to fill any data silences found within the main dataset, and to provide additional context and production patterns within the film industry.",
          },
          {
            title: "Processing",
            text: "The dataset was initially already quite clean, but we used Python to do a brief clean, then Excel to visually organize the data in a comprehensible format. To make our visualizations and graphs, we used Tableau, Excel, and Python.",
          },
          {
            title: "Presentation",
            text: "Our web developer, Seif, is quite familiar with Vercel and coding, so we decided to use Vercel rather than WordPress to create and organize our argument. We chose a dark theme with gold and red accents as a subtle nod to the Oscars color scheme, thematically representing Hollywood and the entertainment industry.",
          },
        ].map((level) => (
          <div
            key={level.title}
            className="bg-[#141414] border border-[#c9a84c]/10 p-6 mb-4"
          >
            <h3 className="text-lg font-bold text-[#c9a84c] mb-3">
              {level.title}
            </h3>
            <p className="text-[#ccc] leading-relaxed text-sm">
              {level.text}
            </p>
          </div>
        ))}
      </section>

      {/* Team */}
      <TeamSection />

      {/* Acknowledgments */}
      <section>
        <h2 className="text-2xl font-bold text-[#c9a84c] mb-6">
          Acknowledgments
        </h2>
        <ul className="text-[#ccc] leading-relaxed space-y-4">
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
