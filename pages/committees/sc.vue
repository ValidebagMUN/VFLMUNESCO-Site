<template>
	<div>
		<Committee v-bind="committee" />
	</div>
</template>

<script setup lang="ts">
const committee = {
	slug: 'SC',
	name: 'Natural Sciences Commission',
	agenda: ['Protecting Island Nations against Rising Sea Levels and Climate Change'],
	text: '',
	image: '/img/committees/bg/sc.png'
}
</script>

<style scoped>

</style>
