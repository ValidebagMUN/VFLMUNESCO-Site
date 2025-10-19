<template>
<div class="my-8">
    <div class="card w-80 mx-6 mb-3 bg-base-200 rounded-none shadow-2xl" :key="slug">
        <NuxtLink :to="'/committees/' + slug"><figure>
            <NuxtImg :src="img" :alt="name" v-slot="{ src, isLoaded, imgAttrs }">
                <img v-if="isLoaded" v-bind="imgAttrs" :src="src">
                <div v-else class="skeleton min-w-80 min-h-80" />
            </NuxtImg>
        </figure></NuxtLink>
    </div>
    <!-- <h2 class="font-bold text-xl text-center text-base-content">{{ slug?.toUpperCase() }}</h2> -->
</div>
</template>

<script setup lang="ts">
const isLoaded = ref(false)
defineProps({
    img: {
        type: String
    },
    slug: {
        type: String
    },
    name: {
        type: String
    }
})
</script>

<style scoped></style>