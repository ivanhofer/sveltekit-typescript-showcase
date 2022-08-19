import type { ExternalFetch, Handle, HandleError } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {
	if (event.request.url.startsWith('/custom')) {
		return new Response('custom response')
	}

	// take a look at the `src/global.d.ts` file where we can
	// specify the type of the `locals` object
	event.locals.user = { name: 'john.doe' }

	return await resolve(event)
}

export const handleError: HandleError = async ({ error, event }) => {
	// send error to an error tracking service
}

export const externalFetch: ExternalFetch = async (request) => {
	// add some authorization headers etc.
	return fetch(request)
}
