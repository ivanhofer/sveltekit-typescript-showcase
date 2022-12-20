/// <reference types="svelte" />

// let's assume the package 'some-component-with-no-types' doesn't export
// type definitions. In this case we need to write our own definitions
// to benefit from strong type-checking

declare module 'some-component-with-no-types' {
	import { SvelteComponentTyped } from 'svelte'
	import type { HTMLButtonAttributes } from 'svelte/elements'

	interface ButtonProps extends Omit<HTMLButtonAttributes, 'type'> {
		/**
		 * @default "submit"
		 */
		type?: 'submit' | 'cancel'

		/**
		 * @default false
		 */
		primary?: boolean
	}

	// we can export the types and interfaces and use them inside other components
	export interface ButtonEvents {
		click: WindowEventMap['click']
		ready: CustomEvent<number>
	}

	export default class SpecialButton extends SvelteComponentTyped<
		// Props
		ButtonProps,
		// Events
		ButtonEvents,
		// Slots
		{
			default: {}
		}
	> {}
}
