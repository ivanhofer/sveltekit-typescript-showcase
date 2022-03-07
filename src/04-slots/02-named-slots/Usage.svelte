<script lang="ts">
	import Component from './Component.svelte'
</script>

<!-- We don't specify the `elapsed-time` slot so the component will show it's fallback value -->
<Component />

<hr />

<Component>
	<!-- there is no slot with name `time` defined -->
	<!-- <div slot="time" /> -->

	<div slot="elapsed-time" let:value>
		{value} second{value !== 1 ? 's' : ''} passed
	</div>
</Component>
