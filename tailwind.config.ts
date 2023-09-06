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
			black: '#000000',
			white_alpha20: '#ffffff33'
		},
		fontFamily: {
			sans: ['SCoreDream', 'sans-serif'],
			title: ['PyeongChangPeace']
		},
		fontSize: {
			xs: '0.75rem',
			sm: '0.875rem',
			base: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
			'6xl': '3.75rem',
			'7xl': '4.5rem',
			'8xl': '6rem',
			'9xl': '8rem',
			'10xl': '10rem'
		}
	},
	plugins: [],
	darkMode: 'class'
};
export default config;
