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
          lineHeight: '45px',
          letterSpacing: '0.01em',
          fontWeight: '300'
        }],
        'title-desk': ['6rem', {
          lineHeight: '121px'
        }],

        'hero': ['2.125rem', {
          lineHeight: '43px',
          letterSpacing: '0.02em',
          fontWeight: '300'
        }],
        'hero-desk': ['4.5rem', {
          lineHeight: '91px'
        }],

        'statement': ['1.625rem', {
          lineHeight: '33px',
          letterSpacing: '0.07em',
          fontWeight: '300'
        }],
        'statement-desk': ['3.5rem', {
          lineHeight: '70px'
        }],

        'body': ['1rem', {
          lineHeight: '20px',
          letterSpacing: '0.03em',
          fontWeight: '400'
        }],
        'body-desk': ['1.1875rem', {
          lineHeight: '24px'
        }],

        'subtitle1': ['1.25rem', {
          lineHeight: '25px',
          fontWeight: '700'
        }],
        'subtitle1-desk': ['2rem', {
          lineHeight: '40px'
        }],

        'subtitle2': ['0.875rem', {
          lineHeight: '14px',
          fontWeight: '700'
        }],
        'subtitle2-desk': ['1.25rem', {
          lineHeight: '20px'
        }],

        'cardText1': ['1.625rem', {
          lineHeight: '33px',
          fontWeight: '400'
        }],
        'cardText1-desk': ['3rem', {
          lineHeight: '60px'
        }],

        'cardText2': ['1.375rem', {
          lineHeight: '28px',
          fontWeight: '400'
        }],
        'cardText2-desk': ['1.75rem', {
          lineHeight: '35px'
        }],

        'ornament': ['0.8125rem', {
          lineHeight: '16px',
          fontWeight: '300'
        }],
        'ornament-desk': ['1.5rem', {
          lineHeight: '30px'
        }],

        'button': ['1rem', {
          lineHeight: '20px',
          fontWeight: '300'
        }],
        'button-desk': ['1.5rem', {
          lineHeight: '30px'
        }],

        'button-action': ['1rem', {
          lineHeight: '20px',
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
