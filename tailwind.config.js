/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.vue", "./src/App.vue"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "15px",
        screens: {
          xl: "1230px",
        },
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "992px",
        // => @media (min-width: 1024px) { ... }

        xl: "1230px",
        // => @media (min-width: 1280px) { ... }
      },
      fontSize: {
        'xxs': ['.7rem', '1'],
      },
      colors: {
        'type-pokemon': 'var(--type-bg-color)'
      }
    },
  },
  plugins: [],
};
