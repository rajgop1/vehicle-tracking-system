"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

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
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A multiple line chart"


export function HomeLineChart(chartData:any) {
  const data = chartData.data
  console.log("line chart data",data)
  return (
    <Card>
      <CardHeader>
        <CardTitle>{data.title}</CardTitle>
        <CardDescription>{data.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={data.chartConfig}>
          <LineChart
            accessibilityLayer
            data={data.chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey={data.xAxisKey}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            {data.yAxisKeys.map((key:any, index:number)=>(
                <Line
                  key={index}
                  dataKey={key.name}
                  type="monotone"
                  stroke={key.color}
                  strokeWidth={2}
                  dot={false}
                />
            ))}
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              {data.footer?.title}
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              {data.footer?.description}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
