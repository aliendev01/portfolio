import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './utils/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '300px',
      'md': '765px',
      'lg': '1023px',
      'xl':'1300px'
    },
    extend: {
      colors:{
        'bg':'#212121',
        'primary':"#6ec1e4",
        'secondary':"#54595f",
        'lightGray':'#7a7a7a',
        'purpleShade':'#b7f',
        'blue':"#2c3599"
        
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        m:['Montserrat','sans-serif']
      }
    },
  },
  plugins: [],
}
export default config
