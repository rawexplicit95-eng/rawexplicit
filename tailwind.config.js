/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#111111",
          bg: "#ffffff",
          accent: "#ff2d55",
          muted: "#9ca3af"
        }
      },
      fontFamily: {
        sans: [
          "ui-sans-serif","system-ui","-apple-system","Segoe UI",
          "Roboto","Inter","Arial","sans-serif"
        ],
      },
      borderRadius: { xl2: "1.25rem" }
    }
  },
  plugins: [],
};
