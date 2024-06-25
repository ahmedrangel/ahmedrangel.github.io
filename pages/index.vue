<script setup>
definePageMeta({ layout: "site" });

const projectsOrdered = computed(() => {
  return sortProjects(PROJECTS);
});

const dark = useCookie("dark");

console.log(SKILLS);
</script>

<template>
  <main class="mt-5 container-lg">
    <!-- About -->
    <div id="about" class="pt-5">
      <h3 class="fw-bold mb-4" data-aos="fade-right">{{ t("about_me") }}</h3>
      <div class="row justify-content-center g-4">
        <div class="col-12 col-md-3 pb-3">
          <div class="ps-0 pe-3">
            <div class="position-relative" data-aos="fade-in" data-aos-duration="900">
              <img class="img-fluid w-100" src="/images/ar-profile.jpg">
              <div class="profile-image position-absolute w-100 h-100 border" />
            </div>
          </div>
        </div>
        <div class="col-12 col-md-9" data-aos="fade-left">
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
              <Icon class="iconify me-2" name="ph:envelope-simple-duotone" />
              <a :href="`mailto:${INFO.email}`" target="_blank">{{ INFO.email }}</a>
            </div>
            <div class="col-lg-6 col-md-6 d-flex align-items-center">
              <div v-for="(socials, index) of INFO.socials" :key="index">
                <a :href="socials.url" target="_blank" class="socials-icons">
                  <Icon class="iconify me-2" :name="socials.icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr class="my-5">
    <!-- Education -->
    <div id="education" class="row">
      <div class="col-12 col-lg-8 mb-4" data-aos="fade-right">
        <h3 class="fw-bold mb-4">{{ t("education") }}</h3>
        <div v-for="(education, index) of INFO.education" :key="index" class="mb-2">
          <div class="mb-3">
            <div class="h5 mb-0">
              <span class="text-primary fw-bold me-2">{{ lang === 'en' ? education.diploma_en : education.diploma_es }}</span>
              <span class="me-2">{{ t("at") }}</span>
              <span class="text-primary fw-bold">{{ lang === 'en' ? education.institution_en : education.institution_es }}</span>
            </div>
            <p class="m-0">{{ lang == 'en' ? education.location_en : education.location_es }}</p>
            <p class="m-0">{{ t("months")[education.start_month - 1] }} {{ education.start_year }} — {{ t("months")[education.end_month - 1] }} {{ education.end_year }}</p>
          </div>
        </div>
      </div>
      <!-- Languages -->
      <div class="col-12 col-lg-4 mb-4" data-aos="fade-left">
        <h3 class="fw-bold mb-4">{{ t("languages") }}</h3>
        <p class="mb-1"><b>{{ t("spanish") }}:</b> {{ t("native") }}</p>
        <div class="progress mb-4">
          <div class="progress-bar w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" />
        </div>
        <p class="mb-1"><b>{{ t("english") }}:</b> {{ t("intermediate") }} / {{ t("advanced") }}</p>
        <div class="progress">
          <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" />
        </div>
      </div>
    </div>
    <hr class="m-0">
    <!-- Skills -->
    <div id="skills" class="pt-5">
      <h3 class="fw-bold mb-4" data-aos="fade-right">{{ t("main_skills") }}</h3>
      <table class="table table-borderless m-0 align-middle">
        <tbody>
          <tr v-for="(main_skills, index) of SKILLS" :key="index">
            <td class="col-3 text-center bg-primary m-2 rounded-2" data-aos="fade-right">
              <span class="fw-bold mb-0 text-color-inverted">{{ t(main_skills.skill_id) }}</span>
            </td>
            <td>
              <template v-for="(skills, index2) of main_skills.skills" :key="index2">
                <div class="d-inline-flex" data-aos="zoom-in">
                  <span class="sk m-1 px-2 py-1 text-nowrap rounded-2" :class="dark ? 'bg-dark-3' : 'bg-white-3'">
                    <Icon class="iconify me-1" :name="skills.icon" size="1.2em" />{{ skills.name }}
                  </span>
                </div>
              </template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <hr class="mt-5 mb-0">
    <!-- Projects -->
    <div id="projects" class="py-5">
      <h3 class="fw-bold mb-4" data-aos="fade-right">{{ t("projects") }}</h3>
      <MasonryWall :items="projectsOrdered" :ssr-columns="1" :gap="12" :max-columns="2" :column-width="400" data-aos="fade-in">
        <template #default="{ item: projects }">
          <div class="card overflow-hidden">
            <img :src="`/images/${projects.image}`" class="card-img-top" alt="" data-aos="fade-in">
            <div class="card-body" data-aos="fade-right">
              <a :href="projects.url" target="_blank" class="text-primary  fw-bold">
                <h5 class="m-0 fw-bold">{{ projects.name }}</h5>
              </a>
              <p class="m-0">{{ t("months")[projects.start_month - 1] }} {{ projects.start_year }} — {{ t("months")[projects.end_month - 1] }} {{ projects.end_year }}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <div class="my-2" data-aos="fade-left">
                  <!-- eslint-disable-next-line vue/no-v-html, vue/no-v-html -->
                  <p v-html="lang === 'en' ? projects.desc_en : projects.desc_es" />
                  <ul>
                    <li v-for="(li, index2) of lang === 'en' ? projects.desc_li_en : projects.desc_li_es" :key="index2">
                      <!-- eslint-disable-next-line vue/no-v-html, vue/no-v-html -->
                      <span v-html="li" />
                    </li>
                  </ul>
                </div>
              </li>
              <li class="list-group-item">
                <div class="my-1" data-aos="fade-right">
                  <span v-for="(tags, index3) of projects.tags" :key="index3" class="sk m-1 px-2 py-1 text-nowrap">
                    {{ tags }}
                  </span>
                  <span class="lnks m-1 text-nowrap">
                    <a v-if="projects.repository" :href="projects.repository" target="_blank" class="d-inline-flex align-items-center">
                      <Icon class="iconify me-1" name="simple-icons:github" />
                      <span class="card-foot">
                        <b>{{ t("repository") }}</b>
                      </span>
                    </a>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </template>
      </MasonryWall>
    </div>
  </main>
</template>

<script>
export default {
  data () {
    return {
      scrolledDown: false,
      lang: INFO.lang
    };
  },
  watch: {
    lang (val) {
      locale.setLanguage(val);
    }
  },
  methods: {
    getLang () {
      this.lang = locale.getLanguage();
      return this.lang;
    }
  }
};
</script>
