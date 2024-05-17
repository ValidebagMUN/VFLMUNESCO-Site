import SimpleAnalytics from "simple-analytics-vue"

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(SimpleAnalytics, {
    skip: nuxtApp.$config.VERCEL_ENV !== "production",
    // domain: "sa.validebagmun.org"
  });
});