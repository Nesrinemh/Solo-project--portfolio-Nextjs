/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: 'burtons',
      },
      colors: {
        indian: '#C97064',
        ecru: '#BCA371',
        sage: '#A6B07E',
        asparagus: '#68A357',
        shamrock: '#32965D',
      },
    },
  },
  plugins: [],
};
