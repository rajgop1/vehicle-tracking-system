"use client"

import { Card } from "../ui/card"
import { HomeBarChart } from "./home-bar-chart"
import { HomeBarMultipleChart } from "./home-bar-mutiple-chart"
import { HomeBarStackedChart } from "./home-bar-stacked-chart"
import HomeCard from "./home-card"
import { HomeChart } from "./home-chart"
import { HomeLineChart } from "./home-line-chart"

export default function HomeComponent(data:any){

    return <>
        <Card>
            <h1 className="text-4xl font-medium text-center my-2 md:my-4 lg:my-8 ">{data.data.title}</h1>
        </Card>
        <main className="px-2 md:px-4 lg:px-8 py-8 flex flex-col gap-8">
            
            <section className="bg-white border rounded-lg p-2 shadow-md grid grid-auto md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2">
                {
                    data.truckCards.map((card:any,index:number)=>{
                        return <HomeCard key={index} data={card}/>
                    })
                }
            </section>
            <section className="grid grid-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <HomeChart data={data.fleetStatus}/>
                <HomeChart data={data.timeLimitStatus}/>
                <HomeChart data={data.tripStatus}/>
                <HomeChart data={data.alertStatus}/>
                
            </section>
            <section className="grid grid-rows-1 grid-auto lg:grid-cols-3 gap-6">
                {/* <HomeLineChart data={data.vendorPerformance}/> */}
                
                <HomeBarStackedChart/>
                <HomeBarChart/>
                
                <div className="">
                <HomeBarMultipleChart/>
                </div>
            </section>
        </main>
    </>
}