/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
    fontFamily: {
      monse: "Montserrat, sans-serif",
      roboto: "Roboto, sans-serif",
      "roboto-mono": "Roboto Mono, monospace",
      "roboto-slab": "Roboto Slab, serif",
      "roboto-condensed": "Roboto Condensed, sans-serif",
      "roboto-flex": "Roboto Flex, sans-serif",
      "roboto-serif": "Roboto Serif, serif",
      "roboto-slab": "Roboto Slab, serif",
      "roboto-slab": "Roboto Slab, serif"
    },
    // colors: {
    //   primary: "#1B2534",
    //   secondary: "#4b5563",
    //   accent: "#000000"
    // }
  },
  plugins: [require("flowbite/plugin")]
};
