import type { RequestHandler } from '@sveltejs/kit'
import type { Product, ProductId } from '$models/product.model'

// take a look what hides behind `ProductId` ;)
type Params = { id: ProductId }

type OutputType = { product: Product }

export const get: RequestHandler<Params, OutputType> = async ({ params }) => {
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
