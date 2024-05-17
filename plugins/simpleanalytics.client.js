import SimpleAnalytics from "simple-analytics-vue"

export default defineNuxtPlugin((nuxtApp) => {
  console.log(process.env);
  nuxtApp.vueApp.use(SimpleAnalytics, {
    skip: process.env.NODE_ENV !== "production",
    // domain: "sa.validebagmun.org"
  });
});