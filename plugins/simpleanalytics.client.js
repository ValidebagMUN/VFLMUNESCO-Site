import SimpleAnalytics from "simple-analytics-vue"

export default defineNuxtPlugin((nuxtApp) => {
  console.log(process.env.VERCEL_ENV);
  nuxtApp.vueApp.use(SimpleAnalytics, {
    skip: process.env.VERCEL_ENV !== "production",
    // domain: "sa.validebagmun.org"
  });
});