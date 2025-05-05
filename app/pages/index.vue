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
    <hr class="mt-5 mb-0">
    <CompWorkExperience class="pt-5" />
    <hr class="mt-5 mb-0">
    <CompEducation class="pt-5" />
    <hr class="mt-5 mb-0">
    <CompSkills class="pt-5" />
    <hr class="mt-5 mb-0">
    <CompProjects class="pt-5" />
    <hr class="mt-5 mb-0">
    <CompContributions class="pt-5" />
  </main>
</template>
