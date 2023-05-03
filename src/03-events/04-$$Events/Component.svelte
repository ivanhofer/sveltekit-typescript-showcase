<script lang="ts">
   import type { ComponentEvents } from 'svelte'
	import Component from '../02-typed-event-details/Component.svelte'

	// ! note: `$$Events` is currently an experimental feature

	type $$Events = ComponentEvents<Component>

	// can also be specified as `interface`
	// interface $$Events extends ComponentEvents<Component> {}
</script>

<div class="wrapper">
	<Component />
</div>
