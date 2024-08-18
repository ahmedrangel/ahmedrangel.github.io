<script setup>
const { statusCode, statusMessage, message } = useError().value;
useHead({ htmlAttrs: { "data-bs-theme": "light" } });
</script>

<template>
  <div class="bg-primary vh-100 d-flex justify-content-center align-items-center text-white">
    <div class="bg-dark p-5 rounded-3 shadow">
      <h1>Error {{ statusCode }}</h1>
      <h5>{{ "error_occurred" }}: {{ message || statusMessage }}</h5>
      <p>{{ "go_back" }}: <NuxtLink to="/" class="text-decoration-underline text-white">link</NuxtLink></p>
    </div>
  </div>
</template>
