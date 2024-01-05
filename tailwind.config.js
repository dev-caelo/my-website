/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        // transparent: 'transparent',
        // black: '#000',
        // white: '#fff',
        // gray: {
        //   100: '#f7fafc',
        //   900: '#1a202c',
        // },
        customPurpleBG: '#0f021a',
      },
      animation: {
            text:'text 5s ease infinite',
        },
        keyframes: {
            text: {
                '0%, 100%': {
                    'background-size':'200% 200%',
                    'background-position': 'left center'
                },
                '50%': {
                    'background-size':'200% 200%',
                    'background-position': 'right center'
                }
            },
        }
    },
  },
  plugins: [],
  safelist: [{
    pattern: /(bg|text)-custom/
  }]
}


