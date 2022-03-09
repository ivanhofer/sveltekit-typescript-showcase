<script>
	import Component from './Component.svelte'
</script>

<!-- we forgot to set props and get an Error -->
<Component />

<Component untyped={undefined} typedAsString={'Svelte'} />
