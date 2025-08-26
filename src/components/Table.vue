<template>
  <n-data-table
    :columns="columns"
    :data="data().dataTable"
    :bordered="false"
    :max-height=height
  />
</template>

<script lang="ts" setup>
import data from '../utils/data';

const height=window.innerHeight/2-10

const columns: any=[
  {
    title: "Time",
    key: "timestamp"
  },
  {
    title: "Temperature",
    key: "temperature"
  },
  {
    title: "Humidity",
    key: "humidity"
  }
];



</script>