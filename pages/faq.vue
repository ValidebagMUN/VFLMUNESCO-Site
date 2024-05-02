<template>
    <Title>FAQ</Title>
    <div class="flex-col w-full rounded-none join join-vertical text-neutral dark:text-neutral-content">
        <h1 class="mx-8 text-5xl font-bold my-14">Frequently Asked Questions</h1>
        <div class="border collapse collapse-plus join-item">
            <input type="radio" name="faq-accordion" />
            <div class="text-xl font-medium collapse-title">
                Which MUN procedure will ValidebağMUN follow?
            </div>
            <div class="collapse-content">
                <p>All committees except UNSC and UNGA will be following an adaptation of the HarvardMUN rules of procedure. Bespoke Rules of Procedure documents for each committee has been prepared and will be published further in the process.</p>
            </div>
        </div>
        <div class="border collapse collapse-plus join-item">
            <input type="radio" name="faq-accordion" />
            <div class="text-xl font-medium collapse-title">
                What are the prescribed limits on the number of delegates per delegation?
            </div>
            <div class="collapse-content">
                <p>A delegation must consist of at least 4 delegates and may have a maximum of 15 delegates.</p>
            </div>
        </div>
        <div class="border collapse collapse-plus join-item">
            <input type="radio" name="faq-accordion" />
            <div class="text-xl font-medium collapse-title">
                What is the dress code of ValidebağMUN
            </div>
            <div class="collapse-content">
                <p>Our dress code is "Western Business Attire", a delegate failing to abide by the dress code may have their right of audience suspended.</p>
            </div>
        </div>
        <div class="border collapse collapse-plus join-item">
            <input type="radio" name="faq-accordion" />
            <div class="text-xl font-medium collapse-title">
                Does ValidebağMUN have a refund policy?
            </div>
            <div class="collapse-content">
                <p>Due to the nature of the application process it is unfortunately not possible for us to provide refunds. The ValidebağMUN Directorate will only provide refunds in case of an error on our side.</p>
            </div>
        </div>
        <div class="border collapse collapse-plus join-item">
            <input type="radio" name="faq-accordion" />
            <div class="text-xl font-medium collapse-title">
                What is the venue of ValidebağMUN?
            </div>
            <div class="collapse-content">
                <p>The venue of ValidebağMUN is set to be İstanbul Medeniyet University. For information on how to reach the venue, please check our <NuxtLink to="/venue" class="link">venue page</NuxtLink></p>
            </div>
        </div>
        <div class="border collapse collapse-plus join-item">
            <input type="radio" name="faq-accordion" />
            <div class="text-xl font-medium collapse-title">
                What is the schedule of ValidebağMUN?
            </div>
            <div class="collapse-content">
                <p>The scheduled date of this years edition of ValidebağMUN is 20-22 June 2024. You may find our schedule <NuxtLink to="/schedule" class="link">here</NuxtLink>.</p>
            </div>
        </div>
        <div class="border collapse collapse-plus join-item">
            <input type="radio" name="faq-accordion" />
            <div class="text-xl font-medium collapse-title">
                Do delegates have to submit position papers before the conference?
            </div>
            <div class="collapse-content">
                <p>None of our committees require position papers from delegates.</p>
            </div>
        </div>
        <div class="border collapse collapse-plus join-item">
            <input type="radio" name="faq-accordion" />
            <div class="text-xl font-medium collapse-title">
                Is there an eligibility criteria for delegates?
            </div>
            <div class="collapse-content">
                <p>ValidebağMUN is open to students of secondary or higher educational institutions.</p>
            </div>
        </div>
        <div class="border collapse collapse-plus join-item">
            <input type="radio" name="faq-accordion" />
            <div class="text-xl font-medium collapse-title">
                Will ValidebağMUN provide accomodation for applicants from outside Istanbul?
            </div>
            <div class="collapse-content">
                <p>Unfortunately, we cannot provide accomodation for any applicants. It is the responsibility of the applicant.</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.collapse {
    @apply border-neutral dark:border-info z-0
}
</style>