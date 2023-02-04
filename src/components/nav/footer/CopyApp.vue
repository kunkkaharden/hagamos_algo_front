<template>
  <div class="flex justify-center">
    <p class="text-menu font-sans text-[#6b7280]">
      {{ new Date().getFullYear() }}
    </p>
    <div class="pl-2 pr-1 pt-[3px]">
      <LogoApp color="#6b7280" size="20"></LogoApp>
    </div>
    <p class="text-menu font-sans text-[#6b7280]">Hagamos Algo.</p>
  </div>
</template>
<script setup lang="ts">
import LogoApp from '@/components/LogoApp.vue';
</script>
<style></style>
