// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/color-mode', '@nuxtjs/tailwindcss', '@nuxt/image'],
  colorMode: {
    classSuffix: '',
  },
  svgo: {
    autoImportPath: './assets/icons/'
  }
})
