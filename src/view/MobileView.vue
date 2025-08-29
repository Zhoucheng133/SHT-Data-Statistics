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
  </div>
</template>

<script setup lang="ts">
import data from '../utils/data';
</script>

<style scoped>
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
  grid-template-rows: 50px 1fr 1fr;
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