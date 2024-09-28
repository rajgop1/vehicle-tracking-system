"use client"

import { Bar, BarChart, Rectangle, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChartContainer } from "@/components/ui/chart"
import { FaTruck } from "react-icons/fa";
import gatiTruck from "@/app/gati-truck.png"

export default function HomeCard(truck_data:any) {
    const data = truck_data.data
    
  return (
    <Card className={`w-full flex flex-col justify-between border-none rounded-sm shadow-md`} style={{backgroundColor: data?.cardColor ?? "white"}}>
      <CardHeader className="p-4 pb-0">
        <CardTitle className="font-semibold" style={{color: data?.color ?? "black"}}>{data.title}</CardTitle>
        <CardDescription>
          {data.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-row items-baseline justify-between gap-4 p-4 pt-2">
        <div className="flex items-baseline gap-2 text-3xl font-bold tabular-nums leading-none" style={{color: data?.color ?? "black"}}>
          {data.value}
        </div>
        <FaTruck size={32} color={data?.color ?? "#1e3a8a"}/>
        {/* <img src={gatiTruck.src} width={100}/> */}
      </CardContent>
    </Card>
  )
}
