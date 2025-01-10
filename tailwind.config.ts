import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: "#F7F5F1",
        // secondary: "#F7F5F1",
        primary: {
          50: "#fefefe",
          100: "#fdfcfb",
          200: "#fbfaf9",
          300: "#faf8f6",
          400: "#f9f7f4",
          500: "#f7f5f1",
          600: "#e1dfdb",
          700: "#afaeab",
          800: "#888785",
          900: "#575553",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

