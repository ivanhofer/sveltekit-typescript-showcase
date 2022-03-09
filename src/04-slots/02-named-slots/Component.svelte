<script lang="ts">
	import { onDestroy } from 'svelte'

	let elapsedTime = 0
	const interval = setInterval(() => (elapsedTime += 1), 1_000)

	// we need to clear the interval when the component gets destroyed
	// to avoid memory leaks
	onDestroy(() => clearInterval(interval))
</script>

<div class="wrapper">
	<slot name="elapsed-time" value={elapsedTime}>
		<!-- provide a default value -->
		{elapsedTime} seconds
	</slot>
</div>
