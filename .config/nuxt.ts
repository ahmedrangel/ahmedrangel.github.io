import { INFO } from "../utils/info.js";

export default defineNuxtConfig({
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "~/assets/css/ahmedrangel.css"
  ],
  app: {
    rootId: "app",
    head: {
      title: INFO.name,
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1"
    }
  },
  modules: ["@nuxtjs/google-fonts", "@nuxt/icon", "nuxt-aos", "@nuxt/eslint"],
  googleFonts: {
    display: "swap",
    download: true,
    families: {
      "Zen Kaku Gothic New": [300, 400, 500, 700]
    }
  },
  aos: {
    easing: "ease-in-sine",
    duration: 500
  },
  eslint: {
    config: {
      autoInit: false,
      stylistic: true
    }
  }
});
