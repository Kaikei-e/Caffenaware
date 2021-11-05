import preprocess from 'svelte-preprocess';
// svelte.config.js
import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		adapter: adapter({
			// default options are shown
			pages: '../sBuild',
			assets: '../sBuild',
			fallback: null
		}),
		vite: {
			/*
			ssr: {
				noExternal: ['chart.js']
			},
			optimizeDeps: {
				include: ['chart.js']
			}*/


			optimizeDeps: {
				include: ['@carbon/charts'],
			},
			ssr: {
				noExternal: ['@carbon/charts'].filter(Boolean),
			},
		}
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};
