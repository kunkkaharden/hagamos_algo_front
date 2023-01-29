<template>
  <div>
    <div
      class="card tgme_widget_message text_not_supported_wrap js-widget_message"
    >
      <div v-if="image.image">
        <img :src="image.image" />
      </div>
      <span v-html="image.text"></span>

      <div class="shared">
        <i class="pi pi-telegram"></i>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { IPost } from '@/stores/post.interface';
import type { IPostTg } from '@/stores/post-tg.interface';
import { onMounted, ref } from 'vue';
import { useImageStore } from '@/stores/imagenes';

const image = ref<IPostTg>({
  enlace: '',
  image: '',
  text: '',
});
const props = defineProps<{
  evento: IPost;
}>();

const store = useImageStore();
onMounted(async () => {
  try {
    image.value = await store.getImage(props.evento.enlace);
    console.log('ok');
  } catch (error) {
    console.log('error', error);
  }
});
</script>
