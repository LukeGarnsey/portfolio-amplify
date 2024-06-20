/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        doctor: {
          '100':'#F9F9F9',
          '400':'#F9F9F9'
        },
        citrus: {
          '500':'#F1D302'
        },
        pink:{
          '500': '#EC4899'
        },
        flint:{
          '700': '#42424D',
          '900': '#181B26'
        },
        juni:{
          '100':'#F4F3EE',
          '200':'#FF7356',
          '300':'FF7356',
          '400':'#794EF2',
          '500':'#00555A',
          '600':'#023C40'
        },
        slate: {
          '900': '#0f172a',
          '800': '#1e293b',
          '600': '#475569',
          '400': '#94a3b8',
          '500': '#64748b',
          '200': '#e2e8f0'
        },
        teal: {
          '300': '#5eead4',
          '400': '#2dd4bf',
          '900': '#134e4a'
        },
        blue:{
          '500': '#3b82f6'
        },
        purple:{
          '600': '#9333ea'
        }
      },
    },
  },
  plugins: [],
}

