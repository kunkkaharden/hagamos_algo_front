import axios from '@/api/publicaciones';
import { useQuery } from '@tanstack/vue-query';
import type { IPost } from '@/interfaces/post.interface';
import { storeToRefs } from 'pinia';
import { watch } from 'vue';
import { useAdopcionesStore } from '@/stores/adopciones';

const getAdopciones = async (
  limit: number,
  skip: number
): Promise<{ total: number; result: IPost[] }> => {
  const { data } = await axios.get<{ total: number; result: IPost[] }>(
    `registro?categoria=ADOPCION&limit=${limit}&skip=${skip}`
  );
  return data;
};

export const useAdopciones = () => {
  const store = useAdopcionesStore();
  const { adopciones, limit, currentPage, totalPages, skip } = storeToRefs(store);
  const { isLoading, data } = useQuery(
    [`registro?categoria=ADOPCION&limit=${limit.value}&skip=`, skip],
    () => getAdopciones(limit.value, skip.value),
    {
      staleTime: 10000 * 60,
    }
  );

  watch(
    data,
    (resp) => {
      if (resp) {
        store.setAdopciones(resp.result);
        store.setTotal(resp.total);
      }
    },
    { immediate: true }
  );

  return {
    isLoading,
    adopciones,
    limit,
    currentPage,
    totalPages,
    getPage: store.setPage,
  };
};
