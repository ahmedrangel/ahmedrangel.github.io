<script setup>
const lang = locale.getLanguage();

const setLang = (code) => {
  locale.setLanguage(code);
  const lang_cookie = useCookie("lang");
  lang_cookie.value = code;
  useHead({ htmlAttrs: { lang: code } });
};

const nav = ref("nav");
const scrolledDown = ref(false);

const dark = useCookie("dark", { ...cookieMaxAge });
dark.value = dark.value === undefined ? INFO.dark : dark.value;
useHead({ htmlAttrs: { "data-bs-theme": dark.value ? "dark" : "light" } });

const toggleTheme = () => {
  dark.value = !dark.value;
  nav.value.classList.add(dark.value && scrolledDown.value ? "nav-bg-dark" : "nav-bg-light");
  nav.value.classList.remove(!dark.value && scrolledDown.value ? "nav-bg-dark" : "nav-bg-light");
  useHead({ htmlAttrs: { "data-bs-theme": dark.value ? "dark" : "light" } });
};

onMounted(() => {
  const scrollFunction = () => {
    if ((document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) || (window.innerWidth < 767)) {
      scrolledDown.value = true;
      nav.value.classList.add(dark.value ? "nav-bg-dark" : "nav-bg-light");
      nav.value.classList.remove(!dark.value ? "nav-bg-dark" : "nav-bg-light");
    }
    else {
      scrolledDown.value = false;
      nav.value.classList.remove("nav-bg-dark");
      nav.value.classList.remove("nav-bg-light");
    }
  };
  window.onscroll = () => scrollFunction();
});
</script>

<template>
  <!-- Navbar -->
  <nav id="navbar" ref="nav" class="navbar navbar-expand-lg px-4 py-2 fixed-top smart-scroll fw-bold">
    <NuxtLink class="navbar-brand py-0" to="/">
      <span>{{ t("name_abreviated") }}</span>
    </NuxtLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon" />
    </button>
    <div id="collapsibleNavbar" ref="collapsibleNav" class="collapse navbar-collapse">
      <ul class="navbar-nav ms-auto align-items-center">
        <li class="nav-item mx-3">
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
          <a :href="lang === 'es' ? INFO.resume.es : INFO.resume.en " target="_blank" @click="collapseNav()">
            <span>{{ t("download_resume") }}</span>
          </a>
        </li>
        <li class="nav-item dropdown ms-2 me-1 text-center">
          <span id="navbardrop" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">{{ t("lang").toUpperCase() }}</span>
          <div class="dropdown-menu" role="button">
            <span class="dropdown-item" @click="setLang('es')">ES</span>
            <span class="dropdown-item" @click="setLang('en')">EN</span>
          </div>
        </li>
        <li class="nav-item align-self-center mx-2">
          <div class="form-check form-switch p-0 m-0">
            <input id="flexSwitchCheckChecked" class="form-check-input p-0 m-0" type="checkbox" role="button" :style="`--bs-form-switch-bg: url(${MoonSun(dark)})`" :checked="dark" @click="toggleTheme()">
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
  methods: {
    collapseNav () {
      if (this.$refs.collapsibleNav.classList.contains("show")) {
        this.$nuxt.$bootstrap.toogleCollapse(this.$refs.collapsibleNav);
      }
    }
  }
};
</script>
