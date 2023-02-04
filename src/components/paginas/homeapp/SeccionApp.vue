<template>
  <div class="flex flex-col pb-5 pt-10">
    <h2
      class="text-[#584afa] text-2xl font-sans font-semibold text-center mx-5"
    >
      {{ title }}
    </h2>
    <LoadingApp v-if="isLoading">cargando...</LoadingApp>
    <template v-else>
      <ListCardApp :publicaciones="posts"></ListCardApp>
      <RouterLink
        :to="to"
        class="text-menu text-[#584afa] text-2xl font-sans font-semibold text-center"
        >Ver más...</RouterLink
      >
    </template>
  </div>
</template>
<script setup lang="ts">
import ListCardApp from '@/components/list/ListCardApp.vue';
import LoadingApp from '@/components/LoadingApp.vue';
import type { IPost } from '@/interfaces/post.interface';
interface Props {
  posts: IPost[];
  title: string;
  text_color?: string;
  backgraund?: string;
  isLoading: boolean;
  to: string;
}
const props = defineProps<Props>();
</script>
<style scope></style>
