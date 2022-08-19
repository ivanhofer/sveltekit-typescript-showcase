import type { RequestHandler } from './__types/[id]'
import type { Product } from '$models/product.model'

type OutputType = { product: Product }

// we have imported the `RequestHandler` type from the relative `__types` folder that
// is hidden in the generated `.svelte-kit` folder. Those generated types
// contain a `RequestHandler` type with a `params` object that matches our route.
// You need to run the dev server or `svelte-kit sync` to generate them.
export const GET: RequestHandler<OutputType> = async ({ params }) => {
	// usually here you would fetch the data from a DB
	const product: Product = {
		name: `${params.id} product`,
		color: 'green',
	}

	return {
		body: {
			product,
		},
	}
}
