<template>
    <Committee v-bind="committee" />
</template>

<script setup lang="ts">
const committee = {
    slug: 'unga',
    name: 'United Nations General Assembly',
    agenda: [
        'Illegal Israeli actions in occupied East Jerusalem and the rest of the Occupied Palestinian Territory'
    ],
    text: 'The UNGA, is one of the six main bodies or agencies constituting the United Nations. Hence, it acts as the sole institution through which member states equally participate. The General Assembly deliberates and develops policies not restricted to a certain single matter, but encompassing myriad global issues. The Assembly comprises each Member State of the United Nations, generating the sessions from September to December every year and other times where necessary. As from 1991, the Grid of the Assembly, designed by GA Resolution 46 /60 and adopted in 1995, stands out as a reference point for its work. The Assembly\'s General aim is to protect the Charter\'s principles, enforce human rights, strive for social progress, and maintain international cooperation on peace-building and other relevant agendas. It aims to foster understanding, support united causes, and contribute to peace and justice.In the present times, world affairs are well-developed and complex, but the United Nations Assembly managed to keep up with the rapid progress and faced the more demanding issues head-on. Regarding the UN agenda there is a saying "The situation in the Middle East". Obviously, Israeli-Palestinian conflict is the one that activates the most diplomatic methods but unlike other conflicts. This conflict became expressive over the years, and several violent events took place evidenced by fierce battles between Israel and Gaza. Israel is responsible for many of the deaths being incurred in Gaza and injures a lot of civilians during their raids. The buildings of Gaza are paying the cost too. Gaza, already being in a very compressed territory, is now struggling with this horrible situation.\n\nThe escalation of violence during the conflict further complicated efforts to resolve interrelated problems. There is hardly any other option left other than calming up the tensions and reaching a peace agreement.',
    image: '/img/unga.png',
    chair: 'Abdullah Kikati',
    asg: 'Deniz Kartal'
}
</script>

<style scoped></style>