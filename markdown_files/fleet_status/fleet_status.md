---
title: Fleet Status
description: null
chartData:
  - fleet: "runnning"
    status: 800
    fill: "#22c55e"
  - fleet: "stopped"
    status: 1091
    fill: "#ef4444"
  - fleet: "inactive"
    status: 200
    fill: "#8b5cf6"

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
