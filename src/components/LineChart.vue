<template>
  <div class="chart_area">
    <div class="flex flex-wrap gap-4 radios">
      <div class="flex items-center gap-2">
        <RadioButton v-model="mode" inputId="mode1" value="today" />
        <label for="mode1" class="radio_label">Today</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="mode" inputId="mode2" value="recent_temperature" />
        <label for="mode2" class="radio_label">Recent °C</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="mode" inputId="mode3" value="recent_humidity" />
        <label for="mode3" class="radio_label">Recent %</label>
      </div>
    </div>
    <div ref="chartRef" style="height: 100%; width: 100%;"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import hostname from '../utils/hostname';
import axios from 'axios';
import dayjs from 'dayjs';
import type { DataItem, RecentT } from '../utils/data_interface';
import * as echarts from "echarts";
import data from '../utils/data';
import { RadioButton } from 'primevue';
import { recentHConfig, todayConfig } from '../utils/static';

const day=dayjs();
let chartRef=ref();
let chartInstance: any = null;

const mode=ref("today")

onMounted(async ()=>{
  window.addEventListener('resize', initChart)
  initChart()
})

watch(mode, ()=>{
  initChart();
})

async function initRecentT(){
  let {data: response}=await axios.get(`${hostname}/get/recent/temperature`, {
    params: {
      day: 60,
    }
  })
  data().recentTData=response as RecentT[];
  chartInstance = echarts.init(chartRef.value);
  const times = data().recentTData.map(item => item.date.slice(5, 10))
  const max = data().recentTData.map(item => item.max_temp);
  const min = data().recentTData.map(item => item.min_temp);
  
  chartInstance.setOption(recentHConfig(times, max, min));
}

async function initToday() {
  let {data: response}=await axios.get(`${hostname}/get/day`, {
    params: {
      year: day.year(),
      month: day.month()+1,
      day: day.date(),
    }
  })
  data().todayData=response as DataItem[];
  chartInstance = echarts.init(chartRef.value);
  const times = data().todayData.map(item => item.timestamp.slice(11, 16)); // 只取HH:mm
  const temps = data().todayData.map(item => item.temperature);
  const hums = data().todayData.map(item => item.humidity);

  chartInstance.setOption(todayConfig(times, temps, hums));
}

async function initChart(){
  const width = chartRef.value?.clientWidth || 0;
  const height = chartRef.value?.clientHeight || 0;
  if (width === 0 || height === 0) {
    return;
  }
  if (!chartRef.value){
    return;
  };
  if (chartInstance) {
    chartInstance.dispose();
  }

  if(mode.value=="today"){
    initToday();
  }else if(mode.value=="recent_temperature"){
    initRecentT();
  }
}

</script>

<style scoped>
.radios{
  align-items: center;
  justify-content: center;
}
.radio_label{
  cursor: pointer;
}
.chart_area{
  display: grid;
  grid-template-rows: 30px auto;
}
</style>