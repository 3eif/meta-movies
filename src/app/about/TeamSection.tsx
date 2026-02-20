"use client";

import Image from "next/image";
import { useState } from "react";

const team = [
  {
    name: "Seif Abdelaziz",
    image: "/headshots/seifa.png",
    linkedin: "https://www.linkedin.com/in/seifabdelaziz/",
    role: `Hi, I am a fourth year Computer Science major. As the web designer, I was responsible for deploying and designing the website using HTML, CSS, and JavaScript.`,
    favFilm: "My favorite film is Godzilla Minus One.",
  },
  {
    name: "Kendall Armstrong",
    image: "/headshots/kendalla.png",
    linkedin: "https://www.linkedin.com/in/kendall-armstrong",
    role: `Hi, I'm Kendall! I am a third year Communications student with minors in Digital Humanities and Film, Television, and Digital Media. As project manager, I kept timelines and assignments organized and maintained efficient communication amongst the team.`,
    favFilm: "My favorite film is Mamma Mia!",
  },
  {
    name: "Lucy Hager",
    image: "/headshots/lucy.png",
    linkedin: "https://www.linkedin.com/in/lucy-hager/",
    role: `Hi, I'm Lucy, a third year Theater major and Professional Writing minor. As content developer, I ensure our narrative supports our data and visualizations, and I worked on the data critique and other written text.`,
    favFilm: "My favorite film is Black Swan!",
  },
  {
    name: "Shane Hanson",
    image: "/headshots/shane.png",
    altImage: "/headshots/shane-bald.png",
    linkedin: "https://www.linkedin.com/in/shane-hanson-489a40324/",
    role: `Hello, I am a third year Computer Science and Engineering major. My role in the project is data visualization specialist. I was responsible for ensuring all data visualizations are fine-tuned, readable, and accurate. I also learned how to use data visualization software, namely Tableau.`,
    favFilm: "My favorite film is Fargo.",
  },
  {
    name: "Kendall Keely",
    image: "/headshots/kendallk.png",
    linkedin: "https://www.linkedin.com/in/kendall-keely-83968729b",
    role: `Hello, I am a fourth year Statistics and Data Science Major with a minor in Mathematics. My role in the project is editor, responsible for overseeing the overall "look" of the project to ensure consistent design, readability, and accessibility.`,
    favFilm: "My favorite film is Shutter Island.",
  },
  {
    name: "Erika Yiu",
    image: "/headshots/erika.png",
    linkedin: "https://www.linkedin.com/in/erika-yiu-0a0b24264/",
    role: `Hi, I am a fourth year Statistics and Data Science major with a minor in Accounting. As a data specialist, I was responsible for cleaning and refining the data set so that it was standardized, usable, and well formatted.`,
    favFilm: "My favorite film is Inside Out!",
  },
];

export default function TeamSection() {
  const [shaneBald, setShaneBald] = useState(false);

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-[#c9a84c] mb-6">The Team</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {team.map((member) => {
          const isShane = member.name === "Shane Hanson";
          const imageSrc =
            isShane && shaneBald ? member.altImage! : member.image;

          return (
            <div
              key={member.name}
              className="bg-[#141414] border border-[#c9a84c]/10 p-6 hover:border-[#c9a84c]/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <Image
                  src={imageSrc}
                  alt={member.name}
                  width={80}
                  height={80}
                  className={`rounded-full object-cover w-20 h-20 shrink-0 ${isShane ? "cursor-pointer" : ""}`}
                  onDoubleClick={
                    isShane ? () => setShaneBald((prev) => !prev) : undefined
                  }
                />
                <div>
                  <h3 className="text-lg font-bold text-[#e8e8e8]">
                    {member.name}
                  </h3>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#c9a84c] hover:text-[#e8d48b] transition-colors mt-1"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
              <p className="text-sm text-[#999] mt-3">
                {member.role}
              </p>
              <p className="text-sm text-[#999] mt-2 italic">
                {member.favFilm}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
