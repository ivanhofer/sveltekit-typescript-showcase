<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte'
	const dispatch = createEventDispatcher<{ ready: never }>()

	export let type: 'submit' | 'cancel' = 'submit'
	export let primary = false

	onMount(() => dispatch('ready'))
</script>

<button {type} class:primary on:click>
	<slot />
</button>
