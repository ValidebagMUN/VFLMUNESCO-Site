<template>
    <Committee v-bind="committee" />
</template>

<script setup lang="ts">
const committee = {
    slug: 'unodc: cnd',
    name: 'United Nations Office on Drugs and Crime - Commission on Narcotic Drugs',
    agenda: [
        'Unregulated production of psychoactive substances'
    ],
    text: 'The Commission on Narcotic Drugs (CND) is a functional commission of the Economic and Social Council (ECOSOC) established in 1946 to oversee international drug control treaties. The CND expanded its mandate in 1991 to function as the governing body of UNODC. The CND convenes annually to pass resolutions and decisions, holding inter-sessional meetings throughout the year. As the UN drug program governing body, it convenes at the end of each year to discuss administrative and budgetary issues. As the primary drug policy-making body in the United Nations System, it possesses crucial mandates under the three international drug control conventions alongside the World Health Organization, the United Nations Office on Drugs and Crime and the International Narcotics Control Board.\n\nPsychoactive substances are chemical substances that change the function of the nervous system resulting in alterations of perception, mood, cognition and behavior. With the legal status of psychoactive substance consumption and production changing regularly and the increase in the decriminalization of psychoactive substances among nations, regulation of such substances are becoming a major problem. Psychoactive substances, when not regulated, are subject to illicit trafficking which gives birth to societal inequality, internal conflict, and a general disturbance for domestic and international peace.\n\nUtilizing the opportunities of the millennium; the commission, as the head of the United Nations\’ drug program, is to guide nations to find modern solutions to our modern problems.',
    image: '/img/unodc.png',
    asg: 'Mert Ömer Yıldız',
    chair: 'Ceren Çağıran',
    rop: 'https://docs.google.com/document/d/1lm-weUGniBi8eTVjbzpDE8zYebxJMQkb692ihk5Nlo0/edit?usp=sharing'
}
</script>

<style scoped>

</style>