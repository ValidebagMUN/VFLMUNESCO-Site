<template>
	<div>
		<Committee v-bind="committee" />
	</div>
</template>

<script setup lang="ts">
const committee = {
	slug: 'CI',
	name: 'Communication and Information Commission',
	agenda: ['The Effects of Recent Advancements in AI on Democracy'],
	text: '',
	image: '/img/committees/bg/ci.png'
}
</script>

<style scoped>

</style>
