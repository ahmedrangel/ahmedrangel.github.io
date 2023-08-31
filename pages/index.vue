<script setup>
</script>
<template>
  <main class="mt-5 container-lg">
    <nav id="navbar" ref="nav" class="navbar navbar-expand-md px-4 py-3 fixed-top smart-scroll text-color fw-bold">
      <NuxtLink class="navbar-brand py-0" to="/" :lang="lang">
        <span class="m-0 text-primary">{{ t("name_abreviated") }}</span>
      </NuxtLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon" />
      </button>
      <div id="collapsibleNavbar" class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto align-items-center">
          <li class="nav-item">
            <NuxtLink to="/#about" class="text-decoration-none">
              <span class="m-0 text-primary" :lang="lang">{{ t("about") }}</span>
            </NuxtLink>
          </li>
          <li class="nav-item dropdown mx-2 text-center">
            <span id="navbardrop" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">{{ lang.toUpperCase() }}</span>
            <div class="dropdown-menu text-decoration-none">
              <span class="dropdown-item" @click="lang = 'en'">EN</span>
              <span class="dropdown-item" @click="lang = 'es'">ES</span>
            </div>
          </li>
          <li class="nav-item align-self-center">
            <div class="form-check form-switch d-flex justify-content-center align-items-center pe-auto p-0 m-0">
              <input id="flexSwitchCheckChecked" class="form-check-input p-0 m-0" type="checkbox" :style="`--bs-form-switch-bg: url(${MoonSun(dark)})`" checked @click="toggleTheme()">
              <label class="form-check-label" for="flexSwitchCheckChecked" />
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <div id="about" class="pt-4">
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
      lang: "en",
      scrolledDown: false
    };
  },
  watch: {
    lang (val) {
      locale.setLanguage(val);
    }
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
      if ((document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) || (window.innerWidth < 767)) {
        this.scrolledDown = true;
        document.querySelector("#navbar").classList.add(this.dark ? "nav-bg-dark" : "nav-bg-light");
        document.querySelector("#navbar").classList.remove(!this.dark ? "nav-bg-dark" : "nav-bg-light");
      } else {
        this.scrolledDown = false;
        document.querySelector("#navbar").classList.remove("nav-bg-dark");
        document.querySelector("#navbar").classList.remove("nav-bg-light");
        document.querySelector("#navbar").style.background = "transparent";
      }
    };
    window.onscroll = () => {scrollFunction();};
  },
  methods: {
    toggleTheme () {
      this.dark = !this.dark;
      this.textColor = "#12151c";
      this.$refs.nav.classList.add(this.dark && this.scrolledDown ? "nav-bg-dark" : "nav-bg-light");
      this.$refs.nav.classList.remove(!this.dark && this.scrolledDown ? "nav-bg-dark" : "nav-bg-light");
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