/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'lightgrey': 'F3F3E0',
        'navyblue': '133E87',
        'lightblue': '608BC1',
        'silver': '#ecebff',
        'vlightblue': 'CBDCEB',
      },
      fontFamily:{
        title:[
          'Montserrat', 'serif'
        ]
      }
    },
  },
  plugins: [],
};
