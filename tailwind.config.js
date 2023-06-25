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
        'title': ['6rem', {
          lineHeight: '121px',
          letterSpacing: '0.01em',
          fontWeight: '300'
        }],
        'hero': ['4.5rem', {
          lineHeight: '91px',
          letterSpacing: '0.02em',
          fontWeight: '300'
        }],
        'body': ['1rem', {
          lineHeight: '35px',
          letterSpacing: '0.03em',
          fontWeight: '400'
        }],
        'body-desk': '1.1875rem',

        'subtitle1': ['3rem', {
          lineHeight: '60px',
          fontWeight: '700'
        }],
        'subtitle2': ['2rem', {
          lineHeight: '40px',
          fontWeight: '700'
        }],
        'subtitle3': ['1.5rem', {
          lineHeight: '30px',
          fontWeight: '700'
        }],
        'cardText1': ['3.5rem', {
          lineHeight: '70px',
          fontWeight: '400'
        }],
        'cardText2': ['2.5rem', {
          lineHeight: '50px',
          fontWeight: '400'
        }],
        'cardText3': ['2rem', {
          lineHeight: '40px',
          fontWeight: '400'
        }],
        'ornament': ['1.5rem', {
          lineHeight: '30px',
          fontWeight: '300'
        }],
        'button': ['1.5rem', {
          lineHeight: '30px',
          fontWeight: '300'
        }],
        'button-action': ['1.5rem', {
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
      },
    },
  },
  plugins: [],
}
