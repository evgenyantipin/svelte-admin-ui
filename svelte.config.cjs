const sveltePreprocess = require('svelte-preprocess');
const node = require('@sveltejs/adapter-node');
const static = require('@sveltejs/adapter-static');
const pkg = require('./package.json');

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		sveltePreprocess({
			defaults: {
				style: "postcss",
			},
			postcss: true
		}),
	],
	kit: {
		// adapter: node(),
		adapter: static({
			fallback: '404.html'
		}),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		ssr: false,

		vite: {
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {})
			}
		}
	}
};
