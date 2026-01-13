export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        brand: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
  base: process.env.GLOBOPERSONA || "/Globopersona-UI",
};
