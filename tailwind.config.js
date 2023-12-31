/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontSize: {
			xs: ['12px', '16px'],
			sm: ['14px', '20px'],
			base: ['16px', '19.5px'],
			lg: ['18px', '21.94px'],
			xl: ['20px', '24.38px'],
			'2xl': ['24px', '29.26px'],
			'3xl': ['28px', '50px'],
			'4xl': ['48px', '58px'],
			'8xl': ['96px', '106px'],
		},
		extend: {
			fontFamily: {
				franklinGothic: ['franklinGothic', 'sans-serif'],
				britanica: ['britanica', 'sans-serif'],
			},
			colors: {
				primary: '#fff',
				'logo-red': '#d51920',
				cream: '#f1f2ed',
				'slate-gray': '#64686b',
				'light-black': '#1c1c1c',
				'button-black': '#2a2a2a',
				'black-400': 'rgba(0,0,0,0.40)',
				'white-400': 'rgba(255, 255, 255, 0.80)',
			},
			boxShadow: {
				'3xl': '0 10px 40px rgba(0, 0, 0, 0.1)',
			},
			backgroundImage: {
				hero: "url('assets/images/collection-background.png')",
				card: "url('assets/images/thumbnail-background.png')",
			},
			screens: {
				wide: '1440px',
			},
		},
	},
	plugins: [],
};
