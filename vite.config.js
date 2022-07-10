
import { sveltekit } from '@sveltejs/kit/vite'
import { resolve } from 'path'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$lib: resolve('./src/lib'),
			$models: resolve('./src/models'),
		},
	},
}

export default config