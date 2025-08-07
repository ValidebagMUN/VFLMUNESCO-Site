<template>
    <div class="navbar bg-[#2b2b3e] h-22">
        <div class="navbar-start">
            <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        :stroke="'#ebdec4'">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul tabindex="0" class="menu menu-sm dropdown-content bg-[#20202e] rounded-box z-1 mt-3 w-52 p-2 shadow text-[#ebdec4]">
                    <li>
                        <a>Our Team</a>
                        <ul class="p-2">
                            <li><NuxtLink to="/team/secretariat">Secretariat</NuxtLink></li>
                            <li><NuxtLink to="/team/directorate">Directorate</NuxtLink></li>
                        </ul>
                    </li>
                    <li><NuxtLink to="/committees">Committees</NuxtLink></li>
                    <li>
                        <a>About</a>
                        <ul class="p-2">
                            <li><NuxtLink to="/venue">Venue</NuxtLink></li>
                            <li><NuxtLink to="/schedule">Schedule</NuxtLink></li>
                        </ul>
                    </li>
                    <li><NuxtLink to="/faq">FAQ</NuxtLink></li>
                    <li><NuxtLink to="/contact">Contact</NuxtLink></li>
                </ul>
            </div>

            <NuxtImg src="/vmun-cream.png" alt="ValidebagMUN logo" class="h-28 ml-1 "/>
            <!-- <NuxtImg src="/vmun-white.svg" alt="ValidebagMUN logo" class="h-16 ml-1 "
                v-show="isDark" />
            <NuxtImg src="/vmun-black.svg" alt="ValidebagMUN logo" class="h-16 ml-1 "
                v-show="!isDark" /> -->
            <NuxtLink id="logo" class="btn btn-ghost text-2xl mx-0 pl-0 pr-1.5 hidden md:flex hover:bg-inherit text-[#ebdec4]" to="/">ValidebağTrain</NuxtLink>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
                <div class="dropdown dropdown-hover">
                    <div tabindex="0" role="button" class="m-1 mb-0 text-lg btn btn-ghost no-animation text-[#ebdec4]">OUR TEAM</div>
                    <ul tabindex="0" class="dropdown-content bg-[#2b2b3e] z-[1] menu p-3 rounded-box w-34 font-semibold shadow-md">
                        <li>
                            <NuxtLink class="text-[#ebdec4]" to="/team/secretariat">SECRETARIAT</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink class="text-[#ebdec4]" to="/team/directorate">DIRECTORATE</NuxtLink>
                        </li>
                    </ul>
                </div>
                <NuxtLink tabindex="0" role="button" class="m-1 text-lg btn btn-ghost text-[#ebdec4]" to="/committees">COMMITTEES</NuxtLink>
                <div class="dropdown dropdown-hover">
                    <div tabindex="0" role="button" class="m-1 mb-0 text-lg btn btn-ghost no-animation text-[#ebdec4]">ABOUT</div>
                    <ul tabindex="0" class="dropdown-content bg-[#2b2b3e] z-[1] menu p-2 rounded-box w-32 font-semibold shadow-md">
                        <li>
                            <NuxtLink class="text-[#ebdec4]" to="/venue">VENUE</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink class="text-[#ebdec4]" to="/schedule">SCHEDULE</NuxtLink>
                        </li>
                    </ul>
                </div>
                <NuxtLink tabindex="0" role="button" class="m-1 text-lg btn btn-ghost text-[#ebdec4]" to="/faq">FAQ</NuxtLink>
                <NuxtLink tabindex="0" role="button" class="m-1 text-lg btn btn-ghost text-[#ebdec4]" to="/contact">CONTACT</NuxtLink>
            </ul>
        </div>
        <div class="mr-1 navbar-end">
            <NuxtLink tabindex="0" role="button" to="/apply" class="btn bg-[#202032] text-[#ebdec4]">APPLY NOW</NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    isDark: {
        type: Boolean,
        default: false
    }
})
</script>

<style scoped>
.btn {
    height: calc(var(--spacing) * 11);
    padding-right: calc(var(--spacing) * 3);
    padding-left: calc(var(--spacing) * 3);
}
</style>