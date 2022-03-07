// With tagged template literals we can tell TypeScript how the shape of a `string` should look like
// https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html

// ----------------------------------------------------------------------------

type Options = 'A' | 'B' | 'C'

const option: Options = 'A'

// ----------------------------------------------------------------------------

export type NumberString = `${number}`

const number: NumberString = '123'

// ----------------------------------------------------------------------------

export type ID = `ID-${number}`

const id: ID = 'ID-123'

// ----------------------------------------------------------------------------

export type EmailString = `${string}@${string}.${string}`

const email: EmailString = 'user@example.com'

// ----------------------------------------------------------------------------

export type LinkString = `http${'s' | ''}://${string}`

const link: LinkString = 'https://svelte.dev'

// ----------------------------------------------------------------------------

export type IpString = `${number}.${number}.${number}.${number}`

const ip: IpString = '127.0.0.1'

// ----------------------------------------------------------------------------

export type UuidString = `${string}-${string}-${string}-${string}-${string}`

const uuid: UuidString = 'c9bf9e57-1685-4c89-bafb-ff5af830be8a'

// ----------------------------------------------------------------------------

export type Api1DateTimeString = `${number}-${number}-${number} ${number}:${number}:${number}` // e.g. '2021-03-01 13:00:00'

export type Api2Timestamp = `${number}`

export type Api3DateString =
	`${number}-${number}-${number}T${number}:${number}:${number}.${number}Z` // e.g. '2021-03-19T11:35:50.102693Z'

const convertToApi1DateTimeString = (timestamp: Api2Timestamp): Api1DateTimeString =>
	'2021-03-01 13:00:00'

type Api1Payload = {
	id: string
	createdAt: Api1DateTimeString
	updatedAt: Api1DateTimeString
}

const api1Payload: Api1Payload = {
	id: '1234',
	createdAt: convertToApi1DateTimeString('1635494400000'),
	// @ts-expect-error
	updatedAt: '1635494400000', // forgot to convert date
}

// ----------------------------------------------------------------------------

const redirectTo = (relativeUrl: string) => {
	/* implementation */
}

redirectTo('/docs')
redirectTo('docs') // should not be allowed
redirectTo('https://kit.svelte.dev/docs') // should not be allowed

type RelativeRedirect<URL> = URL extends `/${string}` ? URL : never

const redirectToRelativeUrl = <URL>(relativeUrl: RelativeRedirect<URL>): void => {
	/* implementation */
}

redirectToRelativeUrl('/docs')
// @ts-expect-error
redirectToRelativeUrl('docs')
// @ts-expect-error
redirectToRelativeUrl('https://kit.svelte.dev/docs')
