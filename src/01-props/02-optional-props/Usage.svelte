<script lang="ts">
	import Component from './Component.svelte'

	const text1 = 'Hi'

	const text2: string | undefined = undefined

	const text3 = 'Hello'
</script>

<!-- all props are optional -->
<Component />

<!-- we can use a single prop -->
<Component {text1} />
<Component {text2} />
<Component {text3} />

<!-- or all together -->
<Component {text1} {text2} {text3} />
