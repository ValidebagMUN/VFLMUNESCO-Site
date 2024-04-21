<template>
    <div class="hero text-neutral dark:text-neutral-content">
        <div class="flex-col hero-content lg:flex-row">
            <div>
                <h1 class="my-10 text-5xl font-bold text-center">The Secretariat</h1>
                <div class="container flex items-center justify-center my-10">
                    <div class="card">
                        <figure><NuxtImg placeholder src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                                alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Ege Ender Anaklı</h2>
                            <p>Deputy Secretary-General</p>
                        </div>
                    </div>
                    <div class="card">
                        <figure><NuxtImg placeholder src="/img/team/secretariat/unholy.jpg" width="320" height="250" fit="cover"
                                alt="Hakan Rüzgar Kocaoğlu" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Hakan Rüzgar Kocaoğlu</h2>
                            <p>Secretary-General</p>
                        </div>
                    </div>
                    <div class="card">
                        <figure><NuxtImg placeholder src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                                alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Gökalp Gördük</h2>
                            <p>Deputy Secretary-General</p>
                        </div>
                    </div>
                </div>
                <div class="container flex items-center justify-center my-10">
                    <div class="card">
                        <figure><NuxtImg placeholder src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                                alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">God Knows Who</h2>
                            <p>Under-Secretary-General, <br /> Principal Organs</p>
                        </div>
                    </div>
                    <div class="card">
                        <figure><NuxtImg placeholder src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                                alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Zeynep Rüya Özdemir</h2>
                            <p>Under-Secretary-General, <br /> Functional Commissions</p>
                        </div>
                    </div>
                    <div class="card">
                        <figure><NuxtImg placeholder src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                                alt="Shoes" /></figure>
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
    @apply shadow-xl w-80 mx-4 dark:bg-secondary-content
}
</style>