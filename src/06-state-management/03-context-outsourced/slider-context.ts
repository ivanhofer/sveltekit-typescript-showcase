import { getContext, setContext } from 'svelte'
import { writable, type Writable } from 'svelte/store'

export type SliderItem = {
	id: number
	title: string
	src: string
}

export type SliderContext = {
	items: SliderItem[]
	currentSlide: Writable<number>
}

// a unique identifier
// in order to not have to come up with a name we can use an empty object
const KEY = {}

// in our setter we can pass in anything we want. It doesn't need to have
// the same type as the actual context
export const setSliderContext = (items: SliderItem[]) =>
	setContext<SliderContext>(KEY, {
		// contexts are not reactive, in order to keep data in sync
		// we can use stores inside a context
		currentSlide: writable(0),
		items,
	})

// our getter simply wraps the `getContext` function and its type declaration
export const getSliderContext = () => {
	const context = getContext<SliderContext>(KEY)
	if (context !== undefined)
		return context

	// TypeScript thinks the function will always return a value of type `SliderContext`,
	// but it's not true in the case we forgot to call `setSliderContext` first.
	// In this case it would return `undefined`, which could lead to an unexpected behavior,
	// so instead we'll throw an error which will inform you about the issue.
	throw new Error('you forgot to set the Slider context before accessing it')
}