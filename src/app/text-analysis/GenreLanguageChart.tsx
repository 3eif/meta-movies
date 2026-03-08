"use client";

import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type LanguageKey = "de" | "en" | "es" | "fr" | "it" | "ja" | "Other";
type TooltipPayloadEntry = {
  dataKey?: string;
  value?: number | string;
};

// These values are derived from the same movies_cleaned.csv pipeline used in the R/ggplot code.
const data = [
  { genre: "Action", de: 0.0251, en: 0.0716, es: 0.0343, fr: 0.0366, it: 0.0706, ja: 0.1326, Other: 0.0863 },
  { genre: "Adventure", de: 0.0325, en: 0.0406, es: 0.0191, fr: 0.0279, it: 0.0293, ja: 0.0573, Other: 0.0299 },
  { genre: "Animation", de: 0.0162, en: 0.0189, es: 0.0147, fr: 0.0192, it: 0.0040, ja: 0.1110, Other: 0.0154 },
  { genre: "Comedy", de: 0.1691, en: 0.1407, es: 0.1629, fr: 0.1938, it: 0.2237, ja: 0.0676, Other: 0.1456 },
  { genre: "Crime", de: 0.0346, en: 0.0476, es: 0.0431, fr: 0.0542, it: 0.0533, ja: 0.0348, Other: 0.0458 },
  { genre: "Documentary", de: 0.0487, en: 0.0516, es: 0.0322, fr: 0.0259, it: 0.0112, ja: 0.0035, Other: 0.0224 },
  { genre: "Drama", de: 0.3110, en: 0.2010, es: 0.3063, fr: 0.3111, it: 0.2314, ja: 0.2079, Other: 0.2886 },
  { genre: "Family", de: 0.0288, en: 0.0344, es: 0.0082, fr: 0.0135, it: 0.0036, ja: 0.0171, Other: 0.0268 },
  { genre: "Fantasy", de: 0.0298, en: 0.0241, es: 0.0163, fr: 0.0268, it: 0.0184, ja: 0.0573, Other: 0.0261 },
  { genre: "Foreign", de: 0.0230, en: 0.0106, es: 0.0578, fr: 0.0205, it: 0.0321, ja: 0.0431, Other: 0.0417 },
  { genre: "History", de: 0.0304, en: 0.0134, es: 0.0093, fr: 0.0213, it: 0.0225, ja: 0.0156, Other: 0.0212 },
  { genre: "Horror", de: 0.0356, en: 0.0575, es: 0.0540, fr: 0.0257, it: 0.0553, ja: 0.0534, Other: 0.0252 },
  { genre: "Music", de: 0.0141, en: 0.0211, es: 0.0060, fr: 0.0085, it: 0.0036, ja: 0.0044, Other: 0.0094 },
  { genre: "Mystery", de: 0.0194, en: 0.0290, es: 0.0256, fr: 0.0235, it: 0.0265, ja: 0.0198, Other: 0.0210 },
  { genre: "Romance", de: 0.0571, en: 0.0730, es: 0.0807, fr: 0.0930, it: 0.0545, ja: 0.0452, Other: 0.0883 },
  { genre: "Science Fiction", de: 0.0225, en: 0.0373, es: 0.0196, fr: 0.0179, it: 0.0180, ja: 0.0700, Other: 0.0149 },
  { genre: "Thriller", de: 0.0634, en: 0.0906, es: 0.0937, fr: 0.0594, it: 0.0638, ja: 0.0481, Other: 0.0683 },
  { genre: "TV Movie", de: 0.0089, en: 0.0110, es: 0.0005, fr: 0.0028, it: 0.0012, ja: 0.0015, Other: 0.0013 },
  { genre: "War", de: 0.0204, en: 0.0134, es: 0.0060, fr: 0.0161, it: 0.0217, ja: 0.0094, Other: 0.0201 },
  { genre: "Western", de: 0.0094, en: 0.0127, es: 0.0098, fr: 0.0024, it: 0.0553, ja: 0.0003, Other: 0.0018 },
];

const LEGEND_ORDER = ["de", "en", "es", "fr", "it", "ja", "Other"] as const;
const STACK_ORDER = ["Other", "ja", "it", "fr", "es", "en", "de"] as const;

const COLORS: Record<LanguageKey, string> = {
  de: "#F8766D",
  en: "#C49A00",
  es: "#53B400",
  fr: "#00C094",
  it: "#00B6EB",
  ja: "#A58AFF",
  Other: "#FB61D7",
};

