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
		})
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};
