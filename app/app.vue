<script setup>
const lang = useCookie("lang", { ...cookieMaxAge });
lang.value = lang.value ? lang.value : locale.getLanguage();
locale.setLanguage(lang.value);
useHead({ htmlAttrs: { lang: lang.value } });

const dark = useCookie("dark", { ...cookieMaxAge });
dark.value = dark.value === undefined ? INFO.dark : dark.value;
useHead({ htmlAttrs: { "data-bs-theme": dark.value ? "dark" : "light" } });
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
