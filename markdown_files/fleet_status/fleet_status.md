---
title: Pie Chart - Fleet Status
description: Description for Fleet Status
chartData:
  - fleet: "runnning"
    status: 800
    fill: "#e76e50"
  - fleet: "stopped"
    status: 1091
    fill: "#2a9d90"
  - fleet: "inactive"
    status: 30
    fill: "#f4a462"

chartConfig:
  status:
    label: "Status"
  runnning:
    label: "Running"
    color: "hsl(var(--chart-1))"
  stopped:
    label: "Stopped"
    color: "hsl(var(--chart-2))"
  inactive:
    label: "Inactive"
    color: "hsl(var(--chart-3))"

donut_inner:
  title: null
  description: "total"

dataKey: status
nameKey: fleet
innerRadius: 60
isSemi: true

---
