"use client"

import HomeCard from "./home-card"
import { HomeChart } from "./home-chart"
import { HomeLineChart } from "./home-line-chart"

export default function HomeComponent(data:any){

    return <main className="px-4 md:px-8 lg:px-16 xl:px-24 py-8 flex flex-col gap-8">
        <h1 className="text-4xl font-semibold text-center">{data.data.title}</h1>
        <section className="grid grid-auto md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {
                data.truckCards.map((card:any,index:number)=>{
                    return <HomeCard key={index} data={card}/>
                })
            }
        </section>
        <section className="grid grid-auto lg:grid-cols-2 gap-6">
            <HomeChart data={data.fleetStatus}/>
            <div className="grid grid-auto lg:grid-cols-2 gap-6">
            <HomeChart data={data.tripStatus}/>
                <HomeChart data={data.timeLimitStatus}/>
            </div>
        </section>
        <section className="grid grid-auto lg:grid-cols-2 gap-6">
            <HomeLineChart data={data.vendorPerformance}/>
        </section>
    </main>
}