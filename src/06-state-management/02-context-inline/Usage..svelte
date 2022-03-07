<script lang="ts">
	import { getContext, setContext } from 'svelte'

	setContext('my context key', 'my value')

	// if we don't specify anything, the return value is `unknown`
	const value = getContext('my context key')

	const typedValue = getContext<string>('my context key')

	// oops, typo!
	const oops = getContext('my comtext key')
</script>

{value}

{typedValue}

{oops}
