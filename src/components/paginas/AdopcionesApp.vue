<template>
  <LoadingApp v-if="isLoading"></LoadingApp>
  <template v-else-if="adopciones.length === 0">
    <EmptyApp></EmptyApp>
  </template>
  <template v-else>
    <ListCardApp :publicaciones="adopciones"></ListCardApp>
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
import { useAdopciones } from '@/composables/useAdopciones';
import EmptyApp from '../list/EmptyApp.vue';
import LoadingApp from '../LoadingApp.vue';
const store = useAdopciones();
const { isLoading, currentPage, totalPages, getPage, adopciones } = store;
</script>
<style scoped></style>
