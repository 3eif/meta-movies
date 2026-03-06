const scholarshipSources = [
  {
    title: "[add citation]",
    annotation: "[add short annotation]",
  },
  {
    title: "[add citation]",
    annotation: "[add short annotation]",
  },
  {
    title: "[add citation]",
    annotation: "[add short annotation]",
  },
];

const dataSources = [
  {
    title: "[add dataset citation]",
    annotation: "[add short annotation]",
  },
  {
    title: "[add dataset citation]",
    annotation: "[add short annotation]",
  },
];

const mediaSources = [
  {
    title: "[add image or media citation]",
    annotation: "[add short annotation]",
  },
];

const toolSources = [
  {
    title: "[add tool or documentation citation]",
    annotation: "[add short annotation]",
  },
  {
    title: "[add tool or documentation citation]",
    annotation: "[add short annotation]",
  },
];

type Entry = {
  title: string;
  annotation: string;
};

function BibliographySection({
  heading,
  description,
  entries,
}: {
  heading: string;
  description: string;
  entries: Entry[];
}) {
  return (
    <section className="mb-14">
      <h2 className="text-3xl font-bold text-[#c9a84c] mb-3">{heading}</h2>
      <p className="text-[#999] leading-relaxed mb-6">{description}</p>
      <div className="space-y-5">
        {entries.map((entry, index) => (
          <article
            key={`${heading}-${index}`}
            className="card p-6"
          >
            <p className="text-[#e8e8e8] leading-relaxed">{entry.title}</p>
            <p className="text-[#999] leading-relaxed mt-3">
              {entry.annotation}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function BibliographyPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <header className="mb-14">
        <p className="text-[#c9a84c]/80 uppercase tracking-[0.3em] text-xs mb-3">
          Sources and Citations
        </p>
        <h1 className="text-5xl font-bold text-[#c9a84c] mb-4">
          Annotated Bibliography
        </h1>
        <div className="w-16 h-0.5 bg-[#c9a84c] mb-8"></div>
        <div className="space-y-4 text-[#ccc] leading-relaxed">
          <p className="text-[#999]">
            [use one citation style consistently]
          </p>
        </div>
      </header>

      <BibliographySection
        heading="Secondary Sources"
        description="[add books, articles, essays, and class readings here]"
        entries={scholarshipSources}
      />

      <BibliographySection
        heading="Data Sources"
        description="[add datasets and APIs here]"
        entries={dataSources}
      />

      <BibliographySection
        heading="Images and Media"
        description="[add image and media credits here]"
        entries={mediaSources}
      />

      <BibliographySection
        heading="Tools and Documentation"
        description="[add tools and documentation here]"
        entries={toolSources}
      />
    </div>
  );
}
