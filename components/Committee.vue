<template>
    <Head>
        <Title>{{ slug.toUpperCase() }}</Title>
    </Head>
    <div class="pt-5 hero text-neutral text-xl font-medium min-h-[89vh] text-[#ebdec4]" :style="'background-image: url(' + image + ');'">
        <div class="flex-col hero-content lg:flex-row-reverse">
            <div class="text-[#ebdec4]">
                <h1 class="mb-3 text-5xl font-semibold text-[#ebdec4]">{{ slug.includes("cc") ? slug.toUpperCase() : slug }}</h1>
                <h2 class="text-3xl text-[#ebdec4]">{{ name }}</h2>
                <div class="mt-2 mb-4">
                    <h3 v-for="item in agenda" class="text-xl font-medium text-[#ebdec4]">Agenda Item{{ agenda.length > 1 ? ' ' +
                        (agenda.indexOf(item) + 1) : '' }}: <span class="text-lg text-[#ebdec4]">{{ item }}</span></h3>
                </div>
                <div class="divider divider-neutral"></div>
                <p class="whitespace-pre-line text-[#ebdec4]">{{ text }}</p>
                <div v-if="usg || chair" class="divider divider-neutral"></div>
                <div class="my-4 text-xl text-[#ebdec4]">
                    <h3 v-if="usg"><span class="font-semibold text-[#ebdec4]">Under-Secretary-General:</span> {{ usg }}</h3>
                    <h3 v-if="chair"><span class="font-semibold text-[#ebdec4]">{{ chair.split(' - ').length > 1 ? 'Presidency: ' :
                            'President: ' }}</span>{{ chair }}</h3>
                    <h3 v-if="acas"><span class="font-semibold text-[#ebdec4]">Academic Assistant:</span> {{ acas }}</h3>
                </div>
                <div v-if="rop || sg" class="divider divider-neutral"></div>
                <div v-if="rop || sg" class="pb-6">
                    <NuxtLink target="_blank" v-if="rop" :to="rop" class="mr-5 btn btn-primary text-[#ebdec4]">Rules of Procedure
                    </NuxtLink>
                    <NuxtLink target="_blank" v-if="sg" :to="sg" class="mr-5 btn btn-primary text-[#ebdec4]">Study Guide</NuxtLink>
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
    usg: {
        type: String,
        required: false
    },
    chair: {
        type: String,
        required: false
    },
    acas: {
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