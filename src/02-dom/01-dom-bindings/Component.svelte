<script lang="ts">
	import { onMount } from 'svelte'

	let input: HTMLInputElement

	// you can't access the input variable before it get's initialized
	// try to uncomment following line and you will get a TypeScript error
	// input.value

	// on the first execution of this reactive statement `input` will still
	// be not set so you probably want to use optional chaining
	$: console.log(input?.value)
	// or you can write it like this
	$: input && console.log(input.value)

	onMount(() => {
		// when `onMount` get's called, it is safe to access the `input` variable
		console.log(input.value)
	})
</script>

<input bind:this={input} value="this is a text" />
