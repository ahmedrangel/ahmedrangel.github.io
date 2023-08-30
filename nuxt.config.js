// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css : [
    "bootstrap/dist/css/bootstrap.min.css",
    "~/assets/css/ahmedrangel.css"
  ],
  app: {
    head: {
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
