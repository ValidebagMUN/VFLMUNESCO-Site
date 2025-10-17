<template>
    <div>
        <div class="min-h-[91vh] hero" style="background-image: url(/img/team/main.jpg);">
            <div class="hero-overlay bg-opacity-100 opacity-25 bg-base-200"></div>
            <div class="text-center hero-content text-base-content">
                <div class="max-w-md">
                    <h1 class="mt-[2em] mb-5 text-5xl font-bold">Introducing VFLMUNESCO IV</h1>
                    <div class="grid justify-center grid-flow-col gap-5 mb-2 text-center auto-cols-max">
                        <div class="flex flex-col">
                            <span class="font-mono text-5xl countdown">
                                <span :style="'--value:' + date.days + ';'" id="days"></span>
                            </span>
                            days
                        </div>
                        <div class="flex flex-col">
                            <span class="font-mono text-5xl countdown">
                                <span :style="'--value:' + date.hours + ';'" id="hrs"></span>
                            </span>
                            hours
                        </div>
                        <div class="flex flex-col">
                            <span class="font-mono text-5xl countdown">
                                <span :style="'--value:' + date.minutes + ';'" id="min"></span>
                            </span>
                            min
                        </div>
                        <div class="flex flex-col">
                            <span class="font-mono text-5xl countdown">
                                <span :style="'--value:' + date.seconds + ';'" id="sec"></span>
                            </span>
                            sec
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="min-h-[80vh] py-10 pt-20 mx-20 text-neutral">
            <h2 class="text-3xl font-bold text-base-content">Letter from the Secretary-General</h2>
            <div class="m-0 my-3 divider divider-neutral"></div>
            <h3 class="mb-2 text-2xl font-bold text-base-content">Most Esteemed Participants,</h3>
            <p class="text-xl text-base-content">
            Sincerely,<br>
            <span class="mt-4 text-2xl font-bold text-base-content">Zehra Betül Duysak<br>Secretary-General of VFLMUNESCO'25</span>
            </p>
        </div> -->
    </div>
</template> 

<script setup lang="ts">
const date = ref({ days: 0, hours: 12, minutes: 83, seconds: 0 });
/* onNuxtReady(() => {
    setInterval(() => {
        const eventStartTime = Date.now();
        const eventEndTime = new Date('2025-11-29 00:09:00Z');
        const duration = eventEndTime.valueOf() - eventStartTime.valueOf();
        date.value = { days: Math.floor(duration / (1000 * 60 * 60 * 24)), hours: Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), minutes: Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60)), seconds: Math.floor((duration % (1000 * 60)) / 1000) };
    }, 1000);
}) */
</script>

<style scoped>

</style>