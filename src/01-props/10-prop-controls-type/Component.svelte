<script lang="ts">
	// we neet to account for three different cases
	// `true` 		=> prop gets passed as truthy
	// `false` 		=> prop gets passed as falsy
	// `undefined` => prop gets not passed
	type Multiple = $$Generic<true | false | undefined>
	type Value = $$Generic

	export let multiple: Multiple = undefined as Multiple
	export let value: undefined extends Multiple ? Value : true extends Multiple ? Value[] : Value

	// we need a `Type Guard` here to let the template know if `value` should be treated as an `Array`
	const isMultiple = (value: unknown): value is ArrayLike<Value> => !!multiple
</script>

{#if isMultiple(value)}
	<ul>
		{#each value as val}
			<li>
				<p>{val}</p>
			</li>
		{/each}
	</ul>
{:else}
	<p>
		{value}
	</p>
{/if}
