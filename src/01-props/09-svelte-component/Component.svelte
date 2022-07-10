<script lang="ts" context="module">
	import type { ComponentProps, ComponentType, SvelteComponentTyped } from 'svelte'
	import { writable } from 'svelte/store'

	// we will store the modal's content in a writable store to be able to react to it when the value changes
	const modal = writable<ComponentType | undefined>(undefined)
	const modalProps = writable<Record<string, any> | undefined>(undefined)

	// we can call this function from anywhere in our code to open a modal
	export const openModal = <Component extends SvelteComponentTyped>(
		component: ComponentType<Component>,
		// little hack to be able to either disallow or require props
		...props: Record<string, unknown> extends ComponentProps<Component> ? [] : [ComponentProps<Component>]
	) => {
		modal.set(component)
		// `props` is an array with a single item (the object containing all the props of the component)
		modalProps.set(props[0])
	}

	export const closeModal = () => {
		modal.set(undefined)
		modalProps.set(undefined)
	}
</script>

<!-- basic implementation how a modal could work -->
{#if $modal}
	<div class="modal">
		<button class="modal__closer" on:click={closeModal}>❌</button>
		<div class="modal__content">
			<!-- with svelte:component we can render any component and pass arbitrary props via the spread syntax -->
			<svelte:component this={$modal} {...$modalProps} />
		</div>
	</div>
{/if}

<style>
	/* basic styling for the modal */
	.modal {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 10;
	}

	.modal__closer {
		position: absolute;
		top: 0;
		right: 0;
		padding: 1rem;
		cursor: pointer;
	}

	.modal__content {
		background: white;
		padding: 2rem;
		border-radius: 0.5rem;
		margin: 3rem;
	}
</style>
