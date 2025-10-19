<template>
	<div>
		<Committee v-bind="committee" />
	</div>
</template>

<script setup lang="ts">
const committee = {
	slug: 'SC',
	name: 'Natural Sciences',
	agenda: ['To be announced'],
	text: '',
	image: '/committees/bg/sc.png'
}
</script>

<style scoped>

</style>
