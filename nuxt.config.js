import { INFO } from "./utils/info.js";

export default defineNuxtConfig({
  css : [
    "bootstrap/dist/css/bootstrap.min.css",
    "~/assets/css/ahmedrangel.css"
  ],
  app: {
    rootId: "app",
    buildAssetDir: "/_app",
    head: {
      title: INFO.name,
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: {
        lang: INFO.lang
      },
      bodyAttrs: {
        "data-bs-theme": "dark"
      }
    },
  },
  modules: [
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    "nuxt-aos"
  ],
  googleFonts: {
    display: "swap",
    download: true,
    families: {
      "Zen Kaku Gothic New": [300, 400, 500, 600, 700],
    },
  },
  aos: {
    once: true,
    easing: "ease-in-sine",
    duration: 500
  }
});
