<template>
  <!-- Navbar -->
  <nav id="navbar" ref="nav" class="navbar navbar-expand-md px-4 py-3 fixed-top smart-scroll text-color fw-bold">
    <NuxtLink class="navbar-brand py-0" to="/">
      <span class="m-0 text-primary">{{ t("name_abreviated") }}</span>
    </NuxtLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon" />
    </button>
    <div id="collapsibleNavbar" class="collapse navbar-collapse">
      <ul class="navbar-nav ms-auto align-items-center">
        <li class="nav-item">
          <NuxtLink to="/#about" class="text-decoration-none">
            <span class="m-0 text-primary">{{ t("about") }}</span>
          </NuxtLink>
        </li>
        <li class="nav-item dropdown mx-2 text-center">
          <span id="navbardrop" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">{{ t("lang").toUpperCase() }}</span>
          <div class="dropdown-menu text-decoration-none" role="button">
            <span class="dropdown-item" @click="lang = 'en'">EN</span>
            <span class="dropdown-item" @click="lang = 'es'">ES</span>
          </div>
        </li>
        <li class="nav-item align-self-center">
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
      window.addEventListener("scroll", () => {
        const scroll_top = window.pageYOffset || document.documentElement.scrollTop;
        if (scroll_top < last_scroll_top) {
          this.nav.classList.remove("scrolled-down");
          this.nav.classList.add("scrolled-up");
        } else {
          this.nav.classList.remove("scrolled-up");
          this.nav.classList.add("scrolled-down");
        }
        last_scroll_top = scroll_top;
      });
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
      if (this.nav.classList.contains("show")) {
        this.$nuxt.$bootstrap.toogleCollapse(nav);
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