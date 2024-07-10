const { TbH2 } = require('react-icons/tb');

/** @type {import('tailwindcss').Config} */
  module.exports = {
  content: ["./index.html","./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    screens:{
      t1:"1122px",
       t2:"758px",
     },
     
    extend: {
      screens:{
       lg:"1008px",
      },
      colors:{
        primary: "#D9D9D9",
        secondary: "#FFFFFF",
        accent:"#21B986",
        text: "#000000",
        gr:"#D9D9D9",
        g1:"#585454",
        ab:"#776D6D",
      },
      container:{
        center:true,
        padding:{
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
        },
      },
    },
  },
  plugins: [],
}