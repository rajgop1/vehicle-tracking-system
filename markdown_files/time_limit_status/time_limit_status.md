---
title: null
description: Trips not moved due to Gems, VTS unsync
chartData:
  - time_limit: "within_time_limit"
    status: 1263
    fill: "#e76e50"
  - time_limit: "out_of_time_limit"
    status: 310
    fill: "#2a9d90"

chartConfig:
  status:
    label: "Status"
  within_time_limit:
    label: "Within Time Limit"
    color: "hsl(var(--chart-1))"
  out_of_time_limit:
    label: "Out of Time Limit"
    color: "hsl(var(--chart-2))"

donut_inner:
  title: null
  description: "total"

dataKey: status
nameKey: time_limit
innerRadius: 60
isSemi: false

---
