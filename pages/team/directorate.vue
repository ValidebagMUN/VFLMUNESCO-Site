<template>
    <div class="hero text-neutral dark:text-neutral-content overflow-clip">
        <div class="flex-col hero-content lg:flex-row">
            <div>
                <h1 class="my-10 text-5xl font-bold text-center">The Directorate</h1>
                <div class="container flex flex-col items-center justify-center lg:flex-row">
                    <TeamCard img="/img/team/ei.jpeg" name="Elif İnetaş" title="Director-General" />
                    <TeamCard img="/img/team/ee.jpeg" name="Elçin Naz Erkiletlioğlu" title="Deputy Director-General" />
                </div>
                <div class="container flex flex-col items-center justify-center lg:flex-row">
                    <TeamCard img="#" name="Berat Küçükakın" title="Under-Director-General" position="Administrative Purposes" />
                    <TeamCard img="#" name="Recep Uzun" title="Under-Director-General" position="Public Relations" />
                    <TeamCard img="/img/team/tc.jpeg" name="Tuğçe Çakmak" title="Under-Director-General" position="Press & Media" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.card {
    @apply shadow-xl w-80 mx-4 my-10 bg-base-100 dark:bg-secondary-content
}
</style>