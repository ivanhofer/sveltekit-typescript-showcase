<script lang="ts">
	import type { ApiResponse1 } from './Component.svelte'
	import Component from './Component.svelte'
	import type { ApiResponse2 } from './ImprovedComponent.svelte'
	import ImprovedComponent from './ImprovedComponent.svelte'

	const response1: ApiResponse1<string> = {
		success: true,
		data: 'some text',
		error: undefined,
	}

	const response2: ApiResponse2<string> = {
		success: true,
		data: 'another text',
		error: undefined,
	}
</script>

<Component response={response1} />

<ImprovedComponent response={response2} />
