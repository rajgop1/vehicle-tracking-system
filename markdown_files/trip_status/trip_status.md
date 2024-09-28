---
title: Pie Chart - Trip Status
description: Description for Trip Status
chartData:
  - trip: "yet_to_start"
    status: 275
    fill: "#e76e50"
  - trip: "running_ontime"
    status: 300
    fill: "#2a9d90"
  - trip: "running_delayed"
    status: 400
    fill: "#f4a462"

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

donut_inner:
  title: null
  description: "total"

dataKey: status
nameKey: trip
innerRadius: 60

---
