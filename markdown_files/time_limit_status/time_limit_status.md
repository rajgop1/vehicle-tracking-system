---
title: Polling Count 
description: Within 15mins
chartData:
  - time_limit: "on_time_polling"
    status: 1936
    fill: "#15803d"
  - time_limit: "delay_polling"
    status: 100
    fill: "#b91c1c"

chartConfig:
  status:
    label: "Status"
  on_time_polling:
    label: "Ontime Polling"
    color: "hsl(var(--chart-1))"
  delay_polling:
    label: "Delay Polling"
    color: "hsl(var(--chart-2))"

donut_inner:
  title: null
  description: "total"

dataKey: status
nameKey: time_limit
innerRadius: 80
isSemi: false

---
