import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';
import type { IPostTg } from './post-tg.interface';
export const useImageStore = defineStore('images', () => {
  const images = ref<IPostTg[]>([]);
  const getImage = async (enlace: string) => {
    let image = findImage(enlace);
    if (!image) {
      console.log('not foun');
      image = await loadImage(enlace);
      images.value.push(image);
    }
    return image;
  };
  const findImage = (enlace: string) => {
    return images.value.find((e) => e.enlace === enlace);
  };
  const loadImage = async (enlace: string) => {
    const { data } = await axios.get<IPostTg>(
      `http://srv52118-206152.vps.etecsa.cu:3001/api/publicacion?enlace=${enlace}`
    );
    console.log('load:ok', data);
    return data;
  };
  return { getImage };
});
