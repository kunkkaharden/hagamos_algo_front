<template>
  <!-- {{ isLoading }}
  <SliderItem
    v-for="evento in eventos"
    :evento="evento"
    :key="evento._id"
  ></SliderItem> -->
  <h2 class="text-center text-xl">Eventos</h2>

  <!-- Implement the carousel -->
  <div class="relative w-full mx-auto">
    <SliderItem
      v-for="(evento, i) in eventos"
      :evento="evento"
      :key="evento._id"
      :visible="i === index - 1"
    ></SliderItem>

    <!-- The previous button -->
    <a
      class="absolute left-0 top-1/2 p-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white hover:text-amber-500 cursor-pointer"
      @click="mover(-1)"
      >❮</a
    >

    <!-- The next button -->
    <a
      class="absolute right-0 top-1/2 p-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white hover:text-amber-500 cursor-pointer"
      @click="mover(1)"
      >❯</a
    >
  </div>
  <!-- The dots -->
  <PaginationNumbers
    @nav:to="navTo"
    :current-page="index"
    :total-pages="eventos.length"
  ></PaginationNumbers>
</template>
<script setup lang="ts">
import { useEventos } from '@/composables/useEventos';
import { onMounted, onUnmounted, ref } from 'vue';
import PaginationNumbers from '../pagination/PaginationNumbers.vue';
import SliderItem from './SliderItem.vue';
const store = useEventos();
const { isLoading, eventos } = store;
const index = ref(1);
const intervalId = ref<number>();
const mover = (i: number) => {
  if (index.value + i < 1) {
    index.value = eventos.value.length;
  } else if (index.value + i > eventos.value.length) {
    index.value = 1;
  } else {
    index.value += i;
  }
};

const navTo = (i: number) => {
  index.value = i;
};

onMounted(() => {
  intervalId.value = setInterval(() => {
    mover(1);
  }, 1000 * 60);
});

onUnmounted(() => {
  clearInterval(intervalId.value);
});
</script>

