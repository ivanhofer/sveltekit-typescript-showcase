<script lang="ts">
	import Component from './Component.svelte'
</script>

<Component on:loaded={({ detail }) => console.log(detail)} />
