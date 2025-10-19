<template>
	<div>
		<Committee v-bind="committee" />
	</div>
</template>

<script setup lang="ts">
const committee = {
	slug: 'SPGE',
	name: 'Special Commission on Gender Equality',
	agenda: ['To be announced'],
	text: '',
	image: '/committees/bg/spge.png'
}
</script>

<style scoped>

</style>
