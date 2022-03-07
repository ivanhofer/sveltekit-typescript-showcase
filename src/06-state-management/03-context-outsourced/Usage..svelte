<script lang="ts">
	import { getSliderContext, setSliderContext } from './slider-context'

	setSliderContext([])

	const { currentSlide, items } = getSliderContext()

	setTimeout(() => $currentSlide++, 1000)
</script>

{#each items as item}
	{item.title}
{/each}
