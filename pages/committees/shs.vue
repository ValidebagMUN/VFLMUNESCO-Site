<template>
	<div>
		<Committee v-bind="committee" />
	</div>
</template>

<script setup lang="ts">
const committee = {
	slug: 'SHS',
	name: 'Social and Human Sciences Commission',
	agenda: ['The Humanitarian Crisis in Sudan'],
	text: '',
	image: '/img/committees/bg/shs.png'
}
</script>

<style scoped>

</style>
