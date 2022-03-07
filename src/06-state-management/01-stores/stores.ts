import { writable } from 'svelte/store'

// the store will automatically infer the type from the initial value
export const myStore = writable(12)

// if we want the store to hold multiple type of values
// we need to specify the type as generic
export const myOtherStore = writable<undefined | string>(undefined)

// we create a cutom store with some additional function
const createMyCustomStore = <T>(fetchFn: () => Promise<T>) => {
	const { subscribe, set } = writable<T | undefined>(undefined)

	return {
		subscribe,
		fetchData: async () => {
			const result = await fetchFn()
			set(result)
		},
	}
}

type User = {
	name: string
}

const loadUserData = async (): Promise<User> => {
	// do data fetching
	return { name: 'Svelte' }
}

export const myCustomUserStore = createMyCustomStore(loadUserData)
