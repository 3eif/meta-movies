"use client";

import { useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const rawData = [
  [1920, 3, 0, 1, 0, 0, 0],
  [1921, 5, 0, 1, 0, 0, 0],
  [1922, 4, 0, 2, 0, 0, 0],
  [1923, 2, 0, 2, 0, 0, 0],
  [1924, 9, 0, 1, 0, 0, 3],
  [1925, 5, 0, 2, 0, 0, 3],
  [1926, 4, 0, 4, 0, 1, 4],
  [1927, 2, 0, 1, 0, 0, 2],
  [1928, 4, 0, 5, 0, 0, 2],
  [1929, 5, 0, 2, 0, 0, 4],
  [1930, 3, 0, 6, 0, 3, 1],
  [1931, 5, 0, 6, 0, 1, 1],
  [1932, 4, 0, 7, 0, 3, 0],
  [1933, 5, 1, 6, 0, 6, 2],
  [1934, 2, 1, 7, 1, 3, 3],
  [1935, 3, 0, 5, 0, 3, 1],
  [1936, 3, 1, 10, 1, 4, 4],
  [1937, 3, 0, 9, 0, 4, 2],
  [1938, 3, 0, 9, 0, 1, 4],
  [1939, 0, 0, 7, 0, 1, 3],
  [1940, 2, 1, 3, 3, 0, 1],
  [1941, 2, 0, 1, 3, 3, 1],
  [1942, 1, 1, 3, 2, 1, 0],
  [1943, 3, 1, 4, 2, 2, 0],
  [1944, 3, 1, 4, 1, 3, 0],
  [1945, 2, 0, 3, 4, 2, 1],
  [1946, 2, 1, 3, 5, 2, 0],
  [1947, 1, 3, 4, 2, 3, 3],
  [1948, 0, 0, 2, 7, 3, 0],
  [1949, 0, 3, 9, 5, 4, 1],
  [1950, 1, 5, 6, 6, 3, 0],
  [1951, 3, 5, 7, 10, 6, 1],
  [1952, 1, 2, 11, 7, 5, 2],
  [1953, 3, 3, 10, 9, 10, 0],
  [1954, 4, 3, 10, 12, 10, 1],
  [1955, 4, 4, 15, 8, 8, 2],
  [1956, 4, 2, 17, 7, 11, 7],
  [1957, 5, 4, 7, 7, 10, 6],
  [1958, 4, 1, 14, 6, 13, 4],
  [1959, 8, 6, 18, 15, 10, 3],
  [1960, 5, 3, 21, 19, 19, 2],
  [1961, 3, 6, 13, 23, 12, 7],
  [1962, 2, 5, 18, 25, 14, 8],
  [1963, 2, 2, 26, 29, 15, 3],
  [1964, 9, 5, 18, 17, 19, 6],
  [1965, 4, 2, 19, 24, 17, 9],
  [1966, 8, 5, 22, 37, 19, 12],
  [1967, 2, 3, 28, 37, 17, 11],
  [1968, 5, 5, 17, 46, 27, 14],
  [1969, 6, 8, 24, 36, 19, 7],
  [1970, 14, 4, 24, 46, 11, 6],
  [1971, 10, 6, 29, 55, 10, 9],
  [1972, 9, 6, 23, 60, 12, 9],
  [1973, 9, 15, 25, 37, 13, 11],
  [1974, 8, 5, 29, 34, 17, 6],
  [1975, 10, 9, 25, 42, 3, 18],
  [1976, 12, 6, 24, 47, 5, 8],
  [1977, 15, 2, 28, 34, 5, 10],
  [1978, 9, 11, 20, 29, 4, 7],
  [1979, 10, 7, 14, 31, 4, 23],
  [1980, 8, 3, 16, 31, 5, 10],
  [1981, 9, 9, 23, 25, 8, 12],
  [1982, 8, 6, 26, 34, 10, 14],
  [1983, 1, 10, 27, 24, 12, 14],
  [1984, 6, 8, 22, 15, 5, 16],
  [1985, 7, 5, 14, 9, 13, 5],
  [1986, 6, 3, 18, 13, 8, 11],
  [1987, 9, 6, 19, 22, 14, 11],
  [1988, 3, 4, 17, 10, 10, 12],
  [1989, 11, 5, 18, 13, 17, 9],
  [1990, 8, 3, 21, 12, 10, 10],
  [1991, 9, 8, 17, 16, 14, 8],
  [1992, 6, 10, 19, 10, 16, 6],
  [1993, 10, 6, 23, 11, 13, 5],
  [1994, 7, 3, 21, 13, 15, 6],
  [1995, 18, 13, 28, 9, 21, 3],
  [1996, 16, 11, 32, 14, 19, 2],
  [1997, 18, 15, 32, 10, 22, 6],
  [1998, 10, 12, 30, 13, 22, 9],
  [1999, 15, 14, 33, 9, 25, 7],
  [2000, 22, 15, 41, 15, 32, 8],
  [2001, 24, 16, 60, 14, 36, 8],
  [2002, 18, 25, 49, 13, 24, 10],
  [2003, 22, 16, 51, 17, 30, 14],
  [2004, 41, 32, 58, 15, 41, 12],
  [2005, 23, 34, 57, 11, 51, 15],
  [2006, 49, 33, 67, 19, 44, 18],
  [2007, 32, 34, 54, 21, 50, 28],
  [2008, 42, 45, 80, 23, 54, 28],
  [2009, 39, 49, 80, 26, 50, 21],
  [2010, 46, 42, 95, 31, 49, 27],
  [2011, 52, 41, 100, 36, 44, 33],
  [2012, 48, 44, 89, 31, 43, 33],
  [2013, 50, 54, 87, 34, 56, 23],
  [2014, 48, 69, 100, 43, 49, 31],
  [2015, 45, 79, 111, 41, 43, 36],
  [2016, 26, 67, 96, 21, 27, 30],
  [2017, 7, 11, 25, 6, 4, 15],
] as const;

const data = rawData.map(
  ([year, German, Spanish, French, Italian, Japanese, Russian]) => ({
    year,
    German,
    Spanish,
    French,
    Italian,
    Japanese,
    Russian,
  }),
);

const series = [
  { key: "German", color: "#E67E22" },
  { key: "Spanish", color: "#1ABC9C" },
  { key: "French", color: "#D96BA7" },
  { key: "Italian", color: "#1F78C1" },
  { key: "Japanese", color: "#E7D63B" },
  { key: "Russian", color: "#58B7F1" },
] as const;

type SeriesKey = (typeof series)[number]["key"];

function LineChartTooltip({
  active,
  label,
  payload,
}: {
  active?: boolean;
  label?: number | string;
  payload?: Array<{ name?: string; value?: number; color?: string }>;
}) {
  if (!active || !payload?.length) {
    return null;
  }

  return (
    <div className="rounded-lg border border-[#c9a84c]/25 bg-[#111111]/95 px-3 py-3 text-sm shadow-[0_12px_30px_rgba(0,0,0,0.45)] backdrop-blur-sm">
      <p className="mb-2 font-medium text-[#f5e6c8]">{label}</p>
      <div className="space-y-1">
        {payload.map((entry) => (
          <div
            key={entry.name}
            className="flex items-center justify-between gap-4"
          >
            <span className="font-medium" style={{ color: entry.color }}>
              {entry.name}
            </span>
            <span className="tabular-nums text-[#d2d2d2]">
              {entry.value ?? 0}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LanguageProductionLineChart() {
  const [hidden, setHidden] = useState<Set<SeriesKey>>(new Set());

  function toggleSeries(key: SeriesKey) {
    setHidden((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  }

  return (
    <div className="rounded-lg border border-[#c9a84c]/12 bg-[#141414] p-6 shadow-[0_0_30px_rgba(0,0,0,0.24)]">
      <h3 className="mb-2 text-center text-xl font-bold text-[#f5e6c8]">
        Non-English Film Production Per Year by Original Language (1920-2017)
      </h3>
      <div className="flex flex-wrap justify-center gap-2 mb-5">
        {series.map((item) => {
          const isHidden = hidden.has(item.key);
          return (
            <button
              key={item.key}
              type="button"
              onClick={() => toggleSeries(item.key)}
              className={`rounded-full border px-3 py-1 text-sm transition-colors ${
                isHidden
                  ? "border-[#4a4a4a] bg-[#101010] text-[#777]"
                  : "bg-[#1a1a1a] text-[#e5dcc8]"
              }`}
              style={{
                borderColor: isHidden ? "#4a4a4a" : item.color,
              }}
            >
              <span
                className="inline-block w-2.5 h-2.5 rounded-full mr-2"
                style={{ backgroundColor: item.color }}
              />
              {item.key}
            </button>
          );
        })}
      </div>

      <ResponsiveContainer width="100%" height={520}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(232, 212, 139, 0.14)"
          />
          <XAxis
            dataKey="year"
            tick={{ fontSize: 12, fill: "#d4c4a0" }}
            tickLine={{ stroke: "rgba(201, 168, 76, 0.35)" }}
            axisLine={{ stroke: "rgba(201, 168, 76, 0.35)" }}
            minTickGap={0}
            interval={0}
            tickFormatter={(value) =>
              value % 10 === 0 || value === 2017
                ? String(value)
                : ""
            }
          />
          <YAxis
            tick={{ fontSize: 12, fill: "#d4c4a0" }}
            tickLine={{ stroke: "rgba(201, 168, 76, 0.35)" }}
            axisLine={{ stroke: "rgba(201, 168, 76, 0.35)" }}
            label={{
              value: "Number of Films",
              angle: -90,
              position: "insideLeft",
              style: { fontSize: 13, fill: "#e8d48b" },
            }}
          />
          <Tooltip
            content={<LineChartTooltip />}
            cursor={{ stroke: "rgba(232, 212, 139, 0.35)", strokeDasharray: "3 3" }}
          />
          {series.map((item) => (
            <Line
              key={item.key}
              type="monotone"
              dataKey={item.key}
              stroke={item.color}
              strokeWidth={2.5}
              dot={false}
              hide={hidden.has(item.key)}
              isAnimationActive={false}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
      <p className="mt-2 text-center text-sm text-[#a6a6a6]">Release Year</p>
    </div>
  );
}
