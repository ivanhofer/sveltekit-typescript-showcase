<script lang="ts">
	// ! note: `$$Props` is currently an experimental feature

	// to expose types for props, you won't use in this component,
	// but you want to pass on to child-components via `$$restProps`
	interface $$Props extends Partial<svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['button']>> {
		isLoading: boolean
	}

	// can also be specified as `type` but currently doesn't work 100% correct
	// https://github.com/sveltejs/language-tools/issues/442#issuecomment-1060253460
	// type $$Props = {
	// 	isLoading: boolean
	// } & Partial<svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['button']>>

	// you still have to define the type here
	export let isLoading: boolean

	// or you can use the `$$Props` interface to disallow other props to be set
	// e.g.
	// interface $$Props {
	//	   isLoading: boolean
	// }
</script>

<button {...$$restProps}>
	{#if isLoading}
		...loading
	{:else}
		<slot />
	{/if}
</button>
