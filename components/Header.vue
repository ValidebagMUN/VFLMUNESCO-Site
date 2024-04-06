<template>
    <div class="navbar bg-base-100 dark:bg-neutral dark:text-secondary">
        <div class="navbar-start">
            <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul tabindex="0"
                    class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Item 1</a></li>
                    <li>
                        <a>Parent</a>
                        <ul class="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>

            <NuxtImg src="/vmun-light.svg" alt="ValidebagMUN logo" class="h-16 ml-1 hover:animate-pulse" v-show="isDark" />
            <NuxtImg src="/vmun-dark.svg" alt="ValidebagMUN logo" class="h-16 ml-1 hover:animate-pulse" v-show="!isDark" />
            <NuxtLink id="logo" class="btn btn-ghost text-2xl mx-0 px-1.5" to="/">ValidebağMUN</NuxtLink>
        </div>
        <div class="hidden navbar-center lg:flex">
            <ul class="px-1 menu menu-horizontal">
                <div class="dropdown dropdown-hover">
                    <div tabindex="0" role="button" class="m-1 mb-0 text-lg btn btn-ghost no-animation">About</div>
                    <ul tabindex="0" class="dropdown-content z-[1] menu p-2 bg-base-100 rounded-box w-32 font-semibold">
                        <li><NuxtLink to="/conference/venue">Venue</NuxtLink></li>
                        <li><NuxtLink to="/conference/schedule">Schedule</NuxtLink></li>
                    </ul>
                </div>
                <div class="dropdown dropdown-hover">
                    <div tabindex="0" role="button" class="m-1 mb-0 text-lg btn btn-ghost no-animation">Our Team</div>
                    <ul tabindex="0" class="dropdown-content z-[1] menu p-2 bg-base-100 rounded-box w-32 font-semibold">
                        <li><NuxtLink to="/team/secretariat">Secretariat</NuxtLink></li>
                        <li><NuxtLink to="/team/directorate">Directorate</NuxtLink></li>
                    </ul>
                </div>
                <div class="dropdown dropdown-hover">
                    <div tabindex="0" role="button" class="m-1 mb-0 text-lg btn btn-ghost no-animation">Committees</div>
                    <ul tabindex="0" class="dropdown-content z-[1] menu p-2 bg-base-100 rounded-box w-36 font-semibold">
                        <li><NuxtLink to="/committees/unodc">UNODC: CND</NuxtLink></li>
                        <li><NuxtLink to="/committees/ecosoc">ECOSOC</NuxtLink></li>
                        <li><NuxtLink to="/committees/unga">UNGA</NuxtLink></li>
                        <li><NuxtLink to="/committees/unsc">UNSC</NuxtLink></li>
                    </ul>
                </div>
                <NuxtLink tabindex="0" role="button" class="m-1 text-lg btn btn-ghost" to="/faq">FAQ</NuxtLink>
                <NuxtLink tabindex="0" role="button" class="m-1 text-lg btn btn-ghost" to="/contact">Contact</NuxtLink>
            </ul>
        </div>
        <div class="mr-1 navbar-end">
            <NuxtLink id="applyButton" tabindex="0" role="button" to="/apply" class="text-secondary btn btn-ghost bg-primary dark:bg-accent-content dark:text-secondary hover:bg-accent">Apply Now</NuxtLink>
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
.btn-ghost {
    @apply dark:hover:bg-accent-content
}
.dropdown-content {
    @apply dark:bg-accent-content

}
#logo {
    @apply dark:hover:bg-inherit
}
#applyButton {
    @apply dark:hover:bg-primary
}
</style>