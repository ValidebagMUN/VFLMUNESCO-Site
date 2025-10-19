<template>
	<div>
		<Committee v-bind="committee" />
	</div>
</template>

<script setup lang="ts">
const committee = {
	slug: 'CI',
	name: 'Communication and Information Commission',
	agenda: ['To be announced'],
	text: '',
	image: '/img/committees/bg/ci.png'
}
</script>

<style scoped>

</style>
