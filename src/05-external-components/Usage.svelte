<script lang="ts">
	import type { ButtonEvents } from 'some-component-with-no-types'
	import SpecialButton from 'some-component-with-no-types'

	const onReady = ({ detail }: ButtonEvents['ready']) => console.log(detail)
</script>

<SpecialButton on:click on:ready={onReady}>I'm special</SpecialButton>
