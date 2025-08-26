<template>
  <n-data-table
    :columns="columns"
    :data="data().dataTable"
    :bordered="false"
    :max-height=height
  />
</template>

<script lang="ts" setup>
import { h } from 'vue';
import data from '../utils/data';
import type { DataItem } from '../utils/data_interface';

const height=(window.innerHeight-20)/2-10

const columns: any=[
  {
    title: "Time",
    key: "timestamp",
    render(row: DataItem){
      return h(
        "div",
        row.timestamp.slice(11, -3)
      )
    }
  },
  {
    title: "Temperature",
    key: "temperature",
    render(row: DataItem){
      return h(
        "div",
        row.temperature+" ℃"
      )
    }
  },
  {
    title: "Humidity",
    key: "humidity",
    render(row: DataItem){
      return h(
        "div",
        row.humidity+" %"
      )
    }
  }
];



</script>