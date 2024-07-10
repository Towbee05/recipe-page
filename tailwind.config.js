/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "custom-roseWhite": "#fff5fa",
        "custom-grey": "#e4ded8",
        "custom-eggshell": "#f3e6d8",
        "custom-brown-color": "#5f574e",
        "custom-charcoal": "#302d2c",
        "custom-nutmeg": "#854632",
        "custom-raspberry": "#7b284f"
      },
      fontSize:{
        "2.5xl" : "32px"
      },
      fontFamily:{
        "heading" : ['"Young serif"', 'serif'],
        "paragraph":['"Outfit"', 'sans-serif']
      }
    },
  },
  plugins: [],
}

