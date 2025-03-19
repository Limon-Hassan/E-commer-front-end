/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Inter_FONT: ['"Inter", "sans-serif"'],
        Poppipns_FONT: ['"Poppins", "sans-serif"'],
      },
      maxWidth: {
        container: '1120px',
      },
    },
  },
  plugins: [],
};
