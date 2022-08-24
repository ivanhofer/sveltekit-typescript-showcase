import type { RequestEvent, RequestHandler } from '@sveltejs/kit';
// Typescript implementation of https://kit.svelte.dev/docs/routing#server with parameter catching
// examples as per https://kit.svelte.dev/docs/advanced-routing#rest-parameters
// Type definitions at https://github.com/sveltejs/kit/blob/master/packages/kit/types/index.d.ts

//you can call this typically from http://localhost:5173/api/testparam/foo/bar/as/many/as/you/want
export const GET: RequestHandler = async (req: RequestEvent) => {
	//You will usually see req destructured like `async({ request, locals, params }) => {`
	console.log(req.request);
	let resp = new Response(JSON.stringify([req.params.param1, req.params.catcher ]) );
	return resp;
};
