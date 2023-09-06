<template>
  <!-- Navbar -->
  <nav id="navbar" ref="nav" class="navbar navbar-expand-md px-4 py-2 fixed-top smart-scroll fw-bold">
    <NuxtLink class="navbar-brand py-0" to="/">
      <span>{{ t("name_abreviated") }}</span>
    </NuxtLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon" />
    </button>
    <div id="collapsibleNavbar" ref="collapsibleNav" class="collapse navbar-collapse">
      <ul class="navbar-nav ms-auto align-items-center">
        <li class="nav-item me-3">
          <NuxtLink to="/#about" @click="collapseNav()">
            <span>{{ t("about") }}</span>
          </NuxtLink>
        </li>
        <li class="nav-item mx-3">
          <NuxtLink to="/#skills" @click="collapseNav()">
            <span>{{ t("skills") }}</span>
          </NuxtLink>
        </li>
        <li class="nav-item mx-3">
          <NuxtLink to="/#projects" @click="collapseNav()">
            <span>{{ t("projects") }}</span>
          </NuxtLink>
        </li>
        <li class="nav-item mx-3">
          <a :href="INFO.resume" target="_blank" @click="collapseNav()">
            <span>{{ t("download_resume") }}</span>
          </a>
        </li>
        <li class="nav-item dropdown mx-1 text-center">
          <span id="navbardrop" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">{{ t("lang").toUpperCase() }}</span>
          <div class="dropdown-menu" role="button">
            <span class="dropdown-item" @click="lang = 'es'">ES</span>
            <span class="dropdown-item" @click="lang = 'en'">EN</span>
          </div>
        </li>
        <li class="nav-item align-self-center ms-2">
          <div class="form-check form-switch d-flex justify-content-center align-items-center pe-auto p-0 m-0">
            <input id="flexSwitchCheckChecked" class="form-check-input p-0 m-0" type="checkbox" role="button" :style="`--bs-form-switch-bg: url(${MoonSun(dark)})`" checked @click="toggleTheme()">
            <span class="slider" />
            <label class="form-check-label" for="flexSwitchCheckChecked" />
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  data () {
    return {
      dark: INFO.dark,
      nav: "",
      lang: INFO.lang
    };
  },
  watch: {
    lang(val) {
      locale.setLanguage(val);
    }
  },
  mounted () {
    this.nav = this.$refs.nav;
    if (this.nav) {
      let last_scroll_top = 0;

    }
    const scrollFunction = () => {
      if ((document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) || (window.innerWidth < 767)) {
        this.scrolledDown = true;
        this.nav.classList.add(this.dark ? "nav-bg-dark" : "nav-bg-light");
        this.nav.classList.remove(!this.dark ? "nav-bg-dark" : "nav-bg-light");
      } else {
        this.scrolledDown = false;
        this.nav.classList.remove("nav-bg-dark");
        this.nav.classList.remove("nav-bg-light");
      }
    };
    window.onscroll = () => {scrollFunction();};
  },
  methods: {
    collapseNav () {
      if (this.$refs.collapsibleNav.classList.contains("show")) {
        this.$nuxt.$bootstrap.toogleCollapse(this.$refs.collapsibleNav);
      }
    },
    toggleTheme () {
      this.dark = !this.dark;
      this.textColor = "#12151c";
      this.nav.classList.add(this.dark && this.scrolledDown ? "nav-bg-dark" : "nav-bg-light");
      this.nav.classList.remove(!this.dark && this.scrolledDown ? "nav-bg-dark" : "nav-bg-light");
      useHead({
        bodyAttrs: { "data-bs-theme": this.dark ? "dark" : "light" }
      });
    }
  }
};
</script>