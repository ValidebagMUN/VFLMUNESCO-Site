<template>

    <Head>
        <Title>{{ slug.toUpperCase() }}</Title>
    </Head>
    <div>
        <NuxtImg class="opacity-75 min-w-screen max-h-[50vh]" :src="image" :alt="slug + ' committee image'" />
    </div>
    <div class="pt-5 hero text-neutral">
        <div class="flex-col hero-content lg:flex-row-reverse">
            <div>
                <h1 class="mb-3 text-5xl font-bold">{{ slug.includes("CC") ? slug : slug.toUpperCase() }}</h1>
                <h2 class="text-3xl">{{ name }}</h2>
                <div class="mt-2 mb-4">
                    <h3 v-for="item in agenda" class="text-xl font-medium">Agenda Item{{ agenda.length > 1 ? ' ' +
                        (agenda.indexOf(item) + 1) : '' }}: <span class="text-lg">{{ item }}</span></h3>
                </div>
                <div class="divider divider-neutral dark:divider-primary"></div>
                <p class="whitespace-pre-line">{{ text }}</p>
                <div v-if="asg || chair" class="divider divider-neutral dark:divider-primary"></div>
                <div class="my-4 text-xl">
                    <h3 v-if="asg"><span class="font-semibold">Assistant-Secretary-General:</span> {{ asg }}</h3>
                    <h3 v-if="chair"><span class="font-semibold">{{ chair.split(' - ').length > 1 ? 'Presidency: ' :
                            'President: ' }}</span>{{ chair }}</h3>
                </div>
                <div v-if="rop || sg" class="divider divider-neutral dark:divider-primary"></div>
                <div class="pb-6">
                    <NuxtLink target="_blank" v-if="rop" :to="rop" class="mr-5 btn btn-primary">Rules of Procedure
                    </NuxtLink>
                    <NuxtLink target="_blank" v-if="sg" :to="sg" class="mr-5 btn btn-primary">Study Guide</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const isLoaded = ref(false)
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