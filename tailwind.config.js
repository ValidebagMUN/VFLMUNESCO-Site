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
        light: {
          "primary": "#2E4165",
          "primary-content": "#0D1B2A",
          "secondary": "#5D1C25",
          "secondary-content": "#511820",
          "accent": "#417854",
          // "accent-content": "",
          "neutral": "#13273E",
          "neutral-content": "#E0E1DD",
          "base-100": "#EDF1F7",
          // "base-200": "",
          // "base-300": "",
          // "base-content": "",
          "info": "#597BA5",
          // "info-content": "",
          "success": "#29895C",
          // "success-content": "",
          "warning": "#bc7f38",
          // "warning-content": "",
          "error": "#892936",
          // "error-content": ""
        }
      }
    ]
  }
}

