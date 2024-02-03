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
      },
      link: [
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Zen+Kaku+Gothic+New", }
      ]
    },
  },
  modules: [
    "nuxt-icon"
  ]
});