const LANGUAGE_LABELS: Record<LanguageKey, string> = {
  de: "German",
  en: "English",
  es: "Spanish",
  fr: "French",
  it: "Italian",
  ja: "Japanese",
  Other: "Other",
};

const formatPercent = (value: number) => `${(value * 100).toFixed(1)}%`;

function CustomTooltip({
  active,
  label,
  payload,
}: {
  active?: boolean;
  label?: string;
  payload?: TooltipPayloadEntry[];
}) {
  if (!active || !payload?.length) {
    return null;
  }

  return (
    <div className="rounded-lg border border-gray-200 bg-white px-3 py-3 text-sm shadow-lg">
      <p className="mb-2 font-medium text-gray-900">{label}</p>
      <div className="space-y-1">
        {LEGEND_ORDER.map((language) => {
          const entry = payload.find(
            (payloadEntry) => payloadEntry.dataKey === language,
          );

          if (!entry) {
            return null;
          }

          return (
            <div
              key={language}
              className="flex items-center justify-between gap-4"
            >
              <span
                className="font-medium"
                style={{ color: COLORS[language] }}
              >
                {LANGUAGE_LABELS[language]}
              </span>
              <span className="tabular-nums text-gray-700">
                {formatPercent(Number(entry.value ?? 0))}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ChartLegend({
  hidden,
  onToggle,
}: {
  hidden: Set<LanguageKey>;
  onToggle: (language: LanguageKey) => void;
}) {
  return (
    <div className="mb-5 flex flex-wrap justify-center gap-2.5">
      {LEGEND_ORDER.map((language) => {
        const isHidden = hidden.has(language);
        return (
          <button
            key={language}
            type="button"
            onClick={() => onToggle(language)}
            className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
              isHidden
                ? "border-gray-300 bg-white text-gray-400"
                : "bg-gray-50 text-gray-800"
            }`}
            style={{
              borderColor: isHidden ? "#d1d5db" : COLORS[language],
            }}
          >
            <span
              className="mr-2 inline-block h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: COLORS[language] }}
            />
            {LANGUAGE_LABELS[language]}
          </button>
        );
      })}
    </div>
  );
}

export default function GenreLanguageChart() {
  const [hidden, setHidden] = useState<Set<LanguageKey>>(new Set());

  function toggleLanguage(language: LanguageKey) {
    setHidden((prev) => {
      const next = new Set(prev);
      if (next.has(language)) {
        next.delete(language);
      } else {
        next.add(language);
      }
      return next;
    });
  }

  return (
    <div className="rounded-lg bg-white p-6">
      <h3 className="mb-2 text-center text-xl font-bold text-gray-800">
        Genre Distribution Within Major Languages
      </h3>
      <p className="mb-5 text-center text-sm text-gray-500">
        Toggle languages in the legend to isolate how each one contributes to
        genre patterns.
      </p>

      <ChartLegend hidden={hidden} onToggle={toggleLanguage} />

      <div className="bg-white p-1">
        <div className="h-[470px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              barCategoryGap="18%"
              barGap={0}
              margin={{ top: 12, right: 18, left: 8, bottom: 44 }}
            >
              <CartesianGrid
                stroke="#d9d9d9"
                strokeDasharray="3 3"
                vertical={false}
              />
              <XAxis
                dataKey="genre"
                interval={0}
                angle={-32}
                textAnchor="end"
                height={52}
                tickMargin={4}
                tick={{ fontSize: 11, fill: "#4b5563" }}
                tickLine={false}
                axisLine={{ stroke: "#9ca3af" }}
              />
              <YAxis
                domain={[0, 1.9]}
                ticks={[0, 0.5, 1, 1.5]}
                tickFormatter={(value) => value.toFixed(1)}
                tick={{ fontSize: 12, fill: "#4b5563" }}
                tickLine={false}
                axisLine={{ stroke: "#9ca3af" }}
                label={{
                  value: "Proportion of Films",
                  angle: -90,
                  position: "insideLeft",
                  offset: -4,
                  style: { fontSize: 13, fill: "#374151" },
                }}
              />
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ fill: "rgba(209, 213, 219, 0.25)" }}
              />
              {STACK_ORDER.map((language, index) => (
                <Bar
                  key={language}
                  dataKey={language}
                  hide={hidden.has(language)}
                  stackId="languages"
                  fill={COLORS[language]}
                  radius={index === STACK_ORDER.length - 1 ? [3, 3, 0, 0] : 0}
                  isAnimationActive={false}
                  maxBarSize={42}
                />
              ))}
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <p className="mt-0 text-center text-sm text-gray-500">Genre</p>
    </div>
  );
}
