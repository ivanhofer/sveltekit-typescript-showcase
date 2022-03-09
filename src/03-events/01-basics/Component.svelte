<script lang="ts">
	import { createEventDispatcher } from 'svelte'

	const dispatch = createEventDispatcher()

	// we just have to dispatch an event somewhere and the parent component
	// will already know that this Component dispatches a 'loaded' CustomEvent
	dispatch('loaded')
</script>
