module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    copy({
      targets: [
        { src: 'src/**/*', dest: 'dist' },
        {
          src: ['src/components/**/*', '!**/*.spec.*'],
          dest: 'dist',
        },
      ],
      verbose: true,
      flatten: false,
    })
   ]
};
