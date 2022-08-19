<script lang="ts" context="module">
	import type { Load } from './__types/[id]'
	import type { GET } from './[id]'

	// you can either define it manually or copy this line to let TypeScript infer the type for you
	type InputProps = NonNullable<Awaited<ReturnType<typeof GET>>['body']>
	type OutputProps = InputProps & { id: string }

	// we have imported the `Load` type from the relative `__types` folder that
	// is hidden in the generated `.svelte-kit` folder. Those generated types
	// contain a `Load` type with a `params` object that matches our route.
	// You need to run the dev server or `svelte-kit sync` to generate them.
	export const load: Load<InputProps, OutputProps> = async ({
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
	import type { Product } from '$models/product.model'

	// by adding the `$$Props` interface we will get notified
	// if the return type of out load function changes
	interface $$Props extends OutputProps {}

	export let id: string
	export let product: Product
</script>

<h1>product <strong>{id}</strong></h1>

{JSON.stringify(product)}
