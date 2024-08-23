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
    screens:{
      'xs' : '480px',
      's' : '576px',
      'm' : '768px',
      'l' : '992px',
      'xl' : '1280px',
      'hd' : '1680px',
    },
    width:{
      'w-100':'400px',
    }
    },
  },
  plugins: [],
}

