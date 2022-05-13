module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF4747',
        'light': '#F3F7F0',
        'dark': '#19323C',
        'dark-text': '#1B1B1E'
      },
      boxShadow: {
        'solid1': '4px 4px 0px'
      },
      fontFamily: {
        'syne': ['Syne', 'sans-serif'],
      }
    },
  },
  plugins: [],
}