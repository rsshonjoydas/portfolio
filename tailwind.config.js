module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        kaushan: 'Kaushan Script'
      },
      colors: {
        dark: {
          DEFAULT: '#2f3542',
          100: '#57606f',
          200: '#525252',
          300: '#414141',
          400: '#313131',
          500: '#394264'
        }
      },
      boxShadow: {
        'light-shadow': 'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -30px, rgba(0, 0, 0, 0.3) 0px 30px 60px -40px',
        'dark-shadow': 'box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'
      }
    },
  },
  variant: {
    extend: {
      boxShadow: ['dark']
    }
  },
  plugins: [],
}
