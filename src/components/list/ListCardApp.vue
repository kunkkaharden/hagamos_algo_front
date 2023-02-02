<template>
  <div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 p-10 gap-8">
    <CardImageApp
      v-for="post in publicaciones"
      :key="post._id"
      :post="post"
    ></CardImageApp>
  </div>
</template>
<script setup lang="ts">
import type { IPost } from '@/interfaces/post.interface';
import CardImageApp from './CardImage.vue';
const props = defineProps<{ publicaciones: IPost[] }>();
</script>
