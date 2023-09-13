/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '8rem',
      },
    },
    extend: {
      colors:{
        "Brown":{
          100:"#ECE0D1",
          300:"#DBC1AC",
          600:"#967259",
          900:"#634832"
        }
      },
      boxShadow:{
        "shadow-normal":"0px 1px 10px rgba(0,0,0,0.05)"
      },
      borderRadius:{
        "4xl":"2rem "
      },
      fontFamily:{
        "Dana":"Dana",
        "DanaMedium":"Dana Medium",
        "DanaDemiBold":"Dana DemiBold",
        "Morabba":"Morabba Light",
        "MorabbaMedium":"Morabba Medium",
        "MorabbaBold":"Morabba Bold"
      },
      letterSpacing:{
        tightest: '-0.065em',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }
  ],
}

