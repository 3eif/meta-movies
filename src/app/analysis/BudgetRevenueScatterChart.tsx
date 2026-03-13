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
    <div className="rounded-lg border border-[#c9a84c]/25 bg-[#111111]/95 px-3 py-3 text-sm shadow-[0_12px_30px_rgba(0,0,0,0.45)] backdrop-blur-sm">
      <p className="font-medium text-[#f5e6c8]">
        {point.title}
        {point.year ? ` (${point.year})` : ""}
      </p>
      <div className="mt-2 space-y-1 text-[#d2d2d2]">
        <p>Budget: {formatMoney(point.budget)}</p>
        <p>Revenue: {formatMoney(point.revenue)}</p>
        <p>Average rating: {point.rating ?? "N/A"}</p>
      </div>
    </div>
  );
}

export default function BudgetRevenueScatterChart() {
  return (
    <div className="rounded-lg border border-[#c9a84c]/12 bg-[#141414] p-6 shadow-[0_0_30px_rgba(0,0,0,0.24)]">
      <h3 className="mb-2 text-center text-xl font-bold text-[#f5e6c8]">
        Film Budgets and Box Office Revenue
      </h3>
      <p className="mb-5 text-center text-sm text-[#a6a6a6]">
        Each point represents a film with positive budget and revenue values.
      </p>

      <ResponsiveContainer width="100%" height={520}>
        <ScatterChart margin={{ top: 10, right: 20, left: 12, bottom: 24 }}>
          <CartesianGrid stroke="rgba(232, 212, 139, 0.14)" strokeDasharray="3 3" />
          <XAxis
            type="number"
            dataKey="budgetLog"
            domain={[4, 8.7]}
            ticks={[4, 5, 6, 7, 8]}
            tickFormatter={fromLogTick}
            tick={{ fontSize: 12, fill: "#d4c4a0" }}
            axisLine={{ stroke: "rgba(201, 168, 76, 0.35)" }}
            tickLine={{ stroke: "rgba(201, 168, 76, 0.35)" }}
            label={{
              value: "Budget (log scale)",
              position: "insideBottom",
              offset: -6,
              style: { fontSize: 13, fill: "#e8d48b" },
            }}
          />
          <YAxis
            type="number"
            dataKey="revenueLog"
            domain={[4, 9.5]}
            ticks={[4, 5, 6, 7, 8, 9]}
            tickFormatter={fromLogTick}
            tick={{ fontSize: 12, fill: "#d4c4a0" }}
            axisLine={{ stroke: "rgba(201, 168, 76, 0.35)" }}
            tickLine={{ stroke: "rgba(201, 168, 76, 0.35)" }}
            label={{
              value: "Revenue (log scale)",
              angle: -90,
              position: "insideLeft",
              style: { fontSize: 13, fill: "#e8d48b" },
            }}
          />
          <Tooltip
            content={<ScatterTooltip />}
            cursor={{ stroke: "rgba(232, 212, 139, 0.35)", strokeDasharray: "3 3" }}
          />
          <Scatter data={budgetRevenueSample} fill="#c9a84c" fillOpacity={0.72} />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
