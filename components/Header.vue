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
            <NuxtImg src="/vmun-light.svg" alt="ValidebagMUN logo" class="h-16 ml-1" v-show="isDark" />
            <NuxtImg src="/vmun-dark.svg" alt="ValidebagMUN logo" class="h-16 ml-1" v-show="!isDark" />
            <NuxtLink class="btn btn-ghost text-2xl mx-0 px-1.5" to="/">ValidebağMUN</NuxtLink>
        </div>
        <div class="hidden navbar-center lg:flex">
            <ul class="px-1 menu menu-horizontal">
                <div class="dropdown dropdown-hover">
                    <div tabindex="0" role="button" class="m-1 btn btn-ghost">Hover</div>
                    <ul tabindex="0" class="dropdown-content z-[1] menu p-2 bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
                <div class="dropdown dropdown-hover">
                    <div tabindex="0" role="button" class="m-1 btn btn-ghost">Hover</div>
                    <ul tabindex="0" class="dropdown-content z-[1] menu p-2 bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
            </ul>
        </div>
        <div class="mr-1 navbar-end">
            <NuxtLink to="/apply" class="text-secondary btn btn-ghost bg-primary dark:bg-primary dark:text-secondary hover:bg-accent dark:hover:bg-accent-content">Apply Now</NuxtLink>
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

<style scoped></style>