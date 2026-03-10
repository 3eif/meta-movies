"use client";

import {
  CartesianGrid,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { budgetRevenueSample } from "./budgetRevenueSample";

function formatMoney(value: number) {
  if (value >= 1_000_000_000) {
    return `$${(value / 1_000_000_000).toFixed(1)}B`;
  }
  if (value >= 1_000_000) {
    return `$${(value / 1_000_000).toFixed(0)}M`;
  }
  if (value >= 1_000) {
    return `$${(value / 1_000).toFixed(0)}K`;
  }
  return `$${value}`;
}

function fromLogTick(value: number) {
  return formatMoney(Math.round(10 ** value));
}

function ScatterTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: Array<{ payload?: (typeof budgetRevenueSample)[number] }>;
}) {
  if (!active || !payload?.length || !payload[0]?.payload) {
    return null;
  }

  const point = payload[0].payload;

  return (
    <div className="rounded-lg border border-gray-200 bg-white px-3 py-3 text-sm shadow-lg">
      <p className="font-medium text-gray-900">
        {point.title}
        {point.year ? ` (${point.year})` : ""}
      </p>
      <div className="mt-2 space-y-1 text-gray-700">
        <p>Budget: {formatMoney(point.budget)}</p>
        <p>Revenue: {formatMoney(point.revenue)}</p>
        <p>Average rating: {point.rating ?? "N/A"}</p>
      </div>
    </div>
  );
}

export default function BudgetRevenueScatterChart() {
  return (
    <div className="bg-white rounded-lg p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
        Film Budgets and Box Office Revenue
      </h3>
      <p className="mb-5 text-center text-sm text-gray-500">
        Each point represents a film with positive budget and revenue values.
      </p>

      <ResponsiveContainer width="100%" height={520}>
        <ScatterChart margin={{ top: 10, right: 20, left: 12, bottom: 24 }}>
          <CartesianGrid stroke="#d9d9d9" strokeDasharray="3 3" />
          <XAxis
            type="number"
            dataKey="budgetLog"
            domain={[4, 8.7]}
            ticks={[4, 5, 6, 7, 8]}
            tickFormatter={fromLogTick}
            tick={{ fontSize: 12, fill: "#333" }}
            label={{
              value: "Budget (log scale)",
              position: "insideBottom",
              offset: -6,
              style: { fontSize: 13, fill: "#333" },
            }}
          />
          <YAxis
            type="number"
            dataKey="revenueLog"
            domain={[4, 9.5]}
            ticks={[4, 5, 6, 7, 8, 9]}
            tickFormatter={fromLogTick}
            tick={{ fontSize: 12, fill: "#333" }}
            label={{
              value: "Revenue (log scale)",
              angle: -90,
              position: "insideLeft",
              style: { fontSize: 13, fill: "#333" },
            }}
          />
          <Tooltip content={<ScatterTooltip />} cursor={{ strokeDasharray: "3 3" }} />
          <Scatter data={budgetRevenueSample} fill="#c9a84c" fillOpacity={0.6} />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
