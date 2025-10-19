<template>
	<div>
		<Committee v-bind="committee" />
	</div>
</template>

<script setup lang="ts">
const committee = {
	slug: 'ED',
	name: 'Education',
	agenda: ['To be announced'],
	text: '',
	image: '/committees/bg/ed.png'
}
</script>

<style scoped>

</style>
