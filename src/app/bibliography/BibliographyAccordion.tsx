"use client";

import { useEffect } from "react";

type Entry = {
  id?: string;
  label: string;
  citation: string;
  annotation: string;
};

function slugifyEntryId(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getEntryId(entry: Entry) {
  return entry.id ?? slugifyEntryId(entry.label);
}

function openHashTarget() {
  const hash = window.location.hash.slice(1);

  if (!hash) {
    return;
  }

  const target = document.getElementById(hash);

  if (!(target instanceof HTMLDetailsElement)) {
    return;
  }

  target.open = true;

  requestAnimationFrame(() => {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

export default function BibliographyAccordion({
  entries,
}: {
  entries: Entry[];
}) {
  useEffect(() => {
    openHashTarget();

    window.addEventListener("hashchange", openHashTarget);

    return () => {
      window.removeEventListener("hashchange", openHashTarget);
    };
  }, []);

  return (
    <div className="space-y-4">
      {entries.map((entry) => {
        const entryId = getEntryId(entry);

        return (
          <details
            key={entryId}
            id={entryId}
            className="group rounded-xl border border-[#c9a84c]/15 bg-[#111111]/80 open:border-[#c9a84c]/35"
            style={{ scrollMarginTop: "6rem" }}
          >
            <summary className="cursor-pointer list-none px-5 py-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[#e8e8e8] font-semibold">{entry.label}</p>
                  <p className="text-[#999] page-muted mt-1">
                    {entry.citation}
                  </p>
                </div>
                <span className="text-[#c9a84c] text-xl leading-none transition-transform group-open:rotate-45">
                  +
                </span>
              </div>
            </summary>
            <div className="px-5 pb-5">
              <div className="h-px bg-[#c9a84c]/10 mb-4" />
              <p className="text-[#ccc] page-copy">{entry.annotation}</p>
            </div>
          </details>
        );
      })}
    </div>
  );
}
