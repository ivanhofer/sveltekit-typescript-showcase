<script lang="ts">
	import { goto } from '$app/navigation'
	import Component from './Component.svelte'
</script>

<!-- We can only use the `done` event on this component.
	Any other event will result in an error -->
<Component on:done={() => goto('/')} on:click={(event) => console.log(event)} />
