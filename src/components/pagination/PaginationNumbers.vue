<template>
  <div class="flex items-center justify-between bg-white px-4 py-3 sm:px-6">
    <div class="flex flex-1 justify-between sm:hidden">
      <button
        @click="getPage(currentPage - 1)"
        :disabled="currentPage === 1"
        class="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        Anterior
      </button>
      <button
        @click="getPage(currentPage + 1)"
        :disabled="currentPage === totalPages"
        class="ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        Siguiente
      </button>
    </div>
    <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
      <div>
        <nav
          class="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          <button
            @click="getPage(currentPage - 1)"
            :disabled="currentPage === 1"
            class="inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
          >
            <span class="sr-only">Previous</span>
            <!-- Heroicon name: mini/chevron-left -->
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
          <span
            class="items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700"
            :class="filsterList[0] !== 1 ? 'inline-flex' : 'hidden'"
            >...</span
          >

          <button
            v-for="p in filsterList"
            @click="getPage(p)"
            :class="clases(p)"
            :key="p"
            href="#"
            aria-current="page"
            class="inline-flex items-center px-4 py-2 text-sm font-medium"
          >
            {{ p }}
          </button>

          <!-- inline-flex  hidden-->
          <span
            class="items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700"
            :class="
              filsterList[filsterList.length - 1] !== totalPages
                ? 'inline-flex'
                : 'hidden'
            "
            >...</span
          >

          <button
            @click="getPage(currentPage + 1)"
            :disabled="currentPage === totalPages"
            class="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
          >
            <span class="sr-only">Next</span>
            <!-- Heroicon name: mini/chevron-right -->
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </nav>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, toRef, watch, computed } from 'vue';
interface Props {
  currentPage: number;
  totalPages: number;
}
const props = defineProps<Props>();

const totalPages = toRef(props, 'totalPages');
const currentPage = toRef(props, 'currentPage');

const listPages = ref<number[]>([]);
const clases = (p: number) => {
  return p === currentPage.value
    ? 'border border-gray-300 bg-indigo-50 text-indigo-600'
    : 'border border-gray-300 bg-white text-gray-500';
};
watch(
  totalPages,
  () => {
    listPages.value = [...new Array(totalPages.value)].map((v, i) => i + 1);
  },
  {
    immediate: true,
  }
);
const filsterList = computed(() => {
  const inicio = currentPage.value - 5 < 0 ? 0 : currentPage.value - 5;
  const fin =
    currentPage.value + 5 > totalPages.value
      ? totalPages.value
      : currentPage.value + 5;
  return listPages.value.slice(inicio, fin);
});
const getPage = (p: number) => {
  emits('nav:to', p);
};

const emits = defineEmits<{
  (event: 'nav:to', page: number): void;
}>();
</script>
<style scoped>
button:hover {
  background-color: rgb(199, 199, 199);
}
button:disabled {
  cursor: not-allowed;
  /* opacity: 50%; */
}
</style>
