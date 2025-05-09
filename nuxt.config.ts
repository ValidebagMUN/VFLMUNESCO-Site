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
    url: 'https://www.validebagmun.org',
    name: 'ValidebağMUN',
    description: 'Validebağ Model United Nations Conference',
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
      "/img",
      "/committees/larevolution"
    ]
  },
  schemaOrg: {
    identity: {
      type: "Organization",
      name: "ValidebağMUN",
      url: "https://www.validebagmun.org",
      logo: "https://www.validebagmun.org/logo.png",
      sameAs: [
        "https://www.instagram.com/validebagmun/",
        "https://github.com/ValidebagMUN"
      ]
    }
  },
})