import { defineStore } from "pinia";
import type { DataItem } from "./data_interface";
import { ref } from "vue";

export default defineStore("data", ()=>{
  let dataTable=ref<DataItem[]>([]);

  return {
    dataTable
  }
});