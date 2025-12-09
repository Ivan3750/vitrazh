/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D8F422',
        base: '#F8F7F0',
      },

       animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out both',
        "spin-slow": "spinSlow 4s linear infinite",
      },

      keyframes: {
        fadeIn: {
          from: { opacity: 0, transform: 'translateY(20px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },

        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
