const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		backgroundColor: theme => ({
		 'primary': '#CEE5D0',
		 'secondary': '#F3F0D7',
		 'third': '#E0C097',
		 'danger': '#FF7878'
		})
	},


	plugins: []
};

module.exports = config;
