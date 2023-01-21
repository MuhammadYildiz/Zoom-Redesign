/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    fontFamily: {
      'sans': ['Almaden Sans','Internacional','Helvetica','Arial'],
      'body': ['"Open Sans"'],
    },
    extend: {
      colors: {
        'zoom-blue': '#0f5af6',
        'work-color':'#010a3d'
      },
    } 
  },
  plugins: [],
}
