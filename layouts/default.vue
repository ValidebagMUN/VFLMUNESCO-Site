<template>
    <div>
        <Head>
            <Html lang="en" />
            <Link rel="icon" type="image/svg+xml" :href="favicon" />
            <Meta name="canonical" content="https://munesco.validebagmun.org"></Meta>
            <Meta name="robots" content="noai, noimageai"></Meta>
            <Meta name="description" content="Website of the Validebağ Model UNESCO Conference."></Meta>
            <Meta name="keywords" contens="validebağ, validebağmun, mun, model united nations, high school, united nations, vflmunesco, unesco"></Meta>
        </Head>
        <Header :is-dark="isDark" />
        <div class="min-h-[89vh] bg-base-300">
            <NuxtLoadingIndicator color="oklch(var(--color-primary))"/>
            <NuxtPage />
        </div>
        <Footer :is-dark="isDark" />
    </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed(() => colorMode.value === 'dark')
const favicon = computed(() => isDark.value ? '/vmun-white.svg' : '/vmun-black.svg')

useSchemaOrg([
    defineWebPage(),
    defineWebSite({
        name: 'VFLMUNESCO',
        description: 'Website of the Validebağ Model UNESCO Conference.'
    }),
    defineOrganization({
        name: 'VFLMUNESCO',
        logo: '/logo.png',
        url: "https://munesco.validebagmun.org",
        sameAs: [
            "https://www.instagram.com/validebagmun/",
            "https://github.com/ValidebagMUN"
        ]
    })
])
</script>

<style scoped>

</style>