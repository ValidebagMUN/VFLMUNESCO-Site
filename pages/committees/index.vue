<template>
    <div class="hero text-neutral overflow-clip">
        <div class="flex-col hero-content lg:flex-row">
            <div>
                <h1 class="mt-6 text-5xl font-bold text-center text-[#ebdec4]">COMMITTEES</h1>
                <div class="container flex flex-col items-center justify-center lg:flex-row">
                    <CommitteeCard img="/img/committees/unep.png" slug="unep" name="United Nations Environment Programme" />
                    <CommitteeCard img="/img/committees/unicef.png" slug="unicef" name="United Nations Children’s Fund" />
                </div>
                <div class="container flex flex-col items-center justify-center lg:flex-row">
                    <CommitteeCard img="/img/committees/unsc.png" slug="unsc" name="United Nations Security Council" />
                    <CommitteeCard img="/img/committees/unwomen.png" slug="unwomen" name="United Nations Entity for Gender Equality and the Empowerment of Women" />
                </div>
                <div class="container flex flex-col items-center justify-center lg:flex-row">
                    <CommitteeCard img="/img/committees/who.png" slug="who" name="World Health Organization" />
                    <CommitteeCard img="/img/committees/wipo.png" slug="wipo" name="World Intellectual Property Organization" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
useSchemaOrg([
    defineWebPage({
        name: 'Committees',
        description: 'Explore the committees of ValidebadTrain\'25.',
    })
])
</script>

<style scoped>

</style>