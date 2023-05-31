/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'below-low': '0px 0px 16px rgba(0, 0, 0, 0.08)',
        'seminal': 'inset 2px -8px 11px 0px rgba(95,100,235,0.9), inset 8.74px -11.65px 21.85px 0px rgba(255, 0, 0, 0.85), inset 29.14px -8.74px 23.31px 0px #FCFF7C'
      },
      backgroundImage: {
        'seminal': 'linear-gradient(189.61deg, #FA1CBB -300.93%, #00F0FF 20.74%, #ff1bc6 80%)',
        'betascreen': 'linear-gradient(45deg, #5CD6AA 20.83%, #87E68B 76.04%)'
      },
      keyframes: {
        'scaling': {
          '0%, 50%, 100%' : {
            transform: 'scale(1)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '25%, 75%' : {
            transform: 'scale(2)',
            'animatiotin-timing-function': 'cubic-bezier(1, 1, 1, 1)',
          }
        },
      }
    },
  },
  plugins: [],
}
