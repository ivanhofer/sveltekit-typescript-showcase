<script lang="ts">
	import Component from './Component.svelte'
</script>

<Component>
	we can still pass something here, but it will not get rendered

	<!-- we use `svelte:fragment` here to just render the content
		inside the tag -->
	<svelte:fragment slot="named">named slot</svelte:fragment>

	<svelte:fragment slot="conditional-slot" let:valid let:invalid>
		{#if valid}
			<div style:color="green">{valid}</div>
		{:else}
			<div style:color="red">{invalid}</div>
		{/if}
	</svelte:fragment>
</Component>
