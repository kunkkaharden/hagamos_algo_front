<template>
  <div v-if="isLoading">cargando...</div>
  <div v-else-if="image?.text">
    <!-- <div
      class="card tgme_widget_message text_not_supported_wrap js-widget_message"
    >
      <div v-if="image!.image">
        <img :src="image!.image" />
      </div>
      <span v-html="image!.text"></span>

      <div class="shared">
        <i class="pi pi-telegram"></i>
      </div>
    </div> -->
    <div class="slide relative" :class="{hidden: !visible}">
      <img class="w-full h-[300px] object-cover" :src="image.image" />
      <div
        class="absolute bottom-0 w-full px-5 py-3 bg-black/40 text-center text-white"
      >
        Flower One Caption
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { IPost } from '@/interfaces/post.interface';
import type { IPostTg } from '@/interfaces/post-tg.interface';
import { onMounted, ref } from 'vue';
import { useImage } from '@/composables/useImages';
const store = useImage();
// const image = ref<IPostTg>({
//   enlace: '',
//   image: '',
//   text: '',
// });
const props = defineProps<{
  evento: IPost;
  visible: boolean;
}>();

const { isLoading, image } = store.findImage(props.evento.enlace);

// onMounted(async () => {
//     image.value = await store.getImage(props.evento.enlace);
//     console.log('ok');
//   } catch (error) {
//     console.log('error', error);
//   }
// });
</script>
