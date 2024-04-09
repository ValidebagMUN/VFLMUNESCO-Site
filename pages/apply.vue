<template>
    <div class="px-20 pt-2 pb-5 dark:bg-base-300 min-h-[89vh]">
        <iframe data-tally-src="https://tally.so/embed/3XDvOz?alignLeft=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy" width="100%" height="700" frameborder="0" marginheight="0" marginwidth="0"
            title="ValidebağMUN'24 Application Form"></iframe>
    </div>
</template>

<script setup lang="ts">
onRenderTriggered(() => {
    //@ts-ignore
    Tally.loadEmbeds()
})
onMounted(() => {
    //@ts-ignore
    Tally.loadEmbeds()
})
</script>

<style scoped></style>