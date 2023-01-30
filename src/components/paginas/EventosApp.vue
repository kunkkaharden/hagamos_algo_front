<template>
  <ListCardApp :publicaciones="eventos" v-if="!isLoading"></ListCardApp>
  <p v-else>Cargando...</p>
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
import PaginationApp from '../list/PaginationApp.vue';
const store = useEventos();
const { isLoading, currentPage, totalPages, getPage, eventos } = store;
</script>
<style scoped></style>
