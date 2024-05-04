<template>
    <div class="hero text-neutral dark:text-neutral-content">
        <div class="flex-col hero-content lg:flex-row">
            <div>
                <h1 class="my-10 text-5xl font-bold text-center">The Directorate</h1>
                <div class="container flex items-center justify-center my-10">
                    <div class="card">
                        <figure><NuxtImg placeholder src="#"
                                alt="" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Elif İnetaş</h2>
                            <p>Director-General</p>
                        </div>
                    </div>
                    <div class="card">
                        <figure><NuxtImg placeholder src="#"
                                alt="" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Elçin Erkiletlioğlu</h2>
                            <p>Deputy Director-General</p>
                        </div>
                    </div>
                </div>
                <div class="container flex items-center justify-center my-10">
                    <div class="card ">
                        <figure><NuxtImg placeholder src="#"
                                alt="" /></figure>
                        <div class="card-body">
                            <h2 class="card-title"> </h2>
                            <p>Under-Director-General, <br /> Administrative Purposes</p>
                        </div>
                    </div>
                    <div class="card ">
                        <figure><NuxtImg placeholder src="#"
                                alt="" /></figure>
                        <div class="card-body">
                            <h2 class="card-title"> </h2>
                            <p>Under-Director-General, <br /> Public Relations</p>
                        </div>
                    </div>
                    <div class="card ">
                        <figure><NuxtImg placeholder src="#"
                                alt="" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Tuğçe Çakmak</h2>
                            <p>Under-Director-General, <br /> Media</p>
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
    @apply shadow-xl w-80 mx-4 bg-base-100 dark:bg-secondary-content
}
</style>