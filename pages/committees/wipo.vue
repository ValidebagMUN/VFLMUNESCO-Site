<template>
    <div>
        <Committee v-bind="committee" />
    </div>
</template>

<script setup lang="ts">
const committee = {
    slug: 'WIPO',
    name: 'World Intellectual Property Organization',
    agenda: ['Reforming Global Intellectual Property Frameworks for Artificially Generated Works'],
    text: 'The rapid advancement of generative artificial intelligence has challenged the foundational principles of intellectual property (IP) law. As AI systems now independently create literature, music, visual art, and even inventions, the global IP regime faces an unprecedented question: who owns a creation produced by a non-human agent? Current IP frameworks—rooted in human authorship—do not account for machine-generated works, creating legal ambiguity and international inconsistency. While some countries push to allow ownership rights for AI developers or users, others argue such works should fall into the public domain to ensure equitable access to knowledge and culture. Moreover, the unchecked patenting of AI-generated inventions risks concentrating technological power in the hands of a few global actors, exacerbating inequalities between developed and developing nations. This agenda item calls upon WIPO Member States to re-evaluate and modernize international IP frameworks to address the ownership, accountability, and accessibility of artificially generated works—balancing innovation incentives with global equity and ethical responsibility.',
    image: '/img/committees/bg/wipo.png',
    chair: 'Zeynep Su Gezgin - Asya Ateş',
    acas: 'Ceren Canıtez', 
    sg: 'https://docs.google.com/document/d/1yg1cXAjXGzGy_38wqKuK4MVwwKfL8MYsNWRy3mYGTvo/edit?usp=drive_link',
}
</script>

<style scoped>

</style>