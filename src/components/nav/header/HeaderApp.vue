<template>
  <div>
    <NavPC v-model:visible="menuMovil" :routes="routesLinks"></NavPC>
    <NavMovil v-model:visible="menuMovil" :routes="routesLinks"></NavMovil>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import NavMovil from './NavMovil.vue';
import NavPC from './NavPC.vue';
import { routesLinks } from '@/router/link-routes';
const menuMovil = ref(false);
</script>
<style>

</style>
