/** @type {import('tailwindcss').Config}*/
const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        satisfy: ["Satisfy", "sans-serif"]
      }
    }
  },

  plugins: [require("daisyui")]
};

module.exports = config;
