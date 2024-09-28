---
title: Trip Status
description: Description for Trip Status
chartData:
  - trip: "yet_to_start"
    status: 275
    fill: "#60a5fa"
  - trip: "running_ontime"
    status: 300
    fill: "#10b981"
  - trip: "running_delayed"
    status: 400
    fill: "#f87171"
  - trip: "on_time_arrived"
    status: 400
    fill: "#65a30d"
  

chartConfig:
  status:
    label: "Status"
  yet_to_start:
    label: "Yet to Start"
    color: "hsl(var(--chart-1))"
  running_ontime:
    label: "Running Ontime"
    color: "hsl(var(--chart-2))"
  running_delayed:
    label: "Running Delayed"
    color: "hsl(var(--chart-3))"
  on_time_arrived:
    label: "Ontime arrived"
    color: "hsl(var(--chart-3))"

donut_inner:
  title: null
  description: "total"

dataKey: status
nameKey: trip
innerRadius: 80

---
