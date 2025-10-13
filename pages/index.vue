<template>
    <div>
        <div class="min-h-[89vh] hero" style="background-image: url(/img/team/main.jpg);">
            <div class="hero-overlay bg-opacity-100 opacity-25 bg-[#2b2b3e]"></div>
            <div class="text-center hero-content text-base-content">
                <div class="max-w-md">
                    <h1 class="mt-[2em] mb-5 text-5xl font-bold">Introducing VFLMUNESCO</h1>
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
        <div class="min-h-[80vh] py-10 pt-20 mx-20 text-neutral">
            <h2 class="text-3xl font-bold text-[#ebdec4]">Letter from the Secretary-General</h2>
            <div class="m-0 my-3 divider divider-neutral"></div>
            <h3 class="mb-2 text-2xl font-bold text-[#ebdec4]">Most Esteemed Participants,</h3>
            <p class="text-xl text-[#ebdec4]">
            As the secretary general I am very delighted to host each one of you in the second edition of ValidebagTrain’25. I can surely confirm that our team has worked very hard with great diligence in order to create a memorable experience for all of you.
            <br><br>
            To honour beginner delegates, we created committees that would make them comfortable in speaking behalf of themselves, where there is not a gap in experiences and that everyone would get equal treatment as those higher and lower themselves. We built up study guides that go through every one of crucial contents detailly and further explain the context to you. We organized various activities to keep you entertained during the breaks. And through the conference, we will make sure you have the best time you possibly could have.
            <br><br>
            While getting to know both the academy and organization, I frankly hope you have a great time and get to know people that make you grateful you met them.
            <br><br>
            And lastly, I want you to remember that every journey has a beginning. What matters throughout the journey is not perfection, but giving your best and the experiences you gain along the way.
            <br><br>
            Sincerely,<br>
            <span class="mt-4 text-2xl font-bold text-[#ebdec4]">Zehra Betül Duysak<br>Secretary-General of VFLMUNESCO'25</span>
            </p>
        </div>
    </div>
</template> 

<script setup lang="ts">
const date = ref({ days: 19, hours: 7, minutes: 53, seconds: 53 });
onNuxtReady(() => {
    setInterval(() => {
        const eventStartTime = Date.now();
        const eventEndTime = new Date('2025-10-11 00:00:00Z');
        const duration = eventEndTime.valueOf() - eventStartTime.valueOf();
        date.value = { days: Math.floor(duration / (1000 * 60 * 60 * 24)), hours: Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), minutes: Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60)), seconds: Math.floor((duration % (1000 * 60)) / 1000) };
    }, 1000);
})
</script>

<style scoped>

</style>