<script lang="ts">
	export let input1: number
	export let input2: number

	// the type of `input1plusOne` gets automatically inferred from the type of `input1`
	$: input1plusOne = input1 + 1

	// you can manually specify the type if you explicitly define the variable first
	// this can be useful on more complex examples or while refactoring a component
	let input2plusOne: number
	$: input2plusOne = input2 + 1
</script>

{input1}

{input1plusOne}

<br />

{input2}

{input2plusOne}
