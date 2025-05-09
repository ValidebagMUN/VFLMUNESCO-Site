<template>
    <div>
        <Committee v-bind="committee"/>
    </div>
</template>

<script setup lang="ts">
const committee = {
    slug: 'UNODC',
    name: 'United Nations Office on Drugs and Crime',
    agenda: [
        'Strengthening Youth Resilience to Lower the Risk of Recruitment by Gangs and Organized Criminal Networks'
    ],
    text: 'In today\'s world, young people are becoming targets of criminal organizations due to reasons such as social inequalities, inadequate educational opportunities, unemployment and social exclusion. This situation paves the way for organized crime networks to easily manipulate young individuals and include them in their own structures. This year, in ValidebağMUN\'25, the UNODC (United Nations Office on Drugs and Crime) committee is coming together under the title of "Reducing the Risk of Gang and Organized Crime Network Recruitment by Strengthening the Resilience of Young People". Delegates will address the impact of criminal organizations on young people and try to produce solutions to issues such as education policies, community-based support mechanisms and international cooperation. In this committee, where innovative and sustainable strategies to protect young people will be discussed, you too can play an active role in the fight against global crime. Because your voice matters!',
    image: '/img/committees/bg/unodc.png',
    usg: 'Yağmur Kaya',
    chair: 'Lina Bolgi - Elif Rana',
    acas: 'Melih Büyükbozkoyun',
}
</script>

<style scoped>

</style>