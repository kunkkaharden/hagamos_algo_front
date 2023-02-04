<template>
  <LoadingApp v-if="isLoading"></LoadingApp>
  <template v-else-if="eventos.length === 0">
    <EmptyApp></EmptyApp>
  </template>
  <template v-else>
    <ListCardApp :publicaciones="eventos"></ListCardApp>
  </template>
  <PaginationNumbers
    @nav:to="getPage"
    :current-page="currentPage"
    :total-pages="totalPages"
  >
  </PaginationNumbers>
</template>
<script setup lang="ts">
import ListCardApp from '../list/ListCardApp.vue';
import PaginationNumbers from '../pagination/PaginationNumbers.vue';
import { useEventos } from '@/composables/useEventos';
import LoadingApp from '../LoadingApp.vue';
import EmptyApp from '../list/EmptyApp.vue';
const store = useEventos();
const { isLoading, currentPage, totalPages, getPage, eventos } = store;
</script>
<style scoped></style>
