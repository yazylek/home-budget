"use client"

import { Pie, PieChart, ResponsiveContainer } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"
const chartData = [
  { source: "salary", income: 275, fill: "var(--color-salary)" },
  { source: "investments", income: 200, fill: "var(--color-investments)" },
  { source: "bankDeposit", income: 187, fill: "var(--color-bankDeposit)" },
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
  bankDeposit: {
    label: "Bank Deposits",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig

export function IncomeChart() {
  return (


 <ResponsiveContainer width="100%" height={150}>

        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
          >
          <PieChart>
            <Pie data={chartData} dataKey="income" />
            <ChartLegend
              content={<ChartLegendContent nameKey="source" />}
              className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
              />
          </PieChart>
        </ChartContainer>
     
    </ResponsiveContainer>
  )
}
