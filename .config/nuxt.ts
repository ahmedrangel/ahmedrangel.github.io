import { INFO } from "../app/utils/info.js";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-21",
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "~/assets/css/ahmedrangel.css"
  ],
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
      ]
    }
  },
  modules: ["@nuxt/fonts", "@nuxt/icon", "nuxt-aos", "@nuxt/eslint", "@nuxtjs/sitemap", "@nuxtjs/color-mode"],
  icon: {
    mode: "svg",
    clientBundle: {
      scan: true,
      sizeLimitKb: 2048
    }
  },
  features: {
    inlineStyles: false
  },
  site: {
    url: INFO.url
  },
  nitro: {
    prerender: {
      routes: ["/sitemap.xml"]
    },
    cloudflare: {
      pages: {
        routes: {
          exclude: ["/images/*"]
        }
      }
    }
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
  },
  routeRules: {
    "/api/_nuxt_icon/**": { cache: { maxAge: 1.577e+7 } }
  },
  fonts: {
    defaults: {
      weights: [300, 400, 500, 700]
    },
    families: [
      { name: "Zen Kaku Gothic New", provider: "google" }
    ]
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
  colorMode: {
    preference: "dark",
    fallback: "dark",
    dataValue: "bs-theme",
    storageKey: "nuxt-color-mode"
  }
});
