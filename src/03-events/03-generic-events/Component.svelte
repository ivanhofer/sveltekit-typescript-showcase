<script lang="ts">
	import { createEventDispatcher } from 'svelte'

	type Item = $$Generic

	type ItemArray = Item[]

	export let items: ItemArray

	const dispatch = createEventDispatcher<{
		delete: { i: number; item: Item }
	}>()
</script>

{#each items as item, i}
	<div>
		{item}
		<button on:click={() => dispatch('delete', { i, item })}>delete item</button>
	</div>
{/each}
