/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-brown': '#49263D',
        'light-brown': '#8C4E5D',
        'red': '#DB4242',
        'light-red': '#F28E8F',
        'cream': '#F6E0CE',
        'light-cream': '#FFF0E3',
        'gray': '#B4B4B4',
      },
      fontFamily: {
        'lora': ['Lora'],
        'poppins': ['Poppins']
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
}
