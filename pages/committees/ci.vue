<template>
	<div>
		<Committee v-bind="committee" />
	</div>
</template>

<script setup lang="ts">
const committee = {
	slug: 'CI',
	name: 'Communication and Information',
	agenda: ['To be announced'],
	text: '',
	image: '/committees/bg/ci.png'
}
</script>

<style scoped>

</style>
