<script lang="ts">
	import Component from './Component.svelte'
</script>

<Component on:clicked={({ detail }) => console.log(detail)} />
