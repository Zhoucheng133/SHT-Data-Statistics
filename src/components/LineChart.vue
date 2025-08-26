<template>
  <div ref="chartRef"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import hostname from '../utils/hostname';
import axios from 'axios';
import dayjs from 'dayjs';
import type { DataItem } from '../utils/data_interface';
import * as echarts from "echarts";
import data from '../utils/data';

const day=dayjs();
let chartRef=ref();
let chartInstance: any = null;

onMounted(async ()=>{
  let {data: response}=await axios.get(`${hostname}/get/day`, {
    params: {
      year: day.year(),
      month: day.month()+1,
      day: day.date(),
    }
  })
  data().dataTable=response as DataItem[];
  onresize=()=>{
    initChart();
  }
  initChart()
})

function initChart(){
  if (!chartRef.value) return;
  if (chartInstance) {
    chartInstance.dispose();
  }
  chartInstance = echarts.init(chartRef.value);
  const times = data().dataTable.map(item => item.timestamp.slice(11, 16)); // 只取HH:mm
  const temps = data().dataTable.map(item => item.temperature);
  const hums = data().dataTable.map(item => item.humidity);
  const option = {
    tooltip: {
      trigger: "axis",
      formatter: (params: any) => {
        let time = params[0].axisValue;
        let content = `${time}<br/>`;
        params.forEach((item: any) => {
          const unit = item.seriesName === "Temperature" ? "°C" : "%";
          content += `${item.seriesName === "Temperature" ? "🌡" : "💧"} ${item.seriesName}: ${item.data}${unit}<br/>`;
        });
        return content;
      }
    },
    legend: {
      data: ["Temperature", "Humidity"],
      top: "5%",
      selected: {
        "Temperature": true,
        "Humidity": false
      },
      textStyle: {
        fontSize: '15'
      }
    },
    grid: {
      top: "15%",
      left: "8%",
      right: "8%",
      bottom: "10%"
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: times,
      axisLabel: {
        rotate: 45,
        interval: "auto",
        fontSize: '16'
      }
    },
    yAxis: [
      {
        type: "value",
        name: "Temperature (°C)",
        position: "left",
        axisLine: {
          lineStyle: { color: "#ff6b6b" }
        },
        splitLine: { show: true },
        min: function (value: any) {
          return (value.min - 2).toFixed(1);
        },
        max: function (value: any) {
          return (value.max + 2).toFixed(1);
        },
        axisLabel :{
          fontSize: '16'
        }
      },
      {
        type: "value",
        name: "Humidity (%)",
        position: "right",
        axisLine: {
          lineStyle: { color: "#3398db" }
        },
        splitLine: { show: false },
        min: function (value: any) {
          return (value.min - 2).toFixed(1);
        },
        max: function (value: any) {
          return (value.max + 2).toFixed(1);
        },
      }
    ],
    series: [
      {
        name: "Temperature",
        type: "line",
        smooth: true,
        data: temps,
        yAxisIndex: 0,
        itemStyle: { color: "#ff6b6b" },
        symbol: "circle",
        symbolSize: 8
      },
      {
        name: "Humidity",
        type: "line",
        smooth: true,
        data: hums,
        yAxisIndex: 1,
        itemStyle: { color: "#3398db" },
        symbol: "circle",
        symbolSize: 8
      }
    ]
  };

  chartInstance.setOption(option);

}

</script>