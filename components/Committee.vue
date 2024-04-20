<template>

    <Head>
        <Title>{{ slug.toUpperCase() }}</Title>
    </Head>
    <div class="pt-12 hero text-neutral dark:text-neutral-content">
        <div class="flex-col hero-content lg:flex-row-reverse">
            <NuxtImg preload v-if="image" :src="image" class="max-w-sm rounded-lg shadow-2xl bg-base-100" />
            <div>
                <h1 class="mb-3 text-5xl font-bold">{{ slug.includes("cc") ? slug : slug.toUpperCase() }}</h1>
                <h2 class="text-3xl">{{ name }}</h2>
                <div class="mt-2 mb-4">
                    <h3 v-for="item in agenda" class="text-xl font-medium">Agenda Item{{ agenda.length > 1 ? ' ' +
                        (agenda.indexOf(item) + 1) : '' }}: <span class="text-lg">{{ item }}</span></h3>
                </div>
                <div class="divider divider-neutral dark:divider-primary"></div>
                <p class="whitespace-pre-line">{{ text }}</p>
                <hr v-if="asg || chair" class="w-[60vw]">
                <div class="flex my-4 justify-between text-xl max-w-[60vw]">
                    <h3 v-if="asg">{{ asg }}</h3>
                    <h3 v-if="chair">{{ chair }}</h3>
                </div>
                <hr v-if="rop || sg" class="mb-5 w-[60vw]">
                <NuxtLink v-if="rop" :to="rop" class="mr-5 btn btn-primary">Rules of Procedure</NuxtLink>
                <NuxtLink v-if="sg" :to="sg" class="mr-5 btn btn-primary">Study Guide</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    slug: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    agenda: {
        type: Array<String>,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    asg: {
        type: String,
        required: false
    },
    chair: {
        type: String,
        required: false
    },
    rop: {
        type: String,
        required: false
    },
    sg: {
        type: String,
        required: false
    },
})
</script>

<style scoped></style>