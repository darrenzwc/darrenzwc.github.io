/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: { glow: "0 0 40px rgba(255,255,255,0.25)" },
      fontFamily: {
        display: ['Inter','ui-sans-serif','system-ui'],
        body: ['Inter','ui-sans-serif','system-ui']
      }
    },
  },
  plugins: [],
};