<script setup>
const lang = useState("lang");
</script>

<template>
  <div id="education" class="row">
    <div class="col-12 col-lg-8 mb-4">
      <h3 class="fw-bold mb-4">{{ t("education") }}</h3>
      <div v-for="(education, index) of INFO.education" :key="index" class="mb-2 bg-card p-3 rounded-2 shadow-sm" data-aos="fade-right">
        <div class="h5 mb-0">
          <span class="text-primary fw-bold me-2">{{ lang === 'en' ? education.diploma_en : education.diploma_es }}</span>
          <span class="me-2">{{ t("at") }}</span>
          <span class="text-primary fw-bold">{{ lang === 'en' ? education.institution_en : education.institution_es }}</span>
        </div>
        <p class="m-0">{{ lang == 'en' ? education.location_en : education.location_es }}</p>
        <p class="m-0">{{ t("months")[education.start_month - 1] }} {{ education.start_year }} — {{ t("months")[education.end_month - 1] }} {{ education.end_year }}</p>
      </div>
    </div>
    <!-- Languages -->
    <div class="col-12 col-lg-4 mb-4" data-aos="fade-left">
      <h3 class="fw-bold mb-4">{{ t("languages") }}</h3>
      <div class="bg-card p-3 mb-2 rounded-2 shadow-sm">
        <p class="mb-1"><b>{{ t("spanish") }}:</b> {{ t("native") }}</p>
        <div class="progress bg-body">
          <div class="progress-bar w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" />
        </div>
      </div>
      <div class="bg-card p-3 rounded-2 shadow-sm">
        <p class="mb-1"><b>{{ t("english") }}:</b> {{ t("intermediate") }} / {{ t("advanced") }}</p>
        <div class="progress bg-body">
          <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" />
        </div>
      </div>
    </div>
  </div>
</template>
