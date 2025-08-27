<template>
  <DesktopView v-if="pageWidth>500" />
  <MobileView v-else />
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import DesktopView from './view/DesktopView.vue';
import MobileView from './view/MobileView.vue';

let pageWidth=ref(500);

onMounted(()=>{
  pageWidth.value=window.innerWidth;
  window.onresize=()=>{
    pageWidth.value=window.innerWidth;
  }
})

</script>

<style>
body{
  margin: 0;
  user-select: none;
}
</style>