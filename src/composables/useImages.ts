import axios from '@/api/publicaciones';
import { useQuery } from '@tanstack/vue-query';
import { ref } from 'vue';
import type { IPostTg } from '@/interfaces/post-tg.interface';
import { useImageStore } from '@/stores/imagenes';

const getImage = async (enlace: string): Promise<IPostTg> => {
  const { data } = await axios.get<IPostTg>(`publicacion?enlace=${enlace}`);
  return data;
};

export const useImage = () => {
  const store = useImageStore();
  const findImage = (enlace: string) => {
    const image = store.findImage(enlace);
    if (image) {
      return { isLoading: ref(false), image: ref(image) };
    }

    const { isLoading, data } = useQuery(
      ['publicacion?enlace=', enlace],
      () => getImage(enlace),
      {
        staleTime: 10000 * 60,
        onSuccess(image) {
          console.log('imagen guardada');
          store.setImage({ ...image, enlace });
        },
      }
    );

    return { isLoading, image: data };
  };

  return {
    findImage,
  };
};
