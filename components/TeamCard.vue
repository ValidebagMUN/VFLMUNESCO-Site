<template>
    <div class="card" key="name">
        <figure>
            <NuxtImg v-show="isLoaded" @load="() => { console.log('isLoaded'); return isLoaded = true }" :src="img" :alt="title" />
            <div v-show="!isLoaded" class="rounded-b-none shadow-2xl skeleton min-w-80 min-h-80" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">{{  name }}</h2>
            <p>{{ title }}, <br /> {{ position }} </p>
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
    },
    position: {
        type: String,
    }
})
</script>

<style scoped></style>