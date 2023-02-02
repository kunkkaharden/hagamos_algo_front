<template>
  <div class="grid sm:grid-cols-2 p-5">
    <div class="flex justify-center"></div>
    <div class="flex justify-center">
      <div class="grid sm:grid-cols-2">
        <RouterLink
          v-for="ruta in routesFooter"
          :key="ruta.title"
          :to="ruta.path"
          class="text-menu font-sans font-semibold text-gray-400 hover:text-white sm:pl-8 text-center sm:text-left"
        >
          {{ ruta.title }}</RouterLink
        >
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { routesFooter } from '@/router/link-routes';
</script>
