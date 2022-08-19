import type { PageLoad } from '../$types'
import type { GET } from '../[id]'

// you can either define it manually or copy this line to let TypeScript infer the type for you
type InputProps = NonNullable<Awaited<ReturnType<typeof GET>>['body']>
type OutputProps = InputProps & { id: string }

// we have imported the `Load` type from the relative `__types` folder that
// is hidden in the generated `.svelte-kit` folder. Those generated types
// contain a `Load` type with a `params` object that matches our route.
// You need to run the dev server or `svelte-kit sync` to generate them.
export const load: PageLoad<InputProps, OutputProps> = async ({
	params,
	data: props,
	session,
}) => {
	if (session.user) {
		console.log(`Request from '${session.user.name}`)
	}

	return {
		product: props.product,
		// we enhance the data we get from the endpoint with the Id
		id: params.id,
	}
}
