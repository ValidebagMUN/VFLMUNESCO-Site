import SimpleAnalytics from "simple-analytics-vue"

export default defineNuxtPlugin((nuxtApp) => {
  console.log(nuxtApp.$config);
  nuxtApp.vueApp.use(SimpleAnalytics, {
    skip: nuxtApp.$config.VERCEL_ENV !== "production",
    // domain: "sa.validebagmun.org"
  });
});