<template>
	<div>
		<Committee v-bind="committee" />
	</div>
</template>

<script setup lang="ts">
const committee = {
	slug: 'SPGE',
	name: 'Special Commission on Gender Equality',
	agenda: ['Combatting Online Gendered Disinformation'],
	text: '',
	image: '/img/committees/bg/spge.png'
}
</script>

<style scoped>

</style>
