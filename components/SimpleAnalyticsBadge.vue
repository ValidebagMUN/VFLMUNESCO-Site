<template>
    <div class="mt-2">
        <a aria-label="See the analytics data of our site." href="https://simpleanalytics.com/validebagmun.org?utm_source=validebagmun.org&utm_content=badge"
            referrerpolicy="origin" target="_blank">
            <picture>
                <img src="https://simpleanalyticsbadges.com/validebagmun.org?mode=dark&background=0D1B2A&text=E0E1DD" loading="lazy" referrerpolicy="no-referrer" crossorigin="anonymous" alt="SimpleAnalytics Badge" v-if="isDark"/>
                <img src="https://simpleanalyticsbadges.com/validebagmun.org?mode=light&text=1B263B" loading="lazy"
                    referrerpolicy="no-referrer" crossorigin="anonymous" alt="SimpleAnalytics Badge" v-if="!isDark"/>
            </picture>
        </a>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    isDark: {
        type: Boolean,
        default: false
    }
})
</script>