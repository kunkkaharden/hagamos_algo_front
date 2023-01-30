import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { IPostTg } from '../interfaces/post-tg.interface';
export const useImageStore = defineStore('images', () => {
  const images = ref<IPostTg[]>([]);
  const findImage = (enlace: string) => {
    return images.value.find((e) => e.enlace === enlace);
  };

  const setImage = (image: IPostTg) => {
    images.value.push(image);
    if (images.value.length > 500) {
      images.value.shift();
    }
  };
  return { images, findImage, setImage };
});
