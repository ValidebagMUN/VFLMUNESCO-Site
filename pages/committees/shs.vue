<template>
	<div>
		<Committee v-bind="committee" />
	</div>
</template>

<script setup lang="ts">
const committee = {
	slug: 'SHS',
	name: 'Social and Human Sciences',
	agenda: ['To be announced'],
	text: '',
	image: '/committees/bg/shs.png'
}
</script>

<style scoped>

</style>
