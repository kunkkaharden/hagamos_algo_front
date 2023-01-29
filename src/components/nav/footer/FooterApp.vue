<template>
  <div class="footer-app">
    <InfoApp></InfoApp>
    <hr class="line redes" />
    <div class="sm:flex sm:justify-between justify-center">
      <CopyApp></CopyApp>
      <RedesApp></RedesApp>
    </div>
  </div>
</template>
<script setup lang="ts">
import RedesApp from './RedesApp.vue';
import CopyApp from './CopyApp.vue';
import InfoApp from './InfoApp.vue';
</script>
<style>
.footer-app {
  background-color: #111827;
}
.line {
  border-color: #6b7280;
  margin-left: 15px;
  margin-right: 15px;
}
</style>
