import { defineStore } from "pinia";
import type { DataItem, RecentH, RecentT } from "./data_interface";
import { ref } from "vue";
import dayjs from "dayjs";
import hostname from "./hostname";
import axios from "axios";

export default defineStore("data", ()=>{
  let todayData=ref<DataItem[]>([]);
  let recentTData=ref<RecentT[]>([]);
  let recentHData=ref<RecentH[]>([]);
  let temperature=ref(0);
  let humidity=ref(0);
  let now=ref(dayjs());

  const getData=async ()=>{
    const {data: response}=await axios.get(`${hostname}/get`);
    temperature.value=response.temperature;
    humidity.value=response.humidity;
  }

  return {
    todayData,
    recentTData,
    recentHData,
    getData,
    temperature,
    humidity,
    now,
  }
});