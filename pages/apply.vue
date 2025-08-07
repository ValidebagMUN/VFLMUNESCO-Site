<template>
    <div class="pt-8 hero text-neutral">
        <div class="flex-col hero-content lg:flex-row">
            <div class="lg:ml-[-5em]">
                <h1 class="text-5xl font-bold mb-6 text-[#ebdec4]">Application Forms</h1>
                <div class="flex flex-col gap-4 py-4">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSe8WYHe29Xhgjn-rSK3UTy0onpFRyTgMy9qRHn-pWN4HH0Eug/viewform?usp=dialog" target="_blank" rel="noopener"
                        class="btn bg-[#2b2b3e] text-[#ebdec4] text-lg py-6">Apply as a Delegation</a>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfr4J9YgCuWcAOPXXFl0qlhYHf4yQ42bnmDh99KpqkAVJ0xrQ/viewform?usp=dialog" target="_blank" rel="noopener"
                        class="btn bg-[#2b2b3e] text-[#ebdec4] text-lg py-6">Apply as an Individual Delegate</a>
                    <a href="https://forms.gle/2wTC3NxVpBw1K2nw6" target="_blank" rel="noopener"
                        class="btn bg-[#2b2b3e] text-[#ebdec4] text-lg py-6">Apply as an Admin</a>
                    <a href="https://forms.gle/p99NVuMC1FeNukse9" target="_blank" rel="noopener"
                        class="btn bg-[#2b2b3e] text-[#ebdec4] text-lg py-6">Apply as a Press Member</a>
                </div>
            </div>
            <div class="divider divider-horizontal max-sm:hidden"></div>
            <div>
                <h1 class="text-5xl font-bold mb-6 lg:mt-[-1.75em] text-[#ebdec4]">Fees</h1>
                <div class="flex flex-col gap-4 py-4">
                    <h4 class="text-lg text-[#ebdec4]">Delegations: 650₺ per delegate</h4>
                    <h4 class="text-lg text-[#ebdec4]">Individual Delegates: 675₺</h4>
                    <h4 class="text-lg text-[#ebdec4]">Admins: 500₺</h4>
                    <h4 class="text-lg text-[#ebdec4]">Press: 500₺</h4>
                </div>
            </div>
            <!--<div>
                <h1 class="text-5xl font-bold mb-6">Applications to ValidebağMUN'25 have been closed.</h1>
                <h2 class="text-4xl font-bold mb-6">Thank you for your interest.</h2>
            </div>!-->
        </div>
    </div>
</template>

<script setup lang="ts">
useSchemaOrg([
    defineWebPage({
        name: 'Apply',
        description: 'Application forms and fees for ValidebağTrain\'25.',
    })
])
</script>

<style scoped></style>