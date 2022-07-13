module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '666': '',
        '777': '',
        '888': '75rem',
        '999': '80rem',
        '10000': '85rem',

      }
      ,screens: {
        '3xl': '1600px',
      },
    },
     
      
  },
  plugins: [],
};