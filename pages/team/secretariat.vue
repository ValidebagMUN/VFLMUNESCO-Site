<template>
    <div class="hero text-neutral dark:text-neutral-content overflow-clip">
        <div class="flex-col hero-content lg:flex-row">
            <div>
                <h1 class="my-10 text-5xl font-bold text-center">The Secretariat</h1>
                <div class="container flex flex-col items-center justify-center lg:flex-row">
                    <div class="card">
                        <figure>
                            <NuxtImg placeholder src="/img/team/eea.jpeg" alt="Ege Ender Anaklı" />
                        </figure>
                        <div class="card-body">
                            <h2 class="card-title">Ege Ender Anaklı</h2>
                            <p>Deputy Secretary-General</p>
                        </div>
                    </div>
                    <div class="card">
                        <figure>
                            <NuxtImg placeholder src="/img/team/hrk.jpeg" alt="Hakan Rüzgar Kocaoğlu" />
                        </figure>
                        <div class="card-body">
                            <h2 class="card-title">Hakan Rüzgar Kocaoğlu</h2>
                            <p>Secretary-General</p>
                        </div>
                    </div>
                    <div class="card">
                        <figure>
                            <NuxtImg placeholder src="/img/team/gg.jpeg" alt="Gökalp Gördük" />
                        </figure>
                        <div class="card-body">
                            <h2 class="card-title">Gökalp Gördük</h2>
                            <p>Deputy Secretary-General</p>
                        </div>
                    </div>
                </div>
                <div class="container flex flex-col items-center justify-center lg:flex-row">
                    <div class="card">
                        <figure>
                            <NuxtImg placeholder src="/img/team/zro.jpeg" alt="Zeynep Rüya Özdemir" />
                        </figure>
                        <div class="card-body">
                            <h2 class="card-title">Zeynep Rüya Özdemir</h2>
                            <p>Under-Secretary-General, <br /> Principal Organs</p>
                        </div>
                    </div>
                    <div class="card">
                        <figure>
                            <NuxtImg placeholder src="/img/team/akm.jpeg" alt="" />
                        </figure>
                        <div class="card-body">
                            <h2 class="card-title">Ali Kağan Menekşelioğlu</h2>
                            <p>Under-Secretary-General, <br /> Functional Commissions</p>
                        </div>
                    </div>
                    <div class="card">
                        <figure>
                            <NuxtImg placeholder src="#" alt="" />
                        </figure>
                        <div class="card-body">
                            <h2 class="card-title">Yiğit Kapusuz</h2>
                            <p>Under-Secretary-General, <br /> Historical Simulation</p>
                        </div>
                    </div>
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