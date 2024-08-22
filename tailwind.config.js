/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
    colors: {
      'colorBg' : '#DBE2EF',
      'colorText' : '#112D4E',
      'colorBg2' : '#F9F7F7',
      'colorLine' : '#D3D3D3',
    },
    fontFamily: {
      'poppins' : ['Poppins', 'sans-serif'],
    },
    letterSpacing :{
      sm:'1px',
      md:'1.8px',
    },
    padding:{
      'py-3.5' : '0.9rem 0 0.9rem 0',
    },
    },
  },
  plugins: [],
}

