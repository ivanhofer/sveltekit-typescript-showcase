<!-- With the `strictEvents` property set we can tell that the parent
	can only listen to events we define on the `createEventDispatcher` function -->
<script lang="ts" strictEvents>
	import { createEventDispatcher } from 'svelte'

	const dispatch = createEventDispatcher<{ done: never }>()
</script>

<button on:click={() => dispatch('done')}>done</button>
