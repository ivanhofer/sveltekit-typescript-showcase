import type { ExternalFetch, GetSession, Handle, HandleError } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {
	if (event.request.url.startsWith('/custom')) {
		return new Response('custom response')
	}

	// take a look at the `src/global.d.ts` file where we can
	// specify the type of the `locals` object
	event.locals.username = 'john.doe'

	return await resolve(event)
}

// the type of the Session object comes from `src/global.d.ts`
export const getSession: GetSession = (event) => {
	if (!event.locals.username) return {}

	return {
		user: {
			name: event.locals.username,
		},
	}
}

export const handleError: HandleError = async ({ error, event }) => {
	// send error to an error tracking service
}

export const externalFetch: ExternalFetch = async (request) => {
	// add some authorisation headers etc.
	return fetch(request)
}
