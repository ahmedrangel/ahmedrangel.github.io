<script setup>
const lang = useState("lang");

const colorMode = useColorMode();
const dark = ref(colorMode.preference === "dark");

const setLang = (code) => {
  locale.lang.set(code);
  lang.value = code;
};

const nav = ref("nav");
const scrolledDown = ref(false);

const toggleTheme = () => {
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
  dark.value = colorMode.preference === "dark";
};

onMounted(() => {
  locale.lang.init();
  lang.value = locale.lang.get();
  dark.value = colorMode.preference === "dark";
  const scrollFunction = () => {
    scrolledDown.value = ((document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) || (window.innerWidth < 767));
  };

  scrollFunction();
  window.onscroll = () => scrollFunction();
});
</script>

<template>
  <nav id="navbar" ref="nav" class="navbar navbar-expand-lg px-4 py-2 fixed-top smart-scroll fw-bold" :class="scrolledDown ? 'nav-bg border-bottom shadow' : ''">
    <NuxtLink class="navbar-brand py-0" to="/">
      <span>{{ t("name_abreviated") }}</span>
    </NuxtLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon" />
    </button>
    <div id="collapsibleNavbar" ref="collapsibleNav" class="collapse navbar-collapse">
      <ul class="navbar-nav ms-auto align-items-center d-flex gap-4">
        <li class="nav-item">
          <NuxtLink to="/#about" @click="collapseNav()">
            <span>{{ t("about") }}</span>
          </NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/#work-experience" @click="collapseNav()">
            <span>{{ t("work_experience") }}</span>
          </NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/#skills" @click="collapseNav()">
            <span>{{ t("skills") }}</span>
          </NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/#projects" @click="collapseNav()">
            <span>{{ t("projects") }}</span>
          </NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/#open-source-contributions" @click="collapseNav()">
            <span>{{ t("contributions") }}</span>
          </NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink :to="lang === 'es' ? INFO.resume.es : INFO.resume.en " target="_blank" @click="collapseNav()">
            <span>{{ t("resume") }}</span>
          </NuxtLink>
        </li>
        <li class="nav-item dropdown text-center">
          <span id="navbardrop" class="dropdown-toggle" data-bs-toggle="dropdown">{{ t("lang").toUpperCase() }}</span>
          <div class="dropdown-menu" role="button">
            <span class="dropdown-item" @click="setLang('es')">ES</span>
            <span class="dropdown-item" @click="setLang('en')">EN</span>
          </div>
        </li>
        <li class="nav-item align-self-center">
          <div class="form-check form-switch p-0 m-0">
            <input id="flexSwitchCheckChecked" v-model="dark" class="form-check-input p-0 m-0 dark-mode-input" type="checkbox" role="button" @change="toggleTheme()">
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
