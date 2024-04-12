/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      animation: {
        ping: 'ping 10s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    },
    fontFamily: {
      bitter: ['Bitter', 'serif',],
      ubuntu: ['Ubuntu', 'sans-serif',],
      sacramento: ['Sacramento', 'sans-serif',],
    },
  },
  plugins: [],
}

