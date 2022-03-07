<script lang="ts">
	import Component from './Component.svelte'

	const stringArray = ['this', 'is', 'a', 'test']
	const numberArray = [1, 2, 3, 4, 5, 6, 7, 8]
</script>

<Component items={stringArray} on:delete={({ detail: { i, item } }) => console.log(i, item)} />

<Component items={numberArray} on:delete={({ detail: { i, item } }) => console.log(i, item)} />
