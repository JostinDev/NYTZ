/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'body': ['Source Sans Pro', 'sans-serif'],
      'code': ['Source Code Pro', 'monospace']
    },
    extend: {
        animation: {
          leftToRightStudio: 'LeftToRight 4s infinite linear',
          leftToRightNytz: 'LeftToRight 3s infinite linear',
        },
      keyframes: {
        LeftToRight: {
          'from': { transform: 'translateX(0%)' },
          'to': { transform: 'translateX(-100%)' },
        }
      },
      fontSize: {
        'title': ['2.25rem', {
          lineHeight: '121px',
          letterSpacing: '0.01em',
          fontWeight: '300'
        }],
        'title-desk': '6rem',

        'hero': ['2.125rem', {
          lineHeight: '91px',
          letterSpacing: '0.02em',
          fontWeight: '300'
        }],
        'hero-desk': '4.5rem',

        'statement': ['1.625rem', {
          lineHeight: '91px', //TODO
          letterSpacing: '0.07em',
          fontWeight: '300'
        }],
        'statement-desk': '3.5rem',

        'body': ['1rem', {
          lineHeight: '35px',
          letterSpacing: '0.03em',
          fontWeight: '400'
        }],
        'body-desk': '1.1875rem',

        'subtitle1': ['1.25rem', {
          lineHeight: '60px',
          fontWeight: '700'
        }],
        'subtitle1-desk': '2rem',

        'subtitle2': ['0.875rem', {
          lineHeight: '40px',
          fontWeight: '700'
        }],
        'subtitle2-desk': '1.25rem',

        'cardText1': ['1.625rem', {
          lineHeight: '70px',
          fontWeight: '400'
        }],
        'cardText1-desk': '3rem',

        'cardText2': ['1.375rem', {
          lineHeight: '50px',
          fontWeight: '400'
        }],
        'cardText2-desk': '1.75rem',

        'ornament': ['0.8125rem', {
          lineHeight: '30px',
          fontWeight: '300'
        }],
        'ornament-desk': '1.5rem',

        'button': ['1rem', {
          lineHeight: '30px',
          fontWeight: '300'
        }],
        'button-desk': '1.5rem',

        'button-action': ['1rem', {
          lineHeight: '30px',
          fontWeight: '600'
        }],
        'button-action-desk': ['1.5rem', {
          lineHeight: '30px',
          fontWeight: '600'
        }],
      },
      colors: {
        'fog': '#EAEAEA',
        'cloud': 'rgba(234, 234, 234, 0.8)',
        'midnight': '#3D3D3F',
        'storm': 'rgba(61, 61, 63, 0.8)',
        'obsidian': '#272727',

        'modal-backdrop': '#383838',
      },
    },
  },
  plugins: [],
}
