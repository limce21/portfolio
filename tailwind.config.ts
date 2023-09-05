import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			}
		},
		colors: {
			primary: '#BB2649',
			lightPink: '#FBE9EF',
			brightRed: '#DF4A65',
			deepTurquoise: '#007975',
			dustyRose: '#AC7085',
			white: '#FFFFFF',
			black: '#000000'
		},
		fontFamily: {
			sans: ['SCoreDream', 'sans-serif'],
			title: ['PyeongChangPeace']
		}
	},
	plugins: []
};
export default config;
