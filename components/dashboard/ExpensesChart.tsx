"use client";

import { Pie, PieChart } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
const chartData = [
  { source: "bills", expenses: 275, fill: "var(--color-bills)" },
  { source: "grocieres", expenses: 200, fill: "var(--color-grocieres)" },
  { source: "gas", expenses: 187, fill: "var(--color-gas)" },
  { source: "insurance", expenses: 187, fill: "var(--color-insurance)" },
  { source: "others", expenses: 187, fill: "var(--color-others)" },
];

const chartConfig = {
  expenses: {
    label: "expenses",
  },
  bills: {
    label: "Bills",
    color: "hsl(var(--chart-1))",
  },
  grocieres: {
    label: "Grocieres",
    color: "hsl(var(--chart-2))",
  },
  gas: {
    label: "Gas",
    color: "hsl(var(--chart-3))",
  },
  insurance: {
    label: "Insurance",
    color: "hsl(var(--chart-4))",
  },
  others: {
    label: "Others",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function ExpensesChart() {
  return (
    //  <ResponsiveContainer width="100%" height={150}>

    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[300px]"
    >
      <PieChart>
        <Pie data={chartData} dataKey="expenses" />
        <ChartLegend
          content={<ChartLegendContent nameKey="source" />}
          className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
        />
      </PieChart>
    </ChartContainer>

    // </ResponsiveContainer>
  );
}
