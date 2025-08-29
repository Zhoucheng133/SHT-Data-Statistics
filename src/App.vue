<template>
  <DesktopView class="desktop_view" />
  <MobileView class="mobile_view" />
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import DesktopView from './view/DesktopView.vue';
import MobileView from './view/MobileView.vue';
import data from './utils/data';

onMounted(()=>{
  data().getData();
})

</script>


<style scoped>
.desktop_view {
  display: grid;
}
.mobile_view {
  display: none;
}

@media (max-width: 768px) {
  .desktop_view {
    display: none;
  }
  .mobile_view {
    display: grid;
  }
}
</style>

<style>

body{
  margin: 0;
  user-select: none;
}
</style>