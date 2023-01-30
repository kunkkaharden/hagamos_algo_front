<template>
  <CardApp
    v-for="post in publicaciones"
    :key="post.enlace"
    :post="post"
  ></CardApp>
</template>
<script setup lang="ts">
import type { IPost } from '@/interfaces/post.interface';
import CardApp from './CardApp.vue';
const props = defineProps<{ publicaciones: IPost[] }>();
</script>
