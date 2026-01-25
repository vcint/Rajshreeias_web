import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                sm: "1.5rem",
                md: "2rem",
                lg: "2rem",
                xl: "2rem",
                "2xl": "2rem",
            },
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    DEFAULT: "#2D1B33", // Deep Plum
                    foreground: "#FAF9F6",
                },
                secondary: {
                    DEFAULT: "#D9A15B", // Success Gold
                    foreground: "#2D1B33",
                },
                muted: {
                    DEFAULT: "#FAF9F6", // Ivory Cloud
                    foreground: "#64748b",
                },
                accent: {
                    DEFAULT: "#D9A15B",
                    foreground: "#2D1B33",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                serif: ["var(--font-playfair)", "serif"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
