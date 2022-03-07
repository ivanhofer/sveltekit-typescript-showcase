<script lang="ts">
	type AutosizeOptions = {
		minHeight: number
	}

	// this action resizes a textarea when a newline get's inserted/deleted
	const autosize = (node: HTMLTextAreaElement, options?: AutosizeOptions) => {
		const minHeight = options?.minHeight || 0

		const expand = () => {
			node.style.height = 'inherit'
			var height = node.scrollHeight
			node.style.height = Math.max(height, minHeight) + 'px'
		}

		// trigger resizing when component get's mounted
		setTimeout(expand, 0)

		// check size on each input change
		node.addEventListener('input', expand, false)

		return {
			// remove event listener when component get's destroyed
			destroy: () => node.removeEventListener('input', expand, false),
		}
	}

	// using the action on a normal `input` element will fail because the
	// `node` is specified as a `HTMLTextAreaElement`

	// you can mark options as required or optional
</script>

<textarea use:autosize={{ minHeight: 50 }} />
