/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-banner': "url('./assets/images/img-1.jpg')",
      },
      colors: {
        primary: '#f94d1d',
        secondary: '#f3f6ff',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          lg: '1200px',
        }
      },
      textColor: {
        primary: '#f94d1d',
        secondary: '#f3f6ff',
      },
    },
  },
  plugins: [],
}