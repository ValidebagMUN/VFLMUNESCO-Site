<template>
	<div>
		<Committee v-bind="committee" />
	</div>
</template>

<script setup lang="ts">
const committee = {
	slug: 'CLT',
	name: 'Culture',
	agenda: ['To be announced'],
	text: '',
	image: '/committees/bg/clt.png'
}
</script>

<style scoped>

</style>
