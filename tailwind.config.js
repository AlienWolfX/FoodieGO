/** @type {import('tailwindcss').Config} */
export default {
 content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
 theme: {
  sreens: {
   sm: "320px",
   md: "768px",
   lg: "1024px",
   xl: "1280px",
   "2xl": "1536px",
  },
  extend: {
   colors: {
    mainblue: "#4364FF",
    mainbg: "#f1f4f9",
    drkblue: "#2532AE",
   },
   keyframes: {
    fadeIn: {
     '0%': { opacity: '0', transform: 'translateY(10px)' },
     '100%': { opacity: '1', transform: 'translateY(0)' },
    },
   },
   animation: {
    fadeIn: 'fadeIn 0.5s ease-out',
   },
  },
 },
};
