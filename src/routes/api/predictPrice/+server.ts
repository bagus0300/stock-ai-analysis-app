import { SERVER_ENDPOINT } from '$env/static/private';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
	const sampleData = url.searchParams.get('value');

	const res = await fetch(`${SERVER_ENDPOINT}/api/predict/${sampleData}`);
	const data = await res.json();
	return new Response(JSON.stringify(data), {
		headers: { 'content-type': 'application/json' }
	});
};
