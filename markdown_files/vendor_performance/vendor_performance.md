---
title: Vendor Performance
description: description
chartData:
  - date: "Apr-2024"
    suresh: 186
    avocation: 80
  - date: "May-2024"
    suresh: 305
    avocation: 200
  - date: "June-2024"
    suresh: 237
    avocation: 120
  - date: "July-2024"
    suresh: 73
    avocation: 190
  - date: "Aug-2024"
    suresh: 209
    avocation: 130
  - date: "Sep-2024"
    suresh: 214
    avocation: 140

chartConfig:
  suresh:
    label: "suresh"
    color: "hsl(var(--chart-1))"
  avocation:
    label: "avocation"
    color: "hsl(var(--chart-2))"

xAxisKey: date
yAxisKeys:
    - name: suresh
      color: "red" 
    - name: avocation
      color: "blue"

footer: 
    title: Footer Title
    description: Footer Description 
---

