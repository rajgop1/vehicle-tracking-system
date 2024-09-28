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

export const description = "A multiple bar chart"

const chartData = [
  { route: "JET-OTD", tillYDay: 99, live: 99 },
  { route: "JET-OTA", tillYDay: 94, live: 93 },
  { route: "NG-OTD", tillYDay: 98, live: 98 },
  { route: "NG-OTA", tillYDay: 92, live: 91 },
  { route: "SE-OTD", tillYDay: 92, live: 91 },
  { route: "SE-OTA", tillYDay: 91, live: 90 },
  { route: "FDR-OTD", tillYDay: 80, live: 80 },
  { route: "FDR-OTA", tillYDay: 76, live: 76 },
]

const chartConfig = {
  tillYDay: {
    label: "Till Y Day",
    color: "hsl(var(--chart-1))",
  },
  live: {
    label: "Live",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function HomeBarMultipleChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Route Performance MTD</CardTitle>
        <CardDescription>OTD - OTA</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="route"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              orientation="bottom"
            //   tickFormatter={(live) => live.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="tillYDay" fill="yellow" radius={4} />
            <Bar dataKey="live" fill="green" radius={4} />

          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
