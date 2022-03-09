<script lang="ts">
	import { onMount } from 'svelte'

	let input: HTMLInputElement
	// you can't access the input variable before it gets initialized
	// try to uncomment the following line and you will get a TypeScript error
	// input.value

	// on the first execution of this reactive statement `input` will still
	// not be set so you probably want to use optional chaining
	$: console.log(input?.value)
	// or you can write it like this
	$: input && console.log(input.value)

	onMount(() => {
		// when `onMount` gets called, it is safe to access the `input` variable
		console.log(input.value)
	})
</script>

<input bind:this={input} value="this is a text" />
