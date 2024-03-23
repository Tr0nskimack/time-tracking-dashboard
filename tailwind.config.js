/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Blue: "hsl(246,80%,60%)",
        Light_orange: "hsl(15,100%,70%)",
        Soft_blue: "hsl(195,74%,62%)",
        Light_red: "hsl(348,100%,68%)",
        Lime_green: "hsl(145,58%,55%)",
        Violet: "hsl(264,64%,52%)",
        Soft_yellow: "hsl(43,84%,65%)",
      },
    },
  },
  plugins: [],
};
