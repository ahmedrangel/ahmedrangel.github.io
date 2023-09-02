<script setup>
definePageMeta({ layout: "site" });
</script>
<template>
  <main class="mt-5 container-lg">
    <!-- About -->
    <div id="about" class="pt-5">
      <h3 class="fw-bold mb-3">{{ t("about_me") }}</h3>
      <div class="row justify-content-center g-4">
        <div class="col-12 col-md-3 pb-3">
          <div class="ps-0 pe-3">
            <div class="position-relative">
              <img class="img-fluid w-100" src="/ar-profile.jpg">
              <div class="profile-image position-absolute w-100 h-100 border" />
            </div>
          </div>
        </div>
        <div class="col-12 col-md-9">
          <p>{{ t("bio") }}</p>
          <div class="row gy-3 align-items-end">
            <div class="col-lg-6 col-md-6 d-flex align-items-center">
              <Icon class="iconify me-2" name="ph:graduation-cap-duotone" />
              <span>{{ t("degree") }}</span>
            </div>
            <div class="col-lg-6 col-md-6 d-flex align-items-center">
              <Icon class="iconify me-2" name="ph:cake-duotone" />
              <span>{{ INFO.birthday }} ({{ ageCalc(INFO.birthday) }} {{ t("years_old") }})</span>
            </div>
            <div class="col-lg-6 col-md-6 d-flex align-items-center">
              <Icon class="iconify me-2" name="ph:map-pin-duotone" />
              <span>{{ t("address") }}</span>
            </div>
            <div class="col-lg-6 col-md-6 d-flex align-items-center">
              <Icon class="iconify me-2" name="ph:phone-duotone" />
              <span>{{ INFO.phone }}</span>
            </div>
            <div class="col-lg-6 col-md-6 d-flex align-items-center">
              <Icon class="iconify me-2" name="ph:envelope-simple-duotone" />
              <a :href="`mailto:${INFO.email}`" class="text-decoration-none" target="_blank">{{ INFO.email }}</a>
            </div>
            <div class="col-lg-6 col-md-6 d-flex align-items-center">
              <div v-for="(socials, index) of INFO.socials" :key="index">
                <a :href="socials.url" target="_blank">
                  <Icon class="iconify me-2" :name="socials.icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr class="my-4">
    <!-- Education -->
    <div id="education" class="row">
      <div class="col-12 col-lg-8 mb-4">
        <h3 class="fw-bold mb-3">{{ t("education") }}</h3>
        <div v-for="(education, index) of INFO.education" :key="index" class="mb-2">
          <div class="mb-2">
            <div class="h5 mb-0">
              <span class="text-primary fw-bold me-2">{{ t(education.diploma) }}</span>
              <span class="me-2">{{ t("at") }}</span>
              <span class="text-primary fw-bold">{{ t(education.institution) }}</span>
            </div>
            <p class="m-0">{{ t(education.location) }}</p>
            <p class="m-0">{{ t("months")[education.start_month - 1] }} {{ education.start_year }} — {{ t("months")[education.end_month - 1] }} {{ education.end_year }}</p>
          </div>
        </div>
      </div>
      <!-- Languages -->
      <div class="col-12 col-lg-4 mb-4">
        <h3 class="fw-bold mb-3">{{ t("languages") }}</h3>
        <p class="mb-1"><b>{{ t("spanish") }}:</b> {{ t("native") }}</p>
        <div class="progress mb-3">
          <div class="progress-bar w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" />
        </div>
        <p class="mb-1"><b>{{ t("english") }}:</b> {{ t("intermediate") }} / {{ t("advanced") }}</p>
        <div class="progress">
          <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" />
        </div>
      </div>
    </div>
    <hr class="mt-0 mb-4">
    <!-- Skills -->
    <div id="skills">
      <h3 class="fw-bold mb-3">{{ t("main_skills") }}</h3>
      <table class="table table-borderless m-0 align-middle">
        <tbody>
          <tr v-for="(main_skills, index) of INFO.main_skills" :key="index">
            <td class="col-3 text-center bg-primary m-2">
              <span class="fw-bold mb-0 text-color-inverted">{{ t(main_skills.skill_id) }}</span>
            </td>
            <td>
              <span v-for="(skills, index2) of main_skills.skills" :key="index2" class="sk m-1 px-2 py-1 text-nowrap">
                <Icon class="iconify me-1" :name="skills.icon" />{{ skills.name }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <hr class="my-4">
    <!-- Skills -->
    <div id="projects">
      <h3 class="fw-bold mb-3">{{ t("projects") }}</h3>
    </div>
  </main>
</template>
<script>
export default {
  data () {
    return {
      scrolledDown: false,
    };
  },
};
</script>