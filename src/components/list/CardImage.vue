<template>
  <div v-if="isLoading" class="p-5 bg-white rounded-xl">
    <div class="skeleton w-full h-[100px] my-5"></div>
    <div>
      <div class="skeleton w-full h-4 my-3 pl-6"></div>
      <div class="skeleton w-full h-4 my-3 pl-6"></div>
      <div class="skeleton w-full h-4 my-3 pl-6"></div>
    </div>
  </div>
  <div
    v-else
    class="rounded-xl bg-white shadow-md hover:shadow-lg hover:cursor-pointer"
    @click="copiar"
  >
    <div>
      <img :src="image?.image" class="rounded-t-xl" />
    </div>
    <div v-html="image?.text" class="p-3"></div>
    <div
      class="w-full px-5 py-3 bg-black/40 text-center text-white rounded-b-xl"
      v-if="visible"
    >
      Enlace copiado
    </div>
  </div>
</template>
<script setup lang="ts">
import { useImage } from '@/composables/useImages';
import type { IPost } from '@/interfaces/post.interface';
import { ref } from 'vue';

const store = useImage();
const props = defineProps<{ post: IPost }>();
const visible = ref(false);
const { isLoading, image } = store.findImage(props.post.enlace);

const copiar = () => {
  const host = import.meta.env.VITE_HOST;
  navigator.clipboard
    .writeText(host + '/post?url=' + props.post.enlace)
    .then(() => {
      visible.value = true;
      setTimeout(() => {
        visible.value = false;
      }, 3000);
    })
    .catch((err) => {
      console.log('Something went wrong', err);
    });
};
</script>
<style>
/*TExt*/
.emoji {
  width: 1.25em;
  height: 1.25em;
  vertical-align: top;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  position: relative;
  /* background: no-repeat -1000px -1000px; */
  background-size: 1.25em 1.25em;
  text-indent: -10em;
  padding: 3px 3px 3px 2px;
  margin: -3px -2px;
}

.tgme_widget_message_text {
  font-size: 16px;
  line-height: 21px;
  word-break: break-word;
  margin-top: 6px;
}

.skeleton {
  /* overflow: hidden;
  position: relative;
  background-color: #dee2e6;*/
  border-radius: 6px;

  position: relative;
  overflow: hidden;
  background-color: #dde0e4 !important;
  color: transparent !important;
  /* border-color: #087ff7 !important; */
  user-select: none;
  cursor: default;
}

.skeleton::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateX(-100%);
  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0,
    rgba(255, 255, 255, 0.2) 20%,
    rgba(255, 255, 255, 0.5) 70%,
    rgba(255, 255, 255, 0)
  );
  animation: shimmer 2s infinite;
  content: '';
}

@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
</style>
tgme_widget_message_text js-message_text
