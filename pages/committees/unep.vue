<template>
    <div>
        <Committee v-bind="committee" />
    </div>
</template>

<script setup lang="ts">
const committee = {
    slug: 'UNEP',
    name: 'United Nations Environment Programme',
    agenda: ['Combating the Expansion of Plastic Islands and Their Environmental Consequences'],
    text: 'Plastic islands—vast, floating accumulations of plastic waste in oceans—have become alarming symbols of global environmental neglect. These massive debris zones, such as the Great Pacific Garbage Patch, harm marine biodiversity, disrupt ecosystems, and release microplastics and toxic substances into the food chain. They also reflect systemic failures in waste management, especially in coastal and low-income regions. Under the mandate of UNEP, this agenda item focuses on strengthening international cooperation for the reduction of plastic pollution, improving global waste infrastructure, and promoting circular economy solutions to prevent further expansion of marine plastic islands and restore affected ecosystems.',
    'president chair': 'Deniz Yıldırım - Baray Keskin',
    acas: 'Güngör Berkay Akkan',
    image: '/img/committees/bg/unep.png',
}
</script>

<style scoped>

</style>