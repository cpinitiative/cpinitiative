const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      // colors: {
      //   'dark-surface': '#121212',
      //   'dark-high-emphasis': 'rgba(255,255,255,0.87)',
      //   'dark-med-emphasis': 'rgba(255, 255, 255, 0.60)',
      //   'dark-disabled-emphasis': 'rgba(255, 255, 255, 0.38)',
      // },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
  purge: {
    // whitelist: ['mode-dark'],
    content: [
      './src/**/*.js',
      './src/**/*.tsx',
    ],
  },
};
