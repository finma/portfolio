/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        primary: ['"Spartan"', 'Inter', ...fontFamily.sans],
      },
      colors: {
        primary: {
          // Customize it on globals.css :root
          50: withOpacity('--tw-clr-primary-50'),
          100: withOpacity('--tw-clr-primary-100'),
          200: withOpacity('--tw-clr-primary-200'),
          300: withOpacity('--tw-clr-primary-300'),
          400: withOpacity('--tw-clr-primary-400'),
          500: withOpacity('--tw-clr-primary-500'),
          600: withOpacity('--tw-clr-primary-600'),
          700: withOpacity('--tw-clr-primary-700'),
          800: withOpacity('--tw-clr-primary-800'),
          900: withOpacity('--tw-clr-primary-900'),
        },
        dark: '#020B17',
        'dark-blue': '#051A33',
        'red-custom': '#FF4D5A',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
      },
      cursor: {
        link: 'url(/images/nes-tab.png)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
