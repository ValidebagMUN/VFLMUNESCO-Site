<template>
    <div>
        <Committee v-bind="committee" />
    </div>
</template>

<script setup lang="ts">
const committee = {
    slug: 'UN Women',
    name: 'United Nations Entity for Gender Equality and the Empowerment of Women',
    agenda: ['Intensifying Global Efforts for the Elimination of Female Genital Mutilation (FGM)'],
    text: 'Female Genital Mutilation (FGM) remains a widespread practice in several regions despite being widely condemned as a serious violation of human rights. Global efforts to eliminate FGM encounter significant challenges due to its deep roots in cultural traditions, religious beliefs, and strong community attachment. While many countries and international organizations advocate for strict legal prohibitions and comprehensive education campaigns, some states emphasize the importance of respecting national sovereignty and caution against what they perceive as external interference in cultural practices. This creates a fundamental tension between upholding universal human rights standards and honoring cultural diversity, complicating international cooperation. Member states are divided on how forcefully to implement bans, the extent of international involvement, and the balance between education and enforcement, making this agenda item a platform for intense debate on the limits of cultural relativism when human rights are at stake.',
    image: '/img/committees/bg/unwomen.png',
    chair: "Zeynep Naz Cengiz, Deputy Chair: Duru Yetkin",
    acas: "Semiha Masal Yaylacı",
    sg: 'https://docs.google.com/document/d/1P5byuYdlBN_w4AEAnq9zEt5SRxg1w-UnVlvUzzKSYac/edit?usp=drive_link'
}
</script>

<style scoped></style>