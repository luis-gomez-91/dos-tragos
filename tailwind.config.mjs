/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				cream: '#f5f0e8',
				champagne: '#e8dcc8',
				gold: '#c4a574',
				surface: '#0f0f0f',
				'surface-elevated': '#1a1a1a',
			},
			fontFamily: {
				display: ['Londrina Solid', 'sans-serif'],
			},
		},
	},
	plugins: [
		require('tailwindcss-animated')
	],
}
