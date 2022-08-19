<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData
</script>

<h1>product <strong>{data.id}</strong></h1>

{JSON.stringify(data.product)}
