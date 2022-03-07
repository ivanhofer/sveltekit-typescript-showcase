<script lang="ts">
	import { onMount } from 'svelte'
	import { myStore, myOtherStore, myCustomUserStore } from './stores'

	const myValue = $myStore
	$myStore = 0 // short form of `myStore.set(0)`
	// we can't assign a string to the store
	// $myStore = 'value'

	const myOtherValue = $myOtherStore
	$myOtherStore = 'some value'

	onMount(async () => {
		await myCustomUserStore.fetchData()
		console.log($myCustomUserStore)
	})

	// we can't set a value on our custom store,
	// since it doesn't include the `set` function
	// $myCustomUserStore = undefined
</script>

{myValue}

{myOtherValue}
