<script lang="ts">
	// initialize a variable to mark it as optional
	export let text1: string = 'Svelte'

	// you can also use `undefined` to treat it as "unset" in your code
	export let text2: string | undefined = undefined
	// but this opens up the possibility to set it to `undefined` from an
	// external component, which is potentially not desired

	// to expose a different type to external components than used internally,
	// you can write it like this
	let _text3: string = ''
	export { _text3 as text3 }
	$: text3 = _text3 || undefined
</script>

{text1}

{text2}

{text3}
