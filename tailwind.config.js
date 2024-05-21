/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        appBackground: "#584DE2",
        profBackground: "#453F93",
        fontColor: "#8E8E8E",
        Color: "#584DE2",
      },
      fontFamily: {
        Fredoka: ["Fredoka", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
      fontWeight: {
        "Fredoka-extra-light": 300,
        "Fredoka-light": 400,
        "Fredoka-medium": 500,
        "Fredoka-semi-bold": 600,
        "Fredoka-bold": 700,
      },
      fontSize: {
        sideBarSize: "13.36px",
        deconnecter: "13.3623px",
        parent: "46.8243px",
      },
      lineHeight: {
        prof: "19px",
      },
      borderRadius: {
        radius: "11.4534px",
      },
      backgroundImage: {
        'bgImage': "url('backgroundimage.png')",
      }
    },
  },
  plugins: [],
};
