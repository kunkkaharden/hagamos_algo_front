<template>
  <HeaderApp></HeaderApp>
  <div class="mt-20">
    <RouterView></RouterView>
  </div>
  <FooterApp></FooterApp>
</template>
<script setup lang="ts">
import FooterApp from './components/nav/footer/FooterApp.vue';
import HeaderApp from './components/nav/header/HeaderApp.vue';
</script>