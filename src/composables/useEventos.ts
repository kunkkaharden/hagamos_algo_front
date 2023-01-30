import axios from '@/api/publicaciones';
import { useQuery } from '@tanstack/vue-query';
import type { IPost } from '@/interfaces/post.interface';
import { useEventosStore } from '@/stores/eventos';
import { storeToRefs } from 'pinia';
import { watch } from 'vue';

const getEventos = async (
  limit: number,
  skip: number
): Promise<{ total: number; result: IPost[] }> => {
  const { data } = await axios.get<{ total: number; result: IPost[] }>(
    `registro?categoria=EVENTO&limit=${limit}&skip=${skip}`
  );
  return data;
};

export const useEventos = () => {
  const store = useEventosStore();
  const { eventos, limit, currentPage, totalPages, skip } = storeToRefs(store);
  const { isLoading, data } = useQuery(
    [`registro?categoria=EVENTO&limit=${limit.value}&skip=`, skip],
    () => getEventos(limit.value, skip.value),
    {
      staleTime: 10000 * 60,
    }
  );

  watch(
    data,
    (resp) => {
      if (resp) {
        store.setEventos(resp.result);
        store.setTotal(resp.total);
      }
    },
    { immediate: true }
  );

  return {
    isLoading,
    eventos,
    limit,
    currentPage,
    totalPages,
    getPage: store.setPage,
  };
};
