<template>
  <div id="open-source-contributions">
    <h3 class="fw-bold mb-2" data-aos="fade-right">{{ t("open_source_contributions") }}</h3>
    <div class="mb-4" data-aos="fade-right">
      <span class="fw-bold">Source: </span>
      <NuxtLink to="https://contribs.ahmedrangel.com" target="_blank">
        <span class="text-muted">contribs.ahmedrangel.com</span>
      </NuxtLink>
    </div>
    <GitHubContributions />
  </div>
</template>
