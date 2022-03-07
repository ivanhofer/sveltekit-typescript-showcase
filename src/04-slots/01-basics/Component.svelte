<script lang="ts">
	const id = Math.floor(Math.random() * 1_000_000)
</script>

<div class="wrapper">
	<slot {id}>fallback content of default slot</slot>
</div>
