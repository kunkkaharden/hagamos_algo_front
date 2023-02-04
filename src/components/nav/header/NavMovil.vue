<template>
  <!--
      Mobile menu, show/hide based on mobile menu state.
  
      Entering: "duration-200 ease-out"
        From: "opacity-0 scale-95"
        To: "opacity-100 scale-100"
      Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
    -->
  <div
    class="fixed inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden z-[2]"
    v-if="visible"
  >
    <div
      class="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
    >
      <div class="px-5 pt-5 pb-6">
        <div class="flex items-center justify-between">
          <div>
            <LogoApp color="#584afa" size="50"></LogoApp>
          </div>
          <div class="-mr-2">
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              @click="activeMenu"
            >
              <span class="sr-only">Close menu</span>
              <!-- Heroicon name: outline/x-mark -->
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div class="mt-6">
          <nav class="grid gap-y-8">
            <RouterLink
              v-for="ruta in routes"
              :key="ruta.title"
              :to="ruta.path"
              class="text-menu font-sans font-semibold text-gray-500 hover:text-gray-900"
              active-class="isactive"
              @click="activeMenu"
            >
              {{ ruta.title }}</RouterLink
            >
          </nav>
        </div>
      </div>

      <!-- <div>
          <a
            href="#"
            class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >Sign up</a
          >
          <p class="mt-6 text-center text-base font-medium text-gray-500">
            Existing customer?
            <a href="#" class="text-indigo-600 hover:text-indigo-500"
              >Sign in</a
            >
          </p>
        </div> -->
      <!-- </div> -->
    </div>
  </div>
</template>
<script setup lang="ts">
import LogoApp from '@/components/LogoApp.vue';
import type { RouterLink } from '@/router/link-routes';
const props = defineProps<{ visible: Boolean; routes: RouterLink[] }>();
const emits = defineEmits<{
  (event: 'update:visible', visible: Boolean): void;
}>();

const activeMenu = () => {
  emits('update:visible', !props.visible);
};
</script>
<style scoped>
.isactive {
  color: #4f46e5 !important;
}
</style>
