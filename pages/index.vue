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
        <div class="mb-2">
          <div class="h5 mb-0">
            <span class="text-primary fw-bold me-2">{{ t("degree") }}</span>
            <span class="me-2">{{ t("at") }}</span>
            <span class="text-primary fw-bold">{{ t("utp") }}</span>
          </div>
          <p class="m-0">{{ t("panama_city") }}, {{ t("panama") }}</p>
          <p class="m-0">{{ t("months")[1 - 1] }} 2016 — {{ t("months")[5 - 1] }} 2022</p>
        </div>
        <div class="mb-2">
          <div class="h5 mb-0">
            <span class="text-primary fw-bold me-2">{{ t("bachelor") }}</span>
            <span class="me-2">{{ t("at") }}</span>
            <span class="text-primary fw-bold">{{ t("pps") }}</span>
          </div>
          <p class="m-0">{{ t("la_chorrera") }}, {{ t("panama") }}</p>
          <p class="m-0">{{ t("months")[2 - 1] }} 2010 — {{ t("months")[12 - 1] }} 2015</p>
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
          <tr>
            <td class="col-3 text-center bg-primary m-2">
              <span class="fw-bold mb-0 text-color-inverted">Web Development</span>
            </td>
            <td>
              <span class="sk m-1 px-2 py-1 text-nowrap"><Icon class="iconify me-1" name="simple-icons:javascript" />JavaScript</span>
              <span class="sk m-1 px-2 py-1 text-nowrap"><Icon class="iconify me-1" name="simple-icons:html5" />HTML5</span>
              <span class="sk m-1 px-2 py-1 text-nowrap"><Icon class="iconify me-1" name="simple-icons:css3" />CSS3</span>
              <span class="sk m-1 px-2 py-1 text-nowrap"><Icon class="iconify me-1" name="simple-icons:php" />PHP</span>
              <span class="sk m-1 px-2 py-1 text-nowrap"><Icon class="iconify me-1" name="simple-icons:bootstrap" />Bootstrap 5</span>
              <span class="sk m-1 px-2 py-1 text-nowrap"><Icon class="iconify me-1" name="simple-icons:tailwindcss" />TailwindCSS</span>
              <span class="sk m-1 px-2 py-1 text-nowrap"><Icon class="iconify me-1" name="simple-icons:cloudflare" />Cloudflare Pages</span>
              <span class="sk m-1 px-2 py-1 text-nowrap"><Icon class="iconify me-1" name="simple-icons:github" />GitHub Pages</span>
            </td>
          </tr>
          <tr>
            <td class="col-3 text-center bg-primary m-2">
              <span class="fw-bold mb-0 text-color-inverted">JavaScript</span>
            </td>
            <td>
              <span class="sk m-1 px-2 py-1 text-nowrap"><Icon class="iconify me-1" name="simple-icons:javascript" />ES6+</span>
              <span class="sk m-1 px-2 py-1 text-nowrap"><Icon class="iconify me-1" name="simple-icons:nodedotjs" />Node.js</span>
              <span class="sk m-1 px-2 py-1 text-nowrap"><Icon class="iconify me-1" name="simple-icons:nuxtdotjs" />Nuxt</span>
              <span class="sk m-1 px-2 py-1 text-nowrap"><Icon class="iconify me-1" name="simple-icons:vuedotjs" />Vue.js</span>
            </td>
          </tr>
          <tr>
            <td class="col-3 text-center bg-primary m-2">
              <span class="fw-bold mb-0 text-color-inverted">Databases</span>
            </td>
            <td>
              <span class="sk m-1 px-2 py-1 text-nowrap"><Icon class="iconify me-1" name="simple-icons:mysql" />MySQL</span>
              <span class="sk m-1 px-2 py-1 text-nowrap"><Icon class="iconify me-1" name="simple-icons:postgresql" />PostgreSQL</span>
              <span class="sk m-1 px-2 py-1 text-nowrap"><Icon class="iconify me-1" name="simple-icons:sqlite" />SQLite</span>
              <span class="sk m-1 px-2 py-1 text-nowrap"><Icon class="iconify me-1" name="simple-icons:cloudflare" />Cloudflare D1</span>
            </td>
          </tr>
          <tr>
            <td class="col-3 text-center bg-primary m-2">
              <span class="fw-bold mb-0 text-color-inverted">Serverless</span>
            </td>
            <td>
              <span class="sk m-1 px-2 py-1 text-nowrap"><Icon class="iconify me-1" name="simple-icons:cloudflare" />Cloudflare Workers</span>
              <span class="sk m-1 px-2 py-1 text-nowrap"><Icon class="iconify me-1" name="simple-icons:vercel" />Vercel</span>
            </td>
          </tr>
          <tr>
            <td class="col-3 text-center bg-primary m-2">
              <span class="fw-bold mb-0 text-color-inverted">Software & Tools</span>
            </td>
            <td>
              <span class="sk m-1 px-2 py-1 text-nowrap"><Icon class="iconify me-1" name="simple-icons:github" />GitHub</span>
              <span class="sk m-1 px-2 py-1 text-nowrap"><Icon class="iconify me-1" name="simple-icons:visualstudiocode" />VSCode</span>
              <span class="sk m-1 px-2 py-1 text-nowrap"><Icon class="iconify me-1" name="simple-icons:cloudflare" />Cloudflare</span>
              <span class="sk m-1 px-2 py-1 text-nowrap"><Icon class="iconify me-1" name="simple-icons:amazonaws" />AWS</span>
              <span class="sk m-1 px-2 py-1 text-nowrap"><Icon class="iconify me-1" name="simple-icons:wordpress" />WordPress</span>
              <span class="sk m-1 px-2 py-1 text-nowrap"><Icon class="iconify me-1" name="simple-icons:git" />Git</span>
              <span class="sk m-1 px-2 py-1 text-nowrap"><Icon class="iconify me-1" name="simple-icons:pnpm" />PNPM</span>
              <span class="sk m-1 px-2 py-1 text-nowrap"><Icon class="iconify me-1" name="simple-icons:eslint" />ESLint</span>
              <span class="sk m-1 px-2 py-1 text-nowrap"><Icon class="iconify me-1" name="simple-icons:postman" />Postman</span>
            </td>
          </tr>
          <tr>
            <td class="col-3 text-center bg-primary m-2">
              <span class="fw-bold mb-0 text-color-inverted">Operating Systems</span>
            </td>
            <td>
              <span class="sk m-1 px-2 py-1 text-nowrap"><Icon class="iconify me-1" name="simple-icons:windows" />Windows</span>
              <span class="sk m-1 px-2 py-1 text-nowrap"><Icon class="iconify me-1" name="simple-icons:linux" />Linux</span>
              <span class="sk m-1 px-2 py-1 text-nowrap"><Icon class="iconify me-1" name="simple-icons:ubuntu" />Ubuntu</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <hr class="my-4">
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