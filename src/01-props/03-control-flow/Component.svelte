<script lang="ts" context="module">
	export interface ApiResponse1<T> {
		success: boolean
		data: T | undefined
		error: Error | undefined
	}
</script>

<script lang="ts">
	export let response: ApiResponse1<string>
</script>

{#if response.success}
	<!-- `data` is typed as `string | undefined` -->
	{response.data}
	<!-- TypeScript code inside templates will not work -->
	<!-- e.g. {response.data as string} -->
{:else}
	<!-- `error` is typed as `Error | undefined` -->
	{response.error}
{/if}
