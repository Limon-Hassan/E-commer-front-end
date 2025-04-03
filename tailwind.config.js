const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
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
});
