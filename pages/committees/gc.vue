<template>
    <div>
        <Committee v-bind="committee" />
    </div>
</template>

<script setup lang="ts">
const committee = {
    slug: 'GC',
    name: 'General Conference',
    agenda: ['Establishing an International Framework for the Use of Digital Technologies in the Preservation and Promotion of Intangible Cultural Heritage', 'Decisions on the Reports of the Commissions on their Work'],
    text: '',
    image: '/img/committees/bg/gc.png'
}
</script>

<style scoped>

</style>