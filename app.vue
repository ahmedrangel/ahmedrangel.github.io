<script setup>
const lang = useCookie("lang");
lang.value = lang.value ? lang.value : locale.getLanguage();
locale.setLanguage(lang.value);
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>