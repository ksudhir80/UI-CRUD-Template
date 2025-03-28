module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}","./src/*.css"],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-all'),
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss')
  ]
};
