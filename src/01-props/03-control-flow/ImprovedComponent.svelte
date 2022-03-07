<script lang="ts" context="module">
	// the response of a restful API is either successful or contains an Error
	// (except if you use something like GraphQl)
	export type ApiResponse2<T> = SuccessResponse<T> | ErrorResponse

	// will contain data but no Error
	export interface SuccessResponse<T> {
		success: true
		data: T
		error: undefined
	}

	// will contain an Error but no data
	export interface ErrorResponse {
		success: false
		data: undefined
		error: Error
	}
</script>

<script lang="ts">
	export let response: ApiResponse2<string>
</script>

{#if response.success}
	<!-- `data` is correctly typed as `string` -->
	{response.data}
{:else}
	<!-- `error` is correctly typed as `Error` -->
	{response.error}
{/if}
