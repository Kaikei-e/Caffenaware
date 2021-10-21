import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter({
			path: {
				base: "/"
			},
			pages: 'build',
			assets: 'build',
			fallback: 'index.html'
		}),
		vite: {
			server: {
				hmr: {
					host: 'localhost',
					port: 15000,
					protocol: 'wss'
				  }
			}
		}
	}
};

export default config;
