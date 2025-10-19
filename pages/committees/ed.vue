<template>
	<div>
		<Committee v-bind="committee" />
	</div>
</template>

<script setup lang="ts">
const committee = {
	slug: 'ED',
	name: 'Education Commission',
	agenda: ['Refacilitating Educational Institutions in Post-Conflict Regions'],
	text: '',
	image: '/img/committees/bg/ed.png'
}
</script>

<style scoped>

</style>
