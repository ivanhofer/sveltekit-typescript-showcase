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

// a uniquie identifier
// to not come up with a name we can use an empty object
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

// our getter simply wraps the `getContext` function and it's type declaration
export const getSliderContext = () => getContext<SliderContext>(KEY)
