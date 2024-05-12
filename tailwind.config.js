/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Zilla-Slab": '"Zilla Slab", serif',
        Jaini: '"Jaini", system-ui',
        "shadows-light": '"Shadows Into Light", cursive',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};
