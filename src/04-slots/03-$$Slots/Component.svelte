<script lang="ts">
	// ! note: `$$Slots` is currently an experimental feature

	interface $$Slots {
		// we don't want to render a default slot
		default: never
		// the named slot exposes no variables (use an empty object)
		named: {}
		// we have to use the `$$Slot` interface if we have the same slot
		// definition in the markup that expose different props
		'conditional-slot': { valid?: string; invalid?: string }
	}

	// or define it as a type
	// type $$Slots = {
	// 	default: never
	// 	named: {}
	// 	'conditional-slot': { valid?: string; invalid?: string }
	// }

	const condition = Math.random() >= 0.5
</script>

<div class="wrapper">
	<!-- we can't add a default slot here because we defined it as never -->
	<!-- <slot /> -->

	<slot name="named" />

	{#if condition}
		<slot name="conditional-slot" valid="is valid" />
	{:else}
		<slot name="conditional-slot" invalid="is invalid" />
	{/if}
</div>
