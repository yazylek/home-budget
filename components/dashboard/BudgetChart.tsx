"use client"
import { Bar, BarChart, CartesianGrid, Rectangle, ResponsiveContainer, XAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { source: "salary", income: 4578, fill: "var(--color-salary)" },
  { source: "investments", income: 2043, fill: "var(--color-investments)" },
  { source: "savings", income: 200, fill: "var(--color-savings)" },
]

const chartConfig = {
  income: {
    label: "Income",
  },
  salary: {
    label: "Salary",
    color: "hsl(var(--chart-1))",
  },
  investments: {
    label: "Investments",
    color: "hsl(var(--chart-2))",
  },
  savings: {
    label: "Savings",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig

export function BudgetChart() {
  return (
    <ResponsiveContainer width="100%" height={150}>

        <ChartContainer config={chartConfig} className="">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="source"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
              />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
              />
            <Bar
              dataKey="income"
              strokeWidth={2}
              radius={8}
              activeIndex={2}
              barSize={30}
              activeBar={({ ...props }) => {
                return (
                  <Rectangle
                  {...props}
                  fillOpacity={0.8}
                  stroke={props.payload.fill}
                    strokeDasharray={4}
                    strokeDashoffset={4}
                    />
                  )
                }}
                />
          </BarChart>
        </ChartContainer>
                </ResponsiveContainer>
  )
}
