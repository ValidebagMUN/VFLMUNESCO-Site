// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['nuxt-svgo', '@nuxtjs/color-mode', '@nuxtjs/tailwindcss'],
  colorMode: {
    classSuffix: '',
  },
  svgo: {
    autoImportPath: './assets/icons/'
  }
})
