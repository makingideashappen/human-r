import { sveltekit } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-netlify';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	adapter: adapter()
};

export default config;
