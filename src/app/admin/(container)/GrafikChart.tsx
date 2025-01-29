"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { time: "00:00", value: 0.65 },
  { time: "02:00", value: 0.68 },
  { time: "04:00", value: 0.65 },
  { time: "06:00", value: 0.72 },
  { time: "08:00", value: 0.78 },
  { time: "10:00", value: 0.6 },
  { time: "12:00", value: 0.71 },
  { time: "14:00", value: 0.73 },
  { time: "16:00", value: 0.77 },
  { time: "18:00", value: 0.8 },
  { time: "20:00", value: 0.5 },
  { time: "22:00", value: 0.6 },
];

const chartConfig = {
  time: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export default function GrafikCharts() {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <ChartContainer config={chartConfig}>
          <AreaChart accessibilityLayer data={data}>
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3366FF" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#3366FF" stopOpacity={0.2} />
              </linearGradient>
            </defs>

            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="time"
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
            <Area
              dataKey="value"
              type="linear"
              fill="url(#gradient)"
              fillOpacity={0.4}
            />
          </AreaChart>
        </ChartContainer>
      </ResponsiveContainer>
    </div>
  );
}
