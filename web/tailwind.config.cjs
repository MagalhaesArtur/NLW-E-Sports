/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "index.html"],
  theme: {
    fontFamily: { sans: ["Inter", "sans-serif"] },
    extend: {
      colors: {
        roxoEscuro: {
          100: "#2A2634",
        },
        cinzinha: {
          100: "#C4C4C6",
          200: "#71717A",
        },
        roxin: {
          100: "#8B5CF6",
        },
      },
      backgroundImage: {
        backgroundGalaxy: "url('./assets/fundo.png')",
        gradient:
          "linear-gradient(90deg, #9572FC 10%, #43E7AD 80%, #E1D55A 10%)",
        gradient2:
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)",
      },
    },
  },
  plugins: [],
};
