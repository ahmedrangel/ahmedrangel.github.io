<script setup>
const lang = useState("lang");
</script>

<template>
  <div id="work-experience">
    <div data-aos="fade-right">
      <h3 class="fw-bold mb-4">{{ t("work_experience") }}</h3>
      <div v-for="(work, index) of WORK_EXPERIENCE" :key="index" class="mb-2 bg-card p-3 rounded-2 shadow-sm">
        <div class="h5 mb-0 d-flex align-items-center gap-2 flex-wrap">
          <span class="text-primary fw-bold">{{ work.position[lang] }}</span>
          <span>{{ t("at") }}</span>
          <span class="text-primary fw-bold">{{ work.company.name }}</span>
          <NuxtLink v-if="work.company.url" :to="work.company.url" target="_blank" external>
            <Icon name="twemoji:globe-with-meridians" />
          </NuxtLink>
          <NuxtLink v-if="work.company.linkedin" :to="work.company.linkedin" target="_blank" external>
            <Icon name="logos:linkedin-icon" />
          </NuxtLink>
        </div>
        <p class="m-0">{{ work.location[lang] }}</p>
        <p class="m-0 text-muted">{{ t("months")[work.start_month - 1] }} {{ work.start_year }} — {{ !work.active ? `${t("months")[work.end_month - 1]} ${work.end_year}` : t("months")[12] }}</p>
        <ul class="m-0">
          <li v-for="(desc, index2) of work.description[lang]" :key="index2" class="m-0">
            <!-- eslint-disable-next-line vue/no-v-html, vue/no-v-html -->
            <span v-html="desc" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
