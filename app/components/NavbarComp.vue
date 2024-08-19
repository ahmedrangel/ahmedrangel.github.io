<script setup>
const lang = locale.lang.get();
const dark = ref(locale.dark.get());

const setLang = (code) => {
  locale.lang.set(code);
};

const nav = ref("nav");
const scrolledDown = ref(false);

const toggleTheme = () => {
  locale.dark.set(!dark.value);
  dark.value = locale.dark.get();
};

onMounted(() => {
  const scrollFunction = () => {
    scrolledDown.value = ((document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) || (window.innerWidth < 767));
  };

  scrollFunction();
  window.onscroll = () => scrollFunction();
});
</script>

<template>
  <nav id="navbar" ref="nav" class="navbar navbar-expand-lg px-4 py-2 fixed-top smart-scroll fw-bold" :class="scrolledDown ? dark ? 'nav-bg-dark' : 'nav-bg-light' : ''">
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
            <input id="flexSwitchCheckChecked" class="form-check-input p-0 m-0 dark-mode-input" :class="dark ? 'dark' : ''" type="checkbox" role="button" :checked="Boolean(dark)" @click="toggleTheme()">
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
