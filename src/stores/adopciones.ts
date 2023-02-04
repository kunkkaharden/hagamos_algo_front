import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import type { IPost } from '../interfaces/post.interface';

export const useAdopcionesStore = defineStore('adopciones', () => {
  const adopciones = ref<IPost[]>([]);
  const currentPage = ref<number>(1);
  const total = ref<number>(1);
  const limit = ref<number>(6);
  const totalPages = ref<number>(1);

  const setAdopciones = (_post: IPost[]) => {
    adopciones.value = _post;
  };

  const setPage = (_page: number) => {
    if (currentPage.value > 0 && currentPage.value <= totalPages.value) {
      currentPage.value = _page;
    }
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
    adopciones,
    totalPages,
    limit,
    currentPage,
    skip,
    setAdopciones,
    setPage,
    setTotal,
    setLimit,
  };
});
