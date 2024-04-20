<template>
    <div>
        <Committee v-bind="committee" />
    </div>
</template>

<script setup lang="ts">
const committee = {
    slug: 'JCC',
    name: 'Joint Crisis Committee',
    agenda: [
        'Turkish Local Elections of 1930'
    ],
    text: '',
    image: '/img/jcc.png'
}
</script>

<style scoped>

</style>