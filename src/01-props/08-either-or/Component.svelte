<script lang="ts">
	// we need to use two generic types
	// on the first we say it is either from some type (`string`) or `undefined`
	type Title = $$Generic<string | undefined>
	// for the second generic type we use a conditional type and assign it
	// either to some type (`string`) if the other type is `undefined`
	// or to `undefined` if the other type is defined
	type Label = $$Generic<Title extends undefined ? string : undefined>

	// define the props this component always has
	interface Props {
		name: string
	}

	// define the props this component can have in variant A
	interface WithLabel extends Props {
		label: Label
	}

	// define the props this component can have in variant B
	interface WithTitle extends Props {
		title: Title
	}

	// combine both variants via an union type
	type $$Props = WithLabel | WithTitle

	export let name: string
	// we need to cast `undefined` to the variable we haave specified
	export let label: Label = undefined as Label
	export let title: Title = undefined as Title
</script>

<h1>{name}</h1>

<h3>
	{label || title}
</h3>
