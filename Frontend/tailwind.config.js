/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
     'blue':'#3D52A0',
     'light-blue':'#7091E6',
     'gray':'#8697C4',
     'light-gray':'#ADBBDA',
     'light-pink':'#EDE8F5',
      'zinc':"#101010"
    },
    },
  },
  plugins: [],
}

