const { colors } = require('./config.json');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: colors.dark.foreground,
      secondary: '#9d7a0c',
      tertiary: '#665008',
      background: colors.dark.background,
      ...colors,
    },
    extend: {
      screens: {
        '3xs': '200px',
        '2xs': '320px',
        'xs': '475px',
      },
      animation: {
				fade: 'fadeIn 1s ease-in-out',
			},

			keyframes: {
				fadeIn: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
			},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
