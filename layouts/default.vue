<template>
    <div>
        <Head>
            <Link rel="icon" type="image/svg+xml" :href="favicon" />
            <Meta name="canonical" content="https://www.validebagmun.org/"></Meta>
        </Head>
        <Header :is-dark="isDark" />
        <div class="min-h-[89vh]">
            <slot />
        </div>
        <Footer :is-dark="isDark" />
    </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed(() => colorMode.value === 'dark')
const favicon = computed(() => isDark.value ? '/vmun-white.svg' : '/vmun-black.svg')

useHead({
    htmlAttrs: {
        'data-theme': 'vmun',
    }
})
</script>

<style scoped>

</style>