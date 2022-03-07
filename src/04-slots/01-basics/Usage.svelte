<script lang="ts">
	import Component from './Component.svelte'
</script>

<Component />

<hr />

<Component let:id>
	I have the id: {id}
</Component>
