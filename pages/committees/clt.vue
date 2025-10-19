<template>
	<div>
		<Committee v-bind="committee" />
	</div>
</template>

<script setup lang="ts">
const committee = {
	slug: 'CLT',
	name: 'Culture Commission',
	agenda: ['Protecting Endangered Languages'],
	text: '',
	image: '/img/committees/bg/clt.png'
}
</script>

<style scoped>

</style>
