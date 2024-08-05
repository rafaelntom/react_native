/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", // Target all JS, JSX, TS, and TSX files in the app directory
    "./components/**/*.{js,jsx,ts,tsx}", // Include any additional directories, such as components
    "./pages/**/*.{js,jsx,ts,tsx}", // Include other directories relevant to your app
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
