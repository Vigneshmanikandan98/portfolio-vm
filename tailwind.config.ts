/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  './pages/**/*.{js,ts,jsx,tsx,mdx}',
	  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
	  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
	  extend: {
		colors: {
		  navy: {
			DEFAULT: 'var(--navy)',
			light: 'var(--navy-light)',
			dark: 'var(--navy-dark)',
		  },
		  slate: {
			DEFAULT: 'var(--slate)',
			light: 'var(--slate-light)',
		  },
		  green: {
			DEFAULT: 'var(--green)',
			dark: 'var(--green-dark)',
		  },
		},
		screens: {
		  'xs': '480px',
		  'sm': '640px',
		  'md': '768px',
		  'lg': '1024px',
		  'xl': '1280px',
		  '2xl': '1536px',
		},
	  },
	},
	plugins: [],
  }