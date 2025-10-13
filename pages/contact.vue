<template>
    <div class="pt-8 hero text-neutral">
        <div class="flex-col hero-content lg:flex-row">
            <div>
                <h1 class="text-5xl font-bold text-base-content">Contact</h1>
                <div class="flex flex-col gap-4 py-4">
                    <a href="https://instagram.com/validebagmun" target="_blank" class="text-xl text-base-content">Instagram: @validebagmun</a>
                    <a href="mailto:info@validebagmun.org" class="text-xl text-base-content">Email Address: info@validebagmun.org</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
useSchemaOrg([
    defineWebPage({
        '@type': 'ContactPage',
        description: 'Contact information for ValidebağTrain\'25.',
    })
])
</script>

<style scoped>

</style>