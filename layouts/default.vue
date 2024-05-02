<template>
    <div>
        <Head>
            <Link rel="icon" type="image/svg+xml" :href="favicon" />
            <Meta name="canonical" content="https://www.validebagmun.org/"></Meta>
            <Meta name="keywords" contens="validebağ, validebağmun, mun, model united nations, high school, united nations"></Meta>
        </Head>
        <SpeedInsights />
        <Header :is-dark="isDark" />
        <div class="min-h-[89vh] bg-base-100 dark:bg-neutral">
            <NuxtPage />
        </div>
        <Footer :is-dark="isDark" />
    </div>
</template>

<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt"

const colorMode = useColorMode()

const isDark = computed(() => colorMode.value === 'dark')
const favicon = computed(() => isDark.value ? '/vmun-white.svg' : '/vmun-black.svg')

useHead({
    htmlAttrs: {
        class: isDark.value ? "bg-primary-content" : "bg-neutral-content"
    }
})
</script>

<style scoped>
</style>