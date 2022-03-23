// // import adapter from '@sveltejs/adapter-auto';
// import adapter from '@sveltejs/adapter-static';

// import preprocess from 'svelte-preprocess';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	// Consult https://github.com/sveltejs/svelte-preprocess
// 	// for more information about preprocessors
// 	preprocess: preprocess(),

// 	// //vercel
// 	// kit: {
// 	// 	adapter: adapter()
// 	// }

// 	// Static:
// 	kit: {
// 		adapter: adapter({ pages: 'build', assets: 'build', fallback: null, precompress: false })
// 	},

// 	// Static:
// 	prerender: {
// 		// This can be false if you're using a fallback (i.e. SPA mode)
// 		default: true
// 	}
// };

// export default config;

// //Static:
// // export async function handle({ request, resolve }) {
// // 	const response = await resolve(request, {
// // 		ssr: false
// // 	});
// // 	return response;
// // }

// svelte.config.js
import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false
		}),

		prerender: {
			// This can be false if you're using a fallback (i.e. SPA mode)
			default: true
		}
	}
};
