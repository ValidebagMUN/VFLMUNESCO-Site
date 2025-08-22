<template>
    <div>
        <Committee v-bind="committee" />
    </div>
</template>

<script setup lang="ts">
const committee = {
    slug: 'UNSC',
    name: 'United Nations Security Council',
    agenda: ['the 2006 Israel–Hezbollah War'],
    text: 'The 2006 Israel–Hezbollah War marked one of the most intense conflicts in the modern Middle East, resulting in over 1,000 civilian deaths, widespread infrastructure damage, and the deployment of UN peacekeepers to Southern Lebanon. Nearly two decades later, the root causes of the war—territorial disputes, proxy dynamics, and violations of Lebanese sovereignty—remain unresolved. Hezbollah\'s increasing military capabilities, including advanced missile systems, and Israel’s continued border operations have reignited fears of a second war. With the ongoing Gaza conflict, Iranian involvement, and growing instability across Lebanon, the region faces a renewed threat of escalation. The Security Council is called upon to evaluate the legacy of the 2006 war, assess the effectiveness of international peacekeeping mandates, and determine pathways for de-escalation and long-term stability in the Levant.',
    chair: 'Aslı Yıldız, Deputy Chair: Tarık Eren Yılmaz',
    acas: 'Hamza Gezersu',
    image: '/img/committees/bg/unsc.png',
}
</script>

<style scoped>

</style>