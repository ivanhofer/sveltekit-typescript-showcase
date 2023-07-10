<script lang="ts">
	import type { Product } from '$models/product.model.js'

	export let product: Product | undefined = undefined

	// we make sure to always have a product, but TypeScript doesn't know that
	$: if (!product) {
		product = {
			name: 'Product 1',
			color: 'red',
		}
	}

	const castProduct = (product: Product | undefined) => product as Product
</script>

<!-- We can't use TypeScript syntax in our markup so we need to call
 a function that returns the object with the correct type -->
<span>{castProduct(product).name}</span>
