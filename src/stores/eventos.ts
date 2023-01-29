import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import type { IPost } from './post.interface';
import axios from 'axios';
export const useEventosStore = defineStore('eventos', () => {
  const _eventos = ref<IPost[]>([]);

  const loadData = async () => {
    if (_eventos.value.length > 0) {
      return;
    }
    try {
      const { data } = await axios.get<IPost[]>(
        'http://srv52118-206152.vps.etecsa.cu:3001/api/registro?categoria=EVENTO'
      );
      _eventos.value = data;
    } catch (error) {
      console.log('get', error);
    }
  };

  const eventos = computed(() => _eventos);
  loadData();
  return { eventos, loadData };
});
