import type { PageServerLoad } from './$types'
import type { Product } from '$models/product.model'

type OutputType = { product: Product }

// We have imported the `PageServerLoad` type from the relative `./$types` folder that
// is hidden in the generated `.svelte-kit` folder. Those generated types
// contain a `PageServerLoad` type with a `params` object that matches our route.
// You need to run the dev server or `svelte-kit sync` to generate them.
export const load: PageServerLoad<OutputType> = async ({ params, locals }) => {
	// usually here you would fetch the data from a DB
	const product: Product = {
		name: `${params.id} product`,
		color: 'green',
	}

	return {
		product,
		username: locals.user ? locals.user.name : '',
	}
}
