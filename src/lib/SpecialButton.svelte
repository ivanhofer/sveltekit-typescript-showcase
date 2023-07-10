<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte'
	const dispatch = createEventDispatcher<{ ready: null }>()

	export let type: 'submit' | 'reset' = 'submit'
	export let primary = false

	onMount(() => dispatch('ready'))
</script>

<button {type} class:primary on:click>
	<slot />
</button>
