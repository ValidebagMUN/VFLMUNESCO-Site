// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    "nuxt-typed-router",
    "@nuxtjs/seo"
  ],
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light'
  },
  app: {
    head: {
      templateParams: {
        separator: '-'
      },
      titleTemplate: '%s %separator %siteName',
      script: [
        {
          src: "https://tally.so/widgets/embed.js",
          async: true
        }
      ],
      link: [
        { rel: "prefetch", href: "/img/ep.png" },
        { rel: "prefetch", href: "/img/unodc.png" },
        { rel: "prefetch", href: "/img/ecosoc.png" },
        { rel: "prefetch", href: "/img/unga.png" },
        { rel: "prefetch", href: "/img/unsc.png" },
        { rel: "prefetch", href: "/img/jcc.png" },
        { rel: "prefetch", href: "/img/hcc.png" }
      ]
    }
  },
  site: {
    url: "https://www.validebagmun.org",
    name: "ValidebağMUN",
    description: "Validebağ Model United Nations Conference",
    defaultLocale: "en",
  },
  robots: {
    disallow: [
      "/maintenance",
      "/legal/privacypolicy",
      "/legal/termsandconditions",
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
        "https://github.com/ValidebagMUN",
      ]
    }
  },
  runtimeConfig: {
    public: {
    },
    maintenance: "false"
  }
})