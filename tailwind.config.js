/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/**/*.ejs',
    './public/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        'my-n-yellow': '#E9FF09',
        'my-n-blue': '#0079FF',
        'my-black': '#0F0E0E',
        'my-black-2': 'rgba(0, 0, 0,0.6)',
        'my-text-2': '#A7A7A7',
        'my-git-1': '#30363d',
        'my-git-2': '#24292f',
        
      },
      boxShadow:{
        'black-y': '5px 5px 1px rgb(128,128,128)',
        'black-y2': '15px 15px 10px rgb(128,128,128)',
      },
    },
  },
  plugins: [],
};
