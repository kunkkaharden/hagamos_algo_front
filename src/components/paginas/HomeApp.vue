<template>
  <div class="">
    <SecccionApp
      title="Animales en adopción"
      :posts="adopciones"
      to="/adoptar"
      :is-loading="loading_adopciones"
    >
    </SecccionApp>
    <SomosApp></SomosApp>
    <SecccionApp
      title="Eventos"
      :posts="eventos"
      to="/eventos"
      :is-loading="loading_eventos"
    >
    </SecccionApp>
    <ColaborarApp></ColaborarApp>
  </div>
  <div></div>
  <!-- <SliderApp></SliderApp> -->
</template>
<script setup lang="ts">
import SecccionApp from './homeapp/SeccionApp.vue';
import { useEventos } from '@/composables/useEventos';
import { useAdopciones } from '@/composables/useAdopciones';
import SomosApp from './info/SomosApp.vue';
import ColaborarApp from './info/ColaborarApp.vue';

const { isLoading: loading_eventos, eventos } = useEventos();
const { isLoading: loading_adopciones, adopciones } = useAdopciones();
</script>
