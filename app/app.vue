<script setup>
const lang = useCookie("lang", { ...cookieMaxAge });
lang.value = lang.value ? lang.value : locale.lang.get();
locale.lang.set(lang.value);

const dark = useCookie("dark", { ...cookieMaxAge });
dark.value = dark.value === undefined ? locale.dark.get() : dark.value;
locale.dark.set(dark.value);
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
