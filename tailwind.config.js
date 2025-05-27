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
      },
    },
  },
  plugins: [],
};

