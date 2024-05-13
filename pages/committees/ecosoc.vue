<template>
    <Committee v-bind="committee" />
</template>

<script setup lang="ts">
const committee = {
    slug: 'ecosoc',
    name: 'United Nations Economic and Social Council',
    agenda: [
        'Situation in Haiti'
    ],
    text: 'The Economic and Social Council (ECOSOC) advances the three dimensions of sustainable development – economic, social and environmental. Established by The UN Charter in 1945, it is currently on a mission as one of the six main organs of the United Nations. It is the central platform for fostering debate and innovative thinking, forging consensus on ways forward, and coordinating the work of the UN to achieve internationally agreed goals. These include regional economic and social commissions facilitating intergovernmental discussions of major global issues, expert bodies establishing important global normative frameworks, programmes and funds at work around the world to translate development commitments into real changes in people’s lives.\n\nHaiti has been plunged into a serious humanitarian, political and security crisis following the assassination of president Jovenel Moïse in 2021, and the subsequent strengthening of criminal gangs that now dominate a significant part of the territory and have access to key infrastructures, such as ports, and airports. Outcome of this crisis has been devastating. Abhorrent human rights violations are ongoing, with more than 2,500 people killed, kidnapped or injured. A total of 5.5 million Haitians need assistance, more than three million of them being children. Food security remains a grave concern, with malnutrition being reported in a growing number of youngsters and around 1.4 million Haitians being \“one step away from famine\”.\nThe security situation in Port-au-Prince remains volatile and unpredictable, and ECOSOC recognizes the fact that the country is \“on the precipice of catastrophe.\”\n\nResponsible for the direction and coordination of the economic, social, humanitarian, and cultural activities carried out by the UN, ECOSOC considers this conference as an opportunity to address emerging issues of Haiti.',
    image: '/img/ecosoc.png',
    asg: 'Öykü Taş',
    chair: 'Deniz Kartal - Ada Beril İşcan',
    rop: 'https://vmun-bucket.s3.eu-central-1.amazonaws.com/Committees/ECOSOC/Rules+of+Procedure+of+the+Economic+and+Social+Council.pdf'
}
</script>

<style scoped></style>