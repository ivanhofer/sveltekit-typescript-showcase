<script lang="ts">
	import type { Action } from 'svelte/action'

	type AutosizeOptions = {
		minHeight: number
	}

	// this action resizes a textarea when a newline gets inserted/deleted
	const autosize: Action<
		HTMLTextAreaElement, // we can restrict the action to be used only on certain type of Elements
		AutosizeOptions, // the options you need to pass to the action
		{ 'on:changed': (e: CustomEvent<number>) => void } // we can tell the Svelte language tools
		//                                                    that this action adds props and events to the dom elements
	> = (node, options?) => {
		const minHeight = options?.minHeight || 0

		const expand = () => {
			node.style.height = 'inherit'
			var height = node.scrollHeight
			node.style.height = Math.max(height, minHeight) + 'px'

			node.dispatchEvent(new CustomEvent('changed', { detail: height }))
		}

		// trigger resizing when component gets mounted
		setTimeout(expand, 0)

		// check size on each input change
		node.addEventListener('input', expand, false)

		return {
			// remove event listener when component gets destroyed
			destroy: () => node.removeEventListener('input', expand, false),
		}
	}

	// using the action on a normal `input` element will fail because the
	// `node` is specified as a `HTMLTextAreaElement`

	// you can mark options as required or optional
</script>

<textarea use:autosize={{ minHeight: 50 }} on:changed={({ detail }) => console.log(detail)} />
