"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", value: 0.0 },
  { name: "Feb", value: 0.5 },
  { name: "Mar", value: 0.4 },
  { name: "Apr", value: 0.3 },
  { name: "May", value: 0.2 },
  { name: "Jun", value: 0.1 },
  { name: "Jul", value: 0.0 },
  { name: "Aug", value: 0.5 },
  { name: "Sep", value: 0.4 },
  { name: "Oct", value: 0.3 },
  { name: "Nov", value: 0.2 },
  { name: "Dec", value: 0.1 },
];

const chartConfig = {
  name: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export default function TrendChart() {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <ChartContainer config={chartConfig}>
          <LineChart data={data}>
            <CartesianGrid vertical={false} />

            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis
              dataKey="value"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" hideLabel />}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#3366FF"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ChartContainer>
      </ResponsiveContainer>
    </div>
  );
}
