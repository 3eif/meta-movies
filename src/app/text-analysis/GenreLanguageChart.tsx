"use client";

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
  payload?: { total?: number };
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

const formatPercent = (value: number) => `${(value * 100).toFixed(1)}%`;

const dataWithTotals = data.map((entry) => ({
  ...entry,
  total: LEGEND_ORDER.reduce((sum, language) => sum + entry[language], 0),
}));

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

  const total = Number(payload[0]?.payload?.total ?? 0);

  return (
    <div className="border border-gray-300 bg-white px-3 py-2 text-sm shadow-md">
      <p className="mb-1 font-medium text-black">{label}</p>
      <div className="space-y-1">
        {LEGEND_ORDER.map((language) => {
          const entry = payload.find(
            (payloadEntry) => payloadEntry.dataKey === language,
          );

          if (!entry) {
            return null;
          }

          const share = total === 0 ? 0 : Number(entry.value ?? 0) / total;

          return (
            <div key={language} className="flex items-center justify-between gap-4">
              <span style={{ color: COLORS[language] }}>{language}</span>
              <span className="tabular-nums text-gray-800">
                {formatPercent(share)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ChartLegend() {
  return (
    <div className="pt-24">
      <p className="mb-3 text-[22px] font-medium text-black">
        original_language
      </p>
      <div className="space-y-0.5">
        {LEGEND_ORDER.map((language) => (
          <div
            key={language}
            className="flex items-center gap-4 text-[22px] text-black"
          >
            <span
              className="h-12 w-12 shrink-0 border border-white/40"
              style={{ backgroundColor: COLORS[language] }}
            />
            <span>{language}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function GenreLanguageChart() {
  return (
    <div className="bg-white px-4 py-5 md:px-6 md:py-6">
      <div className="overflow-x-auto">
        <div className="min-w-[1220px]">
          <h3 className="mb-3 text-left text-[36px] font-medium tracking-tight text-black">
            Genre Distribution Within Major Languages
          </h3>

          <div className="grid grid-cols-[1fr_260px] items-start gap-8">
            <div>
              <div className="h-[690px] bg-[#EBEBEB] p-2">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={dataWithTotals}
                    barCategoryGap={8}
                    barGap={0}
                    margin={{ top: 10, right: 14, left: 18, bottom: 120 }}
                  >
                    <CartesianGrid stroke="#FFFFFF" strokeWidth={1} />
                    <XAxis
                      dataKey="genre"
                      angle={-60}
                      textAnchor="end"
                      interval={0}
                      height={110}
                      tick={{ fontSize: 12, fill: "#4B5563" }}
                      tickLine={{ stroke: "#4B5563" }}
                      axisLine={{ stroke: "#4B5563" }}
                    />
                    <YAxis
                      domain={[0, 1.9]}
                      ticks={[0, 0.5, 1, 1.5]}
                      tickFormatter={(value) => value.toFixed(1)}
                      tick={{ fontSize: 12, fill: "#4B5563" }}
                      tickLine={{ stroke: "#4B5563" }}
                      axisLine={{ stroke: "#4B5563" }}
                      label={{
                        value: "Proportion of Films",
                        angle: -90,
                        position: "insideLeft",
                        offset: -2,
                        style: { fontSize: 22, fill: "#111827" },
                      }}
                    />
                    <Tooltip
                      content={<CustomTooltip />}
                      cursor={{ fill: "rgba(255, 255, 255, 0.28)" }}
                    />
                    {STACK_ORDER.map((language) => (
                      <Bar
                        key={language}
                        dataKey={language}
                        stackId="languages"
                        fill={COLORS[language]}
                        stroke={COLORS[language]}
                        strokeWidth={0.5}
                        isAnimationActive={false}
                        maxBarSize={54}
                      />
                    ))}
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="mt-6 text-center text-[24px] text-black">Genre</p>
            </div>

            <ChartLegend />
          </div>
        </div>
      </div>
    </div>
  );
}
