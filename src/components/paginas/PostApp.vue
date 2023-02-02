<template>
  <LoadingApp v-if="isLoading"></LoadingApp>
  <template v-else-if="!image?.text">
    <EmptyApp></EmptyApp>
  </template>
  <template v-else>
    <div class="flex justify-center pt-20 pb-8">
      <div class="w-[400px]">
        <CardImage
          :post="{ enlace: enlace, _id: '', categoria: '' }"
        ></CardImage>
      </div>
    </div>
  </template>
</template>
<script setup lang="ts">
import { useImage } from '@/composables/useImages';
import { useRoute } from 'vue-router';
import CardImage from '../list/CardImage.vue';
import EmptyApp from '../list/EmptyApp.vue';
import LoadingApp from '../LoadingApp.vue';
const route = useRoute();

const store = useImage();
const enlace = route.query['url'] as string;
const { isLoading, image } = store.findImage(enlace);
</script>
