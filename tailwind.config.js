/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{vue,js,ts}",
  ],
  plugins: [require('daisyui')],
  darkMode: 'class',
  daisyui: {
    themes: [
      {
        vmun: {
          "primary": "#2E4165",
          "primary-content": "#778DA9",
          "secondary": "#E0E1DD",
          "secondary-content": "#888C7D",
          "accent": "#BC7F38",
          "accent-content": "#5D1C25",
          "neutral": "#0D1B2A",
          "neutral-content": "#1B263B",
          "base-100": "#EDF1F7"
        }
      }
    ]
  }
}

