<template>
    <div class="hero text-neutral overflow-clip">
        <div class="flex-col hero-content lg:flex-row">
            <div>
                <div class="container flex flex-col items-center justify-center lg:flex-row">
                    <CommitteeCard img="/img/committees/gc.png" slug="gc" name="General Conference" />
                </div>
                <h1 class="text-5xl font-bold text-center text-base-content">COMMISSIONS</h1>
                <div class="container flex flex-col items-center justify-center lg:flex-row">
                    <CommitteeCard img="/img/committees/ed.png" slug="ed" name="Education" />
                    <CommitteeCard img="/img/committees/clt.png" slug="clt" name="Culture" />
                    <CommitteeCard img="/img/committees/ci.png" slug="ci" name="Communication and Information" />
                </div>
                <div class="container flex flex-col items-center justify-center lg:flex-row">
                    <CommitteeCard img="/img/committees/sc.png" slug="sc" name="Natural Sciences" />
                    <CommitteeCard img="/img/committees/shs.png" slug="shs" name="Social and Human Sciences" />
                    <CommitteeCard img="/img/committees/spge.png" slug="spge" name="Special Commission on Gender Equality" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
useSchemaOrg([
    defineWebPage({
        name: 'Commissions',
        description: 'Explore the commissions of VFLMUNESCO\'25.',
    })
])
</script>

<style scoped>

</style>