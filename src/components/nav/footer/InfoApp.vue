<template>
  <div class="sm:flex sm:flex-row p-5">
    <div class="basis-1/2"></div>
    <div class="justify-center grid sm:grid-cols-2 gap-x-4">
      <RouterLink
        v-for="ruta in routesFooter"
        :key="ruta.title"
        :to="ruta.path"
        class="text-base font-medium text-gray-400 hover:text-white sm:pl-8"
      >
        {{ ruta.title }}</RouterLink
      >
    </div>
  </div>
</template>
<script setup lang="ts">
import { routesFooter } from '@/router/link-routes';
</script>
