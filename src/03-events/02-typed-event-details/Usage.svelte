<script lang="ts">
	import Component from './Component.svelte'

	type LoadedEventType = Component['$$events_def']['loaded']

	// `detail` is of type `never` (will log as `null`)
	const handleLoaded = ({ detail }: LoadedEventType) => console.log('loaded', detail)

	const handleClicked = ({ detail }: CustomEvent<number>) => console.log('clicked', detail)
</script>

<Component on:loaded={handleLoaded} on:clicked={handleClicked} />

<!-- we can also listen to not specified events because a sub-component may dispatch it, but it will be typed as `any` -->
<Component on:change={({ detail }) => console.log(detail)} />
