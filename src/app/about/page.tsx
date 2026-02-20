export default function About() {
  const team = [
    { name: "Seif Abdelaziz", role: "Hi, I am a fourth year Computer Science major. As the web designer, I was responsible for deploying and designing the website using HTML, CSS, and JavaScript.
My favorite movie is Godzilla Minus One." },
    { name: "Kendall Armstrong", role: "Hi, I’m Kendall! I am a third year Communications student with minors in Digital Humanities and Film, Television, and Digital Media. As project manager, I kept timelines and assignments organized and maintained efficient communication amongst the team. 
My favorite movie is Mamma Mia!" },
    { name: "Lucy Hager", role: "Hi, I’m Lucy, a third year Theater major and Professional Writing minor. As content developer, I ensure our narrative supports our data and visualizations, and I worked on the data critique and other written text. 
My favorite movie is Black Swan!" },
    { name: "Shane Hanson", role: "Hello, I am a third year Computer Science and Engineering major. My role in the project is data visualization specialist. I was responsible for ensuring all data visualizations are fine-tuned, readable, and accurate. I also learned how to use data visualization software, namely Tableau.
My favorite movie is Fargo." },
    { name: "Kendall Keely", role: "Hello, I am a fourth year Statistics and Data Science Major with a minor in Mathematics. My role in the project is editor, responsible for overseeing the overall "look" of the project to ensure consistent design, readability, and accessibility. 
My favorite movie is Shutter Island. " },
    { name: "Erika Yiu", role: "Hi, I am a fourth year Statistics and Data Science major with a minor in Accounting. As a data specialist, I was responsible for cleaning and refining the data set so that it was standardized, usable, and well formatted.
My favorite movie is Inside Out!" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold text-[#c9a84c] mb-4">About</h1>
      <div className="w-16 h-0.5 bg-[#c9a84c] mb-10"></div>

      {/* Project Description */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#c9a84c] mb-6">
          The Project
        </h2>
        <div className="space-y-4 text-[#ccc] leading-relaxed">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
            omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </section>

      {/* Sources, Processing, Presentation */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#c9a84c] mb-6">
          Project Levels
        </h2>
        {[
          {
            title: "Sources",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          },
          {
            title: "Processing",
            text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
          {
            title: "Presentation",
            text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
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
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#c9a84c] mb-6">The Team</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-[#141414] border border-[#c9a84c]/10 p-6 hover:border-[#c9a84c]/30 transition-colors"
            >
              <h3 className="text-lg font-bold text-[#e8e8e8]">
                {member.name}
              </h3>
              <p className="text-sm text-[#999] mt-2">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Acknowledgments */}
      <section>
        <h2 className="text-2xl font-bold text-[#c9a84c] mb-6">
          Acknowledgments
        </h2>
        <p className="text-[#ccc] leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat.
        </p>
      </section>
    </div>
  );
}
