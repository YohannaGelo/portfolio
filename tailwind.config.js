/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./dist/**/*.{html,js}",
    "./src/**/*.{html,js}",
  ],
  safelist: [
    'modal-enter',
    'modal-exit',

  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'rosa-claro': '#FF9FDF',
        'rosa-medio': '#FF6EC7',
        'rosa-oscuro': '#FF00AA'
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'mono': ['Roboto Mono', 'monospace']
      }
    },
  },
  plugins: [],
}