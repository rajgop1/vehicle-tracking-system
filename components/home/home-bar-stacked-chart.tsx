"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A stacked bar chart with a legend"

const chartData = [
  { vendor: "V90542", speed: 100, mainPowerLoss: 130, tripOnTime: 300, tempering: 30 },
  { vendor: "V90543", speed: 200, mainPowerLoss: 137, tripOnTime: 200, tempering: 40 },
  { vendor: "V90544", speed: 120, mainPowerLoss: 148, tripOnTime: 400, tempering: 45 },
  { vendor: "V90544", speed: 170, mainPowerLoss: 186, tripOnTime: 300, tempering: 35 },
  { vendor: "V90544", speed: 150, mainPowerLoss: 138, tripOnTime: 200, tempering: 55 },

  
]

const chartConfig = {
  speed: {
    label: "Speed",
    color: "hsl(var(--chart-1))",
  },
  mainPowerLoss: {
    label: "Main Power Loss",
    color: "hsl(var(--chart-2))",
  },
  tripOnTime: {
    label: "Trip ontime",
    color: "hsl(var(--chart-2))",
  },
  tempering: {
    label: "Tempering",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function HomeBarStackedChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Vendor Performance</CardTitle>
        <CardDescription>Minimum 50 Trips</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="vendor"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            //   tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="speed"
              stackId="a"
              fill="#b91c1c"
              width={10}
              barSize={20}
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="mainPowerLoss"
              stackId="a"
              fill="#164e63"
              radius={[4, 4, 0, 0]}
            />
             <Bar
              dataKey="tripOnTime"
              stackId="a"
              fill="#65a30d"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="tempering"
              stackId="a"
              fill="#fbbf24"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>

    </Card>
  )
}
