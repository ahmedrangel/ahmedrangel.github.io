<script setup>
</script>
<template>
  <main class="mt-5 pt-4 container-lg">
    <nav id="navbar" class="navbar navbar-expand-md px-4 py-3 fixed-top smart-scroll">
      <NuxtLink class="navbar-brand py-0" to="/">
        <h5 class="m-0 text-primary fw-bold">{{ t("name_abreviated") }}</h5>
      </NuxtLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon" />
      </button>
      <div id="collapsibleNavbar" ref="nav" class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <div class="btn py-0 d-flex justify-content-center align-items-center pe-auto" @click="toggleTheme()">
              <Icon class="iconify" :name="dark ? `ph:moon-stars-duotone` : `ph:sun-duotone`" />
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <div id="about">
      <h3 class="fw-bold">{{ t("about_me") }}</h3>
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
    <div id="education" class="row">
      <div class="col-12 col-lg-8 mb-4">
        <h3 class="fw-bold">{{ t("education") }}</h3>
        <div class="h5 mb-0">
          <span class="text-primary fw-bold me-2">{{ t("degree") }}</span>
          <span class="me-2">{{ t("at") }}</span>
          <span class="text-primary fw-bold">{{ t("utp") }}</span>
        </div>
        <p class="m-0">{{ t("panama_city") }}, {{ t("panama") }}</p>
        <p class="m-0">{{ t("months")[1 - 1] }} 2016 — {{ t("months")[5 - 1] }} 2022</p>
        <div class="h5 mb-0">
          <span class="text-primary fw-bold me-2">{{ t("bachelor") }}</span>
          <span class="me-2">{{ t("at") }}</span>
          <span class="text-primary fw-bold">{{ t("pps") }}</span>
        </div>
        <p class="m-0">{{ t("la_chorrera") }}, {{ t("panama") }}</p>
        <p class="m-0">{{ t("months")[2 - 1] }} 2010 — {{ t("months")[12 - 1] }} 2015</p>
      </div>
      <div class="col-12 col-lg-4 mb-4">
        <h4 class="fw-bold">{{ t("languages") }}</h4>
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
  </main>
</template>
<script>
export default {
  data () {
    return {
      dark: true,
      lang: "en"
    };
  },
  mounted () {
    if (document.querySelectorAll(".smart-scroll").length > 0) {
      let last_scroll_top = 0;
      window.addEventListener("scroll", function() {
        const scroll_top = window.pageYOffset || document.documentElement.scrollTop;
        if (scroll_top < last_scroll_top) {
          document.querySelector(".smart-scroll").classList.remove("scrolled-down");
          document.querySelector(".smart-scroll").classList.add("scrolled-up");
        } else {
          document.querySelector(".smart-scroll").classList.remove("scrolled-up");
          document.querySelector(".smart-scroll").classList.add("scrolled-down");
        }
        last_scroll_top = scroll_top;
      });
    }
    const scrollFunction = () => {
      if ((document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) || (window.innerWidth < 767)) {
        document.querySelector("#navbar").style.background = "#121212";
        document.querySelector("#navbar").style.fontSize = "1rem";
        document.querySelector("#navbar img").style.width = 100;
      }else {
        document.querySelector("#navbar").style.background = "transparent";
        document.querySelector("#navbar").style.fontSize = "1.3rem";
        document.querySelector("#navbar img").style.width = 130;
      }
    };
    window.onscroll = () => {scrollFunction();};
  },
  methods: {
    toggleTheme () {
      this.dark = !this.dark;
      useHead({
        bodyAttrs: { "data-bs-theme": this.dark ? "dark" : "light" }
      });
    },
    collapseNav () {
      const nav = this.$refs.nav;
      if (nav.classList.contains("show")) {
        this.$nuxt.$bootstrap.toogleCollapse(nav);
      }
    }
  }
};
</script>