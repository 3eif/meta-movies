"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { genre: "Action", de: 0.0251, en: 0.0716, es: 0.0343, fr: 0.0366, it: 0.0706, ja: 0.1326, Other: 0.0862 },
  { genre: "Adventure", de: 0.0325, en: 0.0406, es: 0.0191, fr: 0.0279, it: 0.0293, ja: 0.0573, Other: 0.0299 },
  { genre: "Animation", de: 0.0162, en: 0.0189, es: 0.0147, fr: 0.0192, it: 0.004, ja: 0.111, Other: 0.0155 },
  { genre: "Comedy", de: 0.1691, en: 0.1407, es: 0.1629, fr: 0.1938, it: 0.2237, ja: 0.0676, Other: 0.1455 },
  { genre: "Crime", de: 0.0346, en: 0.0476, es: 0.0431, fr: 0.0542, it: 0.0533, ja: 0.0348, Other: 0.0457 },
  { genre: "Documentary", de: 0.0487, en: 0.0516, es: 0.0322, fr: 0.0259, it: 0.0112, ja: 0.0035, Other: 0.0227 },
  { genre: "Drama", de: 0.311, en: 0.201, es: 0.3063, fr: 0.3111, it: 0.2314, ja: 0.2079, Other: 0.2885 },
  { genre: "Family", de: 0.0288, en: 0.0344, es: 0.0082, fr: 0.0135, it: 0.0036, ja: 0.0171, Other: 0.0268 },
  { genre: "Fantasy", de: 0.0298, en: 0.0241, es: 0.0163, fr: 0.0268, it: 0.0184, ja: 0.0573, Other: 0.026 },
  { genre: "Foreign", de: 0.023, en: 0.0106, es: 0.0578, fr: 0.0205, it: 0.0321, ja: 0.0431, Other: 0.0416 },
  { genre: "History", de: 0.0304, en: 0.0134, es: 0.0093, fr: 0.0213, it: 0.0225, ja: 0.0156, Other: 0.0212 },
  { genre: "Horror", de: 0.0356, en: 0.0575, es: 0.054, fr: 0.0257, it: 0.0553, ja: 0.0534, Other: 0.0252 },
  { genre: "Music", de: 0.0141, en: 0.0211, es: 0.006, fr: 0.0085, it: 0.0036, ja: 0.0044, Other: 0.0094 },
  { genre: "Mystery", de: 0.0194, en: 0.029, es: 0.0256, fr: 0.0235, it: 0.0265, ja: 0.0198, Other: 0.021 },
  { genre: "Romance", de: 0.0571, en: 0.073, es: 0.0807, fr: 0.093, it: 0.0545, ja: 0.0452, Other: 0.0883 },
  { genre: "Science Fiction", de: 0.0225, en: 0.0373, es: 0.0196, fr: 0.0179, it: 0.018, ja: 0.07, Other: 0.0149 },
  { genre: "TV Movie", de: 0.0089, en: 0.011, es: 0.0005, fr: 0.0028, it: 0.0012, ja: 0.0015, Other: 0.0013 },
  { genre: "Thriller", de: 0.0634, en: 0.0906, es: 0.0937, fr: 0.0594, it: 0.0638, ja: 0.0481, Other: 0.0682 },
  { genre: "War", de: 0.0204, en: 0.0134, es: 0.006, fr: 0.0161, it: 0.0217, ja: 0.0094, Other: 0.0202 },
  { genre: "Western", de: 0.0094, en: 0.0127, es: 0.0098, fr: 0.0024, it: 0.0553, ja: 0.0003, Other: 0.0019 },
];

// ggplot2-matching colors
const COLORS: Record<string, string> = {
  de: "#F8766D",
  en: "#B79F00",
  es: "#00BA38",
  fr: "#00BFC4",
  it: "#619CFF",
  ja: "#C77CFF",
  Other: "#FF61CC",
};

const LANGUAGES = ["de", "en", "es", "fr", "it", "ja", "Other"] as const;

export default function GenreLanguageChart() {
  return (
    <div className="bg-white rounded-lg p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
        Genre Distribution Within Major Languages
      </h3>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 30, left: 20, bottom: 80 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis
            dataKey="genre"
            angle={-60}
            textAnchor="end"
            interval={0}
            tick={{ fontSize: 12, fill: "#333" }}
            height={80}
          />
          <YAxis
            label={{
              value: "Proportion of Films",
              angle: -90,
              position: "insideLeft",
              offset: -5,
              style: { fontSize: 13, fill: "#333" },
            }}
            tick={{ fontSize: 12, fill: "#333" }}
          />
          <Tooltip
            formatter={(value, name) => [
              `${(Number(value) * 100).toFixed(1)}%`,
              `${name}`,
            ]}
            labelStyle={{ fontWeight: "bold" }}
          />
          <Legend verticalAlign="top" wrapperStyle={{ paddingBottom: 10 }} />
          {LANGUAGES.map((lang) => (
            <Bar
              key={lang}
              dataKey={lang}
              stackId="a"
              fill={COLORS[lang]}
              name={lang}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
