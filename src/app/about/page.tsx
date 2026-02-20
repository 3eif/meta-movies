export default function About() {
  const team = [
    { name: "Seif Abdelaziz", role: "Lorem ipsum dolor sit amet" },
    { name: "Kendall Armstrong", role: "Consectetur adipiscing elit" },
    { name: "Lucy Hager", role: "Sed do eiusmod tempor incididunt" },
    { name: "Shane Hanson", role: "Ut labore et dolore magna aliqua" },
    { name: "Kendall Keely", role: "Ut enim ad minim veniam" },
    { name: "Erika Yiu", role: "Quis nostrud exercitation ullamco" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <p className="text-[#c9a84c]/60 uppercase tracking-[0.3em] text-xs mb-3">
        Group A2
      </p>
      <h1 className="text-5xl font-bold text-[#c9a84c] mb-4">About</h1>
      <div className="w-16 h-0.5 bg-gradient-to-r from-[#c9a84c] to-transparent mb-12"></div>

      {/* Project Description */}
      <section className="mb-20">
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

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent mb-20" />

      {/* Sources, Processing, Presentation */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-[#c9a84c] mb-6">
          Project Levels
        </h2>
        {[
          {
            title: "Sources",
            num: "01",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          },
          {
            title: "Processing",
            num: "02",
            text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
          {
            title: "Presentation",
            num: "03",
            text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
          },
        ].map((level) => (
          <div key={level.title} className="card p-6 mb-4 flex gap-5">
            <p className="text-[#c9a84c]/20 text-3xl font-bold font-[family-name:var(--font-playfair)] shrink-0">
              {level.num}
            </p>
            <div>
              <h3 className="text-lg font-bold text-[#c9a84c] mb-2">
                {level.title}
              </h3>
              <p className="text-[#ccc] leading-relaxed text-sm">
                {level.text}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent mb-20" />

      {/* Team */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-[#c9a84c] mb-6">The Team</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {team.map((member) => (
            <div key={member.name} className="card p-6">
              <h3 className="text-lg font-bold text-[#e8e8e8]">
                {member.name}
              </h3>
              <p className="text-sm text-[#666] mt-2">{member.role}</p>
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
