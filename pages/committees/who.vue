<template>
    <div>
        <Committee v-bind="committee" />
    </div>
</template>

<script setup lang="ts">
const committee = {
    slug: 'WHO',
    name: 'World Health Organization',
    agenda: [
        'Ensuring Equitable Access to Essential Medicines and Vaccines Amid Rising Pharmaceutical Nationalism and Intellectual Property Conflicts'
    ],
    text: 'The global distribution of vaccines and essential medicines remains unequal due to IP restrictions, pharmaceutical monopolies, and national stockpiling. Wealthy nations—particularly the U.S., U.K., and EU members—oppose intellectual property waivers, while countries like India, Brazil, and South Africa advocate for patent reform to ensure accessibility. This agenda pits public health against corporate profit, and international cooperation against national interest. China and Russia use pharmaceutical aid for geopolitical leverage, and the failure of mechanisms like COVAX exposes power asymmetries in global health governance—fueling a contentious debate on justice, sovereignty, and health equity.',
    image: '/img/committees/bg/who.png',
    chair: "Efe Başeğmez - Elif İnci Damar",
    acas: "Reha Pilanlıoğlu",
    sg: 'https://docs.google.com/document/d/1iafw7Nc4Df1Eul21uAPJJIUFZEXyfwDy6rVFa6MKfQQ/edit?usp=drive_link'
}
</script>

<style scoped>

</style>