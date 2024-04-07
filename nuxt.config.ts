// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    "nuxt-typed-router"
  ],
  colorMode: {
    classSuffix: '',
  },
  app: {
    head: {
      script: [
        {
          src: "https://tally.so/widgets/embed.js",
          async: true
        }
      ]
    }
  },
  runtimeConfig: {
    public: {
    },
    maintenance: "false"
  }
})