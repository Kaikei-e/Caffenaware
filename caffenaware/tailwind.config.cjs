const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		
		backgroundColor: theme => ({
			...theme('colors'),
			'primary': '#84CC16',
			'secondary': '#bd9e60',
			'danger': '#e3342f',
		 })
	},

	plugins: []
};

module.exports = config;
