<script lang="ts">
	// use the special `$$Generic` type to mark a type as generic
	type Item = $$Generic

	// you then can use this generic type inside the component to create another type
	type ItemArray = Item[]

	// when used on
	export let items: ItemArray
	export let onDelete: (index: number, value: Item) => void

	// to restrict the type like you would with the `extends` keyword in a normal TypeScript file,
	// you can pass a generic to the `$$Generic` interface
	// e.g. `MyClass<Item extends { id: string }>` becomes `$$Generic<{ id: string }>`
</script>

{#each items as item, i}
	<div>
		{item}
		<button on:click={() => onDelete(i, item)}>delete item</button>
	</div>
{/each}
