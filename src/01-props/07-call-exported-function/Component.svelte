<script lang="ts">
	let isOpen = true

	// export a function the parant can access
	export function openModal() {
		isOpen = true
	}
</script>

{#if isOpen}
	<div>I am a modal</div>
{/if}
