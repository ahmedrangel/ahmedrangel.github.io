import { INFO } from "../app/utils/info.js";

export default defineNuxtConfig({

  modules: ["@nuxt/fonts", "@nuxt/icon", "nuxt-aos", "@nuxt/eslint", "@nuxtjs/sitemap", "@nuxtjs/color-mode"],
  app: {
    rootId: "app",
    head: {
      title: INFO.name,
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        { name: "robots", content: "index, follow" },
        { name: "darkreader-lock", content: "darkreader" },
        { property: "og:site_name", content: INFO.name }
      ],
      link: [
        { rel: "preconnect", href: "https://avatars.githubusercontent.com" }
      ]
    }
  },
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "~/assets/css/ahmedrangel.css"
  ],
  site: {
    url: INFO.url
  },
  colorMode: {
    preference: "dark",
    fallback: "dark",
    dataValue: "bs-theme",
    storageKey: "nuxt-color-mode"
  },
  routeRules: {
    "/api/_nuxt_icon/**": { cache: { maxAge: 1.577e+7 } }
  },
  features: {
    inlineStyles: false
  },
  compatibilityDate: "2026-02-03",
  nitro: {
    prerender: {
      routes: ["/sitemap.xml"]
    }
  },
  aos: {
    easing: "ease-in-sine"
  },
  eslint: {
    config: {
      autoInit: false,
      stylistic: true
    }
  },
  fonts: {
    defaults: {
      weights: [300, 400, 500, 700]
    },
    families: [
      { name: "Zen Kaku Gothic New", provider: "google" }
    ]
  },
  icon: {
    mode: "svg",
    serverBundle: "local"
  },
  sitemap: {
    urls: [
      { loc: "/", priority: 1, lastmod: new Date().toISOString() }
    ],
    defaults: { priority: 0.8, lastmod: new Date().toISOString() },
    xslColumns: [
      { label: "URL", width: "65%" },
      { label: "Priority", select: "sitemap:priority", width: "12.5%" },
      { label: "Last Modified", select: "sitemap:lastmod", width: "35%" }
    ]
  }
});
