module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-all'),
    require('tailwindcss'),
    require('autoprefixer')
   ]
};
