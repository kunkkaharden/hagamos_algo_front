<template>
  <div class="flex justify-center m-3">
    <button @click="getPage(currentPage - 1)" :disabled="currentPage === 1">
      Anterior
    </button>
    <button
      v-for="p in listPages"
      :key="p"
      @click="getPage(p)"
      :class="{ active: currentPage === p }"
    >
      {{ p }}
    </button>
    <button
      @click="getPage(currentPage + 1)"
      :disabled="currentPage === totalPages"
    >
      Siguiente
    </button>
  </div>
</template>
<script setup lang="ts">
import { ref, toRef, watch } from 'vue';
interface Props {
  currentPage: number;
  totalPages: number;
}
const props = defineProps<Props>();

const totalPages = toRef(props, 'totalPages');
const currentPage = toRef(props, 'currentPage');

const listPages = ref<number[]>([]);

watch(
  totalPages,
  () => {
    listPages.value = [...new Array(totalPages.value)].map((v, i) => i + 1);
    console.log("watch");
  },
  {
    immediate: true,
  }
);

const getPage = (p: number) => {
  emits('nav:to', p);
};

const emits = defineEmits<{
  (event: 'nav:to', page: number): void;
}>();
</script>
<style scoped>
button {
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid #3e3e3e;
  cursor: pointer;
  margin-right: 5px;
  padding: 10px;
  transition: all 0.5s;
}

button:hover {
  background-color: #111827;
  color: white;
}

button:disabled {
  cursor: not-allowed;
  opacity: 50%;
}

.active {
  background-color: #111827;
  color: white;
}
</style>
