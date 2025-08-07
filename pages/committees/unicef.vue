<template>
    <div>
        <Committee v-bind="committee"/>
    </div>
</template>

<script setup lang="ts">
const committee = {
    slug: 'UNICEF',
    name: 'United Nations Children’s Fund',
    agenda: ['Addressing the Challenges of Providing Humanitarian Aid to Stateless Children Born in Refugee Camps'],
    text: 'The issue of stateless children born in refugee camps presents a complex humanitarian and political crisis. These children often lack access to basic rights such as education, healthcare, and legal protection due to their lack of recognized nationality. While international organizations advocate for universal child rights and humanitarian assistance, host countries frequently resist granting citizenship or formal recognition, citing concerns over sovereignty, security, and demographic impacts. This conflict between state sovereignty and international human rights obligations complicates aid delivery and policy-making, resulting in heated debates over responsibility-sharing, legal frameworks, and long-term solutions. Countries hosting large refugee populations may clash with donor states and UN agencies over resource allocation, registration protocols, and the political implications of naturalizing stateless children, making this agenda item a fertile ground for intense negotiation and disagreement.',
    image: '/img/committees/bg/unodc.png',
    chair: 'Rüya Aktaş, Deputy: Melih Büyükbozkoyun',
    acas: 'Hazal Sakarya',
}
</script>

<style scoped>

</style>