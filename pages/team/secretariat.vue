<template>
    <div class="hero text-neutral dark:text-neutral-content overflow-clip">
        <div class="flex-col hero-content lg:flex-row">
            <div>
                <h1 class="my-10 text-5xl font-bold text-center">The Secretariat</h1>
                <div class="container flex flex-col items-center justify-center lg:flex-row">
                    <TeamCard img="/img/team/eea.jpeg" name="Ege Ender Anaklı" title="Deputy Secretary-General" />
                    <TeamCard img="/img/team/hrk.jpeg" name="Hakan Rüzgar Kocaoğlu" title="Secretary-General" />
                    <TeamCard img="/img/team/gg.jpeg" name="Gökalp Gördük" title="Deputy Secretary-General" />
                </div>
                <div class="container flex flex-col items-center justify-center lg:flex-row">
                    <TeamCard img="/img/team/zro.jpeg" name="Zeynep Rüya Özdemir" title="Under-Secretary-General" position="Principal Organs" />
                    <TeamCard img="/img/team/akm.jpeg" name="Ali Kağan Menekşelioğlu" title="Under-Secretary-General" position="Functional Commissions" />
                    <TeamCard img="#" name="Yiğit Kapusuz" title="Under-Secretary-General" position="Historical Simulation" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.card {
    @apply shadow-xl w-80 mx-4 my-10 dark:bg-secondary-content
}
</style>