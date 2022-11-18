/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#EF4164',
        secondary: '#FDECEF',

        lightGray: '#F2F2F2',
        darkGray: '#595959',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      spacing: {
        '50%': '50%',
      },
    },
  },
  plugins: [],
};
