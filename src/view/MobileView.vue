<template>
  <div class="page_bg">
    <div class="header">Temperature Statistics</div>
    <div class="now_data">
      <div class="rightnow">Right now</div>
      <div class="temperature">
        <div class="temperature_data">{{ data().temperature }}</div>
        <div class="celsius">℃</div>
      </div>
      <div class="humidity">Humidity: {{ data().humidity }}%</div>
      <div class="update_time">Update: {{ data().now.format("YYYY-MM-DD HH:mm") }}</div>
    </div>
    <div class="panels">
      <div class="panel_item" @click="showChart=true">
        <i class="pi pi-chart-scatter"></i>
        <div class="panel_label">Chart</div>
      </div>
      <div class="panel_item" @click="showTable=true">
        <i class="pi pi-table"></i>
        <div class="panel_label">Table</div>
      </div>
    </div>
    <div></div>

    <Dialog v-model:visible="showChart" modal header="Chart" :style="{ width: '25rem' }">
      <LineChart class="items-center dialog_content" />
    </Dialog>
    <Dialog v-model:visible="showTable" modal header="Chart" :style="{ width: '25rem' }">
      <Table class="items-center dialog_content" :mobile="true" />
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import data from '../utils/data';
import LineChart from '../components/LineChart.vue';
import Table from '../components/Table.vue';
import { Dialog } from 'primevue';

let showChart=ref(false);
let showTable=ref(false);

</script>

<style scoped>
.dialog_content{
  width: 100%;
  height: 60vh;
}
.panel_label{
  margin-left: 10px;
}
.panel_item:active{
  background-color: rgb(245, 245, 245);
}
.panel_item{
  width: 40vw;
  height: 10vh;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  transition: all linear .2s;
}
.panels{
  display: flex;
  justify-content: space-around;
}
.humidity{
  margin-top: 10px;
}
.update_time{
  margin-top: 5px;
}
.celsius{
  font-size: 5vh;
  margin-top: 10px;
  margin-left: 8px;
}
.temperature_data{
  font-size: 10vh;
  font-weight: bold;
}
.temperature{
  margin-top: 10px;
  display: flex;
  align-items: flex-start;
}
.rightnow{
  font-size: 3vh;
  margin-top: 20px;
  font-weight: bold;
}
.now_data{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.page_bg{
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 50px 1fr 100px 100px;
  padding: 10px;
  box-sizing: border-box;
}
.header{
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
}
</style>