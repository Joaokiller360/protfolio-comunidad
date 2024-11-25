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
        background: "var(--background)",
        backgroundSecundary: "#72757e",
        foreground: "var(--foreground)",
        colorButton: "#7f5af0",
        section: 'var(--background-section)', // Agrega esta nueva variable
      },
    },
  },
  plugins: [],
} satisfies Config;
