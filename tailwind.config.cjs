/** @type {import('tailwindcss').Config} */
// tailwind.config.js`

const pokemonTypeColors = {
  black: "#000000",
  white: "#FFFFFF",
  normal: "#A8A77A",
  fire: "#EE8130",
  "fire-dark": "",
  "fire-light": "",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  "grass-dark": "",
  "grass-light": "#A7DB8D",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

const bgClassNames = Object.keys(pokemonTypeColors).map((key) => `bg-${key}`);
const hoverBgClassNames = Object.keys(pokemonTypeColors).map(
  (key) => `hover:bg-${key}`
);

const bgFromClassNames = Object.keys(pokemonTypeColors).map(
  (key) => `from-${key}`
);
const bgToClassNames = Object.keys(pokemonTypeColors).map((key) => `to-${key}`);

module.exports = {
  content: ["./src/**/*.{html,js,tsx,jsx}"],
  theme: {
    fontFamily: {
      pokemon: ["Pokemon_GB", "sans-serif"],
    },
    extend: {
      colors: {
        ...pokemonTypeColors,
        gray: "gray",
      },
    },
  },
  safelist: [
    ...bgClassNames,
    ...hoverBgClassNames,
    ...bgFromClassNames,
    ...bgToClassNames,
    "animate-rotate",
    "bg-gray",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-orange-800",
  ],
  plugins: [require("tailwindcss-debug-screens")],
};

/*grass: '#26d9b4',
        fire: '#f8796c',
        water: '#58acf3'*/
