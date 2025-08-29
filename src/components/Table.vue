<template>
  <DataTable :value="data().dataTable" scrollable :scrollHeight="tableHeight+'px'">
    <Column field="timestamp" header="Time">
      <template #body="slotProps">
        {{ slotProps.data.timestamp.slice(11, -3) }}
      </template>
    </Column>
    <Column field="temperature" header="Temperature">
      <template #body="slotProps">
        {{ slotProps.data.temperature + ' ℃' }}
      </template>
    </Column>
    <Column field="humidity" header="Humidity">
      <template #body="slotProps">
        {{ slotProps.data.humidity + ' %' }}
      </template>
    </Column>
  </DataTable>
</template>

<script setup lang="ts">
import { DataTable, Column } from 'primevue';
import data from '../utils/data';
import { computed } from 'vue';

const props = defineProps(["mobile"])

let tableHeight=computed(()=>{
  return props.mobile ? window.innerHeight*0.6 : (window.innerHeight-20-50)/2-10;
})

</script>