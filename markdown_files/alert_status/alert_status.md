---
title: Alert Status
description: null
chartData:
  - alert: "main_power_loss"
    status: 20
    fill: "#3f6212"
  - alert: "vehice_accident"
    status: 5
    fill: "#3730a3"
  - alert: "red_zone_area"
    status: 20
    fill: "#dc2626"
  - alert: "theft_alert"
    status: 3
    fill: "#c026d3"
  

chartConfig:
  status:
    label: "Status"
  main_power_loss:
    label: "Main Power Loss"
    color: "hsl(var(--chart-1))"
  vehice_accident:
    label: "Vehice Accident"
    color: "hsl(var(--chart-2))"
  red_zone_area:
    label: "Red Zone Area"
    color: "hsl(var(--chart-3))"
  theft_alert:
    label: "Theft Alert"
    color: "hsl(var(--chart-3))"

donut_inner:
  title: null
  description: "total"

dataKey: status
nameKey: alert
innerRadius: 80

---
