/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand tokens — from Eminent Signs & Craft's brand kit
        eminent: {
          blue: "#0171CE",
          "blue-dark": "#054C8A",
          "blue-deep": "#062F52",
          gold: "#FCB61A",
          charcoal: "#373435",
          ink: "#1C1B1B",
          mist: "#F4F7FB",
        },
      },
      fontFamily: {
        display: ["Rajdhani", "sans-serif"],
        body: ["Exo 2", "sans-serif"],
      },
      backgroundImage: {
        "diagonal-cut":
          "linear-gradient(115deg, #062F52 0%, #054C8A 45%, #0171CE 100%)",
      },
      clipPath: {
        blade: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
      },
    },
  },
  plugins: [],
};
