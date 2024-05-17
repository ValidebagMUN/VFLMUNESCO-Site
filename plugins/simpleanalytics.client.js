import SimpleAnalytics from "simple-analytics-vue"

export default defineNuxtPlugin((nuxtApp) => {
  console.log(nuxtApp.$config.public.VERCEL_ENV);
  nuxtApp.vueApp.use(SimpleAnalytics, {
    skip: nuxtApp.$config.public.VERCEL_ENV !== "production",
    // domain: "sa.validebagmun.org"
  });
});