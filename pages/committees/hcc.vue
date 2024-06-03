<template>
    <div>
        <Committee v-bind="committee" />
    </div>
</template>

<script setup lang="ts">
const committee = {
    slug: 'HCC: King of Yunnan',
    name: 'Historical Crisis Committee',
    agenda: [
        'The Reign of the King of Yunnan: Long Yun',
    ],
    text: 'War. War never changes.\nSince the dawn of human kind, when our ancestors first discovered the killing power of rock and bone, blood has been spilled in the name of everything: from God to justice to simple, psychotic rage. In the turbulent years of interbellum, after years of armed conflicts, the destructive nature of man could sustain itself no longer. China was plunged into an abyss of chaos and death. During all these anarchy, a man rose from a distant province covered by a ruthless wilderness and mountains so high that they block the skies; Long Yun. The man quickly proved himself to be a leader, controlling all of Yunnan and organizing an army in the name of the Nationalist Party. The King of Yunnan was his name, he marched through a rift of destruction and death with a bold ambition. Long Yun is much aware that this is a point of no return. It was here he was born. It is here he will die. Because, in this realm no one ever enters, and no one ever leaves.',
    image: '/img/hcc.png',
    asg: 'Mehmet Tuğra Coşkun',
    chair: 'Toprak Hakan Güngör - Saniye Ela Cemaloğlu'
}
</script>

<style scoped>

</style>