<template>
    <div>
        <Committee v-bind="committee"/>
    </div>
</template>

<script setup lang="ts">
const committee = {
    slug: 'EP',
    name: 'European Parliament',
    agenda: [
        ''
    ],
    text: '',
    image: '/img/ep.png'
}
</script>

<style scoped>

</style>