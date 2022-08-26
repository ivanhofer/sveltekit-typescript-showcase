// You should not import the general types from `@sveltejs/kit`.
import type { RequestEvent, RequestHandler } from './$types'

// You can call this endpoint typically from http://localhost:5173/api/testparam/foo/bar/as/many/as/you/want.
export const GET: RequestHandler = async ({ params }: RequestEvent) => {
	// Because we have imported the generated types from './$types', we get a fully typed `params` object.
	// Try to access `params.someThingElse` and you'll get an error.
	// Or you could rename the folder to change the parameter. You'll get an error too.
	const _param1 = params.param1

	return new Response(JSON.stringify(params))
}
