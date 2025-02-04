/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Global font set to Inter
      },
      colors: {
        primary: "#60A55E",
        "primary-hover": "#4B844B", // Darker for hover
        "primary-focus": "#3E6C3E", // Darker for focus
        "primary-active": "#60A55E", // Active state for navbar

        secondary: "#383C8D",
        "secondary-hover": "#2E316F", // Slightly darker for hover
        "secondary-focus": "#25285A", // Even darker for focus

        text: "#14293E",
        "text-hover": "#0F1F2E", // Darker for hover
        "text-focus": "#0B1621", // Even darker for focus

        white: "#FFFFFF",
        "white-hover": "#F5F5F5", // Slightly off-white for hover
        "white-text": "#E7E7E7",
        "white-focus": "#EAEAEA", // Lighter grayish-white for focus

        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
