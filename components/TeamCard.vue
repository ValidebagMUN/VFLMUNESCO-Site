<template>
    <div class="card shadow-xl w-80 mx-4 mt-6 mb-10 bg-base-200" key="name">
        <figure>
            <NuxtImg class="w-80 h-80 object-cover rounded-b-none shadow-2xl" v-show="isLoaded" @load="() => { console.log('isLoaded'); return isLoaded = true }" :src="img" :alt="title" />
            <!-- <div v-show="!isLoaded" class="rounded-b-none shadow-2xl skeleton min-w-80 min-h-80" /> -->
            <NuxtImg v-show="!isLoaded" class="rounded-b-none shadow-2xl w-80 h-80 object-cover" src="/img/team/def.png"/>
        </figure>
        <div class="card-body bg-[#2b2b3e] text-[#ebdec4]">
            <h2 class="card-title">{{  name }}</h2>
            <p class="text-lg">{{ title }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
const isLoaded = ref(false)
defineProps({
    img: {
        type: String,
    },
    name: {
        type: String,
    },
    title: {
        type: String,
        required: true
    }
})
</script>

<style scoped>

</style>