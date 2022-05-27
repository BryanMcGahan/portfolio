module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xl': '1024px',
        '2xl': '1024px'
      },
      colors: {
        'primary': '#FF4747',
        'light': '#F3F7F0',
        'dark': '#19323C',
        'dark-text': '#1B1B1E'
      },
      boxShadow: {
        'solid1': '4px 4px 0px',
        'hoverSolid': '8px 4px 0px'
      },
      fontFamily: {
        'syne': ['Syne', 'sans-serif'],
      },
    },
  },
  plugins: [],
}