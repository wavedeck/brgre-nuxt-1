/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.ts",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      'primary': '#203247',
      'secondary': '#ADA48A',
    },
    extend: {
      fontFamily: {
        'display': ['Exo', 'system-ui', 'sans-serif'],
        'sans': ['Montserrat', 'system-ui', 'sans-serif'],
      },
      backgroundColor: {
        'hero-opaque': 'rgba(255, 255, 255, 0.35)',
      }
    },
  },
  plugins: [],
}

