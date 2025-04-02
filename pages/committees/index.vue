<template>
    <div class="hero text-neutral overflow-clip">
        <div class="flex-col hero-content lg:flex-row">
            <div>
                <h1 class="mt-6 text-5xl font-bold text-center">COMMITTEES</h1>
                <div class="container flex flex-col items-center justify-center lg:flex-row">
                    <CommitteeCard img="/img/committees/unga.png" slug="unga" name="United Nations General Assembly" />
                    <CommitteeCard img="/img/committees/unhrc.png" slug="unhrc" name="United Nations Human Rights Council" />
                    <CommitteeCard img="/img/committees/unfccc.png" slug="unfccc" name="United Nations Framework Convention on Climate Change" />
                </div>
                <div class="container flex flex-col items-center justify-center lg:flex-row">
                    <CommitteeCard img="/img/committees/hunsc.png" slug="hunsc" name="Historical United Nations Security Council" />
                    <CommitteeCard img="/img/committees/nato.png" slug="nato" name="North Atlantic Treaty Council" />
                    <CommitteeCard img="/img/committees/lon.png" slug="lon" name="League of Nations" />
                </div>
                <div class="container flex flex-col items-center justify-center lg:flex-row">
                    <CommitteeCard img="/img/committees/gw.png" slug="gw" name="Gothic War" />
                    <CommitteeCard img="/img/committees/iw.png" slug="iw" name="Imjin War" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>