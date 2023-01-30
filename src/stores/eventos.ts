import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import type { IPost } from '../interfaces/post.interface';

export const useEventosStore = defineStore('eventos', () => {
  const eventos = ref<IPost[]>([]);
  const currentPage = ref<number>(1);
  const total = ref<number>(5);
  const limit = ref<number>(3);
  const totalPages = ref<number>(1);

  const setEventos = (_eventos: IPost[]) => {
    eventos.value = _eventos;
  };

  const setPage = (_page: number) => {
    currentPage.value = _page;
  };

  const setTotal = (_total: number) => {
    total.value = _total;
    totalPages.value = totalPaginas(_total);
  };

  const setLimit = (_limit: number) => {
    limit.value = _limit;
  };

  const totalPaginas = (total: number) => {
    let paginas = Math.trunc(total / limit.value);
    if (total % limit.value > 0) {
      paginas++;
    }
    return paginas;
  };
  const skip = computed(() => {
    if (currentPage.value === 1) {
      return 0;
    } else {
      return (currentPage.value - 1) * limit.value;
    }
  });

  return {
    eventos,
    totalPages,
    limit,
    currentPage,
    skip,
    setEventos,
    setPage,
    setTotal,
    setLimit,
  };
});
