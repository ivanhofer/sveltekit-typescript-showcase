<script lang="ts">
	import { createEventDispatcher, onDestroy, onMount } from 'svelte'

	const dispatch = createEventDispatcher<{
		loaded: never
		clicked: number
	}>()

	onMount(() => {
		// dispatch an event
		dispatch('loaded')
		// this will show an Error since we specified the `detail` for the `loaded`-event as `never`
		// dispatch('loaded', true)
	})

	onDestroy(() => {
		// `destroyed` is no valid event because we haven't added it to `createEventDispatcher`
		// dispatch('destroyed')
	})

	export let nrOfTimesClicked = 0

	const handleClick = () => {
		dispatch('clicked', ++nrOfTimesClicked)
	}
</script>

<button on:click={handleClick}>click me</button>
