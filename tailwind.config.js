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
        '50%': { transform: 'translateY(15px)' },
      },
      translation2:{
        '0%, 100%': { transform: 'translateY(15px)' },
        '50%': { transform: 'translateY(0)' },
      }
     },

     animation:{
      rotation:'translation 8s ease-in-out infinite',
      rotation2:'translation2 8s ease-in-out infinite',
      rotation3:'translation 8s ease-in-out infinite',
      rotation4:'translation2 8s ease-in-out infinite',
     },
    
    },
  },
  plugins: [],
}

