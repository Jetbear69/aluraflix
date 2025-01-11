/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#409bf1',
        secondary: '#96d2fa',
        tertiary: '#257be5',
        fourth: '#03122f',
        light: '#eff8ff',
        dark: '#18181b',
      },
      fontFamily: {
        'Roboto': ['Roboto', 'sans-serif'],
        'SourceCodePro': ['SourceCodePro', 'sans-serif'],
      },
    },
  },
  plugins: [],
}