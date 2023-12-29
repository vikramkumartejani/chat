/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg_color: '#FAF3EA',
        bg_color_100: '#F5EADC',
        green: '#0D3C26',
        green_100: 'rgb(3, 130, 71)',
        text_color: '#6B6255',
        text_color_100: '#0D3C26',
        underline: '#038247',
        custom_color: 'rgb(107, 98, 85)',
        custom_color_100: 'rgb(194, 179, 159)',
        custom_color_200: 'rgb(245, 238, 229)',
        custom_color_300: 'rgb(237, 225, 209)',
        custom_color_400: 'rgb(11, 50, 32)',
        custom_color_500: '#E6CFC0',
        custom_color_600: '#8C8477',
        custom_color_700: 'rgb(194, 179, 159)',
        custom_color_800: 'rgb(135, 124, 108)',
        custom_color_900: '#877C6C',
        custom_color_1000: '#E8DDCD',
        custom_color_1100: '#C2B3A0',
        input_bg: '#FCFAF7',

      },
      boxShadow: {
        '3xl': '0 35px 60px -10px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
}
