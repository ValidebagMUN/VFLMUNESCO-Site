<template>
    <div>
        <Committee v-bind="committee"/>
    </div>
</template>

<script setup lang="ts">
const committee = {
    slug: 'EP',
    name: 'European Parliament',
    agenda: [
        'Addressing Farmers\' Discontent and Resolving Tensions Amidst Protests in Europe'
    ],
    text: 'The European Parliament (EP) is the legislative body of the European Union, consisting of 720 members, it is the second largest democratic electorate in the world with an electorate of 375 million people. The EP along with the Council establishes the basis for the European Union with a legislative and executive perspective. Being one of the most important parliamentary institutions in the world, the EP makes its voice heard with its decisions -which are mostly controversial from a third-party point of view- on the headlines every time.\n\nOne of the most famous aspects of the EP and the European Union is their unique regulations, with climate change becoming much more relevant and threatening day by day; the European nations decided to impose several measures from taxes to total bans. Those nations’ measures may be effective to an extent but not everyone is happy that the Government is fighting global warming. A certain demographic and a key class to the economics rose up, all around Europe; farmers and the countryside organized riots to protect their interests.\n\nAs stability and climate change clash, Europe is in a crucial dilemma with an immediate demand for an answer and a necessity for action. The establishment failed its ways. With the protests, a huge wave of change hit the continent with many societal and political consequences. Better act before it\'s too late, for both.',
    image: '/img/ep.png'
}
</script>

<style scoped>

</style>