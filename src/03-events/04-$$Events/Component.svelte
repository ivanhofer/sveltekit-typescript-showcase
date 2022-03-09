<script lang="ts">
	import Component from '../02-typed-event-details/Component.svelte'

	// ! note: `$$Events` is currently an experimental feature

	type $$Events = Component['$$events_def']

	// can also be specified as `interface`
	// note: we need to save it to a new type first or else get an TS-2499 Error
	// type TypedEventsEventsType = TypedEvents['$$events_def']
	// interface $$Events extends TypedEventsEventsType {}
</script>

<div class="wrapper">
	<Component />
</div>
