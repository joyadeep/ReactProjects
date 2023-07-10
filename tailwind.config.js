import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     keyframes:{
      translation:{
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(5px)' },
      },
      translation2:{
        '0%, 100%': { transform: 'translateY(5px)' },
        '50%': { transform: 'translateY(0)' },
      }
     },

     animation:{
      rotation:'translation 4s ease-in-out infinite',
      rotation2:'translation2 4s ease-in-out infinite',
      rotation3:'translation 4s ease-in-out infinite',
      rotation4:'translation2 4s ease-in-out infinite',
     },
    
    },
  },
  plugins: [],
}

