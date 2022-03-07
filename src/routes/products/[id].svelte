<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit'

	import type { get } from './[id]'
	type Params = { id: ProductId }
	// you can either define it manually or copy this line to let TypeScript infer the type for you
	type InputProps = NonNullable<Awaited<ReturnType<typeof get>>['body']>
	type OutputProps = Params & InputProps

	export const load: Load<Params, InputProps, OutputProps> = async ({
		params,
		props,
		session,
	}) => {
		if (session.user) {
			console.log(`Request from '${session.user.name}`)
		}

		return {
			props: {
				product: props.product,
				// we enhance the data we get from the endpoint with the Id
				id: params.id,
			},
		}
	}
</script>

<script lang="ts">
	import type { Product, ProductId } from '$models/product.model'

	// by adding the `$$Props` interface we will get notified
	// if the return type of out load function changes
	interface $$Props extends OutputProps {}

	export let id: ProductId
	export let product: Product
</script>

<h1>product <strong>{id}</strong></h1>

{JSON.stringify(product)}
