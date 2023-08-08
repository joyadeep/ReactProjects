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
      },
      translation3:{
        '0%':{transform: 'translateY(-100px)'},
        '100%':{transform:'translateY(0px)'}
      },
      translation4:{
        '0%':{transform:'translateY(0px)'},
        '100%':{transform: 'translateY(-100px)'}
      }
     },

     animation:{
      rotation:'translation 5s ease-in-out infinite',
      rotation2:'translation2 5s ease-in-out infinite',
      rotation3:'translation 5s ease-in-out infinite',
      rotation4:'translation2 5s ease-in-out infinite',
      modal1:'translation3 0.2s linear',
      modal2:'translation4 0.2 linear'
     },
    
    },
  },
  plugins: [],
}