<template>
    <Committee v-bind="committee" />
</template>

<script setup lang="ts">
const committee = {
    slug: 'unsc',
    name: 'United Nations Security Council',
    agenda: [
        'Maintenance of International Peace and Security in the Red Sea',
    ],
    text: 'The United Nations Security Council (abbreviated as UNSC) is one of the six principal organs of the United Nations in charge of maintaining international peace and security as one of the most authorized entities in the United Nations System, the Security Council holds power to establish peacekeeping operations, enacting international sanctions, and authorizing military action. It is the only body to issue binding resolutions.\n\nThe Security Council has played a crucial role in preventing and resolving conflicts all around the world and conserving global and regional peace. It has conducted many peacekeeping operations in various regions; toppling rogue entities, establishing buffer zones, and as its mission requires: preserving peace and integrity in the Member States.',
    image: '/img/unsc.png'
}
</script>

<style scoped></style>