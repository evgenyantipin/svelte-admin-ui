import sveltePreprocess from 'svelte-preprocess';
// import node from '@sveltejs/adapter-node';
import xstatic from '@sveltejs/adapter-static';
// import pkg from './package.json';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		sveltePreprocess({
			defaults: {
				style: 'postcss'
			},
			postcss: true
		})
	],
	kit: {
		// adapter: node(),
		adapter: xstatic({
			fallback: '404.html'
		}),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		ssr: false
	}
};

export default config;
