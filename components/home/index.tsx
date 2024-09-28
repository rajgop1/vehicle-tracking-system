"use client"

import { Card } from "../ui/card"
import HomeCard from "./home-card"
import { HomeChart } from "./home-chart"
import { HomeLineChart } from "./home-line-chart"

export default function HomeComponent(data:any){

    return <>
        <Card>
            <h1 className="text-4xl font-medium text-center my-2 md:my-4 lg:my-8 ">{data.data.title}</h1>
        </Card>
        <main className="px-4 md:px-8 lg:px-16 xl:px-24 py-8 flex flex-col gap-8">
            
            <section className="bg-white border rounded-lg p-4 shadow-md grid grid-auto md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
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
            <section className="grid grid-auto lg:grid-cols-2 gap-6">
                <HomeLineChart data={data.vendorPerformance}/>
            </section>
        </main>
    </>
}