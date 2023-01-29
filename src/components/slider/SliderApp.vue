<template>
  <SliderItem
    v-for="evento in eventos"
    :evento="evento"
    :key="evento._id"
  ></SliderItem>
</template>
<script setup lang="ts">
import SliderItem from './SliderItem.vue';
import { useEventosStore } from '@/stores/eventos';
const useEventos = useEventosStore();
const eventos = useEventos.eventos;
</script>
