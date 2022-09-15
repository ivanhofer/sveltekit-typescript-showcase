// https://kit.svelte.dev/docs/hooks#server-hooks
import type { Handle, HandleFetch, HandleServerError } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {
	if (event.request.url.startsWith('/custom')) {
		return new Response('custom response')
	}

	// take a look at the `src/global.d.ts` file where we can
	// specify the type of the `locals` object
	event.locals.user = { name: 'john.doe' }

	return await resolve(event)
}

export const handleError: HandleServerError = ({ error, event }) => {
	// send error to an error tracking service
	console.log(event.url, error)
}

export const handleFetch: HandleFetch = async ({ request, fetch }) => {
	// add some authorization headers etc.
	if (request.url.startsWith('https://api.yourapp.com/')) {
		// clone the original request, but change the URL
		request = new Request(
			request.url.replace('https://api.yourapp.com/', 'http://localhost:9999/'),
			request
		);
	}

	return fetch(request);
}
