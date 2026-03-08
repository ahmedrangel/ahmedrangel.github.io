<script setup lang="ts">
import type { NuxtError } from "#app";

defineProps<{
  error: NuxtError;
}>();

useHead({ htmlAttrs: { "data-bs-theme": "light" } });
</script>

<template>
  <div class="bg-primary vh-100 d-flex justify-content-center align-items-center text-white">
    <div class="bg-dark p-5 rounded-3 shadow">
      <h1>Error {{ error.status }}</h1>
      <h5>{{ "error_occurred" }}: {{ error.message || error.statusText || "Error" }}</h5>
      <p>{{ "go_back" }}: <NuxtLink to="/" class="text-decoration-underline text-white">link</NuxtLink></p>
    </div>
  </div>
</template>
