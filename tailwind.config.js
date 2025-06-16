/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/styles/**/*.{css}",
  ],
  theme: {
    extend: {
      fontFamily: { 
        mono: ["JetBrains Mono", "monospace"] 
      },
      colors: {
        "code-bg": "#1e1e2f",
        "card-border": "#2a2a3b",
        accent: "#89b4fa",
      },
      borderRadius: { 
        xl: "1rem" 
      },
      backdropBlur: {
        xs: "2px",
        sm: "8px",
        md: "16px",
        lg: "24px",
      },
    },
  },
  plugins: [],
}