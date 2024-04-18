<template>
    <div>
        <Committee v-bind="committee" />
    </div>
</template>

<script setup lang="ts">
const committee = {
    slug: 'hcc',
    name: 'Historical Crisis Committee',
    agenda: [

    ],
    text: '',
    image: '/img/hcc.png'
}
</script>

<style scoped>

</style>