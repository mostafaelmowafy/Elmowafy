/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lightbg: "#E0E8F6",
        darkbg: " #1A1A1A",
        darksecoundarybg: "#1E1E1E",
        primary: "#4FC3F7",
        secondary: "#FF4081",
        primaryheader: "#2B2B2B",
        secondaryheader: "#050505",
        pragraph: "#484E53",
        darksecondaryheader: "#E1E1E1",
        icon: "#BCE7FA",
        darkicon: "#F5F8FF",
      },

      fontFamily: {
        oleo: ["Oleo Script", "cursive"],
        poppins: ["Poppins", "sans-serif"],
      },

      backgroundImage: {
        profile: "url('/public/images/lightprofile.png')",
        darkprofile: "url('/public/images/darkprofile.png')",
      },

      keyframes: {
        bubbleFloat: {
          "0%": {
            opacity: "0",
            transform: "translateY(10vh) scale(0.8)",
          },
          "50%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(-10vh) scale(1.2)",
          },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        cardFadeInUp: {
          "0%": { opacity: "0", transform: "translateY(200px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 1000ms ease-out forwards",
        wiggle: "wiggle 400ms ease-in-out infinite",
        cardFadeInUp: "cardFadeInUp 1800ms ease-out forwards",
        bubbleFloat: "bubbleFloat 10s linear infinite",
      },
    },
  },
  plugins: [],
};
