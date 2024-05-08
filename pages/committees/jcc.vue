<template>
    <div>
        <Committee v-bind="committee" />
    </div>
</template>

<script setup lang="ts">
const committee = {
    slug: 'JCC',
    name: 'Joint Crisis Committee',
    agenda: [
        'Turkish Local Elections of 1930'
    ],
    text: 'The 1930 Turkish Local Elections marked the first multi-party election in modern Turkish political history. The ruling Republican People’s Party (CHF) and the newly established Liberal Republic Party (SCF) competed against each other in a not-so-competitive manner. The SCF was created by a close friend of the Reisicümhur, Ali Fethi Okyar and the party itself was nominally liberal despite de facto turning into an anti-CHF, anti-Atatürk political organization. Their success was limited just like their lifespan, despite Atatürk even making his sister a member of the SCF, the multi-party experiment failed to compete against the violent dynamics of a still hot revolution and a uniparty establishment unwantedly headed by the Reisicümhur himself.\n\nThe CHF, at that time, was one of the reflections of a political trinity: State, President, and the Party. Any competition against the CHF was seen as a rejection of the Kemalist revolutions and principles on which the state was founded on. The State was the state and the government of the Reisicümhur Mustafa Kemal Atatürk. As the founder of a young and ambitious republic, Atatürk was not challenged by the political elite; any opposition could be labeled as traitorous; in all this silence, Atatürk challenged himself, he had already tried once with the Progressive Republic Party (TCF) whose existence and importance was shadowed by the unfortunate attempted assassination in İzmir and an evil plot against the State in the Eastern Provinces. Atatürk sought to create opposition to his party again with the SCF and preferred to remain neutral in an attempt to break the chains of the political trinity. Will the chain be broken, or will the chains put an end to multiparty experiments of the Atatürk Era?',
    image: '/img/jcc.png',
    chair: 'Berfin Kılınçaslan - Yaren Naz Yıldırım'
}
</script>

<style scoped>

</style>