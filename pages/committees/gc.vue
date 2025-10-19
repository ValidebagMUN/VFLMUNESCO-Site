<template>
    <div>
        <Committee v-bind="committee" />
    </div>
</template>

<script setup lang="ts">
const committee = {
    slug: 'GC',
    name: 'General Conference',
    agenda: ['To be announced'],
    text: '',
    image: '/img/committees/bg/gc.png'
}
</script>

<style scoped>

</style>