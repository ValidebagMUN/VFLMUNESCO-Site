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
        <div class="min-h-[80vh] py-10 pt-20 mx-20 text-neutral dark:text-neutral-content">
            <h2 class="text-3xl font-bold">Letter from the Secretary-General</h2>
            <div class="m-0 my-3 divider divider-neutral dark:divider-primary"></div>
            <h3 class="mb-2 text-2xl font-bold">Dear Participants,</h3>
            <p class="text-xl">
            I as the Secretary-General, welcome you all to the first edition of Validebağ Science High School Model United Nations Conference. With a dedicated vision to portray and reflect the dynamics of the United Nations system and global politics, and a bold mission to ensure a remarkable experience to all of our participants; we are in a long journey of hardwork and dedication. In accordance with our academic preferences and organizational perfectionism we wish to create a nearly one-to-one diplomatic environment for students just like us.
            <br><br>We see it as a priority to equip you with the necessary awareness as we prepare to take stage and become the leaders of next generations. With ValidebağMUN’24, we tried to achieve this by emphasizing the words United Nations in the general concept of MUNs. Nowadays, most MUNs may lack the sufficient academic ambition but we can guarantee, we possess this much-needed academic ambition and an avant-garde vision for our future. So, once again; I welcome you all to an unmatched avant-garde diplomatic and political experience.
            </p>
            <h3 class="mt-4 text-2xl font-bold">Hakan Rüzgar Kocaoğlu <br> Secretary-General</h3>
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