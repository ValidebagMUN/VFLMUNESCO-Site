/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{vue,js,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  darkMode: 'class',
  daisyui: {
    themes: [
      {
        vmun: {
          "primary": "#2E4165",
          "secondary": "#E0E1DD",
          "accent": "#5D1C25",
          "neutral": "#0D1B2A",
          "base-100": "#EDF1F7"
        }
      }
    ]
  }
}

