<template>
    <div>
        <Committee v-bind="committee" />
    </div>
</template>

<script setup lang="ts">
const committee = {
    slug: 'HCC: Şimal Yıldızı',
    name: 'Historical Crisis Committee',
    agenda: [
        'The Turkish Brigade in the Korean War',
    ],
    text: '',
    image: '/img/hcc.png'
}
</script>

<style scoped>

</style>