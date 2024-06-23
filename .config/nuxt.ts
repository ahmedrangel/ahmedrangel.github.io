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
  modules: ["@nuxtjs/google-fonts", "@nuxt/icon", "nuxt-aos", "@nuxt/eslint", "@nuxtjs/sitemap"],
  features: {
    inlineStyles: false
  },
  site: {
    url: "https://" + INFO.domain
  },
  nitro: {
    prerender: {
      routes: ["/sitemap.xml"]
    }
  },
  sitemap: {
    dynamicUrlsApiEndpoint: "/__sitemap",
    xslColumns: [
      { label: "URL", width: "65%" },
      { label: "Priority", select: "sitemap:priority", width: "12.5%" },
      { label: "Last Modified", select: "sitemap:lastmod", width: "35%" }
    ]
  },
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
