<script setup>
definePageMeta({ layout: "site" });

useSeoMeta({
  title: INFO.name,
  ogType: "website",
  ogTitle: INFO.name,
  ogUrl: INFO.url,
  twitterTitle: INFO.name
});

useHead({
  title: INFO.name,
  link: [{ rel: "canonical", href: INFO.url }]
});
</script>

<template>
  <main class="mt-5 container-lg">
    <CompAbout />
    <hr class="my-5">
    <CompWorkExperience />
    <hr class="my-5">
    <CompEducation />
    <hr class="my-5">
    <CompSkills />
    <hr class="my-5">
    <CompProjects />
    <hr class="my-5">
    <CompContributions />
  </main>
</template>
