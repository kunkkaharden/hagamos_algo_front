<template>
  <div class="px-6 fixed w-full top-0 bg-[#584afa] z-[1]">
    <div
      class="flex items-center justify-between py-6 md:justify-start md:space-x-10"
    >
      <div class="flex justify-start lg:w-0 lg:flex-1">
        <a href="#">
          <span class="sr-only">Your Company</span>
          <img
            class="h-8 w-auto sm:h-10"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt=""
          />
        </a>
      </div>
      <div class="-my-2 -mr-2 md:hidden">
        <button
          type="button"
          class="inline-flex items-center justify-center rounded-md p-2 text-[#e2e1e1] hover:bg-[#4639cf] shadow-lg focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          aria-expanded="false"
          @click="activeMenu"
        >
          <span class="sr-only">Open menu</span>
          <!-- Heroicon name: outline/bars-3 -->
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <nav class="hidden space-x-10 md:flex">
        <RouterLink
          v-for="ruta in routes"
          :key="ruta.title"
          :to="ruta.path"
          class="text-menu font-sans font-semibold text-[#c8c5ff] hover:text-white"
          active-class="isactive"
        >
          {{ ruta.title }}</RouterLink
        >
        <a
          href="https://bacuba.org/donate/"
          target="_blank"
          class="text-menu font-sans font-semibold text-[#c8c5ff] hover:text-white"
          >Donar</a
        >
      </nav>
      <!-- <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
        <a
          href="#"
          class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
          >Sign in</a
        >
        <a
          href="#"
          class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >Sign up</a
        >
      </div> -->
    </div>
  </div>
</template>
<script setup lang="ts">
import type { RouterLink } from '@/router/link-routes';

const props = defineProps<{ visible: Boolean; routes: RouterLink[] }>();
const emits = defineEmits<{
  (event: 'update:visible', visible: Boolean): void;
}>();

const activeMenu = () => {
  emits('update:visible', !props.visible);
};
</script>

<style>
.isactive {
  color: #ffffff !important;
}
.flotante {
  position: fixed;
  z-index: 1;
}
</style>
