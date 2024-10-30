import { sveltekit } from '@sveltejs/kit/vite';
import preprocess from 'svelte-preprocess';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	preprocess: preprocess({
		scss: {
		  prependData: `@import 'src/styles/variables.scss';` // optional, if you use global variables
		}
	  }),
};

export default config;
