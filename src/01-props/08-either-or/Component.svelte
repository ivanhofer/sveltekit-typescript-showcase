<script lang="ts">
	type Title = $$Generic<string | undefined>
	type Label = $$Generic<Title extends string ? undefined : string>

	interface Props {
		name: string
	}

	interface WithLabel extends Props {
		label: Label
	}

	interface WithTitle extends Props {
		title: Title
	}

	type $$Props = WithLabel | WithTitle

	export let name: string
	export let label: Label = undefined as Label
	export let title: Title = undefined as Title
</script>

<h1>{name}</h1>

<h3>
	{label || title}
</h3>
