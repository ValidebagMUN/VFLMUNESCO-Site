<template>
    <div class="pt-8 hero text-base-content">
        <ClientOnly>
            <div class="flex-col hero-content lg:flex-row">
                <div class="lg:ml-[-5em]" v-if="appsOpen">
                    <h1 class="text-5xl font-bold mb-6 text-base-content">Application Forms</h1>
                    <div class="flex flex-col gap-4 py-4">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSe8WYHe29Xhgjn-rSK3UTy0onpFRyTgMy9qRHn-pWN4HH0Eug/viewform?usp=dialog" target="_blank" rel="noopener"
                            class="btn bg-base-200 text-base-content text-lg py-6">Apply as a Delegation</a>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfr4J9YgCuWcAOPXXFl0qlhYHf4yQ42bnmDh99KpqkAVJ0xrQ/viewform?usp=dialog" target="_blank" rel="noopener"
                            class="btn bg-base-200 text-base-content text-lg py-6">Apply as an Individual Delegate</a>
                        <a href="https://forms.gle/2wTC3NxVpBw1K2nw6" target="_blank" rel="noopener"
                            class="btn bg-base-200 text-base-content text-lg py-6">Apply as an Admin</a>
                        <a href="https://forms.gle/p99NVuMC1FeNukse9" target="_blank" rel="noopener"
                            class="btn bg-base-200 text-base-content text-lg py-6">Apply as a Press Member</a>
                    </div>
                </div>
                <div class="divider divider-horizontal max-sm:hidden" v-if="appsOpen"></div>
                <div v-if="appsOpen">
                    <h1 class="text-5xl font-bold mb-6 lg:mt-[-1.75em] text-base-content">Fees</h1>
                    <div class="flex flex-col gap-4 py-4">
                        <h4 class="text-lg text-base-content">Delegations: 675₺ per delegate</h4>
                        <h4 class="text-lg text-base-content">Individual Delegates: 700₺</h4>
                        <h4 class="text-lg text-base-content">Admins: 525₺</h4>
                        <h4 class="text-lg text-base-content">Press: 525₺</h4>
                    </div>
                </div>
                <div v-if="!appsOpen">
                    <h1 class="text-5xl font-bold mb-6">Applications to VFLMUNESCO IV have not yet been opened.</h1>
                    <h2 class="text-4xl font-bold mb-6">Thank you for your interest.</h2>
                </div>
            </div>
            <template #fallback>
                <div class="flex-col hero-content lg:flex-row">
                    <div class="skeleton h-32 w-full mb-4"></div>
                </div>
            </template>
        </ClientOnly>
    </div>
</template>

<script setup lang="ts">

useSchemaOrg([
    defineWebPage({
        name: 'Apply',
        description: 'Application forms and fees for VFLMUNESCO IV.',
    })
])

const appsOpen = useRuntimeConfig().appsOpen
</script>

<style scoped></style>