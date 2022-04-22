<script lang="ts">
	import Component from './Component.svelte'

	let component: Component
</script>

<!-- we bind the component's instance to a variable -->
<Component bind:this={component} />

<!-- and then can call exported functions -->
<button on:click={() => component.openModal()}> Open dialog </button>
