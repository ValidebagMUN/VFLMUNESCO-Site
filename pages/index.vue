<template>
    <div>
        <div class="min-h-[89vh] hero" style="background-image: url(/img/team/main.jpg);">
            <div class="hero-overlay bg-opacity-80"></div>
            <div class="text-center hero-content text-neutral-content">
                <div class="max-w-md">
                    <h1 class="pt-20 mb-5 text-5xl font-bold">Introducing ValidebağMUN</h1>
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
        <div class="hero">
            
        </div>
    </div>
</template>

<script setup lang="ts">
const date = ref({ days: 15, hours: 5, minutes: 19, seconds: 19 });
onNuxtReady(() => {
    setInterval(() => {
        const eventStartTime = Date.now();
        const eventEndTime = new Date('2024-06-20 05:00:00Z');
        const duration = eventEndTime.valueOf() - eventStartTime.valueOf();
        date.value = { days: Math.floor(duration / (1000 * 60 * 60 * 24)), hours: Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), minutes: Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60)), seconds: Math.floor((duration % (1000 * 60)) / 1000) };
    }, 1000);
})
</script>

<style scoped></style>