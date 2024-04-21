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
    text: 'The United Nations Security Council is one of the six principal organs of the United Nations, in charge of the maintenance of international peace and security. As the single most authorized entity in the UN System, the Council holds the power to establish peacekeeping operations, enact international sanctions and authorize military action.\n\nDue to its relatively low member count and the customs it has established over its near ten thousand meetings, the Council provides the best possible environment for member states to express concern. Even though some express dissent over it, the veto system of the Council has prevented several regional conflicts from escalating to global conflicts.\n\nUnder Article 24 of the Charter, the provisional agenda for the following meetings of the Council is set to be the Maintenance of International Peace and Security in the Red Sea. Since the last meeting of the Council on this topic, there has have further alarming developments. Following Houthi attacks on commercial shipping, the Council shall meet again to discuss ways to safeguard global supply chains and avoid exacerbation of regional tensions.',
    image: '/img/unsc.png'
}
</script>

<style scoped></style>