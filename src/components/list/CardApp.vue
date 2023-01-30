<template>
  <div>
    <h3> el post </h3>
    {{ post.enlace }}

  </div>
</template>
<script setup lang="ts">
import type { IPost } from '@/interfaces/post.interface';

const props = defineProps<{ post: IPost }>();
</script>
