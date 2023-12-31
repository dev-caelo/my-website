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
      }
    },
  },
  plugins: [],
  safelist: [{
    pattern: /(bg|text)-custom/
  }]
}


