import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["~/assets/app.css"],
  modules: [
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxtjs/color-mode',
    '@nuxtjs/seo'
  ],
  runtimeConfig: {
    public: {
    },
    maintenance: 'false'
  },
  colorMode: {
    preference: 'dark',
    classPrefix: '',
    classSuffix: '',
    storage: 'localStorage',
    storageKey: 'nuxt-color-mode'
  },
  routeRules: {
    '/committees/**': {
      prerender: true
    }
  },
  site: {
    url: 'https://munesco.validebagmun.org',
    name: 'VFLMUNESCO',
    description: 'Validebağ Model UNESCO Conference',
    defaultLocale: 'en',
  },
  app: {
    head: {
      templateParams: {
        separator: '-'
      },
      titleTemplate: '%s %separator %siteName'
    }
  },
  robots: {
    disallow: [
      "/maintenance",
      "/legal",
      "/img"
    ],
    blockAiBots: true
  }
})