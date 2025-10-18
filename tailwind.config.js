/** @type {import('tailwindcss').Config} */
export default {
  content: ["src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        lexend: ["Lexend", "sans-serif"] 
      },
      colors: {
        primary: "#001f87",
        secondary: "#3e63e0",
        'mint':{
           50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        }
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'fade-in-delay': 'fadeIn 1s ease-in-out 0.3s both',
        'gradient-slow': 'gradient 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundSize:{
        '300%': '300%',
      }
    },
  },
  plugins: [],
};

