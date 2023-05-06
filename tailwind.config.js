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
    extend: {
      colors: {
        'color-header': '#B9B7B7',
        'nytz-light': '#EAEAEA',
        'nytz-cream': 'rgba(234, 234, 234, 0.8)',

        'nytz-somber': '#3D3D3F',
        'nytz-bleak': 'rgba(61, 61, 63, 0.8)',

        'nytz-dark': '#272727',
      },
    },
  },
  plugins: [],
}
